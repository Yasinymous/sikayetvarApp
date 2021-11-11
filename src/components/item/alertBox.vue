<template>
  <modal name="edit-modal" @close="clearForm" ref="modal" :title="title">
    <template v-slot:header></template>
    <template v-slot:body>
      <div class="">
        <div class="flex flex-col">
          <img class="h-24" src="../../../assets/xIcon.svg" alt="" />
          <p class="text-center">{{ text }}</p>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="w-full flex flex-col">
        <div class="">
          <div class="max-w-min">
            <button class="btn bg-green-primary">
              <span class="btn-text text-white">Tamam</span>
            </button>
          </div>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
export default {
  name: "post-edit-modal",
  props: {
    color: {
      type: String,
      default: "",
    },
    icon: {
      type: Boolean,
      default: null,
      required: false,
    },
    title: {
      type: String,
      default: "Baslik",
    },
    text: {
      type: String,
      required: true,
      default: "Mesaj",
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.$refs.modal.close();
    },
    showModal() {
      this.isModalVisible = true;
      this.$refs.modal.open();
    },
  },
};
</script>
