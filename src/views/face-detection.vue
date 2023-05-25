<template>
  <div>
    <van-uploader>
      <van-button icon="plus" type="primary">拍照</van-button>
    </van-uploader>
    <Face></Face>
  </div>
</template>

<script>
import Face from '@/components/Face'
export default {
  name: "FaceDetection",
  components: { Face },
}
</script>