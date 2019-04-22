<template>
  <div class="toast" :class="toastType ? `toast--${toastType}` : ''">
    <p>{{ mess }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: this.message,
      dura: this.duration,
      toastType: this.type
    };
  },
  props: {
    message: String,
    type: {
      type: String,
      validator: function(val) {
        return ["success", "error", "info"].indexOf(val) != -1;
      }
    },
    duration: {
      type: Number,
      default: 1.5
    }
  },

  mounted() {
    setTimeout(() => {
      this.$el.parentNode.removeChild(this.$el);
    }, this.dura * 1000);
  }
};
</script>

<style scoped>
.toast {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 9999;
  background: transparent;
}
.toast p {
  padding: 12px 22px;
  font-size: 18px;
  border-radius: 4px;
  background: rgba(17, 17, 17, 0.7);
}
.toast--error p {
  background: rgba(255, 0, 0, 0.5);
}
.toast--success p {
  background: rgba(0, 255, 0, 0.5);
}
</style>
