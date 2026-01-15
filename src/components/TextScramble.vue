<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    default: 1.5
  },
  trigger: {
    type: Boolean,
    default: true
  }
})

const displayedText = ref('')
const chars = '!<>-_\\/[]{}—=+*^?#________'

const animate = () => {
  const finalText = props.text
  const length = finalText.length
  let frame = 0
  const totalFrames = props.duration * 30 // Approx 60fps
  
  const interval = setInterval(() => {
    let output = ''
    for (let i = 0; i < length; i++) {
        // As frame progresses, resolve more characters
        const progress = frame / totalFrames
        if (i / length < progress) {
            output += finalText[i]
        } else {
            output += chars[Math.floor(Math.random() * chars.length)]
        }
    }
    
    displayedText.value = output
    frame++
    
    if (frame > totalFrames) {
        clearInterval(interval)
        displayedText.value = finalText
    }
  }, 30)
}

onMounted(() => {
  if (props.trigger) animate()
})

watch(() => props.trigger, (newVal) => {
    if (newVal) animate()
})
</script>

<template>
  <span class="scramble-text">{{ displayedText }}</span>
</template>

<style scoped>
.scramble-text {
  font-family: 'Orbitron', monospace;
  display: inline-block;
  white-space: pre-wrap;
}
</style>
