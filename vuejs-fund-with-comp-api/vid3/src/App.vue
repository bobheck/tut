<script setup>
import { ref } from "vue";

// research ref (todo)
//test  ddfdsaf

const header = ref("Shopping List App");
const editing = ref(false);
const items = ref([
  { id: 1, 
    label: "10 party hats", 
    purchased: false,
    highPriority: true 
  },
  { 
    id: 2, 
    label: "2 board games", 
    purchased: true, 
    highPriority: false  
  },
  { 
    id: 3, 
    label: "20 cups", 
    purchased: false,
    highPriority: false 
  },
]);
const newItem = ref("");
const newItemHighPriority = ref(false);
const iceCreamFlavors = ref([]);
const saveItem = () => {
  items.value.push({ id: items.value.length + 1, label: newItem.value, purchased: false, highPriority: newItemHighPriority.value });
  newItem.value = "",
  newItemHighPriority.value = false;
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
      :disabled="newItem.length < 5"
      >
      Save Item</button>
  </form>
  <ul>
    <li v-for="({ id, label, purchased, highPriority }, index) in items" 
    :key="id"
    class="static-class"
    :class="{ strikeout: purchased, priority: highPriority }">
      {{ label }}
    </li>
    <div style="border-top: 2px solid black;">
    <!-- assign classes using array syntax -->
    <li v-for="({ id, label, purchased, highPriority }, index) in items" 
    :key="id"
    class="static-class"
    :class="[
      purchased ? 'strikeout bold' : 'bold',
      highPriority ? 'priority' : ''
    ]"
  >
  {{ label }}
    </li>
    </div>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>
