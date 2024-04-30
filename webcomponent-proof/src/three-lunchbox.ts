import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('three-lunchbox')
export class ThreeLunchbox extends LitElement {

  @property()
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera();

  renderer = new THREE.WebGLRenderer();

  constructor() {
    super();
    this.camera.position.set(0, 0, 5)
  }


  handleSceneChange(evt: { target: HTMLSlotElement }) {
    evt.target.assignedElements().forEach(el => {
      const elAsThree = el as unknown as ThreeComponent<any>
      if (elAsThree.instance instanceof THREE.Object3D) {
        this.scene.add(elAsThree.instance)
      }
    })

    this.renderer.render(this.scene, this.camera)
  }


  render() {
    return html`
      
      <slot name="scene" @slotchange=${this.handleSceneChange}>
        <three-scene>
          <slot></slot>
        </three-scene>
      </slot>

      ${this.renderer.domElement}
    `
  }
}



// Programmatically-generated elements
import * as THREE from 'three';
import { buildClass } from './three-base';
import { ThreeComponent } from './three-lunchbox-types';

const autoComponents: Partial<keyof typeof THREE>[] = [
  'WebGLRenderer',
  'PerspectiveCamera',
  'Scene',
  'Mesh',
  'BoxGeometry',
  'MeshBasicMaterial',
  'IcosahedronGeometry',
]

autoComponents.forEach(className => {
  // convert name to kebab-case; prepend `three-` if needed
  let kebabCase = className.split(/\.?(?=[A-Z])/).join('-').toLowerCase().replace(/-g-l-/, '-gl-');
  if (!kebabCase.includes('-')) {
    kebabCase = `three-${kebabCase}`
  }


  const result = buildClass(className)
  if (result) {
    customElements.define(kebabCase, result)
  }
})