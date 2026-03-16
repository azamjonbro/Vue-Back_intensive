<template>
  <div class="page">
    <div class="bg-blur"></div>

    <div class="glass-card">
      <h1 class="title">Welcome Back</h1>
      <p class="subtitle">Sign in to continue</p>

      <form @submit.prevent="login">
        <div class="input-group">
          <input v-model="email" type="email" required />
          <label>Email</label>
        </div>

        <div class="input-group">
          <input v-model="password" type="password" required />
          <label>Password</label>
        </div>

        <button class="login-btn">
          <span>Login</span>
        </button>
      </form>

      <p class="footer">© 10B Years Vue Mastery</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")

const login = () => {
  console.log({
    email: email.value,
    password: password.value
  })
}
</script>

<style scoped>
/* ===== RESET ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", system-ui, sans-serif;
}

/* ===== PAGE ===== */
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

/* ===== MOVING BACKGROUND ===== */
.bg-blur {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, #00c6ff, #0072ff);
  filter: blur(120px);
  animation: float 8s ease-in-out infinite alternate;
}

/* ===== GLASS CARD ===== */
.glass-card {
  width: 360px;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
  animation: cardIn 1s ease forwards;
  z-index: 2;
}

/* ===== TEXT ===== */
.title {
  color: #fff;
  font-size: 28px;
  text-align: center;
}

.subtitle {
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin-bottom: 30px;
}

/* ===== INPUTS ===== */
.input-group {
  position: relative;
  margin-bottom: 24px;
}

.input-group input {
  width: 100%;
  padding: 14px 12px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  outline: none;
  border-radius: 12px;
  color: #fff;
  font-size: 15px;
}

.input-group label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: 0.3s ease;
  font-size: 14px;
}

.input-group input:focus + label,
.input-group input:valid + label {
  top: -8px;
  left: 10px;
  font-size: 12px;
  color: #00e0ff;
}

/* ===== BUTTON ===== */
.login-btn {
  width: 100%;
  padding: 14px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 114, 255, 0.6);
}

.login-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.25);
  opacity: 0;
  transition: opacity 0.3s;
}

.login-btn:hover::after {
  opacity: 1;
}

/* ===== FOOTER ===== */
.footer {
  margin-top: 24px;
  text-align: center;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
}

/* ===== ANIMATIONS ===== */
@keyframes float {
  from {
    transform: translate(-100px, -50px);
  }
  to {
    transform: translate(100px, 50px);
  }
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
