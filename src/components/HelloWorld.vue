

<template>
  <div class="hello">
    <h1>{{ msg }} {{ id }}</h1>
    <form action="http://localhost:7070/api/import" method="post" encType="multipart/form-data">
      <input type="file" name="file" />
      <input type="submit" value="Import" />
    </form>
    <button @click="list()">Hello</button>
    <pre>{{ students }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    id: String
  },
  data() {
    return {
      students: []
    }

  },
  methods: {
    list() {
      axios.get("http://localhost:7070/api/studentslist")
          .then(res => {
            this.students = res.data;
            console.log(res.data);
          })
    }

  },

  // mounted() {
  //   fetch('/api/studentslist').then((res) => {console.log(res.text())}).then((data) => console.log(data));
  // }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
