
<template>
    <div>

    <JobBanner></JobBanner>
    <JobContent></JobContent>

    </div>
 
</template>

<script>
import JobBanner from './components/job/JobBanner.vue';
import JobContent from './components/job/JobContent.vue'


export default {
  name: "job",
  components: {
    JobBanner,
    JobContent
  }
};

</script>
