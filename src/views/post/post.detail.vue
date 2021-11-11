<template>
  <postEditModal ref="edit" @refresh="getAll()" :selectedPost="List" />
  <postDeleteModal ref="delete" @refresh="getAll()" :selectedPost="List" />

  <div class="w-full divide-y">
    <div class="flex bg-white shadow-lg mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm">
      <div class="flex flex-col justify-start px-4 py-6 w-full space-y-12">
        <div class="flex flex-row">
          <div class="flex flex-col space-y-12">
            <h4 class="text-3xl">
              {{ List.title }}
            </h4>
            <p>
              {{ List.body }}
            </p>
          </div>
          <div class="flex flex-col space-y-12"></div>
        </div>
        <div class="flex items-center space-x-4">
          <button
            v-if="this.$store.state.userData.id == List.userId"
            @click="(selectedItem = item), $refs.edit.showModal()"
            class="btn bg-green-light"
          >
            <span class="btn-text text-white">DÜZENLE</span>
          </button>
          <button
            v-if="this.$store.state.userData.id == List.userId"
            @click="(selectedItem = item), $refs.delete.showModal()"
            class="btn bg-red-light"
          >
            <span class="btn-text text-white">SİL</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// local
import postEditModal from "./components/post.edit.modal.vue";
import postDeleteModal from "./components/post.delete.modal.vue";
// global
import axios from "axios";
import { post } from "@/networking/urlmanager";

export default {
  name: "post-detail",
  components: {
    postEditModal,
    postDeleteModal,
  },
  data() {
    return {
      List: {},
    };
  },
  methods: {
    getAll() {
      this.load = true;
      axios
        .get(post.allUrl + `/${this.$route.params.id}`, {})
        .then((res) => {
          this.load = false;
          this.List = res.data;
          //this.refresh();
          //this.$swal.fire("Good job!", "You clicked the button!", "success");
        })
        .catch((err) => {
          console.log(err);
          this.$router.push({ name: "Posts" });
          this.load = false;
          //this.errorBox(err.response);
        });
    },
  },
  created() {
    if (!this.$store.state.isAuth) {
      this.$router.push({ name: "Auth" });
    }
    this.getAll();
  },
};
</script>
