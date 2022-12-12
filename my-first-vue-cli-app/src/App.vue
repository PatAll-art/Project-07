<template>
  <div id="app">
    <nav>
      <router-link to="/">Home | </router-link>
      <router-link to="/signup" v-if="(this.$store.state.userId === '')">Sign Up | </router-link>
      <router-link to="/login" v-if="(this.$store.state.userId === '')">Log In </router-link>
      <router-link to="/threads" v-if="(this.$store.state.userId !== '')">Threads | </router-link>
      <router-link to="/userprofile" v-if="(this.$store.state.userId !== '')">Profile | </router-link>
      <button @click="logOut" class="logoutButton" v-if="(this.$store.state.userId !== '')">Logout</button>

    </nav>

    <router-view />
    <footer id="footer">
      <img class="logoFooter" src="./assets/icon-left-font-monochrome-white.svg" />
    </footer>
  </div>

</template>

<script>
import router from './router/index'
export default {
  data() {
    return {

    };
  },
  methods: {
    logOut() {
      this.$store.dispatch('setUserId', '');
      this.$store.dispatch('setToken', '');
      this.$store.dispatch('setEmail', 'test');
      this.$store.dispatch('resetSeen');
      router.push("/home");
    }
  }
}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #152147;
      ;
    }
  }
}

.logoutButton {
  color: white;
  background-color: #152147;
  padding: 8px;
  border-radius: 30px;
  border: solid #152147;
}



#footer {
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: #2c3e50;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;

  img {
    height: 20px;
  }
}

body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
}
</style>
