<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <nav class="nav">
      <ul class="nav-links">
        <li><a href="#home" @click.prevent="scrollTo('home')">Главная</a></li>
        <li><a href="#price" @click.prevent="scrollTo('price')">Прайс</a></li>
        <li><a href="#about" @click.prevent="scrollTo('about')">О нас</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.header.scrolled {
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 2px 20px rgba(0,0,0,0.02);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center; /* центрируем ссылки на всех экранах */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #000;
  text-decoration: none;
  position: relative;
  padding-bottom: 4px;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #000;
  transform: scaleX(0);
  transition: transform 0.25s ease;
}

.nav-links a:hover::after {
  transform: scaleX(1);
}

/* Для мобильных устройств уменьшаем расстояние между ссылками, если нужно */
@media (max-width: 480px) {
  .nav-links {
    gap: 24px;
  }
  .nav {
    padding: 0 16px;
  }
}
</style>