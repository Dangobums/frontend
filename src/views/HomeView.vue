<template>
  <div class="home">
    <MainComponent msg="Kéo thả hoặc chọn "/>

  </div>
</template>

<script>
// @ is an alias to /src
import MainComponent from '@/components/MainComponent'

export default {
  name: 'HomeView',
  components: {
    MainComponent,
  },
}
</script>
