<template>
  <div class="auth">
    <!-- soft moving blobs -->
    <div class="blob b1" aria-hidden="true"></div>
    <div class="blob b2" aria-hidden="true"></div>
    <div class="blob b3" aria-hidden="true"></div>

    <main class="wrap">
      <section class="card" :class="{ shake: shakeIt }">
        <header class="head">
          <div class="logo" aria-hidden="true">
            <span class="dot"></span>
          </div>
          <h1 class="title">Kirish</h1>
          <p class="subtitle">Hisobingizga xavfsiz kiring</p>
        </header>

        <form class="form" @submit.prevent="onSubmit">
          <label class="field">
            <span class="label">Username</span>
            <div class="control" :class="{ focused: focus.username }">
              <span class="icon" aria-hidden="true">👤</span>
              <input
                v-model.trim="form.username"
                type="text"
                autocomplete="username"
                placeholder="masalan: azamjon"
                @focus="focus.username = true"
                @blur="focus.username = false"
                required
              />
            </div>
          </label>

          <label class="field">
            <span class="label">Parol</span>
            <div class="control" :class="{ focused: focus.password }">
              <span class="icon" aria-hidden="true">🔒</span>
              <input
                v-model="form.password"
                :type="showPass ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="••••••••"
                @focus="focus.password = true"
                @blur="focus.password = false"
                required
              />
              <button
                type="button"
                class="eye"
                @click="showPass = !showPass"
                :aria-label="showPass ? 'Parolni yashirish' : 'Parolni ko‘rsatish'"
              >
                {{ showPass ? "🙈" : "👁️" }}
              </button>
            </div>
          </label>

          <div class="row">
            <label class="check">
              <input type="checkbox" v-model="form.remember" />
              <span>Remember me</span>
            </label>

            <a class="link" href="#" @click.prevent="onForgot">Parolni unutdingizmi?</a>
          </div>

          <transition name="fadeUp">
            <p v-if="error" class="error" role="alert">
              {{ error }}
            </p>
          </transition>

          <button class="btn" role="button" @click="Submit" :disabled="loading">
            <span v-if="!loading">Kirish</span>
            <span v-else class="loader" aria-hidden="true"></span>
          </button>

          <p class="foot">
            Akkauntingiz yo‘qmi?
            <a class="link" href="#" @click.prevent="onRegister">Ro‘yxatdan o‘tish</a>
          </p>
          <div v-for="item in dacha.reverse()">
            {{item.name}}
            </div>
        </form>
        

        <!-- bottom shine -->
        <div class="shine" aria-hidden="true"></div>
      </section>
    </main>
  </div>
</template>

<script>
import api from "@utils/api.js"
export default {
  name: "LoginGlass",

  data() {
    return {
      form: {
        username: "",
        password: "",
        remember: true,
      },

      focus: {
        username: false,
        password: false,
      },

      showPass: false,
      loading: false,
      error: "",
      shakeIt: false,
      dacha:[]
    };
  },

  mounted() {
    console.log("🔐 Login page mounted");

    const savedUser = localStorage.getItem("remember_username");
    if (savedUser) {
      this.form.username = savedUser;
    }
  },

  methods: {
    shake() {
      this.shakeIt = true;
      setTimeout(() => {
        this.shakeIt = false;
      }, 520);
    },

    validate() {
      if (!this.form.username || this.form.username.length < 3) {
        return "Username kamida 3 ta belgidan iborat bo‘lsin.";
      }
      if (!this.form.password || this.form.password.length < 6) {
        return "Parol kamida 6 ta belgidan iborat bo‘lsin.";
      }
      return "";
    },

    async Submit() {
      this.error = "";

      const msg = this.validate();
      if (msg) {
        this.error = msg;
        this.shake();
        return;
      }

      this.loading = true;
      try {
        let res = await api.post("/auth/login",JSON.stringify(this.form))
        localStorage.setItem("token", res?.data?.token)
        this.loading=false
        // this.$router.push("/")
        let rest = await api.get("/dacha")
        this.dacha = rest.data.data
        
      } catch (error) {
        
      }

    },

    /* ===== EXTRA ACTIONS ===== */
    onForgot() {
      alert("Forgot password flow (demo).");
      // this.$router.push("/forgot-password")
    },

    onRegister() {
      alert("Register flow (demo).");
      // this.$router.push("/register")
    },
  },
};
</script>


