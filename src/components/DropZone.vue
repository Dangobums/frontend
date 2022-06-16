<template>
  <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive"  @dragover.prevent @drop.prevent="toggleActive" class="dropzone" :class="{'active-dropzone': active}">
    <span>Drag or Drop file</span>
    <span>Or</span>
    <label for="dropzoneFile" >Select file</label>
    <input type="file" id="dropzoneFile">
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "DropZone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    }
    return {
      active,
      toggleActive,
    }
  }
}



</script>

<style lang="scss">
@import "@/assets/variables.scss";
.dropzone {
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed $ghtk_color;
  background-color: #fff;
  transition: .3s ease all;
}
.active-dropzone {
  color: #ffffff;
  border-color: #fff;
  background-color: $ghtk_color;
  label {
    background-color: #fff;
    color: $ghtk_color;
   }
}
label {
  padding: 12px;
  color: #ffffff;
  background-color: $ghtk_color;
  transition: .3s ease all;
}
input {
  display: none;
}
</style>