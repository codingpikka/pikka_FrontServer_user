<template>
  <div style="margin: 5% 10%;">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        class="col"
        v-for="card in cards"
        :key="card.id"
        @click="goToDetail(card.id)"
        style="border: 1px solid black; margin: 15px; box-shadow: 5px 5px 5px; cursor: pointer;"
      >
        <div class="card h-100">
          <img
            :src="card.img"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, img: require('../../../../public/img/brand/mang.png'), title: 'Card title 1', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' },
        { id: 2, img: require('../../../../public/img/brand/mang.png'), title: 'Card title 2', text: 'This is a short card.' },
        { id: 3, img: require('../../../../public/img/brand/mang.png'), title: 'Card title 3', text: 'This is a longer card with supporting text below as a natural lead-in to additional content.' },
        { id: 4, img: require('../../../../public/img/brand/mang.png'), title: 'Card title 4', text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' }
      ]
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'certificationDetail', params: { id } });
    }
  }
};
</script>

<style>
/* 스타일링은 필요에 따라 추가하세요 */
</style>
