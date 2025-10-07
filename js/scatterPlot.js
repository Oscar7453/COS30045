d3.csv("data/Ex5_TV_energy.csv").then(data => {
  // Parse numeric columns
  data.forEach(d => {
    d.energy = +d["energy_consumpt"];
    d.stars = +d["star2"];
  });

  // SVG and margins
  const margin = {top: 40, right: 30, bottom: 50, left: 60};
  const width = Math.min(600, document.getElementById('scatter-plot').clientWidth) - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  // Create SVG
  const svg = d3.select("#scatter-plot")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("width", "100%")
    .attr("height", "100%");

  // Scales
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.stars)).nice()
    .range([margin.left, width + margin.left]);
  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.energy)]).nice()
    .range([height + margin.top, margin.top]);

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height + margin.top})`)
    .call(d3.axisBottom(x).ticks(6));
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Axis labels
  svg.append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 40)
    .attr("text-anchor", "middle")
    .text("Star Rating")
    .style("font-size", "14px");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height/2 - margin.top)
    .attr("y", margin.left - 40)
    .attr("text-anchor", "middle")
    .text("Energy Consumption (kWh/year)")
    .style("font-size", "14px");

  // Dots
  svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("cx", d => x(d.stars))
    .attr("cy", d => y(d.energy))
    .attr("r", 4)
    .attr("fill", "#1976d2")
    .attr("opacity", 0.7);
});