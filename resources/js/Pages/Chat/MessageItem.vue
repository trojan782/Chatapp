<template>
<div class="">
    {{ message.user.name }} : {{ message.message }}
</div>
</template>

<script>
export default {
  name: "Test",
  props: ["message"],
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
