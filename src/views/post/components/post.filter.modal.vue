<template>
  <form @submit.prevent="save()">
    <modal name="edit-modal" @close="clearForm" ref="modal" :title="'Filtre'">
      <template v-slot:header></template>
      <template v-slot:body>
        <div class="">
          <div class="flex flex-col">
            <div class="flex flex-row items-center space-x-4">
              <input type="radio" id="one" :value="true" v-model="picked" />
              <span for="one">Sadece Benim Postlarim</span>
            </div>
            <div class="flex flex-row items-center space-x-4">
              <input type="radio" id="two" :value="false" v-model="picked" />
              <span for="two">Tum Postlar</span>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="w-full flex flex-col">
          <div class="">
            <div class="max-w-min">
              <asyncButton
                type="submit"
                :bgDark="false"
                :loadState="load"
                :loadTitle="'Filtreleniyor'"
                containerClass="w-full"
                icon="fas fa-sign-in-alt"
                :text="'Filtrele'"
              />
            </div>
          </div>
        </div>
      </template>
    </modal>
  </form>
</template>

<script>
//global
import asyncButton from "@/components/general/async.button.vue";

export default {
  name: "post-create-modal",
  components: { asyncButton },
  data() {
    return {
      load: false,
      id: 0,
      picked: "",
    };
  },
  methods: {
    save() {
      this.load = true;

      this.load = false;
      this.$emit("refresh", this.picked);
      this.picked = "";
      this.$refs.modal.close();
    },
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