<style scoped>
/* ============ RESET / BASE ============ */
.auth {
  min-height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
  color: rgba(255, 255, 255, 0.92);
  background: radial-gradient(1200px 800px at 10% 10%, rgba(130, 255, 240, 0.16), transparent 55%),
              radial-gradient(900px 700px at 90% 20%, rgba(120, 140, 255, 0.18), transparent 60%),
              radial-gradient(1000px 900px at 60% 90%, rgba(255, 140, 200, 0.16), transparent 60%),
              linear-gradient(120deg, #0b1220, #090b12 55%, #05060b);
}

.wrap {
  width: min(92vw, 420px);
  padding: 26px 0;
  animation: pageIn 700ms cubic-bezier(.2,.9,.2,1) both;
}

/* ============ BLOBS ============ */
.blob {
  position: absolute;
  filter: blur(22px);
  opacity: 0.75;
  mix-blend-mode: screen;
  border-radius: 999px;
  transform: translateZ(0);
}

.b1 {
  width: 340px;
  height: 340px;
  left: -120px;
  top: -90px;
  background: radial-gradient(circle at 30% 30%, rgba(0, 255, 210, 0.55), rgba(0, 120, 255, 0.08) 60%, transparent 70%);
  animation: float1 10s ease-in-out infinite;
}

.b2 {
  width: 360px;
  height: 360px;
  right: -140px;
  top: 80px;
  background: radial-gradient(circle at 30% 30%, rgba(150, 120, 255, 0.55), rgba(0, 255, 255, 0.07) 60%, transparent 70%);
  animation: float2 12s ease-in-out infinite;
}

.b3 {
  width: 420px;
  height: 420px;
  left: 20%;
  bottom: -220px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 120, 190, 0.52), rgba(255, 255, 255, 0.06) 60%, transparent 70%);
  animation: float3 14s ease-in-out infinite;
}

/* ============ CARD (GLASS) ============ */
.card {
  position: relative;
  border-radius: 22px;
  padding: 26px 22px 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
  border: 1px solid rgba(255,255,255,0.16);
  box-shadow:
    0 20px 60px rgba(0,0,0,0.52),
    inset 0 1px 0 rgba(255,255,255,0.18);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  overflow: hidden;
  transform: translateZ(0);
}

.card::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: radial-gradient(600px 220px at 20% 0%, rgba(255,255,255,0.16), transparent 60%),
              radial-gradient(420px 220px at 90% 10%, rgba(120, 255, 240, 0.10), transparent 62%),
              radial-gradient(420px 240px at 70% 110%, rgba(255, 140, 200, 0.10), transparent 60%);
  pointer-events: none;
  opacity: 0.85;
}

.shine {
  position: absolute;
  left: -40%;
  bottom: -55%;
  width: 180%;
  height: 140%;
  background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.14), transparent 58%);
  transform: rotate(12deg);
  pointer-events: none;
  animation: shine 8s ease-in-out infinite;
}

/* ============ HEADER ============ */
.head {
  position: relative;
  text-align: center;
  padding-bottom: 12px;
  animation: fadeUpIn 700ms 60ms cubic-bezier(.2,.9,.2,1) both;
}

.logo {
  width: 54px;
  height: 54px;
  margin: 0 auto 10px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(0,255,210,0.18), rgba(150,120,255,0.14));
  border: 1px solid rgba(255,255,255,0.18);
  backdrop-filter: blur(14px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.35);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
}

.logo::after{
  content:"";
  position:absolute;
  inset:-40%;
  background: linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.18), transparent 55%);
  transform: rotate(25deg);
  animation: sweep 3.4s ease-in-out infinite;
}

.dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  box-shadow: 0 0 20px rgba(120, 255, 240, 0.55);
}

.title {
  margin: 0;
  font-size: 26px;
  letter-spacing: 0.2px;
}

.subtitle {
  margin: 6px 0 0;
  font-size: 13.5px;
  color: rgba(255,255,255,0.74);
}

/* ============ FORM ============ */
.form {
  position: relative;
  margin-top: 12px;
  animation: fadeUpIn 720ms 120ms cubic-bezier(.2,.9,.2,1) both;
}

.field {
  display: grid;
  gap: 8px;
  margin: 14px 0;
}

.label {
  font-size: 12px;
  color: rgba(255,255,255,0.78);
}

