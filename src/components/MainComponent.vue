<template>
  <div class="home">
    <h1>{{ msg }} {{ id }}</h1>
    <DropZone @drop.prevent="drop"  @change="selectedFile"/>
    <span class="fileInfo"> File: {{ dropZoneFile.name }}</span>
    <a-button type="primary" @click="submitFile" class="submit" size="large">
      Submit
    </a-button>
  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";
import DropZone from "@/components/DropZone";
import {notification} from "ant-design-vue";

export default {
  name: 'HelloWorld',
  components: {
    DropZone,
  },
  props: {
    msg: String,
    id: String
  },
  setup() {
    let dropZoneFile = ref("");
    const drop = (e) => {
      dropZoneFile.value = e.dataTransfer.files[0];
    }
    const selectedFile = (e) => {
      dropZoneFile.value = e.target.files[0];
    }


    return {
      dropZoneFile,
      selectedFile,
      drop,
    }
  },
  methods: {
    openNotificationWithIcon(type, message) {
      notification[type]({
        message: message,
        description: 'Please try again',
        duration: 2,
      });
    },
    submitFile() {
      let formData = new FormData();
      if (!this.dropZoneFile) {
        this.openNotificationWithIcon('error', "Please submit a file");
        console.log();
      } else {
        formData.append('file', this.dropZoneFile);
        axios.post("/api/import", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(function () {
          // console.log(res);
          // console.log("Success");
          notification["success"]({
            message: "Success",
            description: 'Please check the data page',
            duration: 2,
          });
        }).catch(function () {
          this.openNotificationWithIcon('error', 'Fail');
          console.log('FAILURE!!');
        });
      }

    },
  },

}

</script>

<style scoped lang="scss" >
@import "@/assets/variables.scss";
@import "@/assets/_shared.scss";
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  h1 {
    margin-top: 32px;
  }
  .fileInfo {
    margin-top: 32px;
  }
}
.submit {
  background-color: #069255;
}

</style>
