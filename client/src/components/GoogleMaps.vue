<script>
import { GoogleMap, Marker } from "vue3-google-map";
import { mapState, mapActions } from "pinia";
import { useTourStore } from "../stores/tour.js";
export default {
  components: { GoogleMap, Marker },
  methods: {
    ...mapActions(useTourStore, ["detailTour"]),
  },
  props: ["lat1", "lng1"],
  data() {
    return {
      lat: Number(this.lat1),
      lng: Number(this.lng1),
      apiKey: "",
    };
  },
  created() {
    this.detailTour(this.$route.params.id);

    this.$getLocation()
      .then((coordinates) => {
        // console.log(coordinates.lat, coordinates.lng);
        // this.lat = -8.48526478393511;
        // this.lng = 116.04730869055406;
        // this.lat = Number(this.lat1);
        // this.lng = Number(this.lng1);
        console.log(this.lat1);
        console.log(this.lng1);

        console.log(Number(this.lat1));
        console.log(Number(this.lng1));
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <h1>HOLAAAAAAA</h1>
  <div>
    <GoogleMap
      api-key="AIzaSyDrVKrHpyMw79ykNqvFK8Tn8qIPDpGEaAo"
      style="width: 100%; height: 500px"
      :center="{ lat: lat, lng: lng }"
      :zoom="15"
    >
      <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>
  </div>
</template>

<style></style>
