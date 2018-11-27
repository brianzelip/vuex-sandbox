<template>
  <form>
    <ul>
      <form-item v-for="item in data" :item="item" :key="item.id"></form-item>
    </ul>
    <hr>
    <pre>{{ userSelection }}</pre>
  </form>
</template>

<script>
import { mapState } from 'vuex';

import FormItem from './FormItem.vue';

export default {
  data() {
    return {
      isSelected: false
    };
  },
  components: {
    FormItem
  },
  computed: {
    ...mapState(['data', 'userSelection'])
  }
};
</script>
