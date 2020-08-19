<template>
  <div>
    <b-image :src="imageUrl" style="width:180px" class="container pt-4"/>
    <decimal-converter/>
  </div>
</template>

<script>
import DecimalConverter from "./components/DecimalConverter";

export default {
  name: "App",
  components: {
    DecimalConverter
  },

  data() {
    return {
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/03/13/21/22/binary-1254481_960_720.png"
    };
  }
};
</script>
