<template>
  <div class="w-full divide-y">
    <div class="flex bg-white shadow-lg mx-4 mx-auto max-w-md md:max-w-5xl rounded-sm">
      <div class="flex flex-col divide-y justify-start px-4 py-6 w-full space-y-12">
        <div class="flex flex-row">
          <div class="flex flex-col w-6/12">
            <h4 class="text-3xl">{{ fullname }}</h4>
            <span>Turkey</span>
            <div class="mt-4 flex flex-row space-x-8">
              <div class="flex flex-col text-gray-500">
                <span>Username</span>
                <span>Email</span>
              </div>
              <div class="flex flex-col">
                <span>{{ username }}</span>
                <span>{{ email }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-6/12">map</div>
        </div>
        <div class="flex flex-col space-y-4 pt-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ea nostrum
            numquam officiis quas commodi dolores nobis eaque veniam quos impedit sit,
            eligendi architecto cum vitae minima suscipit cupiditate iure ratione
            asperiores rerum atque aperiam deserunt est.
          </p>
          <button><span class="text-blue-medium">Show more</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// global
import axios from "axios";
import { user } from "@/networking/urlmanager";

export default {
  name: "profile",
  components: {},
  data() {
    return {
      fullname: "",
      username: "",
      email: "",
      load: false,
    };
  },
  methods: {
    getProfile() {
      this.load = true;
      axios
        .get(user.allUrl, {})
        .then((res) => {
          this.load = false;
          let users = res.data;

          let user = users.find((item) => item.id == this.$route.params.id);
          this.fullname = user.fullname;
          this.username = user.username;
          this.email = user.email;

          //this.refresh();
          //this.$swal.fire("Good job!", "You clicked the button!", "success");
        })
        .catch((err) => {
          console.log(err);
          this.load = false;
          //this.errorBox(err.response);
        });
    },
  },
  created() {
    this.getProfile();
  },
};
</script>
