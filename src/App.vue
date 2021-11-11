<template>
  <img class="absolute bg" src="./assets/bg.svg" alt="background" />
  <img class="absolute bg" src="./assets/bg.svg" alt="background" />
  <div class="flex flex-col relative space-y-36">
    <div id="">
      <Header />
    </div>
    <div class="h-full">
      <router-view />
    </div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/general/header.vue";
import Footer from "./components/general/footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
