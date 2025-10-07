d3.csv("data/Ex5_TV_energy_Allsizes_byScreenType.csv").then(data => {
  // Parse numeric column
  data.forEach(d => {
    d.energy = +d["Mean(Labelled energy consumption (kWh/year))"];
    d.screenType = d["Screen_Tech"];
  });

  // SVG and dimensions
  const width = Math.min(400, document.getElementById('donut-chart').clientWidth);
  const height = 350;
  const radius = Math.min(width, height) / 2 - 20;

  const svg = d3.select("#donut-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

  // Prepare data for donut
  const pie = d3.pie()
    .value(d => d.energy)
    .sort(null);

  const arc = d3.arc()
    .innerRadius(radius * 0.6)
    .outerRadius(radius);

  // Color scale
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Draw arcs
  svg.selectAll("path")
    .data(pie(data))
    .join("path")
    .attr("d", arc)
    .attr("fill", d => color(d.data.screenType))
    .attr("stroke", "#fff")
    .attr("stroke-width", 2);

  // Add labels
  svg.selectAll("text")
    .data(pie(data))
    .join("text")
    .attr("transform", d => `translate(${arc.centroid(d)})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("fill", "#333")
    .text(d => d.data.screenType);

  // Optional: Add a title in the center
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("y", 6)
    .attr("fill", "#1976d2")
    .text("Screen Technology");
});