<template>
  <ui-layout>
    <ui-head title="首页" :noBack="true"></ui-head>
    <ui-container>
      <div @click="toAbout({name: 'test1'})">{{msg1}}</div>
      <div @click="toAbout({name: 'test2'})">{{msg2}}</div>
    </ui-container>
  </ui-layout>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      msg1: "click me to test1",
      msg2: "click me to test2"
    };
  },
  methods: {
    toAbout(view) {
      this.$router.push(view);
    }
  }
};
</script>

<style lang="less">
</style>
