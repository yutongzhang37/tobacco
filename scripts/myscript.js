// add your JavaScript/D3 to this file


// Function for creating initial bars
  function createBarChart(data) {
    const svg = d3.select("div#plot")
                  .append("svg")
                  .attr("width", 380)
                  .attr("height", 640)
                  .style("background-color", "black");
    const barWidth = 300;
    const barHeight = 20;
    const gap = 7;
    // bars
    svg.selectAll("rect.white")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", 50)
       .attr("y", (d, i) => 45 + i * (barHeight + gap))
       .attr("width", barWidth)
       .attr("height", barHeight)
       .attr("fill", "#E8EDE4")
       .attr("class", "white-bars");
    svg.selectAll("rect.orange")
       .data(data)
       .enter()
       .append("rect")
       .attr("x", 50)
       .attr("y", (d, i) => 45 + i * (barHeight + gap))
       .attr("width", barWidth)
       .attr("height", barHeight)
       .attr("fill", "#F1A238")
       .attr("class", "orange-bars");
    // labels
    svg.selectAll("text.year-label")
       .data(data)
       .enter()
       .append("text")
       .attr("x", 10)
       .attr("y", (d, i) => 60 + i * (barHeight + gap))
       .text((d, i) => 1999 + i)
       .attr("fill", "white")
       .attr("class", "year-label")
       .attr("font-size", "14px");
    svg.append("text")
       .attr("x", 14)
       .attr("y", 25)
       .text("Percentage of Youth Ever Smoked by Years")
       .attr("fill", "white")
       .attr("class", "plot-title")
       .attr("font-size", "16px");
    // legends
    svg.append("text")
       .attr("x", 255)
       .attr("y", 595)
       .text("= had smoked")
       .attr("fill", "white")
       .attr("class", "plot-title")
       .attr("font-size", "14px");
    svg.append("text")
       .attr("x", 255)
       .attr("y", 615)
       .text("= never smoked")
       .attr("fill", "white")
       .attr("class", "plot-title")
       .attr("font-size", "14px");
    svg.append("rect")
       .attr("x", 240)
       .attr("y", 585)
       .attr("width", 10)
       .attr("height", 10)
       .attr("fill", "#F1A238");
    svg.append("rect")
       .attr("x", 240)
       .attr("y", 605)
       .attr("width", 10)
       .attr("height", 10)
       .attr("fill", "#E8EDE4");
    // add x-axis
      const xScale = d3.scaleLinear()
                       .domain([0, 1])
                       .range([50, 350]);
      const xAxis = d3.axisBottom(xScale)
                      .tickFormat(d3.format(".0%"))
      svg.append("g")
         .attr("class", "x-axis")
         .attr("transform", "translate(0, " + (555) + ")")
         .call(xAxis)
         .selectAll("text")
         .attr("fill", "white");
      svg.selectAll(".x-axis line, .x-axis path")
         .attr("stroke", "white");
    }

    // Functions for animating bars
    function middleSch() {
      const orangeBars = d3.selectAll(".orange-bars");
      orangeBars.transition()
                .duration(2000)
                .attr("width", (d, i) => [0.45, 0.39, 0.32, 0.33, 0.26, 0.27, 0.26, 0.27, 0.23, 0.22, 0.21, 0.21, 0.20, 0.18, 0.16, 0.13, 0.13, 0.13, 0.12][i] * 300);
    }

    function highSch() {
      const orangeBars = d3.selectAll(".orange-bars");
      orangeBars.transition()
                .duration(2000)
                .attr("width", (d, i) => [0.70, 0.64, 0.60, 0.60, 0.53, 0.52, 0.53, 0.51, 0.46, 0.48, 0.45, 0.46, 0.43, 0.39, 0.37, 0.33, 0.32, 0.31, 0.27][i] * 300);
    }

    // Initialize bars
    const initialData = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    createBarChart(initialData);
