<script>
export default {
  props: ["product", "bookmark"],
  emits: ["detailProduct", "addBookmark"],
  methods: {
    detailProduct() {
      this.$emit("detailProduct", this.product.id);
    },
    addBookmark() {
      this.$emit("addBookmark", this.product.id);
    },
  },

  computed: {
    renderedItems() {
      if (!this.product) {
        return this.bookmark.Product;
      } else {
        return this.product;
      }
    },
    page() {
      if (this.$route.name === "home" && localStorage.accest_token) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    // console.log(this.$route);
  },
};
</script>

<template>
  <div class="card mr-3 mb-3 border border-dark" style="width: 18rem">
    <img :src="renderedItems.imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ renderedItems.name }}</h5>
      <p class="card-text">
        {{ renderedItems.description }}
      </p>
      <p>
        Stock:
        {{ renderedItems.stock }}
      </p>
      <p>
        Price:
        {{ renderedItems.price }}
      </p>
      <p>
        Author:
        {{ renderedItems.User.username }}
      </p>
      <a @click.prevent="detailProduct" href="#" class="btn btn-primary mr-1"
        >Detail</a
      >
      <a
        v-if="page"
        @click.prevent="addBookmark"
        href="#"
        class="btn btn-primary"
        >Bookmark</a
      >
    </div>
  </div>
</template>
