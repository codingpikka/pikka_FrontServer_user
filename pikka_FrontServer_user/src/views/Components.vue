<template>
  <div>
    <Sildcompoent></Sildcompoent>
    <announcementcompoent></announcementcompoent>
    <cardcompoent></cardcompoent>
    <cardcompoent2></cardcompoent2>
  </div>
</template>
<script>
import Sildcompoent from "./components/main/Sildcompoent.vue";
import announcementcompoent from "./components/main/announcementcompoent.vue";
import cardcompoent from "./components/main/cardcompoent.vue";
import cardcompoent2 from "./components/main/cardcompoent2.vue";

export default {
  name: "components",
  components: {
    Sildcompoent,
    announcementcompoent,
    cardcompoent,
    cardcompoent2
  },
};
</script>
