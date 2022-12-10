<script setup>
import VLazyImage from "v-lazy-image";
const props = defineProps(["customsrc"]);
const { customsrc } = props;
</script>

<template>
  <div class="col-3 d-flex flex-column">
    <VLazyImage :src="customsrc" class="img-fluid" />
  </div>
</template>

<style scoped>
.v-lazy-image {
  opacity: 0;
  transition: opacity 2s;
}
.v-lazy-image-loaded {
  opacity: 1;
}
</style>