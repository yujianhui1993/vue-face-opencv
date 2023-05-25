import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name:'FaceDetection',
      path: '/',
      component: () => import('@/views/face-detection.vue'),
      meta: {
        title: '人脸检测',
        keepAlive: false
      }
    }
  ]
})