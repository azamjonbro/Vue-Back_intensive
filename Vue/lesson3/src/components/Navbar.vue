<template lang="">
    <div class="navbar">
        <router-link to="/">Logo</router-link>
        <ul>
            <li>
                <router-link to="/">Home</router-link>

            </li>
            <li>
                <router-link to="/about">About</router-link>
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar>ul{
        display: flex;
        gap: 20px;
        align-items: center;
    }
</style>