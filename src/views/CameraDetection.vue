<template>
  <div class="container-page">
    <div class="border">
      <vue-web-cam ref="webcam" :device-id="deviceId" width="100%" height="370px"
        @started="onStarted"
        @stopped="onStopped"
        @error="onError"
        @cameras="onCameras"
        @camera-change="onCameraChange"
      />
    </div>
    <div class="col-md-12 row">
      <figure class="figure">
        <img :src="img" class="img-responsive" alt="imagePreview"/>
      </figure>
      <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
      <v-btn icon @click="onCapture($event)"><v-icon class="icon-record">mdi-record-circle-outline</v-icon></v-btn>
      <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>
    </div>
    <div v-if="showModal" class="modal-route">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { WebCam } from 'vue-web-cam'
import image from '../assets/rect.png'
import { VisionFunction } from '../vision/main.js'

export default {
  name: 'CameraDetection',
  components: {
    'vue-web-cam': WebCam
  },
  data () {
    return {
      img: image,
      camera: null,
      deviceId: null,
      devices: [],
      showModal: false
    }
  },
  computed: {
    device: function () {
      return this.devices.find(n => n.deviceId === this.deviceId)
    }
  },
  watch: {
    camera: function (id) {
      this.deviceId = id
    },
    devices: function () {
      // Once we have a list select the first one
      // eslint-disable-next-line no-unused-vars
      const [first, ...tail] = this.devices
      if (first) {
        this.camera = first.deviceId
        this.deviceId = first.deviceId
      }
    }
  },
  methods: {
    onCapture (event) {
      this.img = this.$refs.webcam.capture()
      VisionFunction.sendFileToCloudVision(this.img)
    },
    onStarted (stream) {
      console.log('On Started Event', stream)
    },
    onStopped (stream) {
      console.log('On Stopped Event', stream)
    },
    onStop () {
      this.$refs.webcam.stop()
    },
    onStart () {
      this.$refs.webcam.start()
    },
    onError (error) {
      console.log('On Error Event', error)
    },
    onCameras (cameras) {
      this.devices = cameras
      console.log('On Cameras Event', cameras)
    },
    onCameraChange (deviceId) {
      this.deviceId = deviceId
      this.camera = deviceId
      console.log('On Camera Change Event', deviceId)
    },
    detectImage () {
      // eslint-disable-next-line no-undef
      uploadFiles(this.img)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";

  .icon-record{
    font-size: 88px;
  }

  .img-responsive{
    display: flex;
    width: 75px;
  }
</style>
