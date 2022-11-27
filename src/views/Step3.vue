<template>
  <div class="flex items-center mx-auto w-5/6">
    <div class="w-32 shrink-0"><img src="../assets/mai.png" alt="" /></div>
    <p class="text-white m-5 shrink-0">小敏</p>
    <div class="border-2 rounded-lg border-primary flex justify-between">
      <div>
        <p class="text-white p-3">
          請試著把需求放到產品待辦清單，並
          <span class="text-primary text-2xl">調整待辦的優先度順序。</span>
          我們公司也推薦使用 Jira 來做任務的管理呢！
        </p>
      </div>
      <div>
        <img class="p-3" src="../assets/jira.png" alt="" />
      </div>
    </div>
  </div>
  <div class="w-5/6 flex mx-auto mt-5 h-[200px]">
    <template v-for="toDo in toDoList" :key="toDo.id">
      <div
        @dragstart="
          startDrag($event, {
            id: toDo.id,
          })
        "
        draggable="true"
        v-show="!isDropped(toDo.id)"
        class="ml-4 first:ml-0 bg-[url('./assets/card.png')] w-[160px] h-[200px] bg-contain bg-center bg-no-repeat"
      >
        <p class="text-white text-base p-8">{{ toDo.title }}</p>
      </div>
    </template>
  </div>
  <div class="w-5/6 mx-auto flex items-end pt-2">
    <div
      v-for="(item, index) in list"
      :key="item.bg"
      @click="deleteCard(index)"
      @dragleave.prevent
      @dragover.prevent
      @drop="stopDrag($event, index)"
      :class="item.bg"
      class="w-[160px] text-white h-[200px] ml-4 first:ml-0 bg-contain bg-center bg-no-repeat"
    >
      <div
        v-if="item.id"
        class="bg-[url('./assets/card.png')] bg-contain bg-center bg-no-repeat w-full h-full"
      >
        <p class="text-white text-base p-8">{{ item.title }}</p>
      </div>
    </div>
    <button
      @click="checkAns"
      class="leading-[50px] ml-auto w-60 block text-center border border-primary text-primary rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
    >
      完成！
    </button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const isDropped = (id) => {
  const result = list.value.find((item) => item.id === id);
  return result === undefined ? false : true;
};

const toDoList = [
  {
    id: 1,
    title: "會員系統 (登入、註冊、權限管理)",
  },
  {
    id: 2,
    title: "應徵者的線上履歷編輯器",
  },
  {
    id: 3,
    title: "前台職缺列表 (職缺詳情、點擊應徵)",
  },
  {
    id: 4,
    title: "後台職缺管理功能 (資訊上架下架、應徵者資料)",
  },
];
const over = ref(false);
const startDrag = (event, card) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("id", card.id);
};

const list = ref([
  {
    bg: "bg-star4",
    id: "",
    title: "",
  },
  {
    bg: "bg-star3",
    id: "",
    title: "",
  },
  {
    bg: "bg-star2",
    id: "",
    title: "",
  },
  {
    bg: "bg-star1",
    id: "",
    title: "",
  },
]);
const stopDrag = (event, targetIndex) => {
  const id = event.dataTransfer.getData("id");
  const target = toDoList.find((todo) => todo.id == id);
  list.value[targetIndex].id = target.id;
  list.value[targetIndex].title = target.title;
};
const deleteCard = (index) => {
  list.value[index].id = "";
  list.value[index].title = "";
};

const ans = [1, 2, 3, 4];

const router = useRouter();
const checkAns = () => {
  const nList = list.value.map((item) => {
    return item.id;
  });
  const result = ans.every((item, index) => item === nList[index]);
  if (result) {
    router.push("/step4");
  }
};
</script>
