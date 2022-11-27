<script setup></script>

<template>
  <div>
    <h1 class="pt-10 text-primary text-7xl text-center">Scrum新手村</h1>

    <div class="flex pt-10 justify-between w-5/6 mx-auto">
      <div class="w-3/12"><img src="../assets/card-l.png" alt="" /></div>
      <div class="w-4/12"><img src="../assets//girl.png" alt="" /></div>
      <div class="w-3/12"><img src="../assets/card-r.png" alt="" /></div>
    </div>
    <router-link
      to="/step1"
      class="mx-auto my-32 text-center block w-1/6 border border-primary text-primary px-11 py-3 rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
      >下一頁
    </router-link>
  </div>
</template>
