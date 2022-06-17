<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/data">About</router-link>
  </nav>
  <router-view/>
  <FooterComponent></FooterComponent>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #263a4b;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s ease all;
}

nav a.router-link-exact-active {
  color: black;
  background-color: red;
}
</style>
<script>
import FooterComponent from "@/components/Footer";
export default {
  components: {FooterComponent,}
}
</script>