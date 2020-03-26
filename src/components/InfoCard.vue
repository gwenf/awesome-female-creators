<template>
  <i-card style="width: 300px" class="_margin-1">
    <i-container>
      <i-row>
        <h4 class="title _margin-0">{{ creator.name }}</h4>
      </i-row>
      <i-row>
        <a
          class="link"
          v-if="creator.youtube"
          :href="creator.youtube"
          target="_blank"
        >
          YouTube
        </a>
        <a
          class="link"
          v-if="creator.website"
          :href="creator.website"
          target="_blank"
        >
          Website
        </a>
        <a
          class="link"
          v-if="creator.twitter"
          :href="creator.twitter"
          target="_blank"
        >
          Twitter
        </a>
      </i-row>

      <i-row class="content-list _margin-top-1" start>
        <i-badge
          variant="primary"
          v-for="(content, i) in creator.content"
          :key="i"
          style="margin: 1px"
          small
        >
          {{ content }}
        </i-badge>
      </i-row>
    </i-container>
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
