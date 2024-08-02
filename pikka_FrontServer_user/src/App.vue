


<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
            
        </main>
        <router-view name="footer"></router-view>
        <button @click="handler">등록하기 </button>
    </div>

</template>

<script setup>
// import { FadeTransition } from "vue2-transitions";

// export default {
//   components: {
//     FadeTransition,
//     methods: {
//       handler : ()=>{
//         console.log("dfdf")
//       }
//     },
//   }
// };


const handler = () =>{
  fetch("http://localhost:8083/api/hello")
  .then(reponse => reponse.json())
  .then(data => {
    console.log(data);
    
  })
}

</script>