<template>
  <section>
    <img src="@/assets/img/TODO_full_logo.png" alt="error">
    <h2>Oops! This page doesn’t seem to exist.</h2>
    <p>But, don't panic! Yo cann still go to the <router-link to="/">home page</router-link>.</p>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
}
img {
  margin: 40px auto;
  width: 400px;
}

h2 {
  margin: 0;
}
</style>
  