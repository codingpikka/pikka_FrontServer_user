
<template>
    <div>

    <CertiBanner></CertiBanner>
    <CertiContent></CertiContent>
    <router-view></router-view>


    </div>
 
</template>

<script>
import CertiBanner from './components/certification/CertifiBanner.vue';
import CertiContent from './components/certification/CertifiContent.vue';



export default {
  name: "jobPage",
  components: {
    CertiBanner,
    CertiContent
  }
};

</script>
