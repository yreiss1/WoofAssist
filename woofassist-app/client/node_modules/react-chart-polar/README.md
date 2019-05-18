# Description

This is npm version of simple Chart.js Polar Area React component available at: [github.com/javascriptiscoolpl/react-chart-polar](https://github.com/javascriptiscoolpl/react-chart-polar). However, this version has been changed to support npm chart.js version, ES6 syntax and npm module environment.

# Install

    npm install react-chart-polar

# Info before start

For this type of chart you need only <code>osY</code> values in fact. They must be positive to show on chart. The <code>osX</code> is taken as labels here (can be strings). Colors are calculated according to the <code>osY</code> length, more data more colors.

# Usage - show

##### index.html

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>example</title>
        <style>
        .ChartPolar {
          width: 800px;
          border: 1px solid red;
        }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script src="index.js"></script>
      </body>
    </html>

##### index.js

    import React from "react";
    import ReactDOM from "react-dom";
    import Chart from "chart.js";
    import rcl from "react-chart-polar";

    var chart = { msg: "test chart", osX: [], osY: [] };
    for (var i=0,x=0; i<10; i++,x++) {
      chart.osX[i] = "id "+x+": ";
      chart.osY[i] = Math.cos(x)+Math.sin(x);
    }

    ReactDOM.render(
      <rcl.ChartPolar data={chart}/>,
      document.getElementById('app')
    );

# Usage - update

##### index.js

    function setRandomChart() {
      var chart = { msg: "testing random chart", osX: [], osY: [] };
      for (var i=0,x=0; i<10; i++,x++) {
        chart.osX[i] = "id "+x+": ";
        chart.osY[i] = Math.cos(x)*Math.random();
      }
      ReactDOM.render(
        <rcl.ChartPolar data={chart}/>,
        document.getElementById('app')
      );
    }
    setInterval(() => { setRandomChart() }, 5000);

# Demo

The demo is available in module directory. To test the demo just go to <code>demo</code> directory in module folder and open <code>index.html</code> in your browser.

However, you can build the demo again with npm. To re-build the demo just go to <code>demo</code> directory in module folder and run command:

    npm run build

This should download all packages and build the demo <code>index.js</code> file again. After it, you can open <code>index.html</code> in your browser. Should work :-)

# License

MIT
