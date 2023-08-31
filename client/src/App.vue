<script>
import { useTourStore } from "@/stores/tour.js";
import { mapActions } from "pinia";
export default {
  methods: {
    ...mapActions(useTourStore, ["getAllTour"]),
  },

  created() {
    this.getAllTour();
  },
};
</script>

<template>
  <!-- <LoginPage></LoginPage> -->
  <RouterView></RouterView>
</template>
