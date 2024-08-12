<template>
  <div>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-Gray">{{ post ? post.title : loading ? '로딩 중...' : errorMessage }}</h2>
            <p class="lead text-Gray">
              게시글 상세 정보를 보여줍니다.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12">
            <div class="content-detail">
              <div class="h6 mt-4">작성자: {{ post ? post.author : '로딩 중...' }}</div>
              <div class="h6 mt-4">작성일시: {{ post ? post.createdAt : '로딩 중...' }}</div>
              <div class="mt-5 py-5 border-top text-center">
                <p>{{ post ? post.content : '로딩 중...' }}</p>
                <!-- 확인 -->
              </div>
            </div>
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
      post: null, // 게시글 데이터를 저장할 변수
      loading: true, // 로딩 상태를 표시할 변수
      errorMessage: '' // 오류 메시지를 저장할 변수
    };
  },
  async created() {
    this.loadPost();
  },
  methods: {
    async loadPost() {
      const postId = this.$route.params.id; // URL 파라미터에서 ID를 가져옴
      if (!postId) {
        this.errorMessage = '게시글 ID가 정의되지 않았습니다.';
        this.loading = false;
        return;
      }
      try {
        const response = await axios.get(`http://localhost:8083/api/post/${id}`);
        this.post = response.data; // API에서 받은 게시글 데이터를 저장
      } catch (error) {
        this.errorMessage = '게시글을 불러오는 데 실패했습니다.'; // 오류 처리
      } finally {
        this.loading = false; // 로딩 완료
      }
    }
  }
};
</script>

<style>
.content-detail {
  display: flex;
  justify-content: space-between;
}
</style>
