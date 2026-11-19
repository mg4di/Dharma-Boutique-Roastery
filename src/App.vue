<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { useCartStore } from './stores/cart'
import { formatIDR, products } from './data/products'
import { origins } from './data/origins'

const cart = useCartStore()
const route = useRoute()
const menuOpen = ref(false)
const cartOpen = ref(false)
const cartProducts = computed(() => cart.items.map((item, index) => ({ ...item, index, product: products.find((product) => product.id === item.productId) })).filter((item) => item.product))
watch(() => route.fullPath, () => { menuOpen.value = false; cartOpen.value = false })
watch(() => route.fullPath, () => {
  const origin = origins.find((item) => item.slug === route.params.slug)
  document.title = origin ? `${origin.name} Coffee Origin — Dharma Roastery` : route.meta.title || 'Dharma Roastery'
}, { immediate: true })

function updateQty(index, qty) { cart.setQty(index, qty) }
function format(value) { return formatIDR(value) }
function subscribe(event) {
  const form = event.currentTarget
  const email = new FormData(form).get('email')?.toString().trim().toLowerCase()
  if (!email) return
  try {
    const subscribers = JSON.parse(localStorage.getItem('dharma:subscribers') || '[]')
    if (!subscribers.includes(email)) subscribers.push(email)
    localStorage.setItem('dharma:subscribers', JSON.stringify(subscribers))
    cart.notify('Terima kasih sudah bergabung!')
    form.reset()
  } catch {
    cart.notify('Penyimpanan browser tidak tersedia.')
  }
}
</script>

<template>
  <div class="site-shell">
    <div class="demo-strip" data-aos="fade-down"><span class="demo-dot"></span> Katalog demo · Kopi Indonesia, disangrai dalam batch kecil <span>Setiap pesanan adalah simulasi</span></div>
    <header class="site-header" data-aos="fade-down" data-aos-delay="50">
      <button class="mobile-menu" aria-label="Buka menu" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <RouterLink to="/" class="brand" aria-label="Dharma Roastery beranda">
        <span class="brand-mark"><svg viewBox="0 0 38 38" aria-hidden="true"><path d="M19 3C10 7 6 14 8 23c2 8 8 12 17 10 8-2 12-9 9-17C32 8 27 4 19 3Z"/><path d="M13 26c5-6 10-10 17-14M13 17c5 1 9 5 12 11"/></svg></span>
        <span class="brand-name">dharma<span> BOUTIQUE ROASTERY</span></span>
      </RouterLink>
      <nav :class="['main-nav', { 'is-open': menuOpen }]" aria-label="Navigasi utama">
        <RouterLink to="/shop">Jelajahi kopi</RouterLink>
        <a href="/#origin" @click="menuOpen = false">Asal & rasa</a>
        <a href="/#brew" @click="menuOpen = false">Cara seduh</a>
      </nav>
      <div class="header-actions">
        <RouterLink to="/wishlist" class="icon-button wishlist-link" aria-label="Kopi favorit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg><span v-if="cart.savedCount">{{ cart.savedCount }}</span></RouterLink>
        <button class="bag-button" @click="cartOpen = !cartOpen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg><span>Tas kopi</span><b>{{ cart.count }}</b></button>
      </div>
    </header>

    <main><RouterView /></main>

    <footer class="site-footer">
      <div class="footer-main"><div class="footer-brand"><RouterLink to="/" class="brand"><span class="brand-mark"><svg viewBox="0 0 38 38" aria-hidden="true"><path d="M19 3C10 7 6 14 8 23c2 8 8 12 17 10 8-2 12-9 9-17C32 8 27 4 19 3Z"/><path d="M13 26c5-6 10-10 17-14M13 17c5 1 9 5 12 11"/></svg></span><span class="brand-name">dharma<span> BOUTIQUE ROASTERY</span></span></RouterLink><p>Kopi lokal, disangrai dengan sepenuh hati.<br/>Secangkir cerita dari tanah Indonesia.</p></div><div class="footer-col"><b>Jelajahi</b><RouterLink to="/shop">Semua kopi</RouterLink><a href="/#origin">Asal kopi</a><a href="/#brew">Panduan seduh</a></div><div class="footer-col"><b>Perlu bantuan?</b><span>Kontak roastery belum ditambahkan.</span><span>Jam operasional belum ditambahkan.</span></div><div class="footer-news"><b>Surat dari roastery</b><p>Catatan panen dan kopi baru, langsung ke inbox.</p><form @submit.prevent="subscribe"><input name="email" type="email" required placeholder="Alamat email kamu" aria-label="Alamat email"/><button aria-label="Daftar newsletter">→</button></form></div></div>
      <div class="footer-bottom"><span>© 2025 Dharma Boutique Roastery</span><span>Diracik dengan perhatian di Indonesia <span class="footer-sun">✳</span></span><span>Demo frontend · Tidak menerima pembayaran</span></div>
    </footer>

    <Transition name="fade"><div v-if="cartOpen" class="drawer-scrim" @click.self="cartOpen = false"><aside class="cart-drawer" aria-label="Tas kopi" aria-modal="true" role="dialog"><div class="drawer-head"><div><span class="eyebrow">YANG SUDAH DIPILIH</span><h2>Tas kopi <span>({{ cart.count }})</span></h2></div><button class="close-button" aria-label="Tutup" @click="cartOpen = false">×</button></div><div v-if="!cartProducts.length" class="drawer-empty"><span class="empty-bowl">◌</span><h3>Masih kosong di sini.</h3><p>Mungkin ada kopi yang menunggu untuk kamu temukan?</p><RouterLink to="/shop" class="button button-dark" @click="cartOpen=false">Jelajahi kopi</RouterLink></div><div v-else class="drawer-items"><div v-for="item in cartProducts" :key="item.index" class="drawer-item"><img :src="item.product.image" :alt="item.product.name"/><div class="drawer-item-info"><b>{{ item.product.name }}</b><span>{{ item.size }} · {{ item.grind }}</span><strong>{{ format(item.product.sizes.find(s => s.label === item.size)?.price * item.qty) }}</strong><div class="qty-control"><button @click="updateQty(item.index,item.qty-1)" aria-label="Kurangi">−</button><span>{{ item.qty }}</span><button @click="updateQty(item.index,item.qty+1)" aria-label="Tambah">+</button></div></div></div></div><div v-if="cartProducts.length" class="drawer-bottom"><div class="subtotal"><span>Subtotal</span><b>{{ format(cart.subtotal) }}</b></div><p>Ongkir dihitung pada langkah berikutnya.</p><RouterLink to="/cart" class="button button-coral" @click="cartOpen=false">Lihat tas kopi <span>→</span></RouterLink></div></aside></div></Transition>
    <Transition name="toast"><div v-if="cart.toast" class="toast-message" role="status"><span>✓</span>{{ cart.toast }}</div></Transition>
  </div>
</template>
