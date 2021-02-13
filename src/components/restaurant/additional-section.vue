<template>
    <section>
        <restoraunt-content
        v-for="service in serviceList"
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :images="service.images"
        ></restoraunt-content>
    </section>
</template>

<script>
import restorauntContent from './restoraunt-content.vue'

export default {
  components: {
      restorauntContent
  },
    computed: {
    serviceList() {
        return this.$store.getters.serviceList
      },
    language() {
      return this.$store.getters.getGlobalLanguage;
    }
    },
    mounted() {
    this.$store.dispatch('service');
  },
  watch: {
    language() {
      this.$store.dispatch('service');
    }
  }
}
</script>

<style scoped>


</style>