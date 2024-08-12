<template>
  <div style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2" style="margin-bottom: 10%;">
          <img src="../../../../public/img/brand/002501.png" class="img-fluid floating" />
        </div>
        <div class="col-md-6 order-md-1">
          <h3>공지사항</h3>
          <hr />
          <div v-if="sortedLimitedNotices.length === 0">
            <p>공지사항이 없습니다.</p>
          </div>
          <div v-else v-for="notice in sortedLimitedNotices" :key="notice.notiId">
            <h4>{{ notice.notiTitle }}</h4>
            <p>{{ truncateContent(notice.notiContents) }}</p>
            <p>등록일: {{ formatDate(notice.notiCreateAt) }}</p>
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
  computed: {
    sortedLimitedNotices() {
      return this.notices
        .sort((a, b) => new Date(b.notiCreateAt) - new Date(a.notiCreateAt))
        .slice(0, 2);
    }
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
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('ko-KR', options);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h3 {
  color: #333;
  margin-bottom: 20px;
}

h4 {
  color: #444;
  margin-top: 15px;
}

p {
  color: #666;
  line-height: 1.6;
}

.badge {
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9em;
}
</style>