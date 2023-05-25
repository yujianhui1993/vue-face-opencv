/*
 * 人脸检测以及裁剪功能
 * 人脸检测调用opencv的接口
 * 裁剪功能采用vue-cropper插件
 * @Author: yujianhui 
 * @Date: 2023-05-25 11:19:57 
 * @Last Modified by: yujianhui
 * @Last Modified time: 2023-05-25 13:18:10
 */

<template>
  <div>
    <van-popup v-model="show" :close-on-click-overlay="false">
      <div>
        <vue-cropper />
      </div>
    </van-popup>
  </div>
</template>

<script>
import { VueCropper }  from 'vue-cropper' 
export default {
  components: {
    VueCropper
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    imgData: {
      type: [Blob, String],
      default: ''
    }
  },
  data() {
    return {
      // show: true
    }
  },

  computed: {
    show () {
      return this.isShow
    }
  }
}
</script>
