<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>

import config from '../util/config'

const prefixClass = `${config.prefixClass}-col`

export default {
  name: 'Col',
  props: {
    'span': {
      type: Number,
      required: true
    },
    'offset': {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    classes () {
      return [
        {
          [`${prefixClass}`]: true,
          [`${prefixClass}-${this.span}`]: true,
          [`${prefixClass}-offset-${this.offset}`]: !!this.offset
        }
      ]
    },
    styles () {
      return [
        {
          padding: `0px ${this.gutter / 2}px`
        }
      ]
    }
  }
}
</script>
