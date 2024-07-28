
<template>
    <div>

    <JobBanner></JobBanner>
    <JobContent></JobContent>
    <router-view></router-view>


    </div>
 
</template>

<script>
import JobBanner from './components/job/JobBanner.vue';
import JobContent from './components/job/JobContent.vue';



export default {
  name: "jobPage",
  components: {
    JobBanner,
    JobContent
  }
};

</script>
