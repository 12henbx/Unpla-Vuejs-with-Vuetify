<template>
  <div class='ui container'>
<!--    <video ref="video" class="camera-stream"></video>-->
    <video ref="camera" :width="450" :height="337.5" autoplay></video>
<!--    <img src="imageData.image" class="camera-stream">-->
    <div class='ui divider'></div>
    <div class="icon-group">
      <div  class="camera-icon" @click="captureImage">
        <i class="big camera icon" ></i>
        <p>Take Picture</p>
      </div>
      <div class="camera-icon" @click="cancelImage">
        <i class="big cancel icon"></i>
        <p>Cancel</p>
      </div>
      <div  class='camera-icon' @click="uploadImage">
        <i class="big thumbs up outline icon"></i>
        <p>Done</p>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'CameraDetection',
  data: function () {
    return {
      defaultImage: '../assets/logo.png',
      mediaStream: null,
      imageData: {
        image: '',
        image_orientation: 0
      }
    }
  },
  methods: {
    captureImage () {
      const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
      const imageCapture = new window.ImageCapture(mediaStreamTrack)
      const reader = new FileReader()
      return imageCapture.takePhoto().then(blob => {
        reader.readAsDataURL(blob)
        reader.onload = () => {
          this.imageData.image = reader.result
        }
      })
    },
    cancelImage () {
      this.imageData.image = null
      this.showCameraModal = true
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
          this.$refs.video.srcObject = mediaStream
          this.$refs.video.play()
          this.mediaStream = mediaStream
        })
    },
    uploadImage () {
      // axios({ method: 'POST', url: API_IMAGE_ENDPOINT, data: this.imageData })
      //   .then(response => {
      //     this.response = response.data
      //   })
    }
  },
  mounted () {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(mediaStream => {
        this.$refs.video.srcObject = mediaStream
        this.$refs.video.play()
        this.mediaStream = mediaStream
      })
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";

  .icon-group {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 12px auto;
  }

  .camera-icon {
    width: 15%;
    vertical-align: middle;
    margin: auto;
  }

  .camera-stream {
    margin: 120px 170px;
    width: 50%;
  }
</style>
