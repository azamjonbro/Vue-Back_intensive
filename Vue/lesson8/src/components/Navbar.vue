<template >
    <header>
        <router-link to="/" class="logo">
            <h1>My Website</h1>
        </router-link>
        <nav>
            <ul>
                <li><router-link to="/">{{ $t("home") }}</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </nav>
        <div class="buttonbox">
            <div class="lang">
                <button class="lang-button" @click="changeLang('en')">EN</button>
                <button class="lang-button"@click="changeLang('uz')">UZ</button>
            </div>
            <button class="login-button">Login</button>
            <button class="signup-button">Sign Up</button>
        </div>
        
    </header>
</template>
<script>
export default {
    methods:{
        changeLang(lang){
            this.$i18n.locale  = lang;
            localStorage.setItem("lang",lang)
        }
    }
}
</script>
<style >
    
</style>