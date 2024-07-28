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
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="제목"
                ></base-input>
                <base-input alternative placeholder="썸네일(img)"></base-input>
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="배경(img)"
                ></base-input>
                <div style="border-bottom: 0.3px solid gray;"></div>
                <textarea
                  class="form-control mb-3"
                  placeholder="내용"
                  style="height: 700px; width: 100%; margin-top: 15px;"
                ></textarea>
                <div class="text-center">
                  <base-button type="primary" style="background-color: #0ECDEF;"
                    >등록하기</base-button
                  >
                </div>
              </form>
            </template>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style></style>
