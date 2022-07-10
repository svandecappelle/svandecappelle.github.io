<template>
  <v-container>
    <v-row justify="space-around">
      <v-card class="gh-card" width="450">
        <v-img
          height="200px"
          class="background"
          src="https://cdn.pixabay.com/photo/2022/07/05/09/57/stream-7302713_1280.jpg"
        >
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="text-h6 white--text pl-0">
              Activity
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="white" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="70">
              <img
                alt="user"
                src="https://avatars.githubusercontent.com/u/3873315?v=4"
              />
            </v-avatar>
            <p class="ml-3 white--text">Steeve Vandecappelle</p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Now</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in commits"
              :key="message.key"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <p class="text-center">...</p>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style scoped>
.gh-card {
  margin-top: 1.5rem;
}
</style>

<script>
import { groupBy, map, first, last } from 'lodash'

export default {
  data() {
    const commits = []
    return { commits }
  },
  fetchOnServer: false,
  async fetch() {
    let commits = []
    await fetch(
      'https://api.github.com/users/svandecappelle/events/public'
    ).then((res) => {
      res.json().then((events) => {
        this.$data.commits = map(
          groupBy(
            events.filter((e) => e.payload.commits),
            'repo.name'
          ),
          (e, k) => {
            const fromDate = new Date(first(e).created_at).toLocaleDateString(
              'fr'
            )
            const toDate = new Date(last(e).created_at).toLocaleDateString('fr')
            let time = `${fromDate} - ${toDate}`
            if (fromDate === toDate) {
              time = fromDate
            }
            return {
              key: k,
              color: 'indigo',
              from: e[0].actor.login,
              time,
              message: `${e.length} commits on ${k}`,
            }
          }
        )
      })
    })
    return {
      commits,
    }
  },
}
</script>
