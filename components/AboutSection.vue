<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <span class="section-label">О НАС</span>
          <h2 class="about-title">Студия красоты</h2>
          <p class="about-desc">
            Всем привет! На связи студия красоты! Наша миссия заключается в том, чтобы подчеркнуть
            всё волшебное, что у Вас есть. Из нашей студии Вы уйдёте с радостью и уверенностью
            в том, что Вы готовы воплощать все свои задумки и идеи.
          </p>
          <address class="address">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="18" height="18">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              <circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span>г. Москва, Ул Академика Волгина д 2</span>
          </address>
          <div class="contacts">
            <a href="https://t.me/diliacom" target="_blank" rel="noopener" class="contact-link" aria-label="Telegram">
              <span class="icon-wrap">
                <i class="fab fa-telegram"></i>
              </span>
              <span>Telegram</span>
            </a>
            <a href="tel:+79771515943" class="contact-link" aria-label="Позвонить">
              <span class="icon-wrap">
                <i class="fas fa-phone-alt"></i>
              </span>
              <span>+7 (977) 151-59-43</span>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=79361598890&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BA%20%D0%B2%D0%B0%D0%BC%20%D0%B2%20%D1%81%D0%B0%D0%BB%D0%BE%D0%BD"
              target="_blank"
              rel="noopener"
              class="contact-link"
              aria-label="WhatsApp"
            >
              <span class="icon-wrap">
                <i class="fab fa-whatsapp"></i>
              </span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div class="about-map">
          <div class="map-container">
            <ClientOnly>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.517%2C55.651&z=16&pt=37.517%2C55.651&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%A3%D0%BB%20%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8%D0%BA%D0%B0%20%D0%92%D0%BE%D0%BB%D0%B3%D0%B8%D0%BD%D0%B0%20%D0%B4%202"
                width="100%"
                height="400"
                frameborder="0"
                allowfullscreen
                class="map-iframe"
                title="Карта — Студия DILIA"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 120px 0;
  background: #fff;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.section-label {
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.4em;
  color: #999;
  display: block;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.about-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 600;
  color: #000;
  margin: 0 0 24px;
  letter-spacing: -0.01em;
}

.about-desc {
  font-size: 16px;
  line-height: 1.9;
  color: #444;
  margin: 0 0 40px;
  font-weight: 300;
  max-width: 500px;
}

.address {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #666;
  font-style: normal;
  margin-bottom: 40px;
  border-left: 1px solid #000;
  padding-left: 20px;
}

.address svg {
  flex-shrink: 0;
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 16px;
  text-decoration: none;
  color: #000;
  font-size: 15px;
  font-weight: 400;
  transition: opacity 0.2s;
}

.contact-link:hover {
  opacity: 0.7;
}

.icon-wrap {
  width: 44px;
  height: 44px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  flex-shrink: 0;
  background: #fff;
}

.icon-wrap i {
  font-size: 20px;
  line-height: 1;
}

.contact-link:hover .icon-wrap {
  background: #000;
  border-color: #000;
  color: #fff;
  opacity: 1;
}

.about-map {
  position: sticky;
  top: 100px;
}

.map-container {
  overflow: hidden;
  border: 1px solid #e0e0e0;
  padding: 8px;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.02);
}

.map-iframe {
  border: none;
  display: block;
  width: 100%;
  height: 100%;
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.3s;
}

.map-iframe:hover {
  filter: grayscale(80%) contrast(1);
}

@media (max-width: 900px) {
  .about {
    padding: 80px 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .about-map {
    position: static;
  }
}

@media (max-width: 600px) {
  .about {
    padding: 60px 0;
  }
  .about-title {
    font-size: 36px;
  }
  .about-desc {
    font-size: 15px;
  }
  .address {
    font-size: 14px;
    padding-left: 16px;
  }
  .contact-link {
    font-size: 14px;
  }
  .map-container iframe {
    height: 300px;
  }
}
</style>