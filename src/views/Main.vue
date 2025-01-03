<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { movieService } from '../services/movie.service'
import cTag from '../components/Tag.vue'
import { useRouter } from 'vue-router'
import type { IMovie } from '@/types/interfaces'
import iconStart from '@/assets/iconStart.vue'
import iconMovie from '@/assets/iconMovie.vue'
import iconClock from '@/assets/iconClock.vue'

defineOptions({
  name: 'main-page',
})

const movies = ref<IMovie[]>([])
const router = useRouter()

onMounted(async () => {
  movies.value = await movieService.getAll()
})

const getRatingColor = (rating: number) => {
  if (rating < 3) return '#e81a0c'
  if (rating < 7) return '#702bfe'
  return '#039c55'
}

const goToMovieDetails = (movieId: number) => {
  router.push({ name: 'movieDetails', params: { id: movieId } })
}
</script>

<template>
  <div class="movie-list container">
    <div
      v-for="movie in movies"
      :key="movie.id"
      class="movie-card"
      @click="goToMovieDetails(movie.id)"
    >
      <div class="img">
        <img :src="movie.poster" :alt="movie.name" />
      </div>
      <div class="text">
        <h2 class="title">{{ movie.name }}</h2>
        <div class="description">{{ movie.description }}</div>
      </div>
      <div class="tag-list">
        <c-tag :color="getRatingColor(movie.rating)">
          <template #icon>
            <iconStart />
          </template>
          {{ movie.rating.toFixed(1) }}
        </c-tag>
        <c-tag color="#2c81fb">
          <template #icon>
            <iconMovie />
          </template>
          {{ movie.genre }}
        </c-tag>
        <c-tag color="#702bfe">
          <template #icon>
            <iconClock />
          </template>
          {{ movie.duration }}
        </c-tag>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding-top: 32px;
  padding-bottom: 32px;

  @media screen and (min-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.movie-card {
  height: 306px;
  background: #292d32;
  border-radius: 16px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
}
.img {
  height: 172px;
  min-height: 172px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tag-list {
  display: flex;
  margin-top: auto;
  gap: 8px;
}
</style>
