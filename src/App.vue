
<script setup>
import Image from "./components/Image.vue";
import axios from "axios";
import { ref } from "vue";
const images = ref([]);
let loading = ref(true);
axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/photos",
}).then(function (response) {
  response.data.forEach((element) => {
    images.value.push(element);
    loading.value = false;
  });
});

const removeImage = (i) => {
  images.value.splice(i, 1);
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="row text-center">
          <h1>Click & remove &#128540;</h1>
          <div
            class="d-flex justify-content-center vh-100 align-items-center"
            v-if="loading"
          >
            <div class="spinner-grow text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <Image
            v-for="(item, i) in images"
            :key="item"
            :customsrc="item.url"
            @click="removeImage(i)"
          ></Image>
        </div>
      </div>
    </div>
  </div>
</template>
  
