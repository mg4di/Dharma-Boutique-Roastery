import { defineStore } from 'pinia'
import { products } from '../data/products.js'

const read = (key, fallback) => {
  try {
    const value = localStorage.getItem(`dharma:${key}`)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}
const persist = (key, value) => {
  try { localStorage.setItem(`dharma:${key}`, JSON.stringify(value)) } catch { /* storage may be unavailable */ }
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: read('cart', []),
    wishlist: read('wishlist', []),
    orders: read('orders', []),
    toast: '',
  }),
  getters: {
    count: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    subtotal: (state) => state.items.reduce((sum, item) => sum + (products.find((product) => product.id === item.productId)?.sizes.find((size) => size.label === item.size)?.price || 0) * item.qty, 0),
    savedCount: (state) => state.wishlist.length,
  },
  actions: {
    add(productId, size = '250g', grind = 'Whole bean') {
      const existing = this.items.find((item) => item.productId === productId && item.size === size && item.grind === grind)
      if (existing) existing.qty += 1
      else this.items.push({ productId, size, grind, qty: 1 })
      persist('cart', this.items)
      this.notify('Ditambahkan ke tas kopi')
    },
    setQty(index, qty) {
      if (qty < 1) this.items.splice(index, 1)
      else this.items[index].qty = qty
      persist('cart', this.items)
    },
    remove(index) {
      this.items.splice(index, 1)
      persist('cart', this.items)
    },
    toggleWishlist(productId) {
      const index = this.wishlist.indexOf(productId)
      if (index >= 0) this.wishlist.splice(index, 1)
      else this.wishlist.push(productId)
      persist('wishlist', this.wishlist)
      this.notify(index >= 0 ? 'Dihapus dari favorit' : 'Disimpan ke favorit')
    },
    placeOrder(customer) {
      const order = { id: `DH-${Date.now().toString().slice(-7)}`, createdAt: new Date().toISOString(), customer, items: [...this.items], total: this.subtotal, status: 'Simulasi' }
      this.orders.unshift(order)
      persist('orders', this.orders)
      this.items = []
      persist('cart', this.items)
      return order
    },
    notify(message) {
      this.toast = message
      window.clearTimeout(this._toastTimer)
      this._toastTimer = window.setTimeout(() => { this.toast = '' }, 2600)
    },
  },
})