.control {
  display: grid;
  grid-template-columns: 34px 1fr auto;
  align-items: center;
  gap: 8px;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease, box-shadow 180ms ease;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.10);
}

.control:hover {
  border-color: rgba(255,255,255,0.22);
}

.control.focused {
  border-color: rgba(120, 255, 240, 0.38);
  box-shadow:
    0 0 0 4px rgba(120, 255, 240, 0.10),
    inset 0 1px 0 rgba(255,255,255,0.14);
  transform: translateY(-1px);
}

.icon {
  opacity: 0.9;
  font-size: 16px;
  text-align: center;
}

.control input {
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.92);
  font-size: 14px;
  padding: 0;
}

.control input::placeholder {
  color: rgba(255,255,255,0.46);
}

.eye {
  border: none;
  background: transparent;
  color: rgba(255,255,255,0.85);
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 10px;
  transition: background 160ms ease, transform 160ms ease;
}

.eye:hover {
  background: rgba(255,255,255,0.08);
  transform: translateY(-1px);
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 8px 0 10px;
}

.check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255,255,255,0.78);
  user-select: none;
}

.check input {
  accent-color: rgba(120, 255, 240, 0.9);
}

.link {
  font-size: 13px;
  color: rgba(120, 255, 240, 0.92);
  text-decoration: none;
  position: relative;
}

.link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: rgba(120, 255, 240, 0.55);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms ease;
}

.link:hover::after {
  transform: scaleX(1);
}

.error {
  margin: 10px 0 0;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(255, 70, 100, 0.12);
  border: 1px solid rgba(255, 70, 100, 0.22);
  color: rgba(255,255,255,0.92);
  font-size: 13px;
}

/* ============ BUTTON ============ */
.btn {
  width: 100%;
  border: none;
  cursor: pointer;
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 14px;
  color: rgba(10, 12, 18, 0.92);
  font-weight: 700;
  letter-spacing: 0.2px;
  background: linear-gradient(135deg, rgba(120, 255, 240, 0.95), rgba(150, 120, 255, 0.90));
  box-shadow: 0 14px 40px rgba(0,0,0,0.45);
  transition: transform 160ms ease, filter 160ms ease, opacity 160ms ease;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: linear-gradient(120deg, transparent 45%, rgba(255,255,255,0.40), transparent 55%);
  transform: rotate(20deg);
  opacity: 0.55;
  left: -120%;
}

.btn:hover::before {
  animation: sweepBtn 800ms ease forwards;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.03);
}

.btn:active {
  transform: translateY(0px) scale(0.99);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}

.loader {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(10,12,18,0.35);
  border-top-color: rgba(10,12,18,0.92);
  animation: spin 800ms linear infinite;
}

.foot {
  margin: 14px 0 0;
  text-align: center;
  font-size: 13px;
  color: rgba(255,255,255,0.72);
}

/* ============ ANIMATIONS ============ */
@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pageIn {
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float1 {
  0%,100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(40px, 26px) scale(1.06); }
}
@keyframes float2 {
  0%,100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(-30px, 22px) scale(1.07); }
}
@keyframes float3 {
  0%,100% { transform: translate(0,0) scale(1); }
  50% { transform: translate(20px, -18px) scale(1.05); }
}

@keyframes sweep {
  0%, 55% { transform: translateX(-25%) rotate(25deg); opacity: 0; }
  70% { opacity: 0.75; }
  100% { transform: translateX(55%) rotate(25deg); opacity: 0; }
}

@keyframes sweepBtn {
  from { left: -120%; }
  to { left: 120%; }
}

@keyframes shine {
  0%,100% { transform: rotate(12deg) translateY(0); opacity: 0.55; }
  50% { transform: rotate(12deg) translateY(-10px); opacity: 0.75; }
}

/* Shake on error */
.shake {
  animation: shake 520ms cubic-bezier(.36,.07,.19,.97) both;
}
@keyframes shake {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-4px); }
  40%, 60% { transform: translateX(4px); }
}

/* Vue transition */
.fadeUp-enter-active, .fadeUp-leave-active {
  transition: opacity 220ms ease, transform 220ms ease;
}
.fadeUp-enter-from, .fadeUp-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 420px) {
  .card { padding: 22px 18px 18px; border-radius: 20px; }
  .row { flex-direction: column; align-items: flex-start; }
}
</style>
