<template>
    <div class="ui-layout">
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.ui-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
