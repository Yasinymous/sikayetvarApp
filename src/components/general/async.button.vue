<template>
  <button
    class="btn transition-all duration-200 text-white"
    :class="[bgDark ? 'bg-custom-dark' : color, containerClass]"
    :type="type"
    :disabled="loadState"
  >
    <div
      v-if="loadState"
      class="flex relative items-center justify-center btn-text mr-24"
    >
      <img class="absolute -left-2 h-8" src="../../assets/loading.svg" alt="" />
      <span class="ml-7">{{ loadTitle }}</span>
    </div>
    <div v-if="!loadState" class="flex justify-center btn-text">
      <span> <i :class="icon"></i> {{ text }} </span>
    </div>
  </button>
</template>
<script>
export default {
  name: "async-btn",
  props: {
    bgDark: {
      type: Boolean,
      default: false,
    },
    containerClass: {
      type: String,
      default: "",
      required: false,
    },
    loadState: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "bg-blue-light hover:bg-blue-400 ",
    },
    icon: {
      type: String,
      default: "fas fa-paper-plane",
      required: false,
    },
    loadTitle: {
      type: String,
      required: false,
      default: "Gönderiliyor",
    },
    text: {
      type: String,
      required: true,
      default: "Gönder",
    },
    type: {
      type: String,
      required: false,
      default: "submit",
    },
  },
};
</script>
