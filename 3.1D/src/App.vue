<style scoped>

.container {
  display: top;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  background-color: lightblue;
  width: 100%;
}


.logo-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.logo {
  display: block;
  margin: 0 auto;
}

header {
  background-color: green;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
}

nav {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-buttons {
  display: flex;
  flex-direction: row; /* Buttons side by side */
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  font-size: 2rem;
}
.content {
  display: block;
  width: 100%;
  padding: 1rem;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  text-align: center;
  transition: background-color 0.3s; /* Add hover animation */
}

nav a.router-link-exact-active {
  background-color: transparent;
  border-color: green; /* Highlight active link */
  color: var(--color-text);
}

nav a:hover {
  background-color: lightgreen; /* Background color on hover */
  border-color: green; /* Border color on hover */
  color: var(--color-text);
}

@media (min-width: 1024px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  header {
    padding: 1rem 2rem;
  }

  nav {
    flex-direction: row;
    align-items: center;
    margin-left: 2rem;
    font-size: 1rem;
  }
}

.main-content {
  display: flex; /* Display content side by side */
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 1rem;
  width: 100%;
}
@media (max-width: 1000px) {
  .nav-buttons {
    flex-direction: column; /* Buttons stack vertically on smaller screens */
  }
}
</style>
<template>
  <div class="container">
    <header>
      <nav :class="{ 'vertical-nav': screenWidth <= 1000 }">
        <div class="logo-container">
          <RouterLink to="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo2.png" width="125" height="125" />
          </RouterLink>
        </div>
        <div class="nav-buttons">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/todolist">Todo</RouterLink>
          <RouterLink to="/about">Location</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
        </div>
      </nav>
    </header>

    <main>
      <div class="content">
        <RouterView />
      </div>
    </main>
  </div>
</template>



<script>
import { ref, watch } from 'vue';

export default {
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  setup() {
    const screenWidth = ref(window.innerWidth);

    return {
      screenWidth,
    };
  },
}; 
  // Watch for window resize events and update screenWidth
watch(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
});
</script>
