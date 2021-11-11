<template>
  <div class="mx-40 my-12 flex flex-col divide-y space-y-5">
    <div class="justify-between flex flex-row items-center">
      <div class="flex flex-col items-start">
        <h4 class="text-green-primary footer-text-title">Thank you for supporting us!</h4>
        <p class="footer-text-content">Let's get in touch on any of these platforms.</p>
      </div>
      <div class="flex flex-row items-center space-x-2">
        <button
          @mouseover="twitter = true"
          @mouseleave="twitter = false"
          class="footer-social-btn bg-blue-twitter relative"
        >
          <div v-show="twitter" class="speech-bubble absolute -top-8 -left-7">
            <span class="text-white">Follow us</span>
          </div>
          <img
            class="footer-social-btn-icon mx-auto"
            src="../../assets//social/twitter.svg"
            alt=""
          />
        </button>
        <button
          @mouseover="facebook = true"
          @mouseleave="facebook = false"
          class="footer-social-btn bg-blue-facebook relative"
        >
          <div v-show="facebook" class="speech-bubble absolute -top-8 -left-7">
            <span class="text-white">Follow us</span>
          </div>
          <img
            class="footer-social-btn-icon mx-auto"
            src="../../assets//social/facebook.svg"
            alt=""
          />
        </button>
        <button
          @mouseover="dribble = true"
          @mouseleave="dribble = false"
          class="footer-social-btn bg-pink-dribble relative"
        >
          <div v-show="dribble" class="speech-bubble absolute -top-8 -left-7">
            <span class="text-white">Follow us</span>
          </div>
          <img
            class="footer-social-btn-icon mx-auto"
            src="../../assets//social/dribbble.svg"
            alt=""
          />
        </button>
        <button
          @mouseover="github = true"
          @mouseleave="github = false"
          class="footer-social-btn bg-black-github relative"
        >
          <div v-show="github" class="speech-bubble absolute -top-8 -left-7">
            <span class="text-white">Follow us</span>
          </div>
          <img
            class="footer-social-btn-icon mx-auto"
            src="../../assets//social/github.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="justify-between flex flex-row items-center pt-5">
      <div class="flex flex-row items-center space-x-1">
        <span>© 2018</span>
        <span class="text-green-primary">Şikayetvar</span>
      </div>
      <div class="flex flex-col items-start">
        <h4 class="navbar-router-text">{{ this.$route.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      twitter: false,
      facebook: false,
      dribble: false,
      github: false,
    };
  },
};
</script>

<style scoped></style>
