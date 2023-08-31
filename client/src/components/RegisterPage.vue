<script>
import { useTourStore } from "./../stores/tour.js";
import { mapActions } from "pinia";
import { mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  computed: {
    ...mapWritableState(useTourStore, [""]),
  },
  methods: {
    ...mapActions(useTourStore, ["register", "openFormLogin"]),
    submitRegister() {
      const value = {
        username: this.username,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      return this.register(value);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h1>Register</h1>
      <form class="login-form" @submit.prevent="submitRegister">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            id="username"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div class="form-group">
          <label for="">Email Address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="emailAdress"
            placeholder="Enter email address"
          />
        </div>
        <div class="form-group">
          <label for="">Phone Number</label>
          <input
            v-model="phoneNumber"
            type="text"
            class="form-control"
            id="phoneNumber"
            placeholder="Enter phone number"
          />
        </div>
        <div class="form-group">
          <label for="">Address</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="address"
            placeholder="Enter address"
          />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">
          already have an account?
          <a @click.prevent="openFormLogin" class="text-warning">Login</a>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.login-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form label {
  font-weight: bold;
}

.login-form .btn-primary {
  width: 100%;
}
</style>
