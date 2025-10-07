// function createBarChart(data) {
//   const barHeight = 32;
//   const spacing = 12;
//   const svgWidth = 600;
//   const svgHeight = data.length * (barHeight + spacing) + spacing;

//   // Find the max count for scaling
//   const maxCount = d3.max(data, d => d.count);

//   // Create a scale for the bar widths
//   const xScale = d3.scaleLinear()
//     .domain([0, maxCount])
//     .range([0, svgWidth - 40]); // leave room for labels if needed

//   // Create SVG
//   const svg = d3.select(".responsive-svg-container")
//     .append("svg")
//     .attr("width", svgWidth)
//     .attr("height", svgHeight)
//     .style("border", "1px solid #333");

//   // Draw bars
//   svg.selectAll("rect")
//     .data(data)
//     .join("rect")
//     .attr("x", 20) // leave some margin for labels
//     .attr("y", (d, i) => i * (barHeight + spacing) + spacing)
//     .attr("width", d => xScale(d.count))
//     .attr("height", barHeight)
//     .attr("fill", "steelblue");
// }