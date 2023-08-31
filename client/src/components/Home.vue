<script>
import { useTourStore } from "../stores/tour.js";
import { mapActions } from "pinia";
import { mapState, mapWritableState } from "pinia";

import Card from "./Card.vue";
import SamanCard from "./The samans/Card.vue";
import GoogleMaps from "./GoogleMaps.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  components: {
    Card,
    SamanCard,
    GoogleMaps,
  },

  computed: {
    ...mapState(useTourStore, [
      "listTour",
      "totalTour",
      "pageSize",
      "currentPage",
    ]),
    ...mapWritableState(useTourStore, ["filter"]),
    totalPages() {
      return Math.ceil(this.totalTour / this.pageSize);
    },
    paginatedItems() {
      // const startIndex = (this.currentPage - 1) * this.pageSize;
      // const endIndex = startIndex + this.pageSize;
      // return this.listProduct.slice(startIndex, endIndex);
      return this.listTour;
    },

    page() {
      if (localStorage.accest_token) {
        return true;
      } else {
        return false;
      }
    },
    foundedCard() {
      if (this.paginatedItems.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(useTourStore, [
      "getAllTour",
      "next",
      "logOut",
      "previous",
      "openFormLogin",
      "getMyBooking",
    ]),
    applyFilter() {
      this.currentPage = 1;
      this.getAllTour();
    },
    previousPage() {
      if (this.currentPage > 1) {
        // this.currentPage--;
        this.previous();
        this.getAllTour();
      }
    },
    nextPage() {
      console.log("next page tertekan");
      if (this.currentPage < this.totalPages) {
        console.log("next page tertekan di dalam if");
        // this.currentPage++;
        this.next();
        this.getAllTour();
      }
    },
  },
  created() {
    this.getAllTour();
  },
};
</script>
<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Samans Tour</a>
      <form class="d-flex ms-auto" @submit.prevent="applyFilter">
        <input
          v-model="filter"
          class="form-control me-2"
          type="search"
          placeholder="Search Tours"
          aria-label="Search"
        />
        <button class="btn btn-outline-success ml-1" type="submit">
          Search
        </button>
      </form>
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
              v-if="page === false"
              @click.prevent="openFormLogin"
              class="nav-link"
              href="#"
              >Sign In</a
            >
          </li>
          <li class="nav-item">
            <a
              v-if="page"
              @click.prevent="getMyBooking"
              class="nav-link"
              href="#"
              >My Bookings</a
            >
          </li>
          <li class="nav-item">
            <a v-if="page" @click.prevent="logOut" class="nav-link" href="#"
              >Log out</a
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- Sidebar -->
    <!-- <div class="sidebar">
      <div style="margin-top: 70px">
        <form @submit.prevent="applyFilter">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Search by name</label
            >
            <input
              v-model="filter"
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Type here..."
            />
          </div>
          <button type="submit" class="btn btn-primary">Search</button>
        </form>
      </div>
    </div> -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item active"
          style="
            background-image: url('https://images.unsplash.com/photo-1612268585071-2b2332c03688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
          "
        >
          <div class="carousel-caption">
            <h1>Slide 1</h1>
            <p>Senggigi Beach</p>
          </div>
        </div>
        <div
          class="carousel-item"
          style="
            background-image: url('https://images.unsplash.com/photo-1621001481322-facc9cd1dae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80');
          "
        >
          <div class="carousel-caption">
            <h1>Slide 2</h1>
            <p>Danau Segara Anak</p>
          </div>
        </div>
        <div
          class="carousel-item"
          style="
            background-image: url('https://images.unsplash.com/photo-1654009083264-66f556c803cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80');
          "
        >
          <div class="carousel-caption">
            <h1>Slide 3</h1>
            <p>Bukit Pergasingan</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#myCarousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#myCarousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="content">
      <div class="row mr-3">
        <SamanCard
          v-for="tour in paginatedItems"
          :key="tour.id"
          :tour="tour"
        ></SamanCard>
      </div>
    </div>
    <div class="container mt-3 mb-3">
      <div class="btnCenter">
        <div v-if="foundedCard">
          <button
            class="btn btn-secondary mr-1"
            @click="previousPage"
            :disabled="currentPage === 1"
          >
            Previous
          </button>
          <span style="color: white">{{ currentPage }} / {{ totalPages }}</span>
          <button
            class="btn btn-secondary"
            @click="nextPage"
            :disabled="currentPage === totalPages"
          >
            Next
          </button>
        </div>
        <div v-if="foundedCard === false">
          <h1>NOT FOUND</h1>
        </div>
      </div>
    </div>

    <footer class="footer footer-dark bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>Tentang Kami</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum rhoncus ante sed est consequat, non suscipit sem
              malesuada.
            </p>
          </div>
          <div class="col-md-4">
            <h3>Hubungi Kami</h3>
            <p>Jl. Iskandar Muda, Selong</p>
            <p>Email: maliksamansya206@gmail.com</p>
            <p>Telepon: 123-456-7890</p>
          </div>
          <div class="col-md-4">
            <h3>Ikuti Kami</h3>
            <a href="#"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="#"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="#"><i class="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.btnCenter {
  justify-content: center;
}
.carousel-item {
  height: 800px;
  background-size: cover;
  background-position: center;
}

.carousel-item h1 {
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.carousel-item p {
  color: #fff;
  font-size: 18px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 50px;
  height: 50px;
  background-color: #000;
  background-size: cover;
  border-radius: 50%;
  opacity: 0.8;
}

.carousel-control-prev-icon:before,
.carousel-control-next-icon:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.carousel-control-prev {
  margin-left: -25px;
}

.carousel-control-next {
  margin-right: -25px;
}
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  text-align: center;
  color: #f5f2f2;
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
  /* margin-left: 250px; */
  width: 1270px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>
