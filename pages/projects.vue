<template>
  <v-row align="center" justify="center" class="project-page">
    <github />
    <v-col cols="12" class="projects">
      <v-card class="project" v-for="item in items" :key="item.title">
        <h4>{{ item.title }}</h4>
        <NuxtContent v-if="item.type == 'text'" :document="item" />
        <a :href="item.url">
          <font-awesome-icon class="external-link" :icon="['far', 'star']" />
        </a>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.project-page {
  margin: 0;
  padding: 0.5rem;
}
.projects {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.external-link {
  position: absolute;
  right: 3px;
  top: 3px;
}
.project {
  flex-grow: 1;
  box-sizing: border-box;
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
