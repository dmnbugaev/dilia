<template>
  <div class="page">
    <TheHeader />
    <main>
      <HeroSection />
      <PriceSlider />
      <BookingSection />
      <AboutSection />
    </main>
    <TheFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #000;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

@media (max-width: 600px) {
  .container {
    padding: 0 20px;
  }
}

.page {
  min-height: 100vh;
}
</style>