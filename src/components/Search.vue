<template>
  <div>
    <model-select
      :options="options"
      v-model="item"
      placeholder="Filter by Content Type"
    />
  </div>
</template>

<script>
import { ModelSelect } from "vue-search-select"

export default {
  props: {
    searchValue: String
  },
  data() {
    return {
      // these options will be replaced
      options: [
        { value: "1", text: "aa" + " - " + "1" },
        { value: "2", text: "ab" + " - " + "2" },
        { value: "3", text: "bc" + " - " + "3" },
        { value: "4", text: "cd" + " - " + "4" },
        { value: "5", text: "de" + " - " + "5" }
      ],
      item: {
        value: "",
        text: ""
      }
    }
  },
  methods: {
    reset() {
      this.item = {}
    },
    selectFromParentComponent1() {
      // select option from parent component
      this.item = this.options[0]
    },
    reset2() {
      this.item2 = ""
    },
    selectFromParentComponent2() {
      // select option from parent component
      this.item2 = this.options2[0].value
    }
  },
  components: {
    ModelSelect
  }
}
</script>
