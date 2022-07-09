<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Demo from "./components/demo.vue";
import { ref } from "vue";

const totalP1 = ref(0);
const totalP2 = ref(0);
const totalP3 = ref(0);
const itemsP1 = ref([]);
const itemsP2 = ref([]);
const itemsP3 = ref([]);

const handleBlurP1 = (e) => {
  if (e.target.value) {
    totalP1.value = Number(e.target.value) + totalP1.value;
    itemsP1.value.push(totalP1.value);
    e.target.value = "";
  }
};

const handleClickP1 = () => {
  if (itemsP1.value.length > 1) {
    totalP1.value =
      totalP1.value -
      (itemsP1.value[Number(itemsP1.value.length - 1)] -
        itemsP1.value[Number(itemsP1.value.length - 2)]);
  } else {
    totalP1.value = 0;
  }
  itemsP1.value.pop();
};

const handleBlurP2 = (e) => {
  if (e.target.value) {
    totalP2.value = Number(e.target.value) + totalP2.value;
    itemsP2.value.push(totalP2.value);
    e.target.value = "";
  }
};

const handleClickP2 = () => {
  if (itemsP2.value.length > 1) {
    totalP2.value =
      totalP2.value -
      (itemsP2.value[Number(itemsP2.value.length - 1)] -
        itemsP2.value[Number(itemsP2.value.length - 2)]);
  } else {
    totalP2.value = 0;
  }
  itemsP2.value.pop();
};

const handleBlurP3 = (e) => {
  if (e.target.value) {
    totalP3.value = Number(e.target.value) + totalP3.value;
    itemsP3.value.push(totalP3.value);
    e.target.value = "";
  }
};

const handleClickP3 = () => {
  if (itemsP3.value.length > 1) {
    totalP3.value =
      totalP3.value -
      (itemsP3.value[Number(itemsP3.value.length - 1)] -
        itemsP3.value[Number(itemsP3.value.length - 2)]);
  } else {
    totalP3.value = 0;
  }
  itemsP3.value.pop();
};
</script>

<template>
  <div class="players">
    <div class="player">
      <h2>Alex</h2>
      <div class="score">
        <div v-for="item in itemsP1" :key="item">{{ item }}</div>
        <br />
        <input type="number" @blur="(e) => handleBlurP1(e)" @focus="(e) => e.target.select()"/>
        <br />
        <button @click="handleClickP1()" tabindex="-1">Undo</button>
      </div>
    </div>
    <div class="player">
      <h2>Mihai</h2>
      <div class="score">
        <div v-for="item in itemsP2" :key="item">{{ item }}</div>
        <br />
        <input type="number" @blur="(e) => handleBlurP2(e)" @focus="(e) => e.target.select()"/>
        <br />
        <button @click="handleClickP2()" tabindex="-1">Undo</button>
      </div>
    </div>
    <div class="player">
      <h2>Geo</h2>
      <div class="score">
        <div v-for="item in itemsP3" :key="item">{{ item }}</div>
        <br />
        <input type="number" @blur="(e) => handleBlurP3(e)" @focus="(e) => e.target.select()"/>
        <br />
        <button @click="handleClickP3()" tabindex="-1">Undo</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.players {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.score {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0;
  input {
    width: 40px;
    text-align: center;
  }
}
</style>
