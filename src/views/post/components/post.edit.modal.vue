<template>
  <form @submit.prevent="save()">
    <modal name="edit-modal" @close="clearForm" ref="modal" :title="'Düzenle'">
      <template v-slot:header></template>
      <template v-slot:body>
        <div class="">
          <div class="flex flex-col">
            <div class="">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="text">
                Title
              </label>
              <input
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                v-model="title"
                required="required"
              />
            </div>
            <div class="">
              <label class="block mb-2 text-sm font-bold text-gray-700" for="text">
                Body
              </label>
              <textarea
                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                style="max-height: 120px; min-height: 120px"
                placeholder="Body"
                v-model="body"
                required="required"
              />
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
                :loadTitle="'GÜNCELLENİYOR'"
                containerClass="w-full"
                icon="fas fa-sign-in-alt"
                :text="'GÜNCELLE'"
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
      id: 0,
      title: "",
      body: "",
    };
  },
  methods: {
    save() {
      if (this.title && this.body) {
        this.load = true;
        axios
          .put(post.allUrl + `/${this.id}`, {
            title: this.title,
            body: this.body,
            userId: this.$store.state.userData.id,
          })
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
      } else {
        this.$swal.fire("Hata!", "Başlık ve içerik boş bırakılamaz", "error");
      }
    },
    getDetail() {
      this.id = this.selectedPost.id;
      this.title = this.selectedPost.title;
      this.body = this.selectedPost.body;
    },
    clearForm() {
      this.load = false;
      this.id = null;
      this.title = "";
      this.body = "";
      this.$emit("close", true);
    },
    close() {
      this.$refs.modal.close();
    },
    showModal() {
      this.isModalVisible = true;
      this.$refs.modal.open();
    },
  },
  watch: {
    selectedPost() {
      this.getDetail();
    },
  },
};
</script>
