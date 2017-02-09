// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import row from './components/Row.vue'
import Col from './components/Col.vue'

require('./style/index.less')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<row :gutter="10"><i-col :span="10" :offset="10">213</i-col></row>',
  components: {
    row,
    'i-col': Col
  }
})
