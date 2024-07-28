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
                                    <!-- <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button type="default" size="sm" class="float-right">Message</base-button> -->
                                  
                                        <br> 
                                        <br>
                                        

                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <!-- <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>여기는 취업정보 제목입니다    
                            </h3>
                        
                        </div>

                        <div class="content-detail">
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성자 : 김재석(운영자)</div>
                            <div class="h6 mt-4"><i class="ni business_briefcase-24 mr-2"></i> 작성알시 : 2024 - xx - xx</div>
                            
                        </div>
                       


                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                             

                                   <li>회사명:</li>
                                    
                                    <li>채용정보</li>

                                    <li>임금형태</li>

                                    <li>급여</li>

                                    <li>근무형태</li>

                                    <li>등록일자</li>

                                    <li>마감일자</li>

                                    <li>워크넷 채용정보 URL</li>

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
export default {

};
</script>
<style>
.content-detail {
  display: flex;
  justify-content: space-between;
}
</style>
