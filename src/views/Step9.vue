<template>
  <div class="flex items-center mx-auto w-5/6">
    <div class="shrink-0">
      <img class="w-full" src="../assets/shin.png" alt="" />
    </div>
    <p class="text-white text-center shrink-0 p-5">小新</p>
    <div class="border rounded-lg border-primary p-4">
      <div class="w-4/6">
        <p class="text-white text-xl text-start">
          那你來試試看，在這經典的 Scrum
          流程圖中，這些流程分別代表哪一個會議呢？
          請你試著把左下方三個方塊，拖拉至正確的位置上。
        </p>
      </div>
    </div>
  </div>
  <div class="w-4/6 mx-auto relative">
    <img src="../assets/circle.png" alt="" />
    <div class="absolute top-2 right-10 min-h-[300px] w-[180px]">
      <div v-for="review in reviewList" :key="review.name" class="m-2">
        <div
          class="border w-40 py-3 rounded-md border-primary text-center bg-main"
        >
          <h2 class="text-white">{{ review.name }}</h2>
          <p class="text-white">{{ review.enName }}</p>
        </div>
      </div>
    </div>
  </div>
  <router-link
    to="/step10"
    class="mx-auto mt-5 text-center block w-1/6 border border-primary text-primary px-11 py-3 rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
    >完成了</router-link
  >
</template>

<script setup>
const reviewList = [
  {
    name: "每日站立會議",
    enName: "Daily Scrum",
  },
  {
    name: "短衝檢視會議",
    enName: "Sprint Review",
  },
  {
    name: "短衝自省會議",
    enName: "Sprint Retrospective",
  },
];
</script>
