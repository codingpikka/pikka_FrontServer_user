<template>
  <div style="margin: 5% 10%">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col"
        style="border: 1px solid black; margin: 15px; box-shadow: 5px 5px 5px"
      >
        <div class="card h-100">
          <img :src="card.post_img" class="card-img-top" :alt="card.post_title" />
          <div class="card-body">
            <h5 class="card-title">{{ card.post_title }}</h5>
            <p class="card-text">{{ card.post_description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8003/card") // JSON 서버의 엔드포인트 사용
      .then((response) => {
        this.cards = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },
};
</script>
<style>
/* 스타일을 여기에 추가하세요 */
</style>
