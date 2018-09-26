<template>
  <div class="top-bar" :class="{topBarfadeIn: isIn}">
    <div class="logo fl">Grand Tour of Switzerland</div>
    <div class="content-logo">
      <a href="http://grandtour.myswitzerland.com/en/index.html"></a>
    </div>
    <div class="intro fr">
      <div class="setting">
        <ul>
          <li class="share-container clearfix">
            <a href="#" class="iconfont icon-share fl" @mouseenter="add()" :class="{show: this.show}"></a>
            <div class="share fl" :class="{iSshow: this.iSshow}" @mouseleave="leave()">
              <ul class="share-icon">
                <li><i class="iconfont icon-Youtube-fill"></i></li>
                <li><i class="iconfont icon-twitter"></i></li>
                <li><i class="iconfont icon-QQ"></i></li>
              </ul>
            </div>
          </li>
          <li>
            <i class="iconfont icon-sound" @click="sound()"></i>
            <audio id="music" controls="controls" loop="loop" hidden="true" autoplay="autoplay">
              <source src="../../static/bg.mp3" type="audio/mpeg">
            </audio>
          </li>
          <li><i class="iconfont icon-location"></i></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import commap from '../components/map'
require('../assets/scss/index.scss')
require('../assets/icon/iconfont.css')

export default {
  name: 'home',
  components: {
    commap
  },
  data () {
    return {
      msg: 'Welcome to Your Grand Tour of Switzerland',
      show: false,
      iSshow: false,
      isPlaying: true
    }
  },
  props: {
    isIn: Boolean
  },
  methods: {
    sound () {
      let audio = document.querySelector('#music')
      let iconMusic = document.querySelector('.icon-sound')
      if (!this.isPlaying) {
        audio.play()
        this.isPlaying = true
        iconMusic.style.color = '#FFF'
        return console.log('start')
      }
      if (this.isPlaying) {
        this.isPlaying = false
        audio.pause()
        audio.currentTime = 0
        iconMusic.style.color = 'red'
        return console.log('stop')
      }
    },
    add () {
      this.show = true
      this.iSshow = true
    },
    leave () {
      this.show = false
      this.iSshow = false
    }
  }
}
</script>
