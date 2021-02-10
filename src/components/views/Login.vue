<template>
  <div id="background">
    <div id="login">
      <span id="login-title">학번을 정확하게 입력해주세요.<br /></span>
      <br />
      {{ studentId }}
      <form>
        <input
          id="studentId"
          v-model="studentId"
          type="number"
          name="studentId"
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  setup() {
    return {};
  },
};
</script>
<style scoped>
#background {
  background-color: #aadd00;
  border-radius: 10px 10px 10px 10px;
}
#login {
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 20px;
}
#login-title {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#studentId {
  max-width: 100%;
}
</style>