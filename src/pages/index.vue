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
        <!-- <video loop="" id="bg-video" poster="../assets/images/loader_bg_intro.jpg" preload="auto">
          <source src="http://grandtour.myswitzerland.com/en/video/150330_Intro_original_handbreak_h264_2000kb.mp4" type="video/mp4">
          <source src="http://grandtour.myswitzerland.com/en/video/150330_Intro_original_totalVidCon_libtheora_2500kb.ogg" type="video/ogg">
        </video> -->
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
      <div id="intro">
        <div class="content-header">
          <h1>Where would you like to start?</h1>
          <ul class="clearfix">
            <li><a href="#" class="active">Map</a></li>
            <li><a href="#">Index</a></li>
          </ul>
        </div>
        <div class="content-body">
          <div id="index-map">
            <div id="route-wrap">
              <div id="map-interactive"></div>
              <div id="map">
                <div id="illu-schaffausen" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_schaffausen.png" alt="illu schaffausen"></div>
                <div id="illu-stmoritz" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_stmoritz.png" alt="illu stmoritz"></div>
                <div id="illu-neuchatel" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_neuchatel.png" alt="illu neuchatel"></div>
                <div id="illu-lugano" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_lugano.png" alt="illu lugano"></div>
                <div id="illu-heidi" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_heidi.png" alt="illu heidi"></div>
                <div id="illu-zermatt" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_zermatt.png" alt="illu zermatt"></div>
                <div id="illu-grape" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_grape.png" alt="illu grape"></div>
                <div id="illu-luzern" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_luzern.png" alt="illu luzern"></div>
                <div id="illu-bern" class="ill" style="opacity: 0.6;"><img src="../assets/images/illu_bern.png" alt="illu bern"></div>
                <img src="../assets/images/swiss_map.png" alt="swiss map" id="swiss-map">
              </div>
              <div id="route"></div>
            </div>
          </div>
          <div id="index-list"></div>
        </div>
      </div>
    </div>
    <comFooter></comFooter>
  </div>
</template>

<script>
import comTopBar from '../components/topBar'
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
      defaultWidth: '1122',
      defaultHeight: '768',
      clientWidth: Number,
      clientHeight: Number
    }
  },
  created () {

  },
  mounted () {
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
    // oVideo.loadstart = () => {
    //   console.log('loadstart')
    // }
    setTimeout(() => {
      this.loading = true
      this.isIn = true
    }, 2000)
    // oVideo.oncanplay = () => {
    //   console.log('oncanplay')
    //   this.loading = true
    //   this.isIn = true
    //   setTimeout(() => {
    //     oVideo.play()
    //   }, 2100)
    // }
    // that.clientHeight = `${document.documentElement.clientHeight}px`
    // that.clientWidth = `${document.documentElement.clientWidth}px`
    this.clientWidth = document.documentElement.clientWidth
    this.clientHeight = document.documentElement.clientHeight
    if (this.clientWidth <= this.defaultWidth) {
      console.log('1')
      this.clientHeight = document.body.offsetHeight
      this.clientWidth = this.defaultWidth
      oVideo.style.width = this.clientWidth + 'px'
      oVideo.style.height = this.clientHeight + 'px'
    } else if (this.clientHeight < this.defaultHeight) {
      console.log('2')
      oVideo.style.width = this.clientWidth + 'px'
      oVideo.style.height = this.defaultHeight + 'px'
      oVideo.style.bottom = -parseInt(this.clientHeight + this.clientWidth / 3) / 8 + 'px'
      console.log(this.clientWidth + ',' + this.clientHeight)
    }

    window.onresize = function () {
      if (this.clientWidth <= this.defaultWidth) {
        this.clientHeight = document.body.offsetHeight
        this.clientWidth = this.defaultWidth
        oVideo.style.width = this.clientWidth + 'px'
        oVideo.style.height = this.clientHeight + 'px'
      } else if (this.clientHeight < this.defaultHeight) {
        oVideo.style.width = this.clientWidth + 'px'
        oVideo.style.height = this.defaultHeight + 'px'
        oVideo.style.bottom = -parseInt(this.clientHeight + this.clientWidth / 3) / 8 + 'px'
        console.log(this.clientWidth + ',' + this.clientHeight)
      }
    }
  },
  methods: {}
}
</script>
