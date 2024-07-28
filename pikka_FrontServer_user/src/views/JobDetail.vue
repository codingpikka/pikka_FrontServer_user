// children 으로 어케 만들지?

<template>
    <div>
      <JobDetailContent></JobDetailContent>


    </div>
 
 
</template>


<script>
import JobDetailContent from './components/job/JobDetailContent.vue';

export default {
  name: "jobDetail",
  components: {
    JobDetailContent
  }
};

</script>
