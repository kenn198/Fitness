<style scoped>
main {
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center content */

  text-align: center; /* Center text horizontally */
  height: calc(100vh - 4rem); /* Adjust the height as needed */
}
</style>
<template>
  <main>
    <img :src="logo" alt="Logo" width="125" height="125" />
    <h1>Fitness Now</h1>
    <p>
      Welcome to Fitness Now! We are a gym located in Melbourne, Australia. We
      offer a wide range of fitness classes and personal training sessions and this platform
      allows you to register for our services or come up with your own work our plans and checklist.
    </p>
    <div>
      Watch the video below for reasons to excersise
    </div>
    <div>
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/XzBt1lOHPyQ'"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>
<script setup>
import logo from '@/assets/logo2.png';
</script>
