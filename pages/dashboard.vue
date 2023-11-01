<script setup>
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })

const { articles, createArticle, deleteArticle } = useArticle();

const filter = ref('');

const filterArticles = computed(
  () => articles.value.filter((a) => a.title.toLowerCase().includes(filter.value.toLowerCase()))
)

</script>
<template>
  <div class="w-4/5 h-full py-5 space-y-6">
    <NavBar />

    <DashboardStats />

    <ArticleTable v-model="filter" :data="filterArticles" path="/articles" @delete="deleteArticle"
      action-label="New Article" />

    <CreateArticleForm @submit="createArticle" />
  </div>
</template>