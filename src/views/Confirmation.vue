<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { formatIDR } from '../data/products'
const route=useRoute(),cart=useCartStore(),order=computed(()=>cart.orders.find(item=>item.id===route.params.id))
</script>
<template><div class="confirmation-page"><span class="confirmation-seal">✓</span><span class="section-index">PESANAN TERSIMPAN DI BROWSER</span><h1>Terima kasih,<br/><em>{{ order?.customer.name?.split(' ')[0]||'teman kopi' }}.</em></h1><p>Pesanan <b>{{ route.params.id }}</b> hanya simulasi frontend. Tidak ada pembayaran atau pengiriman sungguhan.</p><div v-if="order" class="confirmation-ticket"><div><span>TOTAL DEMO</span><b>{{ formatIDR(order.total) }}</b></div><div><span>METODE</span><b>{{ order.customer.payment }}</b></div><div><span>STATUS</span><b>Simulasi</b></div></div><RouterLink to="/shop" class="button button-dark">Jelajahi kopi lagi <span>↗</span></RouterLink></div></template>
