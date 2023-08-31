<script>
import { useTourStore } from "./../../stores/tour.js";
import { mapState, mapActions } from "pinia";
export default {
  name: "SamanCard",
  props: ["tour"],
  methods: {
    ...mapActions(useTourStore, ["detailTour"]),
    detail() {
      return this.detailTour(this.tour.id);
    },
  },
};
</script>
<template>
  <div class="col-lg-4">
    <div class="card mb-3">
      <img :src="tour.imageCover" class="card-img-top" alt="Card Image" />
      <div class="card-body">
        <h5 class="card-title">{{ tour.name }}</h5>
        <p class="card-text">
          {{ tour.description }}
        </p>
        <a @click.prevent="detail" href="#" class="btn btn-primary btn-ellipse"
          >Detail</a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn-ellipse {
  border-radius: 50px;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
}

.card-text {
  color: #777;
}

.btn {
  background-color: #17a2b8;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 8px 20px;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #138496;
}
</style>
