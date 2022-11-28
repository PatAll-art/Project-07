<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Log In</router-link> |
      <router-link to="/threads">Threads</router-link>
    </nav>

    <router-view />
    <footer id="footer">
      <img class="logoFooter" src="./assets/icon-left-font-monochrome-white.svg" />
    </footer>
  </div>

</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

#footer {
  width: 100%;
  position: absolute;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 50px;
  background-color: #2c3e50;
  border-top: solid 5px;

  .logoFooter {
    width: 15%;
  }

}
</style>
