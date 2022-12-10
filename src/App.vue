
<script setup>
import Image from "./components/Image.vue";
import axios from "axios";
import { ref } from "vue";
const images = ref([]);

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/photos",
}).then(function (response) {
  response.data.forEach((element) => {
    images.value.push(element);
  });
 
});

const removeImage=(i)=>{
  
    images.value.splice(i,1);
     
}

</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="row">
          
           <Image v-for="(item,i) in images" :key="item" :customsrc="item.url" @click="removeImage(i)"></Image>

        </div>
      </div>
    </div>
  </div>
</template>
  
