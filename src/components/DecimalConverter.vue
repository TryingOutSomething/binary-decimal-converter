<template>
  <div>
    <input v-model="userInput">
    <button @click="convertBinaryToDecimal">Convert to decimal</button>
    <p v-if="showResult">{{ result }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      userInput: "",
      result: 0,
      showResult: false
    };
  },

  methods: {
    convertBinaryToDecimal() {
      this.result = 0;
      const radix = 10;
      if (this.userInput.length > 8) {
        window.alert("Length cannot be more than 8");
        return;
      }
      let base = 1;
      for (let i = this.userInput.length - 1; i >= 0; i--) {
        this.result += parseInt(this.userInput[i], radix) * base;
        base *= 2;
      }
      this.showResult = true;
    }
  }
};
</script>