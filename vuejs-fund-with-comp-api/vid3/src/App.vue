<script setup>
import { ref } from "vue";

// research ref (todo)
//test  ddfdsaf

const header = ref("Shopping List App");
const editing = ref(false);
const items = ref([
  { id: 1, label: "10 party hats" },
  { id: 2, label: "2 board games" },
  { id: 3, label: "20 cups" },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
const iceCreamFlavors = ref([]);
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value });
  newItem.value = "";
};

const doEdit = (e) => {
  editing.value = e;
  newItem.value = "";
};
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn btn-cancel" @click="doEdit(false)">
      Cancel
    </button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">
      Add Item
    </button>
  </div>
  
  <form class="add-item-form" v-if="editing" @submit.prevent="saveItem">
    <!-- v-model modifiers 
      trim
      lazy
      number 
  -->
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" />
      High Priority
    </label>
    <button 
      class="btn btn-primary"
      v-bind:disabled="newItem.length === 0"
      >
      Save Item</button>
  </form>
  <ul>
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>
