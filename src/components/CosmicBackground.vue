<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

const container = ref(null)

let scene, camera, renderer, particles, particleGeo

const init = () => {
  scene = new THREE.Scene()
  
  // Light fog for depth - Industrial White/Grey
  scene.fog = new THREE.FogExp2(0xf5f5f7, 0.0015)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 1
  camera.rotation.x = Math.PI / 2

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  // Clear color white/light grey
  renderer.setClearColor(0xf5f5f7, 1); 
  container.value.appendChild(renderer.domElement)

  // Tech Particles
  particleGeo = new THREE.BufferGeometry()
  const particleCount = 4000
  const posArray = new Float32Array(particleCount * 3)
  
  for(let i=0; i < particleCount * 3; i+=3) {
      posArray[i] = (Math.random() - 0.5) * 800 // Wider spread
      posArray[i+1] = (Math.random() - 0.5) * 800
      posArray[i+2] = (Math.random() - 0.5) * 800
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  
  // Create a square/tech texture programmatically
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const context = canvas.getContext('2d');
  context.fillStyle = '#8c8c8c'; // Grey particles
  context.fillRect(8,8,16,16); // Square
  const texture = new THREE.CanvasTexture(canvas);

  const material = new THREE.PointsMaterial({
    color: 0x444444, // Darker grey for contrast against light bg
    size: 0.8,
    transparent: true,
    opacity: 0.6,
    map: texture,
    sizeAttenuation: true
  })

  particles = new THREE.Points(particleGeo, material)
  scene.add(particles)

  window.addEventListener('resize', onWindowResize)
  animate()
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const animate = () => {
  particleGeo.attributes.position.needsUpdate = true
  
  particles.rotation.y += 0.0002
  particles.rotation.x += 0.0001
  
  // Gentle camera movement
  camera.position.z = 1 + Math.sin(Date.now() * 0.0001) * 5

  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

onMounted(() => {
  init()
  
  // Intro animation
  gsap.from(camera.position, {
      z: 50,
      duration: 3,
      ease: "power3.out"
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  if (container.value && renderer.domElement) {
    container.value.removeChild(renderer.domElement)
  }
})
</script>

<template>
  <div ref="container" class="tech-background"></div>
</template>

<style scoped>
.tech-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #f5f5f7; /* Fallback */
}
</style>
