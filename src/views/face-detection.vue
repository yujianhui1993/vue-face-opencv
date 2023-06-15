<template>
  <div>
    <van-uploader :after-read="afterRead">
      <van-button icon="plus" type="primary">拍照</van-button>
    </van-uploader>
    <Face v-if="isShow" :isShow="isShow" :option="option" @getbase64="save" @canceltailor="canceltailor"></Face>
    <img v-if="corImg" style="width:80%" :src="corImg" alt="">
  </div>
</template>
<script>

import Face from '@/components/Face'
export default {
  name: "FaceDetection",
  components: { Face },
  data() {
    return {
      option: {
        img: '',
        autoCropWidth: document.body.clientWidth * 0.8, //默认生成截图框宽度
        autoCropHeight: document.body.clientWidth * 0.8,
      },
      isShow: false,
      corImg: '',
    }
  },

  methods: {
    async afterRead(file) {
      const info = await this.fileToBase64(file.file)
      this.option.img = info
      this.isShow = true
    },

    fileToBase64(file) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = function () {
          resolve(this.result)
        }
      })
    },

    save(data) {
      this.isShow = false
      this.corImg = data
    },

    // 取消操作
    canceltailor() {
      this.isShow = false
    }
  }
}
</script>