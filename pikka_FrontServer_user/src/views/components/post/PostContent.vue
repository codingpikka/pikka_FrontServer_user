<template>
  <div>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-Gray">게시글 목록</h2>
            <p class="lead text-Gray">
              최근 게시글 목록을 보여줍니다.
            </p>
          </div>
        </div>
        <div class="row row-grid mt-5">
          <div v-for="(post, index) in post" :key="post.id" class="col-lg-4">
            <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
            <h5 class="text-Gray mt-3">{{ post.title }}</h5>
            <p class="text-Black mt-3">{{ truncateContent(post.content) }}</p>
            <!-- Router Link 사용 -->
            <router-link :to="{ name: 'postdetail', params: { id: post.id } }">
              <badge tag="a" type="info">상세보기</badge>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8083/api/post');
      this.post = response.data;
    } catch (error) {
      console.error('게시글을 불러오는 데 실패했습니다:', error);
    }
  },
  methods: {
    truncateContent(content) {
      return content.length > 100 ? content.slice(0, 100) + '...' : content;
    }
  }
};
</script>
<style scoped>
</style>