<script setup>
import axios from "axios";
import Image from "./Image.vue";
import { ref } from "vue";
const images = ref([]);
let loading = ref(true);
let error = ref(false);

//get images & push into an array
const loadImages = () => {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos",
  })
    .then(function (response) {
      response.data.forEach((element) => {
        images.value.push(element);
      });
      loading.value = false;
      error.value = false;
    })
    .catch(() => {
      error.value = true;
      loading.value = false;
    });
};

//remove item of index position
const removeImage = (i) => {
  images.value.splice(i, 1);
};
//calling function
loadImages();
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
          <div class="alert alert-warning" role="alert" v-if="error">
            Images not found...
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