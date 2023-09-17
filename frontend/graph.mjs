const graphDiv = document.getElementById("graph");

fetch("http://localhost:3000")
  .then((response) => response.text())
  .then((data) => {
    const rows = data.split("\n");

    const xValues = [];
    const priceValues = [];
    const out = [];

    // Skip the first row (header)
    for (let i = 1; i < rows.length; i += 100) {
      const columns = rows[i].split(",");

      if (columns.length > 7) {
        // Basic check to avoid empty rows
        xValues.push(parseFloat(columns[1])); // 'x' value (carat size)
        priceValues.push(parseFloat(columns[7])); // 'price' value
      }
    }

    //xValues = xValues.map((val) => val + (Math.random() - 0.5)); //to reduce congestion

    Plotly.newPlot(
      graphDiv,
      [
        {
          x: xValues,
          y: priceValues,
          type: "scatter",
          mode: "markers",
          marker: {
            opacity: 0.5,
          },
          name: "Price vs Carat",
        },
      ],
      {
        title: "Price vs Carat Size of Diamonds",
        xaxis: {
          title: "Carat Size",
        },
        yaxis: {
          title: "Price ($)",
        },
        autosize: true,
        width: "60vh",
      },
      {
        responsive: true,
        scrollZoom: true,
      }
    );
  });
