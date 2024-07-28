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
        문의하기
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <card
            type="secondary"
            header-classes="bg-white pb-10"
            body-classes="px-lg-5 py-lg-10"
            class="border"
            style="width: 100%; height: 1000px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);"
          >
            <template>
              <form role="form">
                <base-input
                  alternative
                  class="mb-3"
                  placeholder="제목"
                ></base-input>
                <div
                  class="category-section"
                  style="
                  margin: 10px;
                  display: inline-block;
                  background-color: #f9f9f9;
                  font-size: 20px;
                  "
                >
                  카테고리
                </div>
                <base-button
                  type="neutral"
                  class="category-btn"
                  style=" background-color: #f0f0f0;
                  border: 2px solid #21AF71;
                  color: #21AF71;"
                  >자격증</base-button
                >
                <base-button
                  type="neutral"
                  class="category-btn"
                  style=" background-color: #f0f0f0;
                  border: 2px solid #28B1CD;
                  color: #28B1CD;"
                  >취업</base-button
                >
                <base-button
                  type="neutral"
                  class="category-btn"
                  style=" background-color: #f0f0f0;
                  border: 2px solid #FF3708;
                  color: #FF3708;"
                  >기타</base-button
                >
                <base-input
                  alternative
                  type="file"
                  class="mb-3 mt-3"
                  placeholder="첨부파일"
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
