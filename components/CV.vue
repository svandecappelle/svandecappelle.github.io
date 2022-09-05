<template>
  <v-row align="center" justify="center" class="cv">
    <v-col cols="12">
      <div class="text-center" v-for="item in items" :key="item.title">
        <!-- Text content -->
        <NuxtContent v-if="item.type == 'text'" :document="item" />

        <!-- Items -->
        <div v-if="item.type == 'items'" class="text-center">
          <h2>{{ item.title }}</h2>
          <div v-if="item.type == 'items'">
            <v-chip
              class="ma-2"
              color="indigo"
              text-color="white"
              v-for="i in item.items"
              :key="i.name"
            >
              <font-awesome-icon
                class="icon"
                v-if="i.icon"
                :icon="['fab', i.icon]"
              />
              <span> {{ i.name }}</span>
            </v-chip>
          </div>
        </div>

        <!-- Timeline content -->
        <v-timeline v-if="item.type == 'timeline'" direction="horizontal">
          <v-timeline-item v-for="ti in item.items" :key="ti.title">
            <template v-slot:opposite>
              {{ ti.date }}
            </template>
            <div>
              <div class="text-h5">{{ ti.title }}</div>
              <!--<p>-->
              <div class="text-left" v-html="markdown(ti.content)"></div>
              <!--</p>-->
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
.cv {
  margin: 0;
  padding: 0.5rem;
}
.icon {
  margin-right: 3px;
}
</style>

<script>
import MarkdownIt from 'markdown-it'
export default {
  props: ['items'],
  methods: {
    markdown(content) {
      const mp = new MarkdownIt('default', {
        linkify: true,
        typographer: true,
      })
      return mp.render(content)
    },
  },
  data() {
    return {}
  },
}
</script>
