<script>
import { useTourStore } from "./../stores/tour.js";
import { mapActions } from "pinia";
import { mapState, mapWritableState } from "pinia";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(useTourStore, ["callback"]),
  },
  methods: {
    ...mapActions(useTourStore, ["login", "openFormRegister"]),
    submitLogin() {
      const value = {
        email: this.email,
        password: this.password,
      };
      return this.login(value);
    },
  },

  created() {
    // this.callback();
  },
};
</script>

<template>
  <div class="container">
    <div class="login-container">
      <h1>Login</h1>
      <form class="login-form" @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="username">Email</label>
          <input
            v-model="email"
            type="email"
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
        <button type="submit" class="btn btn-primary">Login</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">
          Don't have an account?
          <a @click.prevent="openFormRegister" class="text-warning">Register</a>
        </p>
      </form>
      <p id="sign">Or Sign in with</p>
      <GoogleLogin :callback="callback" />
    </div>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;
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
