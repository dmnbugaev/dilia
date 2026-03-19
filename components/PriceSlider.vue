<template>
  <section id="price" class="price-section">
    <div class="container">
      <h2 class="section-title">Прайс-лист</h2>
      <div
        class="slider"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
      >
        <div class="slides" :style="{ transform: `translateX(-${current * 100}%)` }">
          <div v-for="(img, i) in images" :key="i" class="slide">
            <div class="price-image-wrapper">
              <img
                :src="img.src"
                :alt="img.alt"
                class="price-image"
                loading="lazy"
              >
            </div>
          </div>
        </div>

        <button class="arrow arrow-left" @click="prev" aria-label="Назад">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button class="arrow arrow-right" @click="next" aria-label="Вперёд">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div class="dots">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="dot"
            :class="{ active: i === current }"
            @click="current = i"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: '/images/A4 - 1.jpg', alt: 'Прайс-лист: маникюр' },
  { src: '/images/A4 - 2.jpg', alt: 'Прайс-лист: парикмахерские услуги' },
  { src: '/images/A4 - 3.jpg', alt: 'Прайс-лист: уход' }
])

const current = ref(0)
const startX = ref(null)

function next() {
  current.value = (current.value + 1) % images.value.length
}

function prev() {
  current.value = (current.value - 1 + images.value.length) % images.value.length
}

function onTouchStart(e) {
  startX.value = e.touches[0].clientX
}

function onTouchEnd(e) {
  if (startX.value === null) return
  const diff = startX.value - e.changedTouches[0].clientX
  if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  startX.value = null
}
</script>

<style scoped>
.price-section {
  padding: 100px 0;
  background: #fafafa;
}

.section-title {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.4em;
  color: #999;
  text-transform: uppercase;
  margin: 0 0 60px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

.slider {
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  border: 1px solid #f0f0f0;
}

.slides {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
}

.price-image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;               /* Увеличено для более крупного отображения */
  margin: 0 auto;
  padding: 20px;
  background: #fff;
}

.price-image {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  z-index: 10;
}

.arrow:hover {
  background: #000;
  border-color: #000;
  color: #fff;
}

.arrow svg {
  width: 20px;
  height: 20px;
}

.arrow-left { left: 16px; }
.arrow-right { right: 16px; }

.dots {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: #ccc;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.2s, transform 0.2s;
}

.dot.active {
  background: #000;
  transform: scale(1.5);
}

@media (max-width: 600px) {
  .price-section {
    padding: 40px 0;            /* Уменьшены отступы, чтобы освободить место */
  }
  .price-image-wrapper {
    height: 75vh;               /* Чуть меньше, но всё равно крупно */
    padding: 10px;
  }
  .arrow {
    display: none;              /* Кнопки скрыты, листаем только свайпом */
  }
  .dots {
    bottom: 8px;                /* Точки можно оставить или тоже скрыть */
  }
}
</style>