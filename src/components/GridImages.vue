<script setup>
import Image from "./Image.vue";
import { loadImages,removeImage } from "../assets/tools";
import { ref } from "vue";
const images = ref([]);
let loading = ref(true);
let error = ref(false);

loadImages(
  (response) => {
    response.data.forEach((element) => {
      images.value.push(element);
    });
    loading.value = false;
    error.value = false;
  },
  (onerror) => {
    error.value = true;
  }
);
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
            @click="removeImage(images,i)"
          ></Image>
        </div>
      </div>
    </div>
  </div>
</template>