<template>
  <div class="home">
    <MainComponent :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainComponent from '@/components/MainComponent'
import {ref} from "vue";

export default {
  name: 'HomeView',
  components: {
    MainComponent,
  },
  data() {
    const msg = ref("Name");
    return {
      msg,
    }
  },
}
</script>
