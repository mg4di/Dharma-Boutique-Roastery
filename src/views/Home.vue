<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { products, formatIDR } from '../data/products'
import { origins } from '../data/origins'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
const router = useRouter()
const route = useRoute()
const featured = products.filter((product) => product.featured)
const selected = ref(featured[1])
const activeRegion = ref('Semua')
const regions = ['Semua','Sumatra','Bali','Sulawesi','Flores','Jawa']
const regionProducts = computed(() => activeRegion.value === 'Semua' ? featured : products.filter((product) => product.region === activeRegion.value))
function goToOrigins() {
  if (route.path !== '/') {
    router.push({ path: '/', hash: '#origin' })
    return
  }
  document.getElementById('origin')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div class="home-page">
    <section class="hero-scorecard" aria-labelledby="hero-title" data-aos="fade-up" data-aos-delay="100">
      <div class="hero-brand-hero">
        <div class="hero-brand-copy">
          <span class="hero-wordmark">DHARMA <i>·</i> BOUTIQUE ROASTERY</span>
          <h1 id="hero-title">Kopi lokal.<br/>Diracik dengan <em>niat.</em></h1>
          <p>Kami merayakan kekayaan kopi Indonesia lewat sangrai yang cermat dan cerita yang layak dibagikan—dari kebun, sampai ke cangkir kamu.</p>
          <div class="hero-brand-actions"><RouterLink to="/shop" class="button button-coral">Jelajahi kopi <span>↗</span></RouterLink><a href="/#origin" class="hero-origin-link" @click.prevent="goToOrigins">Kenali asalnya <span>↓</span></a></div>
          <div class="hero-brand-note"><span><i></i> DISANGRAI DALAM BATCH KECIL</span><span>100% CERITA KOPI INDONESIA</span></div>
        </div>
        <div class="hero-brand-visual">
          <img src="/img/coffee-5568374_1280.jpg" alt="Penggiling kopi, biji kopi, dan cangkir seduhan" fetchpriority="high" />
        </div>
      </div>
      <div class="hero-brand-footer"><span>MENEMUKAN YANG BAIK, DARI DEKAT.</span><a href="#origin">JELAJAHI ASAL KOPI <b>↓</b></a><span>ROASTED WITH CARE · INDONESIA</span></div>
    </section>

    <section class="origin-section section-pad" id="origin">
      <div class="section-heading" data-aos="fade-up"><div><span class="section-index">A · DARI TANAH KITA</span><h2>Setiap tempat,<br/><em>punya cerita.</em></h2></div><p>Ketinggian, cara olah, dan tanah yang berbeda. Semuanya terasa sampai ke cangkir.</p></div>
      <div class="origin-explorer">
        <div class="origin-map-panel" data-aos="fade-up"><div class="map-topline"><span>INDONESIAN COFFEE BELT</span><span>3° 06′ S · 106° 49′ E</span></div><svg class="indonesia-map" viewBox="0 0 760 290" role="img" aria-label="Peta skematis kepulauan Indonesia dengan origin kopi">
          <g class="map-islands"><path d="M80 86c11-8 24-8 37-1l35 9 20 15 24 1 14 13-5 8-24-2-15 12-22-4-18 8-28-11-19 5-17-12-17 3-13-12 5-11 22-3 8-16 23-2Z"/><path d="m210 165 20-7 18 6 17 19-5 14-14 9-19-9-13-17Z"/><path d="m274 197 11-4 9 6-3 9-12 3Z"/><path d="m329 166 24-8 39 8 16 14-10 9-30-4-20 9-21-9Z"/><path d="m415 150 15-8 23 6 17-5 23 9 10 12-18 6-17-5-10 14-17-5-6-13-14 1-10-9Z"/><path d="m468 174 17-2 15 6 5 9-21 5-17-7Z"/><path d="m536 153 18-7 26 8 12 14-7 14-27 5-17-12Z"/><path d="m617 168 13-8 24 3 13 11-9 11-26 5-18-9Z"/><path d="m680 187 15-4 13 6-5 8-19 2Z"/><path d="m149 205 10-4 6 5-5 6-10-2Z"/><path d="m374 207 9-3 7 4-6 6-11-1Z"/><path d="m505 211 10-3 7 5-7 5-11-3Z"/></g>
          <g class="map-grain"><path d="M89 100c30-14 64-5 96 16M81 112c28-9 53 6 78 18M331 174c29 14 58-2 85 9M418 158c25 14 48-2 70 12M540 162c24 8 42 4 57 17"/></g>
          <g class="map-markers"><g class="marker marker-active" role="link" tabindex="0" aria-label="Lihat kopi origin Gayo" @click="router.push('/origin/gayo')" @keydown.enter="router.push('/origin/gayo')"><circle cx="140" cy="112" r="16"/><circle cx="140" cy="112" r="4"/><text x="140" y="83">GAYO</text></g><g role="link" tabindex="0" aria-label="Lihat kopi origin Kintamani" @click="router.push('/origin/kintamani')" @keydown.enter="router.push('/origin/kintamani')"><circle cx="291" cy="205" r="12"/><circle cx="291" cy="205" r="3"/><text x="291" y="231">BALI</text></g><g role="link" tabindex="0" aria-label="Lihat kopi origin Toraja" @click="router.push('/origin/toraja')" @keydown.enter="router.push('/origin/toraja')"><circle cx="445" cy="164" r="12"/><circle cx="445" cy="164" r="3"/><text x="445" y="138">TORAJA</text></g><g role="link" tabindex="0" aria-label="Lihat kopi origin Flores" @click="router.push('/origin/flores')" @keydown.enter="router.push('/origin/flores')"><circle cx="529" cy="178" r="12"/><circle cx="529" cy="178" r="3"/><text x="529" y="209">FLORES</text></g><g role="link" tabindex="0" aria-label="Lihat kopi origin Wamena" @click="router.push('/origin/wamena')" @keydown.enter="router.push('/origin/wamena')"><circle cx="656" cy="177" r="12"/><circle cx="656" cy="177" r="3"/><text x="656" y="151">PAPUA</text></g></g>
          <text class="map-caption" x="35" y="270">PETA ORIGIN · INDONESIA</text><text class="map-caption" x="630" y="270">5 ORIGIN</text>
        </svg><div class="map-origin-links" aria-label="Pilih halaman origin"><span>BUKA CERITA ORIGIN</span><RouterLink v-for="origin in origins" :key="origin.slug" :to="`/origin/${origin.slug}`">{{ origin.name }} <b>↗</b></RouterLink></div><div class="map-legend"><span><i class="legend-pin"></i> Origin pilihan kami</span><span>Data peta bersifat ilustratif <b>↗</b></span></div></div>
        <div class="origin-copy" data-aos="fade-up"><span class="origin-kicker"><span class="origin-star">✳</span> LEBIH DARI SEKADAR ASAL</span><h3>Dari kebun<br/>ke <em>karakter.</em></h3><p>Kami memilih kopi berdasarkan cerita yang dibawanya. Bukan sekadar nama daerah, tapi proses, varietas, dan rasa unik dari tiap panen.</p><RouterLink to="/origin/kintamani" class="text-link">Temukan kopi pilihanmu <span>↗</span></RouterLink><div class="origin-stats"><div><b>1.200—<br/>1.700</b><span>MDPL · KETINGGIAN KEBUN</span></div><div><b>04</b><span>METODE PENGOLAHAN</span></div></div></div>
      </div>
    </section>

    <section class="selection-section section-pad">
      <div class="section-heading selection-heading" data-aos="fade-up"><div><span class="section-index">B · KENALI CANGKIRMU</span><h2>Rasa yang ingin<br/><em>kamu temui?</em></h2></div><RouterLink to="/shop" class="text-link">Lihat semua kopi <span>↗</span></RouterLink></div>
      <div class="taste-filters" role="group" aria-label="Filter asal kopi"><button v-for="region in regions" :key="region" :class="{active:activeRegion===region}" @click="activeRegion=region">{{ region }}<span v-if="activeRegion===region"> · {{ regionProducts.length }}</span></button></div>
      <div class="product-grid">
        <article v-for="(product,index) in regionProducts.slice(0,4)" :key="product.id" class="product-card" data-aos="fade-up" :data-aos-delay="Math.min(index * 50, 150)">
          <div class="product-image-wrap"><RouterLink :to="`/product/${product.id}`" class="product-image-link"><img :src="product.image" :alt="`Kopi ${product.name}, ${product.origin}`" loading="lazy"/><span class="image-origin">{{ product.region }} <i>↗</i></span></RouterLink><button class="favorite-button" :class="{saved:cart.wishlist.includes(product.id)}" :aria-label="cart.wishlist.includes(product.id)?'Hapus favorit':'Simpan favorit'" @click="cart.toggleWishlist(product.id)"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg></button><span class="product-tag">{{ product.badge }}</span></div>
          <div class="product-meta"><span>{{ product.process }}</span><span>{{ product.roastLabel }} roast</span></div>
          <RouterLink :to="`/product/${product.id}`" class="product-title">{{ product.name }}</RouterLink><p class="product-origin">{{ product.origin }} <span>·</span> {{ product.altitude }}</p>
          <div class="product-notes"><span v-for="taste in product.tasting.slice(0,2)" :key="taste">{{ taste }}</span></div>
          <div class="product-card-foot"><span><b>{{ formatIDR(product.price) }}</b><small> / 250g</small></span><button :aria-label="`Tambah ${product.name} ke tas`" @click="cart.add(product.id,'250g','Whole bean')">+</button></div>
        </article>
        <div v-if="!regionProducts.length" class="region-empty"><span>✳</span><p>Kopi dari {{ activeRegion }} sedang kami siapkan.</p><button @click="activeRegion='Semua'">Lihat semua origin</button></div>
      </div>
    </section>

    <section class="brew-feature" id="brew"><div class="brew-photo" data-aos="fade-right"><img src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=85" alt="Seduhan kopi manual dengan metode pour over" loading="lazy"/><div class="brew-photo-note">RITUAL PAGI · V60</div></div><div class="brew-copy" data-aos="fade-left"><span class="section-index">C · RITUAL KECIL, RASA BESAR</span><h2>Mulai dari<br/><em>air yang tepat.</em></h2><p>Untuk V60, coba 15 gram kopi dengan 250 ml air bersuhu 92°C. Tuang perlahan, beri waktu, nikmati jedanya.</p><div class="brew-recipe"><div><span>KOPI</span><b>15 <small>g</small></b></div><span class="recipe-divider">:</span><div><span>AIR</span><b>250 <small>ml</small></b></div><div class="recipe-method"><span>METODE</span><b>V60 · 2:30</b></div></div><RouterLink to="/shop" class="text-link">Cari kopi untuk V60 <span>↗</span></RouterLink></div></section>

    <section class="closing-note" data-aos="fade-up"><span class="closing-mark">✳</span><p>“Kopi yang baik tidak perlu terburu-buru.<br/><em>Begitu juga cerita di baliknya.</em>”</p><span class="closing-signature">DHARMA ROASTERY · INDONESIA</span></section>
  </div>
</template>
