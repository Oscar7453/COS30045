d3.csv("data/Ex5_TV_energy_55inchtv_byScreenType.csv").then(data => {
  // Parse numeric column
  data.forEach(d => {
    d.energy = +d["Mean(Labelled energy consumption (kWh/year))"];
    d.screenType = d["Screen_Tech"];
  });

  // SVG and margins
  const margin = {top: 40, right: 30, bottom: 50, left: 100};
  const width = Math.min(500, document.getElementById('bar-chart').clientWidth) - margin.left - margin.right;
  const height = 40 * data.length;

  // Create SVG
  const svg = d3.select("#bar-chart")
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("width", "100%")
    .attr("height", "100%");

  // Scales
  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.energy)]).nice()
    .range([margin.left, width + margin.left]);
  const y = d3.scaleBand()
    .domain(data.map(d => d.screenType))
    .range([margin.top, height + margin.top])
    .padding(0.2);

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height + margin.top})`)
    .call(d3.axisBottom(x));
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Axis labels
  svg.append("text")
    .attr("x", width / 2 + margin.left)
    .attr("y", height + margin.top + 40)
    .attr("text-anchor", "middle")
    .text("Energy Consumption (kWh/year)")
    .style("font-size", "14px");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height/2 - margin.top)
    .attr("y", margin.left - 70)
    .attr("text-anchor", "middle")
    .text("Screen Technology")
    .style("font-size", "14px");

  // Bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", margin.left)
    .attr("y", d => y(d.screenType))
    .attr("width", d => x(d.energy) - margin.left)
    .attr("height", y.bandwidth())
    .attr("fill", "#43a047");

  // Value labels
  svg.selectAll("text.value")
    .data(data)
    .join("text")
    .attr("class", "value")
    .attr("x", d => x(d.energy) + 5)
    .attr("y", d => y(d.screenType) + y.bandwidth() / 2 + 5)
    .attr("text-anchor", "start")
    .attr("font-size", "12px")
    .attr("fill", "#333")
    .text(d => d.energy);
});