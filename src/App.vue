<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/data">About</router-link>
  </nav>
  <router-view/>
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
  color: #42b983;
  background-color: red;
}
</style>
