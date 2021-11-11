<template>
  <div
    class="flex bg-white shadow-lg space-y-8 p-10 mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm"
  >
    <signUp v-if="state == 1" />
    <signIn v-if="state == 2" />
  </div>
</template>

<script>
import signUp from "./components/signup.vue";
import signIn from "./components/signin.vue";

export default {
  name: "auth",
  components: {
    signUp,
    signIn,
  },
  data() {
    return {
      state: 1,
    };
  },
  methods: {},
  created() {
    if (this.$store.state.isAuth) {
      this.$router.push({ name: "Posts" });
    }
  },
};
</script>
