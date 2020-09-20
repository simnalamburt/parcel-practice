import * as THREE from 'three'

globalThis.THREE = THREE

document.body.insertAdjacentHTML(
  'beforeend',
  `<div>
    Calling three.js in index.ts
    <br>
    clamp(3.14, 0.0, 1.0) = ${THREE.MathUtils.clamp(3.14, 0.0, 1.0)}
  </div>`
)
