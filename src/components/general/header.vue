<template>
  <div class="mx-40 my-12 justify-between flex flex-row items-center">
    <div class="flex flex-row items-center space-x-4">
      <img class="h-32px" src="../../assets/logo.svg" alt="logo" />
      <router-link to="/" class="navbar-router-text text-white">Posts</router-link>
    </div>

    <div v-if="this.$store.state.isAuth" class="flex flex-row space-x-4">
      <router-link
        tag="button"
        class="btn-router bg-white"
        :to="'/profile/' + this.$store.state.userData.id"
        ><span class="btn-router-text navbar-router-text text-black"
          >Profile</span
        ></router-link
      >
      <router-link
        @click="signOut()"
        tag="button"
        class="btn-router bg-white"
        to="/accounts"
        ><span class="btn-router-text navbar-router-text text-black"
          >Cikis Yap</span
        ></router-link
      >
    </div>
    <router-link
      v-if="!this.$store.state.isAuth"
      tag="button"
      class="btn-router bg-white"
      to="/accounts"
      ><span class="btn-router-text navbar-router-text text-black"
        >Login</span
      ></router-link
    >
  </div>
</template>

<script>
export default {
  name: "header",
  methods: {
    signOut() {
      this.$store.commit("signOut");
    },
  },
};
</script>
