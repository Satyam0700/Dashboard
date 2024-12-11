"use client"

import React, { useState } from 'react'
import Chart from 'react-apexcharts'

const LineChart = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [20, 25, 35, 80, 40, 56, 90],
      },
      {
        name: "Revenue",
        data: [40, 65, 45, 60, 80, 56, 50],
      },
      {
        name: "Ratings",
        data: [60, 35, 55, 70, 90, 46, 80],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
    },
  })
  return (
    <Chart options={data?.options} series={data?.series} type={data?.options.chart.type} height={data?.options.chart.height} />
  )
}

export default LineChart