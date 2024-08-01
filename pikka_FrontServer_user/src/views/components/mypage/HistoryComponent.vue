
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
              <form role="form">
                <div
                  class="header-buttons"
                  style="display: flex; justify-content: flex-start; margin-bottom: 20px;"
                >
                  <div
                    class="header-button"
                    style="margin-right: 10px;"
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
                    <div class="info-title">id</div>
                    <div class="info-thumbnail">날짜</div>
                    <div class="info-background">제목</div>
                  </div>

                  <div v-for="item in data" :key="item.id" class="info-row">
                    <p>썸네일: {{ item.thumbnail }}</p>
                    <p>배경: {{ item.background }}</p>
                    <p>내용: {{ item.content }}</p>
                  </div>
                </div>

                <!-- 문의내역 섹션 -->
                <!-- <div v-if="activeButton === '문의내역'" class="info-section">
                  <div class="info-row_header">
                    <div class="info-title">제목</div>
                    <div class="info-date">등록일</div>
                    <div class="info-category">카테고리</div>
                  </div>

                  <div v-for="item in inquiryItems" :key="item.id" class="info-row">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-date">{{ item.date }}</div>
                    <div
                      class="info-category"
                      :style="getCategoryStyle(item.category)"
                    >
                      {{ item.category }}
                    </div>
                  </div>
                </div> -->
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
      data: [],
      activeButton: '작성내역', // 초기값 설정

    };
  },
  components: {
    Card
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:8003/data');
        this.data = response.data; // JSON 데이터 저장
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setActiveButton(button) {
      this.activeButton = button;
      this.currentPage = 1; // 페이지를 1로 초기화
      this.fetchData();
    },


  },

};
</script>





<style>
.comments-btn:hover {
  background-color: #e0e0e0;
}

.header-buttons {
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

.info-background {
  flex: 2;
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
