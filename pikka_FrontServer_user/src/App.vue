


<template>
    <div id="app">
        <router-view name="header"></router-view>
        <main>
            <div origin="center" mode="out-in" :duration="250">
                <router-view/>
            </div>
            
        </main>
        <router-view name="footer"></router-view>
    </div>

</template>

<script setup>


</script>