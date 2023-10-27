<script setup>
import { reactive, ref } from 'vue';
// import nuxtStorage from 'nuxt-storage';
import { getData, setData } from 'nuxt-storage/local-storage'



// definePageMeta({
//   middleware: [
//      async function (to, from) {
//       const { session, refresh, update, reset, remove } = await useSession()
//       // Custom inline middleware
//       const userSession = getData('sessionData');
//       const jsonParseSesssion = JSON.parse(userSession);
//       // console.log(jsonParseSesssion.id == session.value.id )
   
//       // if (!getData('sessionData')) {
//       //   console.log('false');
//       //   return navigateTo('/');
//       // }
//     },
//   ],
// });

</script>
<template>
  <div>
    dashboard
    <button @click="test()">test</button>
  </div>
</template>