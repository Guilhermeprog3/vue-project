<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">Sobre</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
header {
  line-height: 1.5;
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
  font-weight: bold;
}

main {
  padding: 1rem;
}
</style>