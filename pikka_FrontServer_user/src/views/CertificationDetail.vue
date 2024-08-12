<template>
  <div>
    <CertifiDetailContent :id="id"></CertifiDetailContent>
  </div>
</template>

<script>
import CertifiDetailContent from './components/certification/CertifiDetailContent.vue';

export default {
  name: 'CertificationDetail',
  components: {
    CertifiDetailContent
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  }
};
</script>
