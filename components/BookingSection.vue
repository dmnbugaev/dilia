<template>
  <section class="booking">
    <div class="container">
      <div class="booking-inner">
        <p class="booking-sub">Готовы к преображению?</p>
        <h2 class="booking-title">Запишитесь онлайн</h2>
        <p class="booking-text">Выберите мастера, услугу и удобное время в нашей системе</p>
        <a
          href="https://n1432105.yclients.com/company/1296264/personal/menu?o="
          target="_blank"
          rel="noopener"
          class="booking-btn"
        >
          <span>Перейти к записи</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.booking {
  padding: 120px 0;
  background: #000;
  position: relative;
}

.booking::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #444, transparent);
}

.booking-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
}

.booking-sub {
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 0.4em;
  color: #666;
  text-transform: uppercase;
  margin: 0;
}

.booking-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.booking-text {
  font-size: 16px;
  color: #888;
  margin: 0 0 16px;
  line-height: 1.7;
  font-weight: 300;
}

.booking-btn {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 18px 48px;
  border: 1px solid #fff;
  color: #fff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25em;
  transition: background 0.3s, color 0.3s, gap 0.3s;
  background: transparent;
}

.booking-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s;
}

.booking-btn:hover {
  background: #fff;
  color: #000;
  gap: 24px;
}

.booking-btn:hover svg {
  transform: translateX(4px);
}

@media (max-width: 600px) {
  .booking {
    padding: 80px 0;
  }
  .booking-title {
    font-size: 48px;
  }
  .booking-btn {
    padding: 14px 32px;
    font-size: 12px;
  }
}
</style>