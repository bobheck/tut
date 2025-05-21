<script setup>
import { ref } from "vue";

const header = ref("Shopping List App");
const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
//const iceCreamFlavors = ref([])
</script>

<template>
  <h1>{{ header }}</h1>
  <!-- v-model modifiers 
      trim
      lazy
      number 
  -->
  <input v-model.trim="newItem" type="text" placeholder="Add an item" />
  <label> High Priority </label>
  <input type="checkbox" v-model="newItemHighPriority" /> 
  <br />
  {{ newItemHighPriority }}
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
</template>
