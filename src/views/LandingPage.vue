<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CosmicBackground from '../components/CosmicBackground.vue'
import TextScramble from '../components/TextScramble.vue'
import GallerySection from '../components/GallerySection.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.hero-content', {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out"
  })
  
  // Scroll Reveal Animations
  const reveals = document.querySelectorAll('.scroll-reveal')
  reveals.forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
  })

  // Magnetic Button Effect
  const btns = document.querySelectorAll('.magnetic-btn');
  btns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btn, {
              x: x * 0.3,
              y: y * 0.3,
              duration: 0.3
          });
      });
      
      btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      });
  });
})
</script>

<template>
  <div class="landing-page">
    <CosmicBackground />
    
    <nav class="navbar">
      <div class="logo">BENZ<span>DINH</span>GYM</div>
      <div class="links">
        <a href="#about">About</a>
        <a href="#classes">Classes</a>
        <a href="#tech">Tech</a>
        <a href="#contact" class="btn-glow">Join Now</a>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1><TextScramble text="ENGINEER YOUR" /> <span class="highlight"><TextScramble text="PHYSIQUE" /></span></h1>
        <p>Premium Industrial Fitness & Biomechanics</p>
        <button class="cta-button magnetic-btn">START TRAINING</button>
      </div>
    </section>

    <!-- Placeholder for content to demonstrate scrolling -->
    <section class="content-section" id="about">
      <div class="glass-card scroll-reveal">
        <h2>THE FACILITY</h2>
        <p>Precision-engineered training environments. We utilize industrial-grade equipment and data-driven protocols to sculpt the ultimate human form.</p>
      </div>
    </section>

    <GallerySection />

    <section class="content-section" id="classes">
      <div class="scroll-reveal">
         <h2>CORE PROGRAMS</h2>
      </div>
      <div class="cards-container">
        <div class="class-card scroll-reveal">
          <div class="card-image">
            <img src="/images/class-heavy-ind.png" alt="Heavy Metal Lifting" />
          </div>
          <h3>Heavy Metal Lifting</h3>
          <p>High-intensity resistance training with calibrated steel.</p>
        </div>
        <div class="class-card scroll-reveal">
          <div class="card-image">
            <img src="/images/hero-bg-ind.png" alt="Precision Yoga" style="object-position: center;" />
          </div>
          <h3>Precision Yoga</h3>
          <p>Biomechanically aligned flexibility and core stability.</p>
        </div>
        <div class="class-card scroll-reveal">
          <div class="card-image">
            <img src="/images/hero-bg-ind.png" alt="Kinetic Cardio" style="object-position: right;" />
          </div>
          <h3>Kinetic Cardio</h3>
          <p>Endurance engineering on advanced tread systems.</p>
        </div>
      </div>
    </section>

    <footer class="footer" id="contact">
      <div class="footer-content">
        <h3>BENZ<span>DINH</span>GYM</h3>
        <p>Industrial Sector 7, Neo-Hanoi.</p>
        <p>&copy; 2077 BenzDinh Corp. Engineered for Excellence.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.landing-page {
  position: relative;
  width: 100%;
  color: #1a1a1a;
  font-family: 'Exo 2', sans-serif;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 2px;
  color: #1a1a1a;
}
.logo span {
  color: #0056b3; /* Steel Blue */
}

.links a {
  color: #4a4a4a;
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 600;
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.links a:hover {
  color: #0056b3;
}

.btn-glow {
  border: 1px solid #0056b3;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  color: #0056b3 !important;
  transition: all 0.3s ease;
}
.btn-glow:hover {
  background: #0056b3;
  color: white !important;
  box-shadow: 0 0 15px rgba(0, 86, 179, 0.3);
}

.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/images/hero-bg-ind.png') no-repeat center center;
  background-size: cover;
  opacity: 0.2; /* Subtle texture over white */
  z-index: -1;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0));
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0)); /* Fade out */
}

.hero-content h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #1a1a1a;
}

.hero-content .highlight {
  color: #0056b3;
  background: none;
  -webkit-text-fill-color: #0056b3;
}

.hero-content p {
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.cta-button {
  background: #1a1a1a;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
}

.cta-button:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.content-section {
  min-height: 80vh;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#about {
  background: #ffffff;
}

#classes {
  background: #f5f5f7;
}

.content-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
}

.glass-card {
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 3rem;
  border-radius: 1px; /* Sharper edges */
  border: 1px solid #e0e0e0;
  max-width: 800px;
}
.glass-card p {
    color: #4a4a4a;
}

.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.class-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 0;
  width: 300px;
  border-radius: 4px;
  transition: transform 0.3s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.class-card:hover .card-image img {
  transform: scale(1.05);
}

.class-card h3 {
  font-family: 'Orbitron', sans-serif;
  margin: 1.5rem 1rem 0.5rem 1rem;
  color: #1a1a1a;
}

.class-card p {
  padding: 0 1rem 1.5rem 1rem;
  color: #666;
  font-size: 0.9rem;
}

.class-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.footer {
  padding: 3rem;
  text-align: center;
  background: #1a1a1a;
  color: white;
}

.footer h3 {
  font-family: 'Orbitron', sans-serif;
  color: #fff;
}
.footer h3 span {
  color: #0056b3;
}
.footer p {
  color: #888;
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>
