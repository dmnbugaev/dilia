<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-line">Студия</span>
            <span class="title-line">маникюра,</span>
            <span class="title-line">парикмахерская</span>
          </h1>
          <div class="hero-cta">
            <a
              href="https://n1432105.yclients.com/company/1296264/personal/menu?o="
              target="_blank"
              rel="noopener"
              class="hero-btn"
            >
              <span>Записаться</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div class="hero-graphic">
          <svg class="abstract-lines" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 150 Q200 50 350 150" stroke="#000" stroke-width="1.2" opacity="0.3" fill="none" />
            <path d="M80 250 Q200 180 320 250" stroke="#000" stroke-width="1.2" opacity="0.5" fill="none" />
            <path d="M40 350 Q200 280 360 350" stroke="#000" stroke-width="1.2" opacity="0.7" fill="none" />
            <circle cx="200" cy="300" r="60" stroke="#000" stroke-width="0.8" opacity="0.2" fill="none" />
            <circle cx="220" cy="280" r="20" stroke="#000" stroke-width="0.6" opacity="0.15" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  background: #fff;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero-offer {
  font-size: 14px;
  letter-spacing: 0.15em;
  color: #666;
  text-transform: uppercase;
  border-left: 2px solid #000;
  padding-left: 24px;
  margin: 0;
  font-weight: 300;
}

.accent {
  font-weight: 600;
  color: #000;
}

.hero-title {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: clamp(40px, 8vw, 80px);
  letter-spacing: -0.02em;
}

.title-line:first-child {
  color: #000;
}

.title-line:nth-child(2) {
  color: #444;
  font-style: italic;
  font-weight: 400;
  margin-top: -0.1em;
}

.title-line:nth-child(3) {
  color: #666;
  font-weight: 400;
  margin-top: -0.1em;
}

.hero-cta {
  margin-top: 24px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: transparent;
  color: #000;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.2em;
  border: 1px solid #000;
  transition: background 0.3s, color 0.3s, gap 0.3s;
}

.hero-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.hero-btn:hover {
  background: #000;
  color: #fff;
  gap: 20px;
}

.hero-btn:hover svg {
  transform: translateX(4px);
}

.hero-graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 400px;
}

.abstract-lines {
  width: 100%;
  max-width: 400px;
  height: auto;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .hero {
    padding: 100px 0 60px;
  }
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-graphic {
    min-height: 250px;
  }
  .abstract-lines {
    max-width: 300px;
  }
}

@media (max-width: 600px) {
  .hero {
    padding: 80px 0 40px;
  }
  .hero-offer {
    font-size: 12px;
    padding-left: 16px;
  }
  .hero-btn {
    padding: 14px 32px;
    font-size: 12px;
  }
  .title-line {
    font-size: clamp(32px, 10vw, 60px);
  }
}
</style>