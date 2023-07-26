<template>

<div class="chart-container" style="position: fixed; height: 40vh; width: 90vw; left: 230px">
    <br />
      <p><b>TOTAL TRAFIC</b></p>  
    <canvas id="myChart"></canvas>
    </div>
    <div class="chart-container" style="position: fixed; height: 40vh; width: 90vw; left: 530px">
      <br />
      <p><b>TOTAL INTERACTION</b></p>
      <canvas id="myChartPie"></canvas>
    </div>
    <div class="chart-container" style="position: fixed; height: 40vh; width: 90vw; left: 830px">
      <br />
      <p><b>TIME ON SITE</b></p>
      <canvas id="myChartPie2"></canvas>
      
    </div>
  
    
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
  export default {
    
    mounted() {
      console.log("Component mounted.");
  
      const ctx = document.getElementById("myChart");
      const ctu = document.getElementById("myChartPie");
      const ctv = document.getElementById("myChartPie2");
  
      const data = {
        labels: ["Event A", "Event B", "Event C", "Event D"],
        datasets: [
          {
            label: "Hyundai",
            data: [10, 10, 10, 70],
            // backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            backgroundColor: ["rgb(226,137,242)", "rgb(133,92,248)", "rgb(176,133,255)", "rgb(80,55,149)"],
            hoverOffset: 25,
          },
        ],
      };
  
      const datas = {
        labels: ["Event A", "Event B", "Event C", "Event D"],
        datasets: [
          {
            label: "Honda",
            data: [10, 10, 10, 70],
            // backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            backgroundColor: ["rgb(226,137,242)", "rgb(133,92,248)", "rgb(176,133,255)", "rgb(80,55,149)"],
            hoverOffset: 25,
          },
        ],
      };
  
      const datass = {
        labels: ["Event A", "Event B", "Event C", "Event D"],
        datasets: [
          {
            label: "Mitsubitshi",
            data: [10, 10, 10, 70],
            // backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
            backgroundColor: ["rgb(226,137,242)", "rgb(133,92,248)", "rgb(176,133,255)", "rgb(80,55,149)"],
            hoverOffset: 25,
          },
        ],
      };
  
      const myChart = new Chart(ctx, {
        type: "pie",
        data: data,
      });
  
      const myChartPie = new Chart(ctu, {
        type: "pie",
        data: datas,
      });
  
      const myChartPie2 = new Chart(ctv, {
        type: "pie",
        data: datass,
      });
  
      myChart;
      myChartPie;
      myChartPie2;
    },
  };
  </script>
  
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  p.Mitsubitshi {
    text-align: left;
    text-indent: 90px;
  }
  p {
    text-align: left;
    text-indent: 110px;
  }
  </style>