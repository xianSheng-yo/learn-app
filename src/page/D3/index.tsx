import * as d3 from 'd3'
import React, { useEffect, useState } from 'react'

//data values
const init_data_values = [10, 20, 30, 40, 50, 5, 2, 12, 70, 26]

const D3: React.FC = () => {
  const [data_values, setData_values] = useState(init_data_values)
  useEffect(() => {
    console.log('generateSvg')
    generateSvg(init_data_values)
  }, [data_values])

  return <button onClick={() => setData_values([])}>D3</button>
}

export default D3

function generateSvg(data: Array<number>) {
  const svg = d3.select('#App').append('svg')
  svg.attr(`width`, 500).attr(`height`, 500)
  //create rectangles
  /* var bars = */ svg
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', '25px')
    .attr('height', function (d) {
      console.log('d: ', d)
      return d
    })
}

export async function getData(): Promise<number[]> {
  // eslint-disable-next-line
  return await new Promise((resolve, _reject) => {
    // eslint-disable-next-line
    requestAnimationFrame((_time) => {
      resolve(init_data_values)
    })
  })
}
