import Vue from 'vue'

const ModelBox = Vue.extend(require('./modelBox.vue'))
let instance
let timer

module.exports = {
  open (options = {}) {
    if (!instance) {
      instance = new ModelBox({
        el: document.createElement('div')
      })
    }
    if (instance.visible) return
    instance.message =
      typeof options === 'string' ? options : options.message || ''
    instance.title = options.title || '提示'
    instance.buttonText = options.buttonText || '确定'
    document.body.appendChild(instance.$el)
    if (timer) {
      clearTimeout(timer)
    }

    Vue.nextTick(() => {
      instance.visible = true
    })
  },

  close () {
    if (instance) {
      Vue.nextTick(() => {
        instance.visible = false
        timer = setTimeout(() => {
          if (instance.$el) {
            instance.$el.style.display = 'none'
          }
        }, 400)
      })
    }
  }
}
