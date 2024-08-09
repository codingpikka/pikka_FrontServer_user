<template>
    <div class="profile-page">
      <section class="section-profile-cover section-shaped my-0">
        <div class="shape shape-style-1 shape-primary shape-skew alpha-4" style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"></div>
      </section>
      <section class="section section-skew">
        <div class="container">
          <card shadow class="card-profile mt--300" no-body>
            <div class="px-4">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <img v-lazy="'img/theme/job.jpg'" class="rounded-circle">
                  </div>
                </div>
                <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                  <div class="card-profile-actions py-4 mt-lg-0">
                    <!-- 버튼들 제거됨 -->
                  </div>
                </div>
                <div class="col-lg-4 order-lg-1">
                  <!-- 통계 부분 제거됨 -->
                </div>
              </div>
              <div class="text-center mt-5">
                <!-- 게시글 제목을 동적으로 표시 -->
                <h3>{{ post ? post.title : loading ? '로딩 중...' : errorMessage }}</h3>
              </div>
  
              <div class="content-detail">
                <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성자 : {{ post ? post.author : loading ? '로딩 중...' : errorMessage }}</div>
                <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성일시 : {{ post ? post.createdAt : loading ? '로딩 중...' : errorMessage }}</div>
              </div>
  
              <div class="mt-5 py-5 border-top text-center">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <!-- 본문 내용 및 댓글 입력 필드 -->
                    <p>{{ post ? post.content : loading ? '로딩 중...' : errorMessage }}</p>
                    <base-input placeholder="댓글을 입력하세요(최대300)" addon-right-icon="ni ni-zoom-split-in"></base-input>
                  </div>
                </div>
                <div>
                  <div class="h6 mt-4 text-left"> 댓글 </div>
                  <div class="mt-5 py-5 border-top text-center">
                    <!-- 댓글 영역 -->
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null,
        loading: true,
        errorMessage: ''
      };
    },
    async mounted() {
      await this.fetchPost();
    },
    methods: {
      async fetchPost() {
        try {
          const postId = this.$route.params.id; // 라우터에서 ID를 가져옴
          console.log('Fetched post ID:', postId); // 디버깅용 로그 추가
          if (!postId) {
            throw new Error('게시글 ID가 제공되지 않았습니다.');
          }
          const response = await axios.get(`http://localhost:8083/api/post/${postId}`);
          this.post = response.data;
        } catch (error) {
          this.errorMessage = '게시글을 불러오는 데 실패했습니다. 다시 시도해주세요.';
          console.error('게시글을 불러오는 데 실패했습니다:', error);
        } finally {
          this.loading = false;
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
