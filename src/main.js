import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import './color-palette.css'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')

const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
if (!motionPreference.matches) {
  Promise.all([import('aos'), import('aos/dist/aos.css')])
    .then(async ([aosModule]) => {
      if (motionPreference.matches) {
        document.querySelectorAll('[data-aos]').forEach((element) => {
          element.removeAttribute('data-aos')
        })
        return
      }

      const motionStyles = document.createElement('style')
      motionStyles.textContent = `
        [data-aos="fade-up"] { transform: translate3d(0, 20px, 0); }
        [data-aos="fade-down"] { transform: translate3d(0, -16px, 0); }
        @media (prefers-reduced-motion: reduce) {
          [data-aos][data-aos] { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `
      document.head.append(motionStyles)

      await router.isReady()
      await nextTick()
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
      if (motionPreference.matches) return

      const AOS = aosModule.default
      AOS.init({
        duration: 550,
        easing: 'cubic-bezier(0.22, 0.75, 0.25, 1)',
        offset: 72,
        once: false,
        mirror: true,
      })
      router.afterEach(() => nextTick(() => AOS.refreshHard()))
    })
    .catch(() => {
      document.querySelectorAll('[data-aos]').forEach((element) => {
        element.removeAttribute('data-aos')
      })
    })
}
