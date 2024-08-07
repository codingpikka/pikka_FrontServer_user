<template>
  <section
    class="section section-shaped section-lg my-0"
    style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
  >
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <Card
            type="secondary"
            shadow
            header-classes="bg-white pb-10"
            body-classes="px-lg-5 py-lg-10"
            class="border"
            style="width: 100%; height: 1000px;"
          >
            <template>
              <form role="form" @submit.prevent>
                <div class="header-buttons">
                  <div
                    class="header-button"
                    @click="setActiveButton('작성내역')"
                    :class="{ active: activeButton === '작성내역' }"
                  >
                    작성내역
                  </div>
                  <div
                    class="header-button"
                    @click="setActiveButton('문의내역')"
                    :class="{ active: activeButton === '문의내역' }"
                  >
                    문의내역
                  </div>
                </div>

                <!-- 작성내역 섹션 -->
                <div v-if="activeButton === '작성내역'" class="info-section">
                  <div class="info-row_header">
                    <div class="info-title">제목</div>
                    <div class="info-thumbnail">썸네일</div>
                    <div class="info-content">내용</div>
                  </div>

                  <div v-for="item in data" :key="item.id" class="info-row">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-thumbnail">{{ item.thumbnail }}</div>
                    <div class="info-content">
                      {{ getTruncatedContent(item.content) }}
                      <button
                        type="button"
                        v-if="item.content.length > 5"
                        @click="toggleContent(item.id, $event)"
                      >
                        {{ isContentVisible(item.id) ? '접기' : '더 보기' }}
                      </button>
                      <div v-if="isContentVisible(item.id)">
                        {{ item.content }}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 문의내역 섹션 -->
                <div v-if="activeButton === '문의내역'" class="info-section">
                  <div class="info-row_header">
                    <div class="info-title">제목</div>
                    <div class="info-date">등록일</div>
                    <div class="info-category">카테고리</div>
                  </div>

                  <div v-for="item in inquiryItems" :key="item.id" class="info-row">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-date">{{ item.contactPostedDate }}</div>
                    <div
                      class="info-category"
                      :style="getCategoryStyle(item.contactType)"
                    >
                      {{ item.contactType }}
                    </div>
                  </div>
                </div>
              </form>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Card from '../../../components/Card.vue';

export default {
  data() {
    return {
      data: [],           // 작성내역 데이터를 저장
      inquiryItems: [],   // 문의내역 데이터를 저장
      activeButton: '작성내역', // 기본으로 활성화된 버튼
      visibleContentIds: [] // 클릭하여 펼쳐진 콘텐츠 ID 저장
    };
  },
  components: {
    Card
  },
  methods: {
    async fetchData(button) {
      try {
        if (button === '작성내역') {
          const response = await axios.get('http://localhost:8083/api/post');
          this.data = response.data; // 작성내역 데이터 저장
        } else if (button === '문의내역') {
          const response = await axios.get('http://localhost:8083/insert/qna-list');
          this.inquiryItems = response.data; // 문의내역 데이터 저장
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setActiveButton(button) {
      this.activeButton = button;
      this.fetchData(button); // 버튼 클릭 시 데이터 가져오기
    },
    getTruncatedContent(content) {
      const maxLength = 5; // 최대 길이 설정
      return content.length > maxLength ? content.substring(0, maxLength) + '... ' : content;
    },
    toggleContent(id, event) {
      event.preventDefault(); // 기본 동작을 막음
      const index = this.visibleContentIds.indexOf(id);
      if (index === -1) {
        this.visibleContentIds.push(id);
      } else {
        this.visibleContentIds.splice(index, 1);
      }
    },
    isContentVisible(id) {
      return this.visibleContentIds.includes(id);
    },
  },
  mounted() {
    this.fetchData(this.activeButton); // 초기 로드 시 데이터 가져오기
  }
};
</script>

<style scoped>
.header-buttons {
  display: flex;
  margin-bottom: 20px;
}

.header-button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: white;
  color: #3fa2f6;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  border: 2px solid white;
  margin-right: 10px;
}

.header-button:hover,
.header-button:focus,
.header-button:active,
.header-button.active {
  background-color: #3fa2f6;
  color: white;
  border: 2px solid #3fa2f6;
}

.info-section {
  margin-top: 20px;
}

.info-row_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.info-row {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
}

.info-title {
  flex: 4;
  text-align: center;
}

.info-thumbnail {
  flex: 2;
  text-align: center;
}

.info-content {
  flex: 3;
  text-align: center;
}

.info-date {
  flex: 2;
  text-align: center;
}

.info-category {
  flex: 3;
  text-align: center;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination span {
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination span.disabled {
  cursor: not-allowed;
  color: #ccc;
}

.pagination span.active {
  background-color: #3fa2f6;
  color: white;
}
</style>
