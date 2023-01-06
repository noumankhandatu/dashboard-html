// donut started
const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "Data %",
        data: [24,26, 39,11],
        backgroundColor: ["#439582", "#fff", "#439582", "#fff"],
        hoverOffset: 100,
        spacing: 10,
        weight: 1.2,
      },
    ],
    labels: ["Over", "Inkomsten", "Uitgavens", "Schulden"],
  },
  options: {
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: "#0e0e23",
      },
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        spacing: true,
      },
    },
  },
});

// donut ended

// chart
// Load the fonts
Highcharts.createElement(
  "link",
  {
    href: "https://fonts.googleapis.com/css?family=Unica+One",
    rel: "stylesheet",
    type: "text/css",
  },
  null,
  document.getElementsByTagName("head")[0]
);

Highcharts.theme = {
  chart: {
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, "#14162E"],
        [1, "#14162E"],
      ],
    },
  },

  // special colors for some of the
  legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
  background2: "#505053",
  dataLabelsColor: "#B0B0B3",
  textColor: "#C0C0C0",
  contrastTextColor: "#F0F0F3",
  maskColor: "rgba(255,255,255,0.3)",
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

$(function () {
  function random_numbers() {
    for (var a = [], i = 0; i < 800; ++i) a[i] = i;

    var tmp,
      current,
      top = a.length;

    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = a[current];
        a[current] = a[top];
        a[top] = tmp;
      }
    return a;
  }

  Highcharts.setOptions({
    colors: ["#52B497", "#ffff", "#4b5d69", "#9fdbea"],
  });

  $("#areaChart").highcharts({
    chart: {
      type: "areaspline",
      zoomType: "x",
    },
    title: { text: null },
    legend: { enabled: false },

    xAxis: {
      type: "datetime",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      // wave lines
      min: 0.5,
      max: 11,
    },

    yAxis: {
      title: {
        text: null,
      },
    },

    tooltip: {
      shared: true,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      areaspline: {
        fillOpacity: 0.8,
      },
      series: {
        marker: { enabled: false },
        lineWidth: 0,
      },
    },
    series: [
      {
        name: "Failing",
        data: random_numbers(),
      },
      {
        name: "Unknown",
        data: random_numbers(),
      },
    ],
  });
});
