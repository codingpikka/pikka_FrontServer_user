<template>
  <section
    class="section section-shaped section-lg my-0"
    style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
  >
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

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
                    <div class="info-title">제목</div>
                    <div class="info-date">등록일</div>
                    <div class="info-category">댓글수</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div class="info-category">12</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div class="info-category">12</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div class="info-category">12</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div class="info-category">12</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div class="info-category">12</div>
                  </div>
                </div>

                <!-- 문의내역 섹션 -->
                <div v-if="activeButton === '문의내역'" class="info-section">
                  <div class="info-row_header">
                    <div class="info-title">제목</div>
                    <div class="info-date">등록일</div>
                    <div class="info-category">카테고리</div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div
                      class="info-category"
                      style="
                          background-color: #f0f0f0;
                          border: 2px solid #ff3708;
                          color: #ff3708;"
                    >
                      기타
                    </div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div
                      class="info-category"
                      style="
                          background-color: #f0f0f0;
                          border: 2px solid #ff3708;
                          color: #ff3708;"
                    >
                      기타
                    </div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div
                      class="info-category"
                      style=" background-color: #f0f0f0;
                          border: 2px solid #21AF71;
                          color: #21AF71;"
                    >
                      자격증
                    </div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div
                      class="info-category"
                      style=" 
                          background-color: #f0f0f0;
                          border: 2px solid #28B1CD;
                          color: #28B1CD;"
                    >
                      취업
                    </div>
                  </div>

                  <div class="info-row">
                    <div class="info-title">여기는 바로 제목 입니다</div>
                    <div class="info-date">2024-00-00</div>
                    <div
                      class="info-category"
                      style=" 
                          background-color: #f0f0f0;
                          border: 2px solid #28B1CD;
                          color: #28B1CD;"
                    >
                      취업
                    </div>
                  </div>
                </div>

                <!-- 페이지네이션 -->
                <div v-if="activeButton" class="pagination">
                  <span
                    @click="prevPage"
                    :class="{ disabled: currentPage === 1 }"
                    >&lt;</span
                  >
                  <span
                    v-for="page in totalPages"
                    :key="page"
                    @click="setPage(page)"
                    :class="{ active: currentPage === page }"
                    >{{ page }}</span
                  >
                  <span
                    @click="nextPage"
                    :class="{ disabled: currentPage === totalPages }"
                    >&gt;</span
                  >
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
import Card from '../../../components/Card.vue';

export default {
  data() {
    return {
      activeButton: "", // 현재 활성화된 버튼 (작성내역 또는 문의내역)
      currentPage: 1, // 현재 페이지
      totalPages: 5, // 총 페이지 수
    };
  },
  components: {
    Card
  },
  methods: {
    // 버튼을 클릭했을 때 activeButton 상태를 설정하는 메서드
    setActiveButton(button) {
      this.activeButton = button;
      this.currentPage = 1; // 버튼을 클릭할 때마다 페이지를 1로 초기화
    },
    // 페이지를 설정하는 메서드
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    // 이전 페이지로 이동하는 메서드
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    // 다음 페이지로 이동하는 메서드
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style>
.category-btn:hover {
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

.info-date {
  flex: 2;
  text-align: center;
}

.info-category {
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
