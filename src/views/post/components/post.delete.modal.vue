<template>
  <form @submit.prevent="save()">
    <modal name="edit-modal" @close="clearForm" ref="modal" :title="'Sil'">
      <template v-slot:header></template>
      <template v-slot:body>
        <div class="">
          <div class="flex flex-col">
            <img class="h-24" src="../../../assets/xIcon.svg" alt="" />
            <p class="text-center">Silmek Istediginize Emin misiniz ?</p>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="w-full flex flex-row justify-between">
          <div class="">
            <div class="max-w-min">
              <asyncButton
                type="submit"
                :bgDark="false"
                :loadState="load"
                :loadTitle="'Siliniyor'"
                containerClass="w-full"
                icon="fas fa-sign-in-alt"
                :text="'Sil'"
                :color="'bg-red-light hover:bg-red-600'"
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
import axios from "axios";
import { post } from "@/networking/urlmanager";

export default {
  name: "post-edit-modal",
  props: ["selectedPost"],
  components: { asyncButton },
  data() {
    return {
      load: false,
      id: null,
      title: "",
      body: "",
    };
  },
  methods: {
    save() {
      this.load = true;
      axios
        .delete(post.allUrl + `/${this.selectedPost.id}`, {})
        .then(() => {
          this.load = false;
          this.$refs.modal.close();
          this.clearForm();
          this.$emit("refresh", true);
          this.$swal.fire("Başarılı", "İşlem başarılı", "success");
        })
        .catch((err) => {
          console.log(err);
          this.load = false;
          this.$swal.fire("Hata!", err, "error");
        });
    },
    clearForm() {},
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
