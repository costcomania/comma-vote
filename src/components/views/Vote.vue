<template>
  <div id="vote">
    {{ $route.params.id }}. 안건입니다.
    <form>
      <input type="radio" id="true" value="true" v-model="checked" />
      <label for="true">찬성</label><br />
      <input type="radio" id="false" value="false" v-model="checked" />
      <label for="false">반대</label><br />
      <button @click="submit">다음</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const checked = ref();
    const submit = () => {
      console.log("submit");
      if (checked.value) {
        let id = parseInt(route.params.id) + 1;
        if (id < 5) {
          router.push(id.toString());
        } else {
          router.push({
            name: "end",
            query: {},
          });
        }
      } else {
        alert("체크해주세요!");
      }
    };
    return {
      router,
      route,
      checked,
      submit,
    };
  },
};
</script>
<style>
#vote {
  padding: 20px;
  background-color: #aadd00;
  border-radius: 20px;
}
</style>