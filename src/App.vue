<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/data">Data</router-link>
  </nav>
  <h1>Tra cứu tuyển sinh</h1>
  <img src="https://giaohangtietkiem.vn/wp-content/uploads/2015/10/logo.png" alt="logo">
  <router-view/>
  <FooterComponent></FooterComponent>
</template>

<style>
#root {
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
  background-color: #069255;
}
</style>
<script>
import FooterComponent from "@/components/Footer";
export default {
  components: {FooterComponent,}
}
</script>