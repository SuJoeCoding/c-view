<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>

import config from '../util/config'

const prefixClass = `${config.prefixClass}-row`

export default {
  name: 'Row',
  props: {
    'gutter': {
      type: Number,
      default: 0
    },
    'type': {
      type: String
    },
    'align': {
      type: String
    },
    'justify': {
      type: String
    },
    'class-name': {
      type: String
    },
    'className': {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    classes () {
      const classes = [
        {
          [`${prefixClass}-${this.type}`]: !!this.type,
          [`${prefixClass}-${this.type}-${this.align}`]: !!this.align,
          [`${prefixClass}-${this.type}-${this.justify}`]: !!this.justify,
          [`${this.className}`]: !!this.className
        }
      ]
      return classes
    },
    styles () {
      return {
        margin: `${this.gutter}px 0px`
      }
    }
  },
  methods: {
    updateGutter (val) {
      this.$children.forEach((child) => {
        child.$data.gutter = val
      })
    }
  },
  watch: {
    gutter (val) {
      this.updateGutter(val)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.updateGutter(this.gutter)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

