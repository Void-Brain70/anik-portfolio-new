<template>
  <div>
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div class="number" data-num="90">
            65%
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
.skill {
  position: relative;
  margin-right: 40px;
}
.skill .outer {
  height: 160px;
  width: 160px;
  border-radius: 50%;
  padding: 20px;
  box-shadow: 6px 6px 10px -1px rgba(0 0 0 /.15),
  -6px -6px 10px -1px rgba(0.7 0.7 0.8 / .7);
}
.skill .outer .inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  box-shadow: inset 4px 4px 6px -1px rgba(0 0 0/ .2),
  inset -4px -4px 6px -1px rgba(0.7 0.7 0.8  / .7),
  -.5px -.5px 0px rgba(0.7 0.7 0.8  / 1),
  .5px .5px 0px rgba(0 0 0 /.15),
  0px 12px 10px -10px rgba(0 0 0 / 0.05);
}
.skill .outer .inner .number {
  font-weight: 800;
}
.skill:nth-child(1) .outer .inner .number {
  color: #f75023;
}
.skill:nth-child(2) .outer .inner .number {
  color: #4fa0ff;
}
.skill:nth-child(3) .outer .inner .number {
  color: #7811f7
}
circle {
  fill: none;
  stroke-width: 20px;
  stroke-dasharray: 472;
  stroke-dashoffset: 472;
  transition: 2s linear;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
}
.skill:nth-child(1) circle {
  stroke: #f75023;
}
.skill:nth-child(2) circle {
  stroke: #4fa0ff;
}
.skill:nth-child(3) circle {
  stroke: #7811f7;
}
</style>