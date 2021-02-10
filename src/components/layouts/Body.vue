<template>
  <div class="body">
    <router-view></router-view>
    <p id="login-button" @click="next">다음</p>
  </div>
</template>
<script>
import Login from "../views/Login.vue";
var id = 1;

export default {
  name: "Body",
  component: {
    Login,
  },
  methods: {
    next() {
      console.log("next");
      this.$router.push("/vote/" + id);
      id += 1;
    },
  },
  setup() {
    return {};
  },
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
}
#login-button {
  cursor: pointer;
  max-width: 100%;
  background-color: gray;
  text-align: center;
  color: black;
  border-radius: 5px 5px 5px 5px;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
</style>