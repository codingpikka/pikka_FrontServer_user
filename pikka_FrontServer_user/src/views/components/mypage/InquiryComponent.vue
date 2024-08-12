<template>
  <section
    class="section section-shaped section-lg my-0"
    style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
  >
    <div class="container pt-lg-md">
      <div class="text-center" style="padding: 20px; font-size: 30px">문의하기</div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <card
            type="secondary"
            header-classes="bg-white pb-10"
            body-classes="px-lg-5 py-lg-10"
            class="border"
            style="width: 100%; height: 1000px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3)"
          >
            <form @submit.prevent="submitData" role="form">
              <div class="form-group">
                <input
                  v-model="form.title"
                  type="text"
                  class="form-control mb-3"
                  placeholder="제목"
                />
              </div>
              <div class="category-section">카테고리</div>
              <button
                type="button"
                class="category-btn"
                @click="selectCategory('자격증')"
                :style="getButtonStyle('자격증')"
              >
                자격증
              </button>
              <button
                type="button"
                class="category-btn"
                @click="selectCategory('취업')"
                :style="getButtonStyle('취업')"
              >
                취업
              </button>
              <button
                type="button"
                class="category-btn"
                @click="selectCategory('기타')"
                :style="getButtonStyle('기타')"
              >
                기타
              </button>
              <div style="border-bottom: 0.3px solid gray"></div>
              <textarea
                v-model="form.content"
                class="form-control mb-3"
                placeholder="내용"
                style="height: 700px; width: 100%; margin-top: 15px"
              ></textarea>
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="background-color: #0ecdef"
                >
                  등록하기
                </button>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selectedCategory: "",
      form: {
        title: "",
        content: "",
      },
      message: "",
      messageType: "",
    };
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    getButtonStyle(category) {
      const isSelected = this.selectedCategory === category;
      let baseStyle = `
        background-color: #f0f0f0;
        border: 2px solid;
        color: black;
      `;
      switch (category) {
        case "자격증":
          baseStyle += " border-color: #21AF71;";
          if (isSelected) baseStyle += " background-color: #21AF71; color: #fff;";
          else baseStyle += " color: #21AF71;";
          break;
        case "취업":
          baseStyle += " border-color: #28B1CD;";
          if (isSelected) baseStyle += " background-color: #28B1CD; color: #fff;";
          else baseStyle += " color: #28B1CD;";
          break;
        case "기타":
          baseStyle += " border-color: #FF3708;";
          if (isSelected) baseStyle += " background-color: #FF3708; color: #fff;";
          else baseStyle += " color: #FF3708;";
          break;
      }
      return baseStyle;
    },
    async submitData() {
      const newData = {
        userId: 1, // 예시로 사용자 ID를 하드코딩
        userName: "홍길동", // 예시로 사용자 이름을 하드코딩
        contactType: this.selectedCategory,
        contactTitle: this.form.title, // 제목 추가
        contactContents: this.form.content,
        contactPostedDate: new Date().toISOString().split("T")[0], // 현재 날짜
        adminId: 2, // 예시로 관리자 ID를 하드코딩
        adminName: "관리자", // 예시로 관리자 이름을 하드코딩
        responseTitle: "",
        responseContents: "",
        responsePostedDate: "",
        responseStatus: "대기",
        answerContent: "",
      };

      try {
        const response = await axios.post("http://localhost:8083/inquiry", newData);
        // 성공 시 alert 메시지 표시
        alert("작성 완료!");
        this.$router.push("/history");
        this.resetForm();
      } catch (error) {
        // 오류 시 alert 메시지 표시
        alert("작성 실패! 다시 입력해주세요!");
        console.error("제출 오류:", error.response ? error.response.data : error.message);
      }
    },
    resetForm() {
      this.form = {
        title: "",
        content: "",
      };
      this.selectedCategory = "";
    },
  },
};
</script>

<style scoped>
.category-section {
  margin: 10px;
  display: inline-block;
  background-color: #f9f9f9;
  font-size: 20px;
}

.category-btn {
  margin: 5px;
}
</style>
