<script>
import { useTourStore } from "./../stores/tour.js";
import { mapActions } from "pinia";
import { mapState, mapWritableState } from "pinia";
import BookingCard from "./../components/The samans/BookingCard.vue";
export default {
  computed: {
    ...mapState(useTourStore, ["bookings"]),
    bookingsContent() {
      if (this.bookings.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(useTourStore, ["getMyBooking", "backToHome"]),
  },
  components: {
    BookingCard,
  },
  created() {
    this.getMyBooking();
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
      </ul>
    </div>
  </nav>

  <!-- Card -->
  <div class="content">
    <h1 style="color: white" v-if="bookingsContent">My Bookings</h1>
    <div class="row">
      <BookingCard
        v-for="booking in bookings"
        :key="booking.id"
        :booking="booking"
      >
      </BookingCard>
    </div>
    <div v-if="bookingsContent === false">
      <h1 style="color: white">You do not have Booking yet</h1>
    </div>
  </div>
</template>

<style scoped>
.content {
  /* margin-left: 250px; */
  width: 1230px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>
