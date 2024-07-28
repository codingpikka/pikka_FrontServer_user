
<template>
    <div>

    <PostBanner></PostBanner>
    <PostContent></PostContent>
    <router-view></router-view>


    </div>
 
</template>

<script>
import PostBanner from './components/post/PostBanner.vue';
import PostContent from './components/post/PostContent.vue';



export default {
  name: "jobPage",
  components: {
    PostBanner,
    PostContent
  }
};

</script>