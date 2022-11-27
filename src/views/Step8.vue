<template>
  <div class="w-5/6 mx-auto">
    <div
      class="flex m-8 items-start"
      v-for="review in reviewList"
      :key="review.name"
    >
      <div
        class="border rounded-md border-primary w-80 text-center shrink-0 bg-main py-5 text-xl"
      >
        <h2 class="text-white">{{ review.name }}</h2>
        <p class="text-white">{{ review.enName }}</p>
      </div>
      <div class="px-5">
        <p class="text-white text-xl leading-relaxed">
          {{ review.info }}
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <p class="text-white text-xl leading-relaxed">推薦工具：</p>
      <img src="../assets/confluence.png" alt="" />
    </div>
  </div>

  <router-link
    to="/step9"
    class="mx-auto mt-10 text-center block w-1/6 border border-primary text-primary px-11 py-3 rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
    >我瞭解了</router-link
  >
</template>

<script setup>
const reviewList = [
  {
    name: "每日站立會議",
    enName: "Daily Scrum",
    info: " 每天都要進行的會議，以 15 分鐘為限制 ： 昨天為團隊的短衝目標（SprintGoal）做了那些進度 今天我會如何準備來幫助團隊達到短衝目標過程中有遇到什麼問題、難題 透過團隊分享，追蹤大家的工作狀況。",
  },
  {
    name: "短衝檢視會議",
    enName: "Sprint Review",
    info: "  向利害關係人（Stakeholder）展示工作結果，蒐集使用回饋，分享市場反應，並一起討論下一步工作方向。在短衝檢視會議過程，會取得使用者或利害關係人對於本次短衝增量的回饋數據或意見，討論哪些想法值得納入至產品待辦清單去實踐。",
  },
  {
    name: "短衝自省會議",
    enName: "Sprint Retrospective",
    info: "   團隊在自省會議裡，會共同回顧該短衝歷程發生的事情、好的地方及可以改進的地方。檢討如何維持已有的成功經驗、優化工作流程，讓團隊運作愈來愈進步。",
  },
];
</script>
