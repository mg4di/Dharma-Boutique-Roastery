<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { origins } from '../data/origins.js'
import { products, formatIDR } from '../data/products.js'
import { useCartStore } from '../stores/cart.js'

const route = useRoute()
const cart = useCartStore()
const origin = computed(() => origins.find((item) => item.slug === route.params.slug))
const originProducts = computed(() => products.filter((product) => origin.value?.products.includes(product.id)))
const otherOrigins = computed(() => origins.filter((item) => item.slug !== route.params.slug))
</script>

<template>
  <div v-if="origin" class="origin-page">
    <div class="breadcrumbs"><RouterLink to="/">Beranda</RouterLink><span>/</span><RouterLink to="/#origin">Asal kopi</RouterLink><span>/</span><b>{{ origin.name }}</b></div>
    <section class="origin-hero">
      <img class="origin-hero-image" :src="origin.image" :alt="`${origin.landscape}, gambar ilustrasi`" />
      <div class="origin-hero-shade"></div>
      <div class="origin-hero-content">
        <span class="origin-label"><i></i> ORIGIN INDONESIA · HALAMAN DEMO</span>
        <h1>{{ origin.name }}<br /><em>{{ origin.region }}</em></h1>
        <p>{{ origin.area }}<span> · </span>{{ origin.elevation }}</p>
        <RouterLink :to="originProducts[0] ? `/product/${originProducts[0].id}` : '/shop'" class="button button-coral">Jelajahi kopi {{ origin.name }} <span>↘</span></RouterLink>
      </div>
      <span class="origin-hero-coordinate">{{ origin.province.toUpperCase() }} · PETA ILUSTRATIF</span>
    </section>

    <section class="origin-story" data-aos="fade-up">
      <div class="origin-story-heading"><span class="section-index">CERITA SEBUAH TEMPAT</span><h2>Dari tanah,<br /><em>menuju cangkir.</em></h2></div>
      <div class="origin-story-copy"><p>{{ origin.description }}</p><div class="origin-flavor-notes"><span>CONTOH CATATAN RASA</span><div><i v-for="note in origin.notes" :key="note">{{ note }}</i></div></div></div>
    </section>

    <section class="origin-products">
      <div class="section-heading"><div><span class="section-index">KOPI DARI {{ origin.region.toUpperCase() }}</span><h2>Kenali pilihan <em>cangkirnya.</em></h2></div><span class="demo-pill">{{ originProducts.length }} PRODUK CONTOH</span></div>
      <div v-if="originProducts.length" class="origin-product-list">
        <article v-for="product in originProducts" :key="product.id" class="origin-product-row">
          <RouterLink :to="`/product/${product.id}`" class="origin-product-image"><img :src="product.image" :alt="`Gambar demo untuk ${product.name}`" loading="lazy"/><span>{{ product.region }} · SAMPLE</span></RouterLink>
          <div class="origin-product-info"><span class="origin-product-method">{{ product.process }} <i>·</i> {{ product.roastLabel }} roast</span><RouterLink :to="`/product/${product.id}`" class="origin-product-name">{{ product.name }}</RouterLink><p>{{ product.note }}</p><div class="product-notes"><span v-for="taste in product.tasting" :key="taste">{{ taste }}</span></div></div>
          <div class="origin-product-buy"><span>250G · DEMO</span><b>{{ formatIDR(product.price) }}</b><button class="button button-coral" @click="cart.add(product.id,'250g','Whole bean')">Tambah ke tas <i>↗</i></button><RouterLink :to="`/product/${product.id}`" class="origin-detail-link">Detail kopi <span>→</span></RouterLink></div>
        </article>
      </div>
      <div v-else class="origin-no-products"><p>Belum ada kopi contoh untuk origin ini.</p><RouterLink to="/shop" class="text-link">Jelajahi katalog <span>↗</span></RouterLink></div>
      <p class="origin-demo-disclaimer">Semua nama kopi, harga, foto, elevasi, dan catatan rasa pada halaman ini adalah materi contoh untuk demo frontend—bukan data bisnis atau informasi panen yang telah diverifikasi.</p>
    </section>

    <section class="other-origins"><div class="section-heading" data-aos="fade-up"><div><span class="section-index">PERJALANAN DILANJUTKAN</span><h2>Jelajahi origin <em>lainnya.</em></h2></div><RouterLink to="/shop" class="text-link">Semua kopi <span>↗</span></RouterLink></div><div class="other-origin-links"><RouterLink v-for="item in otherOrigins" :key="item.slug" :to="`/origin/${item.slug}`"><span>{{ item.region }}</span><b>{{ item.name }}</b><i>↗</i></RouterLink></div></section>
  </div>
  <div v-else class="not-found"><span>✳</span><span class="section-index">ORIGIN TIDAK DITEMUKAN</span><h1>Belum ada catatan<br /><em>untuk tempat ini.</em></h1><p>Pilih origin lain dari katalog kopi Indonesia.</p><RouterLink to="/shop" class="button button-dark">Jelajahi kopi <span>↗</span></RouterLink></div>
</template>
