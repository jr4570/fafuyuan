<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme

const showNotification = ref(true)
const progress = ref(100)

function closeNotification() {
  showNotification.value = false
}

onMounted(() => {
  const duration = 5000
  const interval = 50
  const steps = duration / interval
  const timer = setInterval(() => {
    progress.value -= 100 / steps
    if (progress.value <= 0) {
      clearInterval(timer)
      showNotification.value = false
    }
  }, interval)

  onUnmounted(() => {
    clearInterval(timer)
  })
})
</script>

<template>
  <Layout>
    <template #layout-top>
      <div v-if="showNotification" class="custom-notification">
        <div class="notification-content">
          <span class="notification-title">发癫群附属综合医院</span>
          <span class="notification-message">网站正在开发中，可能會廢棄</span>
        </div>
        <button @click="closeNotification" class="close-button">&times;</button>
        <div class="progress-bar-container">
          <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.custom-notification {
  background-color: #36393f;
  color: white;
  padding: 12px 16px;
  position: fixed;
  bottom: 20px;
  right: 30px; /* 将通知往左移动 */
  z-index: 100;
  border-radius: 4px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.notification-content {
  display: flex;
  flex-direction: column;
  padding-right: 24px;
}

.notification-title {
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 4px;
}

.notification-message {
  font-size: 0.9em;
  color: #dcddde;
}

.close-button {
  background: none;
  border: none;
  color: #dcddde;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  right: 8px;
  top: 8px;
}

.progress-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(255,255,255,0.1);
}

.progress-bar {
  height: 100%;
  background-color: #5865f2;
  transition: width 0.05s linear;
}
</style>