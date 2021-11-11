<template>
  <div>
    <postList />
  </div>
</template>

<script>
import postList from "./components/post.list.vue";

export default {
  name: "post",
  components: {
    postList,
  },
  methods: {},
  created() {
    if (!this.$store.state.isAuth) {
      this.$router.push({ name: "Auth" });
    }
  },
};
</script>
