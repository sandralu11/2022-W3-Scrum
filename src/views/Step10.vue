<template>
  <div class="flex items-center mx-auto w-5/6 my-11">
    <div class="w-1/6">
      <img class="w-full" src="../assets/shin.png" alt="" />
    </div>
    <p class="text-white w-1/6 text-center">小新</p>
    <div class="border rounded-lg border-primary p-4">
      <div class="w-4/6">
        <p class="text-white text-xl text-start">
          哇賽新來的，你真的很幸運，今天剛好是開發B組的
          Retro，你也見識一下，看看Retro都該做些什麼吧~我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄再Confluence中。
          請選擇適合 Retro的回饋卡！思考看看哪一張牌是『正面表述』呢？
        </p>
      </div>
    </div>
  </div>
  <div class="flex justify-between w-5/6 mx-auto">
    <div>
      <p class="text-white text-center">做得好的地方</p>
      <div class="flex">
        <div class="bg-[url('./assets/card.png')] w-[190px] h-[250px]">
          <div class="w-4/6 h-4/6 text-center mx-auto mt-[30px]">
            <p class="text-white mt-[30px]">這次我幫了很多人救火耶</p>
          </div>
        </div>
        <div class="bg-[url('./assets/card.png')] w-[190px] h-[250px]">
          <div class="w-4/6 h-4/6 text-center mx-auto mt-[30px]">
            <p class="text-white mt-[30px]">
              大家在開發上都會互相Cover，讓任務都有準時在時間內完成。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div>
      <p class="text-white text-center">有哪些可以做的更好</p>
      <div class="flex">
        <div class="bg-[url('./assets/card.png')] w-[190px] h-[250px]">
          <div class="w-4/6 h-4/6 text-center mx-auto mt-[30px]">
            <p class="text-white mt-[30px]">
              可以紀錄這次的開發時間，讓預估團隊點數可以更精準。
            </p>
          </div>
        </div>
        <div class="bg-[url('./assets/card.png')] w-[190px] h-[250px]">
          <div class="w-4/6 h-4/6 text-center mx-auto mt-[30px]">
            <p class="text-white mt-[30px]">
              開發時間預估不準確，請後端下次改進，避免Delay到我。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <router-link
    to="/End"
    class="mx-auto my-20 text-center block w-1/6 border border-primary text-primary px-11 py-3 rounded-lg hover:text-black hover:bg-gradient-to-r hover:from-main hover:via-primary hover:to-main"
    >接受挑戰</router-link
  >
</template>

<script>
export default {};
</script>

<style></style>
