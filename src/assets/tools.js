//get images & push into an array
import axios from "axios";
export async function loadImages(onSuccess, onError) {

    await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/photos",
  })
    .then((response) => {
    
      onSuccess(response)
      
    })
    .catch((error) => {
      //onError(error)
    });
    
};
//remove item of index position
export const removeImage = (images, i) => {
  images.splice(i, 1);
};