<template>
  <div class="home">
    <the-form></the-form>
  </div>
</template>

<script>
// @ is an alias to /src
import TheForm from '@/components/TheForm.vue';

export default {
  name: 'home',
  components: {
    TheForm
  }
};
</script>
