<template>
  <li>
    <div style="display: inline-block">
      <input @click="isSelected = !isSelected" type="checkbox" name="items" :id="item.id">
      <label :for="item.id">{{ item.msg }}</label>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    isSelected: false;
  },
  props: ['item'],
  methods: {
    ...mapActions([
      'ADD_ITEM_TO_USER_SELECTION',
      'REMOVE_ITEM_FROM_USER_SELECTION'
    ])
  },
  watch: {
    isSelected() {
      isSelected
        ? this.ADD_ITEM_TO_USER_SELECTION(item)
        : this.REMOVE_ITEM_FROM_USER_SELECTION(item.id);
    }
  }
};
</script>
