import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { use } from "vue/types/umd";

import axios from "axios";

export const useJobStore = defineStore("job", ()=>{
    const router = useRouter();
    const jobs = ref([{}]);
    const detailsJob = reactive({});
    const postJob = reactive({
        job_id: "",
        job_company_name: "",
        job_info_title: "",
        job_wage_type: "",
        job_salary: "",
        job_location: "",
        job_employment_type: "",
        job_posted_date: "",
        job_closing_date: "",
        job_web_info_url: "",
        job_mobile_info_url: ""

    })

})

const jobHandler = () => { // 조회용
    axios.get(import.meta.env.VITE_API_URL + "/jobs")
      .then(response => {
        jobs.value = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the job data:", error);
      });
  };

  const getJobDetail = (jobId) => { // 상세 조회용
    axios.get(`${import.meta.env.VITE_API_URL}/jobs/${jobId}`)
      .then(response => {
        Object.assign(detailsJob, response.data);
      })
      .catch(error => {
        console.error(`There was an error fetching the job detail for job ID ${jobId}:`, error);
      });
  };

  return {
    jobs,
    detailsJob,
    postJob,
    jobHandler,
    getJobDetail
  };

