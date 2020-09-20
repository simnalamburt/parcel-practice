import * as THREE from 'three'

window.THREE = THREE

document.body.insertAdjacentHTML(
  'beforeend',
  `
  <div>
    이상한 방법을 추천드려서 죄송합니다
    <br>
    clamp(3.14, 0.0, 1.0) = ${THREE.MathUtils.clamp(3.14, 0.0, 1.0)}
  </div>
`
)
