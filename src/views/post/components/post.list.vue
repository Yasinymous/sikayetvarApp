<template>
  <postCreateModal ref="create" @refresh="getAll()" />
  <postFilterModal ref="filter" @refresh="filterAll($event)" />
  <postEditModal
    ref="edit"
    @refresh="getAll()"
    @close="selectedItem = {}"
    :selectedPost="selectedItem"
  />
  <postDeleteModal ref="delete" @refresh="getAll()" :selectedPost="selectedItem" />

  <div class="w-full divide-y">
    <div
      class="mb-5 flex flex-col bg-gray-50 py-4 mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm"
    >
      <div class="flex justify-end space-x-4 mr-4">
        <button @click="$refs.filter.showModal()" class="btn bg-white">
          <span class="btn-text">Filtre</span>
        </button>
        <button @click="$refs.create.showModal()" class="btn bg-white">
          <span class="btn-text">Oluştur</span>
        </button>
      </div>
    </div>

    <div
      v-for="(item, index) in List"
      :key="item.name"
      class="flex flex-col bg-white shadow-lg mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm"
    >
      <!--horizantil margin is just for display-->
      <div class="flex items-center px-4 py-6 w-full space-x-4">
        <div class="justify-start items-center">
          <p>{{ index + 1 }}</p>
        </div>
        <div class="flex-grow flex justify-start items-center space-x-2">
          <p class="post-list-title">
            {{ item.title }}
          </p>
          <p
            @click="this.$router.push({ name: 'Profile', params: { id: item.userId } })"
            class="post-list-title"
          >
            <span class="text-blue-500">- Yazar</span>
          </p>
        </div>
        <div class="flex-2">
          <div class="flex items-center space-x-4">
            <button
              @click="(selectedItem = item), detailRouter()"
              class="btn bg-pink-light"
            >
              <span class="btn-text text-white">DETAY</span>
            </button>
            <button
              v-if="this.$store.state.userData.id == item.userId"
              @click="(selectedItem = item), $refs.edit.showModal()"
              class="btn bg-green-light"
            >
              <span class="btn-text text-white">DÜZENLE</span>
            </button>
            <button
              v-if="this.$store.state.userData.id == item.userId"
              @click="(selectedItem = item), $refs.delete.showModal()"
              class="btn bg-red-light"
            >
              <span class="btn-text text-white">SİL</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="List.length == 0 && !load"
      class="flex flex-col bg-white shadow-lg mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm"
    >
      <!--horizantil margin is just for display-->
      <div class="flex items-center px-4 py-6 w-full space-x-4">
        <div class="flex-grow flex justify-center items-center">Bulunamadi</div>
      </div>
    </div>
    <div
      v-if="load"
      class="flex flex-col shadow-lg mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm"
    >
      <div class="flex bg-white items-center px-4 py-3 w-full space-x-4">
        <div class="flex-grow flex justify-center items-center mr-10">
          <img class="h-12" src="../../../assets/loadBlack.svg" alt="" />
          <span class="text-black">Yükleniyor</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// local
import postCreateModal from "./post.create.modal.vue";
import postFilterModal from "./post.filter.modal.vue";
import postEditModal from "./post.edit.modal.vue";
import postDeleteModal from "./post.delete.modal.vue";
// global
import axios from "axios";
import { post } from "@/networking/urlmanager";

export default {
  name: "post-list",
  components: {
    postCreateModal,
    postFilterModal,
    postEditModal,
    postDeleteModal,
  },
  data() {
    return {
      selectedItem: {},
      List: [],
      load: false,
    };
  },
  methods: {
    getAll() {
      this.List = [];
      this.load = true;
      axios
        .get(post.allUrl, {})
        .then((res) => {
          this.load = false;
          this.List = res.data;

          //this.refresh();
          //this.$swal.fire("Good job!", "You clicked the button!", "success");
        })
        .catch((err) => {
          console.log(err);
          this.load = false;
          //this.errorBox(err.response);
        });
    },
    filterAll(value) {
      this.List = [];
      this.load = true;
      axios
        .get(
          value ? post.allUrl + `?userId=${this.$store.state.userData.id}` : post.allUrl,
          {}
        )
        .then((res) => {
          this.load = false;
          this.List = res.data;

          //this.refresh();
          //this.$swal.fire("Good job!", "You clicked the button!", "success");
        })
        .catch((err) => {
          console.log(err);
          this.load = false;
          //this.errorBox(err.response);
        });
    },
    detailRouter() {
      let postId = this.selectedItem.id;

      this.$router.push({ name: "Post Detail", params: { id: postId } });
    },
  },
  created() {
    this.getAll();
  },
};
</script>
