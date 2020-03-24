<template>
  <div id="app">
    <i-container>
      <i-row center>
        <h3 class="_margin-bottom-3">
          Awesome Female Content Creators
        </h3>
      </i-row>
      <i-row around>
        <i-column sm="8" offset-sm="2">
          <Search :searchValue="searchValue" />
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
import { ModelSelect } from "vue-search-select"

// Color Palette: F5E4C3 - FAF4D0 - FAF4D0 - EA4C4C - C14545
import InfoCard from "./components/InfoCard.vue"
import Search from "./components/Search.vue"
import creators from "./creators"

export default {
  name: "App",
  components: {
    InfoCard,
    Search
  },
  data() {
    return {
      creators,
      searchValue: ""
    }
  }
}
</script>
