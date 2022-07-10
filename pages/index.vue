<template>
  <div class="justify-center align-center">
    <CV :items="items" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const items = await $content('cv').sortBy('index').fetch()
    return {
      items,
    }
  },
}
</script>
