<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clippedLeft" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-app-bar>
    <v-main class="main">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style>
body,
html {
  height: 100%;
}
code {
  padding: 0 !important;
}
</style>

<style scoped>
.main {
  background-image: url('/background.jpg');

  min-height: 100%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab)
library.add(far)

export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      clippedLeft: true,
      drawer: true,
      miniVariant: true,
      items: [
        {
          icon: 'mdi-account',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-apps',
          title: 'Apps',
          to: '/projects',
        },
      ],
      title: 'Steeve Vandecappelle',
    }
  },
}
</script>
