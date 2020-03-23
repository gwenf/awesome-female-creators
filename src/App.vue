<template>
  <div id="app">
    <i-container>
      <i-row>
        <h3>Awesome Female Content Creators</h3>
      </i-row>
      <i-row around>
        <i-column sm="8" offset-sm="2">
          <i-row class="_margin-x-auto">
            <i-input
              v-model="searchValue"
              placeholder="Search"
              clearable
            />
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
// Color Palette: F5E4C3 - FAF4D0 - FAF4D0 - EA4C4C - C14545
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
