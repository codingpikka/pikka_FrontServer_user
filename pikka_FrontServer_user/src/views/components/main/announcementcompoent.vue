Copy<template>
  <div style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2" style="margin-bottom: 10%;">
          <img src="../../../../public/img/brand/002501.png" class="img-fluid floating" />
        </div>
        <div class="col-md-6 order-md-1">
          <h3>공지사항</h3>
          <hr />
          <div v-if="notices.length === 0">
            <p>공지사항이 없습니다.</p>
          </div>
          <div v-else v-for="notice in notices" :key="notice.notiId">
            <h4>{{ notice.notiTitle }}</h4>
            <p>{{ truncateContent(notice.notiContents) }}</p>
            <router-link :to="{ name: 'NoticeDetail', params: { id: notice.notiId } }">
              <badge tag="a" type="info">상세보기</badge>
            </router-link>
            <br><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      notices: []
    };
  },
  created() {
    this.fetchNotices();
  },
  methods: {
    async fetchNotices() {
      try {
        const response = await axios.get('http://localhost:8083/api/notice');
        this.notices = response.data;
      } catch (error) {
        console.error('공지사항을 불러오는데 실패했습니다:', error);
      }
    },
    truncateContent(content) {
      return content.length > 100 ? content.slice(0, 100) + '...' : content;
    }
  }
};
</script>
<style></style>
