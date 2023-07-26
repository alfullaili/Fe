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
        labels: ["Color1", "Color2", "Color3", "Color4"],
        datasets: [
          {
            label: "A",
            data: [15, 15, 15, 70],
            backgroundColor: ["rgb(226,137,242)", "rgb(80,55,149)", "rgb(176,133,255)","rgb(133,92,248)" ],
            hoverOffset: 2,
          },
        ],
      };
  
      const datas = {
        labels: ["Color1", "Color2", "Color3", "Color4"],
        datasets: [
          {
            label: "B",
            data: [15, 15, 15, 70],
            backgroundColor: ["rgb(226,137,242)", "rgb(80,55,149)", "rgb(176,133,255)","rgb(133,92,248)" ],
            hoverOffset: 2,
          },
        ],
      };
  
      const datass = {
        labels: ["Color1", "Color2", "Color3", "Color4"],
        datasets: [
          {
            label: "C",
            data: [15, 15, 15, 70],
            backgroundColor: ["rgb(226,137,242)", "rgb(80,55,149)", "rgb(176,133,255)","rgb(133,92,248)" ],
            hoverOffset: 2,
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
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


