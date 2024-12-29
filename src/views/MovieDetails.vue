<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { movieService } from '../services/movie.service'
import cTag from '../components/Tag.vue'

const route = useRoute()
const movieId = ref(route.params.id)
const movie = ref(null)

onMounted(async () => {
  movie.value = await movieService.getById(movieId)
})

const getRatingColor = (rating: number) => {
  if (rating < 3) return '#e81a0c'
  if (rating < 7) return '#702bfe'
  return '#039c55'
}
</script>

<template>
  <div class="movie-details container" v-if="movie">
    <div class="left-side">
      <span class="title h1">{{ movie.name }}</span>
      <div class="img">
        <img :src="movie.poster" alt="" />
      </div>
      <div class="tag-list">
        <c-tag :color="getRatingColor(movie.rating)">
          {{ movie.rating.toFixed(1) }}
        </c-tag>
        <c-tag color="#2c81fb">
          {{ movie.genre }}
        </c-tag>
        <c-tag color="#702bfe">
          {{ movie.duration }}
        </c-tag>
      </div>
    </div>

    <div class="right-side">
      <span class="h1">Description</span>
      <p>
        {{ movie.description }}
      </p>
      <span class="h1">Trivia</span>
      <ul>
        <li v-for="trivia in movie.trivia" :key="trivia">
          {{ trivia }}
        </li>
      </ul>
      <span class="h1">Actors</span>
      <ul class="actor-list">
        <li v-for="actor in movie.actors" :key="actor" class="actor-item">
          {{ actor.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding-top: 24px;
  padding-bottom: 42px;

  @media screen and (min-width: 991px) {
    gap: 64px;
    display: grid;
    grid-template-columns: 240px 1fr;
    align-items: initial;
  }
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 24px;

  > .img {
    height: 320px;
    border-radius: 8px;
    overflow: hidden;

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  > .tag-list {
    display: flex;
    margin-top: auto;
    gap: 8px;
  }
}

.right-side {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  > p,
  > ul {
    width: 340px;
  }

  @media screen and (min-width: 991px) {
    align-items: initial;
  }
}
.actor-item {
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
}
</style>
