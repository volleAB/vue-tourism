<template>
  <div class="index">
    <comTopBar :isIn="isIn"></comTopBar>
    <div id="logo-myswitzerland">
      <a href="https://www.myswitzerland.com/zh-cn/grand-tour-of-switzerland.html"></a>
    </div>
    <div class="memo-button">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="155px" height="57px" viewBox="0 0 155 57" enable-background="new 0 0 155 57" xml:space="preserve">
        <g>
          <path id="lache-open" fill="#2B2B2B" fill-opacity="0" d="M28.5,0C12.8,0,0,12.8,0,28.5S12.8,57,28.5,57H155V0H28.5z"></path>
        </g>
        <g>
          <path id="lasche" display="inline" fill-opacity="0.8" fill="#ffffff" d="M28.5,0C12.8,0,0,12.8,0,28.5S12.8,57,28.5,57H155V0H28.5z M28.5,51
      C16.1,51,6,40.9,6,28.5C6,16.1,16.1,6,28.5,6S51,16.1,51,28.5C51,40.9,40.9,51,28.5,51z"></path>
        </g>
        <g>
          <path id="heart" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" d="M28.5,22.2c-1.2-1.9-3.2-3.2-5.6-3.2
      c-3.4,0-5.9,3.1-5.9,5.7c0,4.9,3.6,7.2,11.5,14.3C36.4,31.8,40,29.5,40,24.7c0-2.5-2.6-5.7-5.9-5.7C31.7,19,29.7,20.3,28.5,22.2z"></path>
        </g>
        <g>
          <polyline id="memo-arrow" fill="none" stroke="#FFFFFF" stroke-width="0" stroke-miterlimit="10" points="23,40 34.5,28.5
      23,17"></polyline>
        </g>
      </svg>
      <span class="memo-text">Show wishlist</span>
    </div>
    <div class="container">
      <div class="bg-video-wrap">
        <video loop="" id="bg-video" poster="../assets/images/loader_bg_intro.jpg" preload="auto" style="height: 631px; width: 1121.78px; right: -51px; bottom: 0px;">
          <source src="http://grandtour.myswitzerland.com/en/video/150330_Intro_original_handbreak_h264_2000kb.mp4" type="video/mp4">
          <source src="http://grandtour.myswitzerland.com/en/video/150330_Intro_original_totalVidCon_libtheora_2500kb.ogg" type="video/ogg">
        </video>
      </div>
      <div class="landing-page">
        <div class="loading" :class="{fadeOut: loading}">
          <div id="circle"></div>
          <div class="loading-txt">
            <h2>Loading Grand Tour of Switzerland...</h2>
          </div>
          <img src="../assets/images/grandtour_logo.png" alt="">
        </div>
        <div class="content-body" :class="{fadeIn: loading}">
          <div id="groundtour-logo">
            <img src="../assets/images/grandtour_logo.png" alt="">
          </div>
          <h1>Grand Tour of Switzerland</h1>
          <div class="lead">
            1,600 kilometres – 22 lakes – 5 Alpine passes<br>
            12 UNESCO World Heritage Sites – numerous sights
          </div>
        </div>
      </div>
      <div id="intro"></div>
    </div>
    <comFooter></comFooter>
  </div>
</template>

<script>
import comTopBar from '../components/topBar'
// import comMap from '../components/map'
import comFooter from '../components/footer'
import { createLoading } from '../plugins/loading.js'

export default {
  components: {
    comTopBar,
    comFooter
  },
  data () {
    return {
      isIn: false,
      loading: false,
      clientHeight: '631px',
      clientWidth: '1300px'
    }
  },
  created () {

  },
  mounted () {
    const that = this
    let options = {
      animationTime: '2s',
      divId: 'circle',
      divSize: '100px',
      infinite: false,
      loadingBorder: '4px',
      loadingColor: '#FFF',
      loadingBackgroundColor: 'rgba(255,255,255,.4)',
      count: true,
      countColor: '#FFF'
    }
    createLoading(options)
    let oVideo = document.querySelector('#bg-video')
    oVideo.loadstart = () => {
      console.log('loadstart')
    }
    oVideo.oncanplay = () => {
      console.log('oncanplay')
      this.loading = true
      this.isIn = true
      setTimeout(() => {
        oVideo.play()
      }, 2100)
    }
    window.onresize = function () {
      that.clientHeight = `${document.documentElement.clientHeight}px`
      that.clientWidth = `${document.documentElement.clientWidth}px`
      console.log(that.clientHeight)
    }
  }
}
</script>
