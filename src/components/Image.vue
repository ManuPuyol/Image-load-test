<script setup>
import VLazyImage from "v-lazy-image";
const props = defineProps(["customsrc"]);
const { customsrc } = props;
</script>

<template>
  <div class="col-xxl-2 col-lg-3 col-md-4 col-6 d-flex flex-column p-1">
    <VLazyImage :src="customsrc" class="img-fluid" />
  </div>
</template>
