<template>
  <i-card style="width: 300px" class="_margin-1">
    <h4 class="title">{{ creator.name }}</h4>
    <a
      class="link"
      v-if="creator.youtube"
      :href="creator.youtube"
    >
      YouTube
    </a>
    <a
      class="link"
      v-if="creator.twitter"
      :href="creator.twitter"
    >
      Twitter
    </a>
  </i-card>
</template>

<script>
export default {
  name: "InfoCard",
  props: {
    creator: Object
  }
}
</script>
