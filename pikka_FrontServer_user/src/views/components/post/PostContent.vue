<template>
    <div>
      <section class="section section-shaped my-0 overflow-hidden">
        <div class="container pt-lg pb-300">
          <div class="row text-center justify-content-center">
            <div class="col-lg-10">
              <br>
              <h2 class="display-3 text-Gray">게시글 목록</h2>
              <p class="lead text-Gray">
                최근 게시글 목록을 보여줍니다. 부트스태랩에 있는 형태대로 표시하려고 했습니다.
              </p>
            </div>
          </div>
          <br>
          <br>
          <br>
          <br>
          <div class="row row-grid mt-5">
            <div v-for="(notice, index) in notices" :key="notice.id" class="col-lg-4">
              <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
              <h5 class="text-Gray mt-3">{{ notice.title }}</h5>
              <p class="text-Black mt-3">{{ truncateContent(notice.content) }}</p>
              <router-link :to="{ name: 'postdetail', params: { id: notice.id } }">
                <badge tag="a" type="info">상세보기</badge>
              </router-link>
            </div>
            <div v-for="i in 6 - notices.length" :key="'empty-'+i" class="col-lg-4">
              <!-- 게시글이 6개 미만일 경우 빈 공간 -->
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
        notices: [] // 게시글 목록을 저장할 배열
      };
    },
    created() {
      this.fetchData(); // 컴포넌트가 생성될 때 데이터 가져오는 메서드 호출
    },
    methods: {
      async fetchData() {
        try {
          const response = await axios.get('http://localhost:8083/api/post');
          this.notices = response.data
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // 날짜 기준으로 내림차순 정렬
            .slice(0, 6); // 최근 6개의 게시글만 보여주도록 제한
        } catch (error) {
          console.error('게시글을 불러오는데 실패했습니다:', error); // 오류 발생 시 콘솔에 오류 메시지 출력
        }
      },
      truncateContent(content) { // 게시글 내용을 요약하는 메서드
        return content.length > 100 ? content.slice(0, 100) + '...' : content; // 100자 이상이면 요약 표시
      }
    }
  };
  </script>

<style scoped>
/* 여기에 필요한 스타일을 추가하세요 */
</style>