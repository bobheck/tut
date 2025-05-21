<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  {id: 1, label: "10 party hats"},
  {id: 2, label:"2 board games"},
  {id: 3, label: "20 cups"}
])
const newItem = ref("")
const newItemPriority = ref("low")
//const iceCreamFlavors = ref([])
</script>

<template>
  <h1>{{ header }}</h1>
  <!-- v-model modifiers 
      trim
      lazy
      number 
  -->
  <input v-model.trim="newItem" type="text" placeholder="Add an item"> 
  <label>
    Priority
  </label>
    <select v-model="newItemPriority">
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
    <br />
  {{ newItemPriority }}
  <ul>
    <li v-for="({id, label}, index) in items" :key="id">
      {{label}}
    </li>
  </ul>
</template>