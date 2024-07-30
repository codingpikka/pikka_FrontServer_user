<template>
  <div>
    <HistoryComponent :posts="posts" :inquiries="inquiries"/>
  </div>
</template>

<script>
import HistoryComponent from './components/mypage/HistoryComponent.vue';

export default {
  name: "HistoryPage",
  components: {
    HistoryComponent,
  },
  data() {
    return {
      posts: this.$root.posts,
      inquiries: this.$root.inquiries,
    };
  },
};
</script>
