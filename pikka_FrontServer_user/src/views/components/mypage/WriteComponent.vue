<template>
  <section
    class="section section-shaped section-lg my-0"
    style="background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
  >
    <div class="container pt-lg-md">
      <div
        class=""
        style="display: flex; justify-content: center; padding: 20px; font-size: 30px;"
      >
        글쓰기
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-10"
            body-classes="px-lg-5 py-lg-10"
            class="border"
            style="width: 100%; height: 1000px;"
          >
            <form @submit.prevent="submitData" role="form">
              <div class="form-group">
                <input
                  id="title"
                  v-model="form.title"
                  type="text"
                  class="form-control"
                  placeholder="제목을 입력하세요"
                />
              </div>
              <div class="form-group">
                <input
                  id="thumbnail"
                  v-model="form.thumbnail"
                  type="text"
                  class="form-control"
                  placeholder="썸네일 입력하세요"
                />
              </div>
              <div class="form-group">
                <input
                  id="background"
                  v-model="form.background"
                  type="text"
                  class="form-control mb-3"
                  placeholder="배경 이미지 URL을 입력하세요"
                />
              </div>
              <div style="border-bottom: 0.3px solid gray;"></div>
              <textarea
                id="content"
                class="form-control mb-3"
                placeholder="내용"
                style="height: 700px; width: 100%; margin-top: 15px;"
                v-model="form.content"
              ></textarea>
              
                <div class="text-center">
                  <div class="text-center">

                    <button
                      type="$emit"
                      class="btn btn-primary"
                      style="background-color: #0ECDEF;"
                    >
                    등록하기
                    </button>
                  </div>
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
      form: {
        title: "",
        thumbnail: "",
        background: "",
        content: "",
      },
      message: "",
      messageType: "",
    };
  },
  methods: {
    async submitData() {
      // 폼 데이터 준비
      const newData = {
        title: this.form.title,
        thumbnail: this.form.thumbnail,
        background: this.form.background,
        content: this.form.content,
      };

      try {
      const response = await axios.post('http://localhost:8003/data', newData);
      alert('작성 완료!');
    
      this.$router.push('/history');
      this.resetForm();
    } catch (error) {
      alert('작성 실패! 다시 확인해주세요!');
      console.error('제출 오류:', error.response ? error.response.data : error.message);
    }
    },
    resetForm() {
      this.form = {
        title: "",
        thumbnail: "",
        background: "",
        content: "",
      };
    },
  },
};
</script>




<style></style>
