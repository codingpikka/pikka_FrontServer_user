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
                             <h3>제목입니다</h3>
                        


                             
                        </div>

                        <div class="content-detail">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성자 : 김재석(운영자)</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성알시 : 2024 - xx - xx</div>
                            
                        </div>
                       


                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                             

             
                                    <li>회사명: {{ jobCompanyname }}</li>
                                    <li>채용정보: {{ jobInfoTitle }}</li>
                                    <li>임금형태: {{ jobWageType }}</li>
                                    <li>급여: {{ jobSalary }}</li>
                                    <li>근무지역: {{ jobLocation }}</li>
                                    <li>근무형태: {{ jobEmploymentType }}</li>
                                    <li>등록일자: {{ jobPostedDate }}</li>
                                    <li>마감일자: {{ jobClosingDate }}</li>
                                    <li>
                                        워크넷 웹 채용정보 URL:
                                        <a :href="jobWebInfoUrl">{{ jobWebInfoUrl }}</a>
                                    </li>
                                    <li>
                                        워크넷 모바일 채용정보 URL:
                                        <a :href="jobMobileInfoUrl">{{ jobMobileInfoUrl }}</a>
                                    </li>

                                    <br>
                                    <br>
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
import axios from "axios"

export default {
    data() {
        return {
            jobCompanyname: "",
            jobInfoTitle: "",
            jobWageType: "",
            jobSalary: "",
            jobLocation: "",
            jobEmploymentType: "",
            jobPostedDate: "",
            jobClosingDate: "",
            jobWebInfoUrl: "",
            jobMobileInfoUrl: "",

        }
    },
    mounted(){
        this.fetchData();
    },
    methods: {
        fetchData(){
            axios
            .get("http://localhost:8000/jobdetail")
            .then((response) => {
                const data = response.data[0];
                this.jobCompanyName = data.job_company_name;
                this.jobInfoTitle = data.job_info_title;
                this.jobWageType = data.job_wage_type;
                this.jobSalary = data.job_salary;
                this.jobLocation = data.job_location;
                this.jobEmploymentType = data.job_employment_type;
                this.jobPostedDate = data.job_posted_date;
                this.jobClosingDate = data.job_closing_date;
                this.jobWebInfoUrl = data.job_web_info_url;
                this.jobMobileInfoUrl = data.job_mobile_info_url;

            })
            .catch((error) => {
                console.error("There was an error fetching the data!", error);
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
