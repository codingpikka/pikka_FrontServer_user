


<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <div origin="center" mode="out-in" :duration="250">
                <router-view/>
            </div>
            
        </main>
        <router-view name="footer"></router-view>
        <button @click="handler">등록하기 </button>
    </div>

</template>

<script setup>


const handler = () =>{
  fetch("http://localhost:8083/api/hello")
  .then(reponse => reponse.json())
  .then(data => {
    console.log(data);
    
  })
}

</script>