<script>
import { useTourStore } from "../stores/tour.js";
import { mapState, mapActions } from "pinia";
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  data() {
    return {};
  },
  components: {
    GoogleMap,
    Marker,
  },
  methods: {
    ...mapActions(useTourStore, [
      "detailTour",
      "backToHome",
      "bookTour",
      "locate",
      "openFormLogin",
    ]),
    payment() {
      return this.bookTour(this.tourDetail.id);
    },
  },
  computed: {
    ...mapState(useTourStore, ["tourDetail", "qrCode"]),
    lat1() {
      return this.tourDetail.lat;
    },
    lng1() {
      return this.tourDetail.lng;
    },

    formattedDate() {
      console.log(this.tourDetail.startDates);
      let year = this.tourDetail.startDates.toLocaleString("default", {
        year: "numeric",
      });
      let month = this.tourDetail.startDates.toLocaleString("default", {
        month: "2-digit",
      });
      let day = this.tourDetail.startDates.toLocaleString("default", {
        day: "2-digit",
      });

      // Generate yyyy-mm-dd date string
      let formattedDate = year + "-" + month + "-" + day;
      return formattedDate;
    },
    page() {
      if (localStorage.accest_token) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    // console.log(this.$route);
    // console.log(this.productDetail);
    this.detailTour(this.$route.params.id);
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Samans Tour</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a @click.prevent="backToHome" class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a
            v-if="page"
            @click.prevent="openFormLogin"
            class="nav-link"
            href="#"
            >Sign In</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <!-- Content -->
  <div class="content">
    <div class="card mb-3">
      <img :src="tourDetail.imageCover" class="card-img-top" alt="..." />

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 left-side">
            <h1>Quick Facts</h1>
            <p>Next Date: {{ tourDetail.startDates }}</p>
            <p>Difficulty: {{ tourDetail.difficulty }}</p>
            <p>Participants: 10</p>
            <p>Rating: {{ tourDetail.ratingsAverage }}</p>
            <p>Tour Guide: {{ tourDetail.guides }}</p>
            <div>
              <GoogleMap
                api-key="AIzaSyDrVKrHpyMw79ykNqvFK8Tn8qIPDpGEaAo"
                style="width: 100%; height: 500px"
                :center="{ lat: Number(lat1), lng: Number(lng1) }"
                :zoom="15"
              >
                <Marker
                  :options="{
                    position: { lat: Number(lat1), lng: Number(lng1) },
                  }"
                />
              </GoogleMap>
            </div>
          </div>
          <div class="col-lg-6 right-side">
            <h1>About {{ tourDetail.name }}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              varius lorem non varius lacinia. Nam sit amet justo id mauris
              aliquet lacinia nec et leo. Morbi malesuada orci odio, eu
              malesuada orci faucibus et. Proin vehicula velit enim, at auctor
              tortor ultrices vel. Ut viverra risus et leo dignissim fringilla.
              Aenean non arcu id orci viverra consequat id vel tortor. Curabitur
              id metus eu sapien congue elementum sed id felis. Pellentesque
              sagittis dui at augue fringilla lobortis. Nullam vitae nisl nec
              sem eleifend eleifend. Fusce fringilla odio ac nunc tincidunt,
              vitae sollicitudin purus tincidunt.
            </p>
            <p style="width: 225px; height: 225px" v-html="qrCode"></p>
          </div>
        </div>
      </div>

      <div>
        <button @click="payment" class="btn btn-primary mb-2 ml-2 mt-3">
          Book Now
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left-side {
  background-color: #f8f9fa;
  padding: 50px;
  color: #000;
}

.right-side {
  background-color: #343a40;
  padding: 50px;
  color: #fff;
}

@media (max-width: 767px) {
  .left-side,
  .right-side {
    padding: 30px;
  }
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 20px;
  background-color: #f8f9fa;
}

.content {
  padding: 20px;
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
