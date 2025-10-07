d3.csv("data/Ex5_ARE_Spot_Prices.csv").then(data => {
  // Parse year and average price columns
  data.forEach(d => {
    d.Year = +d["Year"];
    d.AvgPrice = +d["Average Price (notTas-Snowy)"];
  });

  // SVG and margins
  const margin = {top: 40, right: 40, bottom: 50, left: 60};
  const width = Math.min(700, document.getElementById('line-chart').clientWidth) - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  // Create SVG
  const svg = d3.select("#line-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("width", "100%")
    .attr("height", "100%");

  // Scales
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Year))
    .range([margin.left, width + margin.left]);
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.AvgPrice)]).nice()
    .range([height + margin.top, margin.top]);

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height + margin.top})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Axis labels
  svg.append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 40)
    .attr("text-anchor", "middle")
    .text("Year")
    .style("font-size", "14px");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height/2 - margin.top)
    .attr("y", margin.left - 45)
    .attr("text-anchor", "middle")
    .text("Average Spot Power Price")
    .style("font-size", "14px");

  // Line generator
  const line = d3.line()
    .x(d => x(d.Year))
    .y(d => y(d.AvgPrice));

  // Draw line
  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#1976d2")
    .attr("stroke-width", 3)
    .attr("d", line);

  // Optional: Add points
  svg.selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => x(d.Year))
    .attr("cy", d => y(d.AvgPrice))
    .attr("r", 3)
    .attr("fill", "#1976d2");

  // Optional: Add legend
  svg.append("text")
    .attr("x", width + margin.left - 10)
    .attr("y", margin.top + 10)
    .attr("text-anchor", "end")
    .attr("font-size", "13px")
    .attr("fill", "#1976d2")
    .attr("font-weight", "bold")
    .text("Average Price (notTas-Snowy)");
});