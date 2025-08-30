<template>
  <div v-if="show" class="notice-modal-overlay">
    <div class="notice-modal">
      <slot>
        <div class="notice-content">
          <h2>{{ title }}</h2>
          <div class="notice-html" v-html="content"></div>
        </div>
      </slot>
      <button class="notice-btn" @click="closeModal">我已知晓</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: true },
  title: { type: String, default: '公告' },
  content: { type: String, default: '<p>欢迎访问本站！</p>' }
})

const emits = defineEmits(['close'])

function closeModal() {
  emits('close')
}
</script>

<style scoped>
.notice-modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.notice-modal {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 2.5em 2em 2em 2em;
  min-width: 320px;
  max-width: 90vw;
  text-align: center;
}
.notice-content h2 {
  margin-bottom: 0.5em;
  font-size: 1.5em;
  color: var(--docus-primary, #2c3e50);
}
.notice-html {
  margin-bottom: 1.5em;
  font-size: 1.1em;
  color: var(--docus-body-color, #333);
  word-break: break-word;
  text-align: left;
}
.notice-btn {
  display: block;
  width: 100%;
  padding: 0.75em 0;
  font-size: 1em;
  background: var(--docus-primary, #2c3e50);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}
.notice-btn:hover {
  background: #1a2533;
}
</style>