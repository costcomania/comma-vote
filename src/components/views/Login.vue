<template>
  <div class="background">
    <span class="description">정확하게 입력 부탁드립니다.</span>
    <br />
    {{ studentId }}
    {{ clubname }}
    {{ username }}
    <form>
      학번
      <br />
      <input
        class="input"
        id="studentId"
        v-model="studentId"
        type="number"
        name="studentId"
      /><br />
      동아리 명<br />
      <input
        class="input"
        id="clubname"
        v-model="clubname"
        type="text"
        name="clubName"
      /><br />
      이름<br />
      <input
        class="input"
        id="username"
        v-model="username"
        type="text"
        name="username"
      />
    </form>
    <button @click="submit">다음</button>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "Login",
  methods: {
    next() {
      console.log(this);
    },
  },
  setup() {
    const studentId = ref("");
    const clubname = ref("");
    const username = ref("");
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const submit = () => {
      if (
        studentId.value == "" ||
        clubname.value == "" ||
        username.value == ""
      ) {
        console.log("fail");
        console.log(store.state.studentId);
        alert("값을 전부 입력해주세요.");
      } else {
        console.log("success");
        router.push("/comma-vote/vote/1");
      }
    };

    return {
      router,
      route,
      studentId,
      clubname,
      username,
      submit,
      store,
    };
  },
};
</script>
<style scoped>
.background {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: #aadd00;
  border-radius: 10px 10px 10px 10px;
  padding: 1rem;
}
.description {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.input {
  margin-bottom: 10px;
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