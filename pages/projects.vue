<template>
  <v-row align="center" justify="center" class="cv">
    <github />
    <v-col cols="8" class="projects">
      <v-card class="project" v-for="item in items" :key="item.title">
        <h4>{{ item.title }}</h4>
        <NuxtContent v-if="item.type == 'text'" :document="item" />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.projects {
  display: flex;
  justify-content: space-between;
}
.project {
  width: 25%;
  flex-grow: 3;
  flex-shrink: 1;
  flex-flow: row wrap;
  padding: 0.5rem;
  margin: 0.5rem;
}
</style>

<script>
export default {
  async asyncData({ $content }) {
    const items = await $content('projects').sortBy('index').fetch()
    return {
      items,
    }
  },
}
</script>
