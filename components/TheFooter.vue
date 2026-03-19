<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <p class="footer-brand">Студия маникюра, парикмахерская</p>
        <div class="footer-info">
          <a href="tel:+79771515943" class="footer-link">+7 (977) 151-59-43</a>
          <span class="separator">—</span>
          <span>Москва, ул. Академика Волгина, 2</span>
        </div>
        <p class="footer-copy">© {{ year }} DILIA</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #fff;
  padding: 48px 0;
  border-top: 1px solid #f0f0f0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 13px;
  color: #666;
}

.footer-brand {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #000;
  margin: 0;
}

.footer-info {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-link {
  color: #666;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #000;
}

.separator {
  color: #ccc;
  font-weight: 300;
}

.footer-copy {
  color: #aaa;
  margin: 0;
  font-size: 12px;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .footer-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .separator {
    display: none;
  }
}
</style>