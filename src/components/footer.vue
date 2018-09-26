<template>
  <div class="footer">
    <div class="footer-switch" @click="showService()">
      <i class="iconfont icon-info-circle"></i>
    </div>
    <div class="footer-service" :class="{block: on}">
      <div class="center">
        <h3>Grand Tour Service</h3>
        <div class="footer-teaser clearfix">
          <div class="col">
            <div class="teaser">
              <a href="https://www.tripadvisor.cn/Tourism-g188098-Zermatt_Canton_of_Valais_Swiss_Alps-Vacations.html" target="_blank">
                <div class="teaser-img">
                  <img src="../assets/images/bild_diegrandtour.jpg" alt="">
                </div>
                <img src="../assets/images/icon_zahlen_fakten.svg" alt="">
                <div class="title">Figures & Facts</div>
              </a>
            </div>
            <a href="https://www.tripadvisor.cn/Tourism-g188098-Zermatt_Canton_of_Valais_Swiss_Alps-Vacations.html" target="_blank"><span>Summary of the Grand Tour.</span></a>
          </div>
          <div class="col">
            <div class="teaser">
              <a href="https://www.tripadvisor.cn/Tourism-g188113-Zurich-Vacations.html" target="_blank">
                <div class="teaser-img">
                  <img src="../assets/images/bild_planung.jpg" alt="">
                </div>
                <img src="../assets/images/icon_karte_navigation.svg" alt="">
                <div class="title">Planning</div>
              </a>
            </div>
            <a href="https://www.tripadvisor.cn/Tourism-g188113-Zurich-Vacations.html" target="_blank"><span>Map and navigation.</span></a>
          </div>
          <div class="col">
            <div class="teaser">
              <a href="https://www.tripadvisor.cn/Tourism-g188057-Geneva-Vacations.html" target="_blank">
                <div class="teaser-img">
                  <img src="../assets/images/bild_unterwegs.jpg" alt="">
                </div>
                <img src="../assets/images/icon_angebote.svg" alt="">
                <div class="title">Offers</div>
              </a>
            </div>
            <a href="https://www.tripadvisor.cn/Tourism-g188057-Geneva-Vacations.html" target="_blank"><span>Book now.</span></a>
          </div>
          <div class="col">
            <div class="teaser">
              <a href="https://www.tripadvisor.cn/Tourism-g188064-Lucerne-Vacations.html" target="_blank">
                <div class="teaser-img">
                  <img src="../assets/images/bild_weitereinfos.jpg" alt="">
                </div>
                <img src="../assets/images/icon_info_material.svg" alt="">
                <div class="title">Brochures</div>
              </a>
            </div>
            <a href="https://www.tripadvisor.cn/Tourism-g188064-Lucerne-Vacations.html" target="_blank"><span>Info-material to order.</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/footer.scss')

export default {
  data () {
    return {
      on: false
    }
  },
  methods: {
    showService () {
      let oSwitch = document.querySelector('.footer-switch')
      let oI = oSwitch.querySelector('i')
      this.on = !this.on
      if (this.on) {
        oI.classList.remove('icon-info-circle')
        oI.classList.add('icon-close-circle')
      } else {
        oI.classList.remove('icon-close-circle')
        oI.classList.add('icon-info-circle')
      }
    }
  }
}
</script>
