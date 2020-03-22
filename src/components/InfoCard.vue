<template>
  <i-card style="width: 300px">
    <img slot="image" src="" alt="Card Image" />
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
