<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const images = document.querySelectorAll('.gallery-item img')
  images.forEach(img => {
      gsap.to(img, {
          scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
          },
          y: -30, // Parallax effect
          ease: "none"
      })
  })
})
</script>

<template>
  <div class="gallery-section">
      <div class="gallery-grid">
          <div class="gallery-item large">
              <img src="/images/class-heavy-ind.png" alt="Industrial Power" />
              <div class="overlay"><h4>POWER</h4></div>
          </div>
          <div class="gallery-item">
              <img src="/images/class-yoga.png" alt="Focus" class="filtered" />
              <div class="overlay"><h4>FOCUS</h4></div>
          </div>
          <div class="gallery-item">
              <img src="/images/class-cardio.png" alt="Speed" class="filtered" />
              <div class="overlay"><h4>SPEED</h4></div>
          </div>
          <div class="gallery-item large">
              <img src="/images/hero-bg-ind.png" alt="Environment" />
              <div class="overlay"><h4>SPACE</h4></div>
          </div>
      </div>
  </div>
</template>

<style scoped>
.gallery-section {
    padding: 2rem;
    background: #f5f5f7;
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.gallery-item {
    position: relative;
    height: 300px;
    overflow: hidden;
    border-radius: 4px;
    cursor: pointer;
}

.gallery-item.large {
    grid-column: span 2;
}

.gallery-item img {
    width: 100%;
    height: 120%; /* For parallax */
    object-fit: cover;
    transition: filter 0.3s;
}

/* CSS Filter to make Cosmic images look Industrial Silver */
.filtered {
    filter: grayscale(100%) brightness(1.1) contrast(1.1);
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    opacity: 0;
    transition: opacity 0.3s;
}

.gallery-item:hover .overlay {
    opacity: 1;
}

h4 {
    color: white;
    font-family: 'Orbitron';
    margin: 0;
}

@media (max-width: 768px) {
    .gallery-item.large {
        grid-column: span 1;
    }
}
</style>
