<template>
  <div class="container pt-4">
    <b-message type="is-warning" class="has-text-centered">
      Converted value is:
      <strong>{{ result }}</strong>
    </b-message>
  </div>
</template>

<script>
export default {
  name: "ComputeResult",
  props: {
    result: {
      type: Number,
      required: true
    }
  }
};
</script>