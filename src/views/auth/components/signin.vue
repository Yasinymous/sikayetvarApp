<template>
  <div class="w-full">
    <div class="">
      <div class="flex flex-col sm:flex-row items-center">
        <h2 class="font-semibold text-lg">Giris Yapin</h2>
        <div class="w-full sm:w-auto sm:mt-0"></div>
      </div>
      <div class="mt-5">
        <form @submit.prevent="save()">
          <div class="md:flex flex-row md:space-x-4 w-full text-xs w-40">
            <div class="mb-3 space-y-2 w-full text-xs">
              <label class="font-semibold text-gray-600 py-2"
                >User Name <abbr title="required">*</abbr></label
              >
              <input
                placeholder="username"
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                required="required"
                v-model="username"
                type="text"
              />
            </div>
          </div>

          <div class="flex flex-row items-center space-x-4">
            <div class="max-w-max">
              <asyncButton
                type="submit"
                :bgDark="false"
                :loadState="load"
                :loadTitle="'Giris Yapiliyor'"
                containerClass="w-full"
                icon="fas fa-sign-in-alt"
                :text="'Giris Yap'"
              />
            </div>
            <div @click="$parent.state = 1" class="text-blue-500">
              hesabiniz yok mu kayit olun
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//global
import asyncButton from "@/components/general/async.button.vue";
import axios from "axios";
import { user } from "@/networking/urlmanager";
export default {
  name: "sign-in",
  components: { asyncButton },
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      load: false,
    };
  },
  methods: {
    save() {
      if (this.username) {
        this.load = true;
        axios
          .get(user.allUrl, {})
          .then((res) => {
            let users = res.data;

            let user = users.find((item) => item.username === this.username);
            console.log(user);
            if (user) {
              this.load = false;
              this.$store.commit("signIn", user);
              this.$router.push({ name: "Posts" });
            } else {
              this.load = false;
              this.$swal.fire("Hata!", "Kullanici Bulunamadi", "error");
            }
          })
          .catch((err) => {
            console.log(err);
            this.load = false;
            this.$swal.fire("Hata!", err, "error");
          });
      } else {
        this.$swal.fire(
          "Hata!",
          "Adiniz, kullanici adiniz ve email boş bırakılamaz",
          "error"
        );
      }
    },
    clearForm() {
      this.load = false;
      this.id = null;
      this.title = "";
      this.body = "";
    },
  },
};
</script>
