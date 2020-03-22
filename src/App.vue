<template>
  <div id="app">
    <i-container>
      <i-row>
        <i-column sm="8" offset-sm="2" class="_display-flex _justify-content-space-around _flex-wrap">
          <i-row>
            <i-input v-model="searchValue" placeholder="Type something.." clearable />
          </i-row>
          <i-row>
            <InfoCard
              v-for="(creator, i) in creators"
              :key="i"
              :creator="creator"
            />
          </i-row>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script>
import InfoCard from "./components/InfoCard.vue"
import creators from "./creators"

export default {
  name: "App",
  components: {
    InfoCard
  },
  data() {
    return {
      creators,
      searchValue: ''
    }
  }
}
</script>
