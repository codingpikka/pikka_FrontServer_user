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

                  <div v-for="item in paginatedData" :key="item.id" class="info-row">
                    <p>썸네일: {{ item.thumbnail }}</p>
                    <p>배경: {{ item.background }}</p>
                    <p>내용: {{ item.content }}</p>
                  </div>

                  <!-- 페이지네이션 버튼 -->
                  <div class="pagination">
                    <span
                      v-if="currentPage > 1"
                      @click="changePage(currentPage - 1)"
                      class="pagination-btn"
                    >
                      &lt;
                    </span>
                    <span
                      v-for="page in totalPages"
                      :key="page"
                      @click="changePage(page)"
                      :class="{ 'pagination-btn': true, active: currentPage === page }"
                    >
                      {{ page }}
                    </span>
                    <span
                      v-if="currentPage < totalPages"
                      @click="changePage(currentPage + 1)"
                      class="pagination-btn"
                    >
                      &gt;
                    </span>
                  </div>
                </div>

                <!-- 문의내역 섹션 -->
                <div v-if="activeButton === '문의내역'" class="info-section">
                  <div class="info-row_header">
                    <div class="info-title">제목</div>
                    <div class="info-date">등록일</div>
                    <div class="info-category">카테고리</div>
                  </div>

                  <div v-for="item in paginatedInquiries" :key="item.id" class="info-row">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-date">{{ item.date }}</div>
                    <div
                      class="info-category"
                      :style="getCategoryStyle(item.category)"
                    >
                      {{ item.category }}
                    </div>
                  </div>

                  <!-- 페이지네이션 버튼 -->
                  <div class="pagination">
                    <span
                      v-if="currentInquiryPage > 1"
                      @click="changeInquiryPage(currentInquiryPage - 1)"
                      class="pagination-btn"
                    >
                      &lt;
                    </span>
                    <span
                      v-for="page in totalInquiryPages"
                      :key="page"
                      @click="changeInquiryPage(page)"
                      :class="{ 'pagination-btn': true, active: currentInquiryPage === page }"
                    >
                      {{ page }}
                    </span>
                    <span
                      v-if="currentInquiryPage < totalInquiryPages"
                      @click="changeInquiryPage(currentInquiryPage + 1)"
                      class="pagination-btn"
                    >
                      &gt;
                    </span>
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
      data: [], // 작성내역 데이터
      inquiryItems: [], // 문의내역 데이터
      activeButton: '작성내역', // 활성화된 버튼
      currentPage: 1, // 현재 페이지
      itemsPerPage: 5, // 페이지당 항목 수
      totalPages: 1, // 총 페이지 수
      currentInquiryPage: 1, // 현재 문의내역 페이지
      totalInquiryPages: 1 // 총 문의내역 페이지 수
    };
  },
  components: {
    Card
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.data.slice(start, end);
    },
    paginatedInquiries() {
      const start = (this.currentInquiryPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.inquiryItems.slice(start, end);
    }
  },
  methods: {
    async fetchData() {
      try {
        if (this.activeButton === '작성내역') {
          const response = await axios.get('http://localhost:8003/data');
          this.data = response.data;
          this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
        } else if (this.activeButton === '문의내역') {
          const response = await axios.get('http://localhost:8003/inquiries');
          this.inquiryItems = response.data;
          this.totalInquiryPages = Math.ceil(this.inquiryItems.length / this.itemsPerPage);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setActiveButton(button) {
      this.activeButton = button;
      this.fetchData();
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    changeInquiryPage(page) {
      if (page >= 1 && page <= this.totalInquiryPages) {
        this.currentInquiryPage = page;
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>





<style>
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

.pagination-btn {
  margin: 0 5px;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination-btn.active {
  background-color: #3fa2f6;
  color: white;
}

.pagination-btn:hover {
  background-color: #e0e0e0;
}

</style>

