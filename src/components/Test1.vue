<template>
  <form class="abc">
    <select v-model="timeA">
      <option v-for="time1 in arr1" :key="time1">
        {{ time1 }}
      </option>
    </select>
    <button @click="hhh" type="button">ABC</button>

    <select>
      <option v-for="time2 in arr1" :key="time2">{{ time2 }}</option>
    </select>
  </form>

  {{ timeA }}
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";

const timeA = ref();
const arr1 = ["00:00", "00:30", "01:00", "01:30"];

watchEffect(() => {});

const hhh = () => {
  const abfg = parseInt(timeA.value.split(":").join(""));
  console.log(abfg);
};
console.log(parseInt("00:30".split(":").join("")));
</script>

<style lang="scss" scoped>
.abc {
  display: flex;
}
</style>
