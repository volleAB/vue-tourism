<template>
  <div class="index">
    <comTopBar></comTopBar>
    <comMap></comMap>
    <div class="load"></div>
    <div class="logon"></div>
  </div>
</template>

<script>
import comTopBar from '../components/topBar'
import comMap from '../components/map'

export default {
  components: {
    comTopBar,
    comMap
  },
  data () {
    return {}
  }
}
</script>
