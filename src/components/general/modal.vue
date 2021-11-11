<template>
  <transition name="modal-fade">
    <div
      v-show="isModalVisible"
      class="modal-backdrop w-full overflow-auto h-screen lg:h-full md:h-full bg-white lg:bg-transparent md:bg-transparent"
    >
      <div class="relative modal z-50 flex flex-wrap content-center justify-center">
        <div
          class="relative flex flex-col h-screen lg:h-full md:h-full w-full bg-white outline-none focus:outline-none rounded-none lg:rounded-md md:rounded-md"
        >
          <header class="modal-header flex flex-col" id="modalTitle">
            <slot name="header">
              <div
                class="flex flex-row modal-header-content justify-between items-center"
              >
                <h4 class="modal-header-title text-black-light">{{ title }}</h4>
                <button type="button" @click="close" aria-label="Close modal">
                  <span class="text-black-light text-base">X</span>
                </button>
              </div>
              <div class="w-full border-b border-grey-light"></div>
            </slot>
          </header>

          <section class="modal-body" id="modalDescription">
            <slot name="body" class="modal-body-content">
              This is the default body!
            </slot>
          </section>
          <div class="border-t"></div>
          <footer class="modal-footer modal-footer-content">
            <slot name="footer">
              <button type="button" @click="close" aria-label="Close modal"></button>
            </slot>
          </footer>
        </div>
      </div>
      <div
        @click="close()"
        class="z-40 bg-gray-800 bg-opacity-25 absolute w-screen h-screen"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: ["title"],
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    open() {
      this.isModalVisible = true;
    },
    close() {
      this.isModalVisible = false;
      this.$emit("close", true);
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  },
};
</script>

<style>
.modal {
}
.modal-header,
.modal-footer {
  display: flex;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
