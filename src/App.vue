<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'

const route = useRouter()

const goHome = () => {
  route.push({ name: 'main' })
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <h1 @click="goHome">Test Task</h1>
      </div>
    </div>
  </header>
  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <h3 class="title">Test Task, 2022</h3>
        <div class="frame">
          <div class="number">518-363-2171 91</div>
          <div class="address">Park St. Fairhope, AL 36532</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.header {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #292d32;
  padding: 31px 0;

  &-inner {
    display: flex;
    align-items: center;
  }

  h1 {
    cursor: pointer;
  }
}

.footer {
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #292d32;
  padding: 31px 0;
  margin-top: auto;

  &-inner {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media screen and (min-width: 991px) {
    &-inner {
      flex-direction: row;
    }
  }
}

.container {
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 991px) {
    padding-left: 48px;
    padding-right: 48px;
  }
}

.frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  > .number {
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }

  @media screen and (min-width: 991px) {
    display: block;
  }
}
</style>
