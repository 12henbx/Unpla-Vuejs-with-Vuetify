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
    <div class="col-md-12 row nav-control">
      <figure class="figure">
        <img :src="img" class="img-responsive" alt="imagePreview"/>
      </figure>
      <button type="button" class="btn btn-danger" @click="onStop">Stop Camera</button>
      <v-btn icon @click="onCapture($event)"><v-icon x-large>mdi-record-circle-outline</v-icon></v-btn>
      <button type="button" class="btn btn-success" @click="onStart">Start Camera</button>
    </div>
    <div class="modal-route">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { WebCam } from 'vue-web-cam'
import image from '../assets/rect.png'
import { sendFileToCloudVision } from '../vision/main.js'
import router from '../router'

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
      devices: []
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
      // const jsom = [{ description: 'plastic bottle' }, { description: 'plastic bottle' }]
      // const hyt = checkWasteCategory(undefined)
      this.img = this.$refs.webcam.capture()
      const output = sendFileToCloudVision(this.img)
      console.log(output, ' BG BG')
      this.checkOutputObject(output)
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
    async checkOutputObject (check) {
      const waitCheck = await check
      if (waitCheck.check === true) {
        console.log(waitCheck.check + ' ini waitCheck check')
        await router.push({
          name: 'Select Waste Category',
          params: { mainWaste: waitCheck.output },
          query: { subWaste: waitCheck.checkTable }
        })
      } else if (waitCheck.check === false) {
        console.log(waitCheck.check + ' ini waitCheck check 2')
        console.log(waitCheck.output + ' ini waitCheck check 3')
        await router.push({ name: 'RecyclerListToSellWaste', params: { mainWaste: waitCheck.output } })
      }
      // eslint-disable-next-line no-undef
      // uploadFiles(this.img)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../styles/basics/variables";

  .figure{
    margin-right: 10px;
  }

  .img-responsive{
    display: flex;
    width: 75px;
  }

  .nav-control{
    justify-content: center;
  }
</style>
