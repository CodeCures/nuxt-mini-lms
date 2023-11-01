<script setup>
import { useArticle } from '@/composables/article';

const { articles } = useArticle()
</script>

<template>
  <div class="space-x-2 space-y-4">
    <div v-for="a in articles" :key="a.id" class="card card-side bg-base-100 shadow-xl">
      <figure><img :src="a.poster" alt="Movie" /></figure>
      <div class="card-body">
        <h2 class="card-title">{{ a.title }}</h2>
        <p class="truncate">{{ a.description }}</p>
        <div class="card-actions justify-end">
          <NuxtLink :to="`articles/${a.id}/read`" class="btn bg-indigo-700 hover:bg-indigo-600">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

