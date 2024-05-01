import { ThreeLunchbox, ThreePointerMoveEvent, initLunchbox } from './src/index.ts'
import { Lunchbox } from './src/three-base.ts';
import * as THREE from 'three'

initLunchbox()

const t = document.querySelector<ThreeLunchbox>('three-lunchbox')!;
t.camera.position.z = 5;

const ground = document.querySelector<Lunchbox<THREE.Mesh>>('*[data-name="ground"]');
(ground as any)?.addEventListener('threepointermove', (evt: CustomEvent<ThreePointerMoveEvent>) => {
    console.log(evt.detail)
})