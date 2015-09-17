
let SampleSVG = `<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" version="1.1">
  <defs>
    <filter id="dropShadow" x="0" y="0" width="150" height="150">
      <feOffset in="SourceGraphic" dx="0" dy="0" result="topCopy"/>
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="shadow"/>
      <feOffset in="shadow" dx="3" dy="3" result="movedShadow"/>
      <feMerge>
        <feMergeNode in="topCopy"/>
        <feMergeNode in="movedShadow"/>
      </feMerge>
    </filter>
  </defs>


<g filter="url(#dropShadow)" >

<text x="10" y="45"
      style="font-family:Verdana; font-size: 20pt; fill:green;">Shadows</text>
<text x="10" y="65"
      style="font-family:Verdana; font-size: 20pt; fill:green;">and</text>
<text x="10" y="85"
      style="font-family:Verdana; font-size: 20pt; fill:green;">Tall Trees</text>
</g>

</svg>
`

export default SampleSVG
