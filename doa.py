import numpy as np
from scipy.signal import fftconvolve
import matplotlib.pyplot as plt
from scipy.io import wavfile


import pyroomacoustics as pra
from pyroomacoustics.doa import circ_dist

######
# We define a meaningful distance measure on the circle

# Location of original source
azimuth = 61. / 180. * np.pi  # 60 degrees
distance = 3.  # 3 meters

#######################
# algorithms parameters
SNR = 0.    # signal-to-noise ratio
c = 343.    # speed of sound
fs = 16000  # sampling frequency
nfft = 256  # FFT size
freq_bins = np.arange(5, 60)  # FFT bins to use for estimation

# compute the noise variance
sigma2 = 10**(-SNR / 10) / (4. * np.pi * distance)**2

# Create an anechoic room
room_dim = np.r_[10.,10.]
aroom = pra.ShoeBox(room_dim, fs=fs, max_order=0, sigma2_awgn=sigma2)

#I ADDED THIS
fs, signal = wavfile.read("a-team_crazy_fool_x.wav")

# add the source
source_location = room_dim / 2 + distance * np.r_[np.cos(azimuth), np.sin(azimuth)]
source_signal = np.random.randn((nfft // 2 + 1) * nfft)
aroom.add_source(source_location, signal=signal)

# We use a circular array with radius 15 cm # and 12 microphones
R = pra.circular_2D_array(room_dim / 2, 12, 0., 0.15)
aroom.add_microphone_array(pra.MicrophoneArray(R, fs=aroom.fs))

# run the simulation
aroom.simulate()

################################
# Compute the STFT frames needed
X = np.array([ 
    pra.stft(signal, nfft, nfft // 2, transform=np.fft.rfft).T 
    for signal in aroom.mic_array.signals ])

##############################################
# Now we can test all the algorithms available
algo_names = sorted(pra.doa.algorithms.keys())
print algo_names

for algo_name in algo_names:
    # Construct the new DOA object
    # the max_four parameter is necessary for FRIDA only
    doa = pra.doa.algorithms[algo_name](R, fs, nfft, c=c, max_four=4)

    # this call here perform localization on the frames in X
    doa.locate_sources(X, freq_bins=freq_bins)

    doa.polar_plt_dirac()
    plt.title(algo_name)
    
    # doa.azimuth_recon contains the reconstructed location of the source
    print(algo_name)
    print('  Recovered azimuth:', doa.azimuth_recon / np.pi * 180., 'degrees')
    print('  Error:', circ_dist(azimuth, doa.azimuth_recon) / np.pi * 180., 'degrees')

plt.show()