<script>
import { useTourStore } from "./../stores/tour.js";
import { mapActions } from "pinia";
import { mapState, mapWritableState } from "pinia";
import Card from "./Card.vue";
export default {
  computed: {
    ...mapState(useTourStore, ["bookmarks"]),
    bookmarkContent() {
      if (this.bookmarks.length === 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  methods: {
    ...mapActions(useTourStore, ["getBookmark"]),
  },
  components: {
    Card,
  },
  created() {
    this.getBookmark();
  },
};
</script>

<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Branded Things</a>
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
          <a class="nav-link" href="#">Home</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Card -->
  <div class="content">
    <h1 v-if="bookmarkContent">My Bookmark</h1>
    <div class="row">
      <Card
        v-for="bookmark in bookmarks"
        :key="bookmark.id"
        :bookmark="bookmark"
      ></Card>
    </div>
    <div v-if="bookmarkContent === false">
      <h1>You do not have bookmark yet</h1>
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
