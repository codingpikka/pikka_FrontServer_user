<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <img v-lazy="'img/theme/job.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <br> 
                                    <br>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>여기는 자격증 정보 제목입니다</h3>
                        </div>
                        <div class="content-detail">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성자 : 김재석(운영자)</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성일시 : 2024 - xx - xx</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <li> 자격증명: {{ certName }}</li>
                                    <li>회차 : {{ certRound }} </li>
                                    <li>원서접수 시작일자 : {{ certApplicationStartDate }}</li>
                                    <li>원서접수 종료일자 : {{ certApplicationEndDate }}</li>
                                    <li>시험 시작 일자 : {{ certExamStartDate }}</li>
                                    <li>시험 종료일자 : {{ certExamEndDate }}</li>
                                    <li>합격자발표 시작일자 : {{ certAnnouncementStartDate }}</li>
                                    <li>합격자 발표 종료일자: {{ certAnnouncementEndDate }}</li>
                                    <br>
                                    <br>
                                    <br>
                                    <br>
                                </div>
                            </div>
                            <div>
                                <div class="h6 mt-4 text-left"> 댓글 </div>
                                <div class="mt-5 py-5 border-top text-center">
                                </div>
                            </div>
                            <div class="col-md-10">
                                <base-input placeholder="댓글을 입력하세요(최대300)" addon-right-icon="ni ni-zoom-split-in"></base-input>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'CertificationDetail',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            certName: "",
            certRound: "",
            certApplicationStartDate: "",
            certApplicationEndDate: "",
            certExamStartDate: "",
            certExamEndDate: "",
            certAnnouncementStartDate: "",
            certAnnouncementEndDate: ""
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios
                .get(`http://localhost:8000/certification/${this.id}`)
                .then((response) => {
                    const data = response.data;
                    this.certName = data.cert_name;
                    this.certRound = data.cert_round;
                    this.certApplicationStartDate = data.cert_application_start_date;
                    this.certApplicationEndDate = data.cert_application_end_date;
                    this.certExamStartDate = data.cert_exam_start_date;
                    this.certExamEndDate = data.cert_exam_end_date;
                    this.certAnnouncementStartDate = data.cert_announcement_start_date;
                    this.certAnnouncementEndDate = data.cert_announcement_end_date;
                })
                .catch((error) => {
                    console.error("오류 발생:", error);
                });
        },
    },
};
</script>

<style>
.content-detail {
  display: flex;
  justify-content: space-between;
}
</style>
