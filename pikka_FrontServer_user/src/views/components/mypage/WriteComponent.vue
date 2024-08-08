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
              <div style="border-bottom: 0.3px solid gray;"></div>
              <textarea
                id="content"
                class="form-control mb-3"
                placeholder="내용"
                style="height: 700px; width: 100%; margin-top: 15px;"
                v-model="form.content"
              ></textarea>
              
              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="background-color: #0ECDEF;"
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
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      form: {
        title: "",
        thumbnail: "",
        content: "",
      },
    };
  },
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:8083/api/post');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async submitData() {
      // 폼 데이터 유효성 검사
      if (!this.form.title || !this.form.thumbnail || !this.form.content) {
        alert('빈 값을 입력할 수 없습니다. 다시 입력해주세요!');
        return;
      }
      // 폼 데이터 준비
      const postDTO = {
        title: this.form.title,
        thumbnail: this.form.thumbnail,
        content: this.form.content,
      };
      try {
        const response = await axios.post('http://localhost:8083/api/post', postDTO);
        console.log('Data posted successfully:', response.data);
        alert('작성 완료!');
        this.resetForm();
        this.$router.push('/history');
      } catch (error) {
        console.error('Error posting data:', error);
        alert('작성 실패! 다시 확인해주세요!');
      }
    },
    resetForm() {
      this.form = {
        title: "",
        thumbnail: "",
        content: "",
      };
    },
  },
};
</script>

<style></style>