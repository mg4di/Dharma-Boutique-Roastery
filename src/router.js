import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Shop from './views/Shop.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import Confirmation from './views/Confirmation.vue'
import Wishlist from './views/Wishlist.vue'
import NotFound from './views/NotFound.vue'
import Origin from './views/Origin.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => to.hash
    ? { el: to.hash, behavior: 'smooth' }
    : { top: 0, behavior: 'smooth' },
  routes: [
    { path: '/', component: Home, meta: { title: 'Dharma Roastery — Kopi Lokal Indonesia' } },
    { path: '/shop', component: Shop, meta: { title: 'Jelajahi Kopi — Dharma Roastery' } },
    { path: '/product/:id', component: Product, meta: { title: 'Kopi Lokal — Dharma Roastery' } },
    { path: '/origin/:slug', component: Origin, meta: { title: 'Origin Kopi Indonesia — Dharma Roastery' } },
    { path: '/cart', component: Cart, meta: { title: 'Tas Kopi — Dharma Roastery' } },
    { path: '/checkout', component: Checkout, meta: { title: 'Checkout — Dharma Roastery' } },
    { path: '/order/:id', component: Confirmation, meta: { title: 'Pesanan — Dharma Roastery' } },
    { path: '/wishlist', component: Wishlist, meta: { title: 'Favorit — Dharma Roastery' } },
    { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Halaman tidak ditemukan — Dharma Roastery' } },
  ],
})
