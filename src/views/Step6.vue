<template>
  <div class="mx-auto w-5/6">
    <div class="w-5/6">
      <h2 class="text-white tracking-widest text-xl">產品待辦清單（共34點）</h2>
      <p class="text-white">把待辦清單在點數限制內移動到短衝代辦清單</p>
      <div class="flex justify-between py-5">
        <template v-for="toDo in toDoList" :key="toDo.id">
          <div
            v-if="isIclude(toDo.id)"
            @dragstart="
              startDrag($event, {
                id: toDo.id,
                cost: toDo.cost,
                url: toDo.url,
              })
            "
            draggable="true"
            class="w-[190px] h-[250px]"
          >
            <img :src="toDo.url" alt="" />
          </div>
        </template>
      </div>
    </div>
    <div class="border-t border-primary">
      <h2 class="text-white tracking-widest text-xl">
        開發A組的短衝待辦清單（ {{ cardsCost }} 點 / 20點)
        <span v-if="cardsCost > 20" class="text-red-400">超過２０了！</span>
      </h2>
      <div
        @dragleave.prevent
        @dragover.prevent
        @drop="stopDrag($event)"
        class="flex items-end pt-5"
      >
        <div
          v-for="(item, i) in cardList"
          :key="item.card"
          class="w-[150px] text-white text-4xl h-[200px] ml-4 first:ml-0 bg-[url('./assets/card-box.png')] bg-contain bg-center bg-no-repeat"
        >
          <div
            v-if="item.card !== 0"
            @click="deleteCard(i)"
            draggable="true"
            class="h-full bg-contain bg-center bg-no-repeat"
          >
            <img :src="item.url" alt="" />
          </div>
        </div>
        <button
          @click="check"
          class="leading-[50px] ml-auto w-60 block text-center border border-primary text-primary rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
        >
          準備好了!開始Sprint
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const isIclude = (id) => {
  const index = list.value.findIndex((item) => item.card === id);
  return index === undefined ? false : true;
};

const toDoList = [
  {
    id: 1,
    cost: 8,
    title: "會員系統 (登入、註冊、權限管理)",
    url: "/public/login.png",
  },
  {
    id: 2,
    cost: 13,
    title: "應徵者的線上履歷編輯器",
    url: "/public/cv.png",
  },
  {
    id: 3,
    cost: 5,
    title: "前台職缺列表 (職缺詳情、點擊應徵)",
    url: "/public/list.png",
  },
  {
    id: 4,
    cost: 8,
    title: "後台職缺管理功能 (資訊上架下架、應徵者資料)",
    url: "/public/admin.png",
  },
];

const over = ref(false);

const startDrag = (event, card) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("id", card.id);
};

const stopDrag = (event) => {
  if (list.value.length >= 4) {
    return;
  }
  const id = event.dataTransfer.getData("id");
  const target = toDoList.find((todo) => todo.id == id);
  list.value.push({
    id,
    cost: target.cost,
    url: target.url,
  });
};
const cardsCost = computed(() => {
  let sum = 0;
  for (let i = 0; i < list.value.length; i++) {
    const item = list.value[i];
    sum = item.cost + sum;
  }
  return sum;
});

const cardList = computed(() => {
  const count = 4 - list.value.length;
  const arr = [...list.value];
  for (let i = 0; i < count; i++) {
    arr.push({ card: 0 });
  }
  return arr;
});

const list = ref([]);

const router = useRouter();
const check = () => {
  if (cardsCost.value <= 20 && cardsCost.value > 0) {
    router.push("/step7");
  }
};
const deleteCard = (index) => {
  list.value.splice(index, 1);
};
</script>
