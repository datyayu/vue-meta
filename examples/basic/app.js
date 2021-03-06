import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

new Vue({
  template: `
    <div id="app">
      <h1>Basic</h1>
      <p>Inspect Element to see the meta info</p>
    </div>
  `,
  metaInfo: () => ({
    title: 'Basic',
    titleTemplate: '%s | Vue Meta Examples',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    }
  })
}).$mount('#app')
