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
          <template v-if="isEditing">
                  <!-- 수정 폼 -->
                  <form @submit.prevent="updatePost" class="edit-form">
                    <div class="form-group">
                      <label for="title">제목</label>
                      <input
                        type="text"
                        v-model="editForm.title"
                        id="title"
                        class="form-control"
                        placeholder="제목을 입력하세요"
                      />
                    </div>
                    <div class="form-group">
                      <label for="thumbnail">썸네일</label>
                      <input
                        type="text"
                        v-model="editForm.thumbnail"
                        id="thumbnail"
                        class="form-control"
                        placeholder="썸네일 URL을 입력하세요"
                      />
                    </div>
                    <div class="form-group">
                      <label for="content">내용</label>
                      <textarea
                        v-model="editForm.content"
                        id="content"
                        class="form-control"
                        placeholder="내용을 입력하세요"
                      ></textarea>
                    </div>
                    <div class="form-actions">
                      <button type="submit" class="btn btn-primary">수정하기</button>
                      <button @click="cancelEdit" class="btn btn-secondary">취소</button>
                    </div>
                  </form>
                </template>

            <template v-else>
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
                    <div class="info-actions">수정/삭제</div>
                  </div>

                  <div v-for="item in data" :key="item.id" class="info-row">
                    <div class="info-title">{{ item.title }}</div>
                    <div class="info-thumbnail">{{ item.thumbnail }}</div>
                    <div class="info-content">
                      {{ getTruncatedContent(item.content) }}
                      <button
                        v-if="item.content.length > 5"
                        @click="toggleContent(item.id)"
                        :class="['more-button', { active: isContentVisible(item.id) }]"
                      >
                        {{ isContentVisible(item.id) ? '접기' : '더 보기' }}
                      </button>
                      <div v-if="isContentVisible(item.id)">
                        {{ item.content }}
                      </div>
                    </div>
                    <div class="info-actions">
                      <button @click="startEdit(item)" class="edit-button">
                        <i class="fa fa-edit"></i>
                      </button>
                      <button @click="confirmDeletePost(item.id)" class="delete-button">
                        <i class="fa fa-trash"></i>
                      </button>
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
      data: [],
      inquiryItems: [],
      activeButton: '작성내역',
      contentVisibility: {},
      isEditing: false,
      currentPost: null,
      editForm: {
        title: '',
        thumbnail: '',
        content: ''
      }
    };
  },
  components: {
    Card
  },
  mounted() {
    this.fetchData(this.activeButton);
  },
  methods: {
    async fetchData(button) {
      try {
        if (button === '작성내역') {
          const response = await axios.get('http://localhost:8083/api/post');
          this.data = response.data;
        } else if (button === '문의내역') {
          const response = await axios.get('http://localhost:8083/inquiry');
          this.inquiryItems = response.data;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    setActiveButton(button) {
      this.activeButton = button;
      this.fetchData(button);
    },
    getTruncatedContent(content) {
      return content.length > 5 ? content.substring(0, 5) : content;
    },
    toggleContent(id) {
      this.$set(this.contentVisibility, id, !this.contentVisibility[id]);
    },
    isContentVisible(id) {
      return this.contentVisibility[id];
    },
    startEdit(post) {
      this.isEditing = true;
      this.currentPost = post;
      this.editForm = { ...post };
    },
    async updatePost() {
      try {
        await axios.put(`http://localhost:8083/api/post/${this.currentPost.id}`, this.editForm);
        alert('게시글이 성공적으로 수정되었습니다.');
        this.isEditing = false;
        this.fetchData(this.activeButton); // 업데이트된 데이터로 다시 가져오기
      } catch (error) {
        console.error('Error updating post:', error);
        alert('게시글을 수정하는 중 오류가 발생했습니다.');
      }
    },
    cancelEdit() {
      this.isEditing = false;
      this.currentPost = null;
    },
    async confirmDeletePost(id) {
      const confirmed = window.confirm("정말 이 게시글을 삭제하시겠습니까?");
      if (confirmed) {
        this.deletePost(id);
      }
    },
    async deletePost(id) {
      try {
        await axios.delete(`http://localhost:8083/api/post/${id}`);
        this.data = this.data.filter(item => item.id !== id);
        alert("게시글이 성공적으로 삭제되었습니다.");
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("게시글을 삭제하는 중 오류가 발생했습니다.");
      }
    },
    getCategoryStyle(category) {
      switch (category) {
        case '자격증':
          return { color: '#21AF71' };
        case '취업':
          return { color: '#28B1CD' };
        case '기타':
          return { color: '#FF3708' };
        default:
          return {};
      }
    }
  }
};
</script>

<style scoped>
/* 기존 CSS 스타일 */
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
  outline: none; /* 검정 테두리 제거 */
}

/* 새로 추가할 CSS 스타일 */
.more-button {
  background-color: white;
  color: #3fa2f6;
  border: 2px solid white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  outline: none; /* 검정 테두리 제거 */
}

.more-button:hover,
.more-button:focus,
.more-button:active,
.more-button.active {
  background-color: #3fa2f6;
  color: white;
  border: 2px solid #3fa2f6;
  outline: none; /* 검정 테두리 제거 */
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
  overflow: hidden; /* 박스에서 내용이 벗어나지 않도록 함 */
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
  overflow: hidden; /* 박스에서 내용이 벗어나지 않도록 함 */
  word-break: break-word; /* 긴 단어가 박스를 벗어나지 않도록 함 */
  max-height: 100px; /* 최대 높이 설정 */
}

.info-content.expanded {
  max-height: none; /* 펼쳐진 상태에서 최대 높이 해제 */
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

.info-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.edit-button,
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.edit-button i,
.delete-button i {
  font-size: 18px;
}

.edit-button:hover i {
  color: #3fa2f6; /* 수정 버튼 호버 색상 */
}

.delete-button:hover i {
  color: #FF3708; /* 삭제 버튼 호버 색상 */
}

/* 수정 폼 CSS */
.edit-container {
  padding: 20px;
}

.edit-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

textarea.form-control {
  height: 150px;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #3fa2f6;
  color: white;
}

.btn-secondary {
  background-color: #ccc;
  color: black;
}

.btn-primary:hover {
  background-color: #2d8cf0;
}

.btn-secondary:hover {
  background-color: #bbb;
}
</style>