<template>
  <div id="vote">
    {{ $route.params.id }}. 안건입니다.
    <form>
      <input type="radio" /> 찬성<br />
      <input type="radio" /> 반대
    </form>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style>
#vote {
  padding: 20px;
  background-color: #aadd00;
}
</style>