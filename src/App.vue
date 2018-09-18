<template>
  <div class="app">
    <transition name="pop-in">
      <router-view></router-view>
    </transition>
    <div v-if="ajaxLoading" class="ajaxLoading">
      <img class="loadingImg" src="./assets/img/loading-zqq.png" alt="">
    </div>
  </div>
</template>

<script>
import Forward from "./mixins/forward.js";
export default {
  mixins: [Forward],
  data() {
    return {
      token: ""
    };
  },
  created() {
    // this.forward();
  },
  methods: {
    afterLeave() {
      this.$store.commit("transitionName", "pop-in");
    }
  },
  computed: {
    ajaxLoading() {
      return this.$store.state.ajaxLoading;
    },
    transitionName() {
      return this.$store.state.transitionName;
    }
  },
  watch: {
    $route() {
      // console.log(this.$route, this.$router);
    }
  }
};
</script>

<style lang="less">
.app {
  height: 100%;
  height: 100%;
  overflow: hidden;
}
.pop-out-enter-active,
.pop-out-leave-active,
.pop-in-enter-active,
.pop-in-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000;
  transition: all 0.3s;
  transition-property: transform, opacity;
}
.pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.ajaxLoading {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 200;
  text-align: center;
  .loadingImg {
    width: 64px;
    margin-top: 60%;
    animation: rotateCircle 4.2s infinite linear;
  }
}
@keyframes rotateCircle {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
