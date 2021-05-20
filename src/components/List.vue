<template>
  <div class="common_list">
    <v-list />
    <div />
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    listObj: String,

  },
  data() {
    return {
      title: 'title is here',
      description: 'description is here',
      listArray: [],
    };
  },

};
</script>

<style>

</style>
