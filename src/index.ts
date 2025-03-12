import * as three from 'three'

type ThreeType = typeof three

declare global {
  var THREE: ThreeType
}

globalThis.THREE = three

document.body.insertAdjacentHTML(
  'beforeend',
  `<div style="background-color: #e0ffe5">
    Calling three.js in index.ts
    <br>
    clamp(3.14, 0.0, 1.0) = ${THREE.MathUtils.clamp(3.14, 0.0, 1.0)}
  </div>`,
)
