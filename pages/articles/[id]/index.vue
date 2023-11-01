<script setup>
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })


const route = useRoute();
const articleId = route.params.id;

const {
    questions,
    newQuestion,
    articleQuestions,
    createQuestion,
    deleteQuestion
} = useQuestion(articleId)

const { article, getArticle } = useArticle()

getArticle(articleId)

const filter = ref('');
const filteredQuestions = computed(
    () => articleQuestions.value.filter((a) => a.title.toLowerCase().includes(filter.value.toLowerCase()))
)

const answer = ref();

const options = ref([])
const addOption = () => options.value.push('');
const removeOption = (index) => options.value.splice(index, 1);


function storeQuestion() {
    newQuestion.options = options.value
    if (answer.value) newQuestion.answer = answer.value;

    if (createQuestion({ ...unref(newQuestion) })) {
        options.value = []
    }
}

</script>

<template>
    <div class="w-4/5 h-full py-5 space-y-6">
        <NavBar />

        <DashboardStats />

        <div class="lg:h-3/4 bg-gray-800 p-5">
            <div class="py-8">
                <button class="btn float-right bg-indigo-700 hover:bg-indigo-600 " onclick="my_modal_3.showModal()">
                    New Question
                </button>
                <h2 class="text-2xl uppercase tracking-widest">
                    {{ article.title }}
                </h2>
            </div>
            <hr class="bg-gray-900 opacity-20">

            <div>
                <ArticleTable :data="filteredQuestions" @delete="deleteQuestion" v-model="filter" :is-question="true" />
            </div>
        </div>

        <!-- You can open the modal using ID.showModal() method -->

        <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form>
                    <button type="button" onclick="my_modal_3.close()"
                        class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg">Hello!</h3>
                <p class="py-4">Press ESC key or click on ✕ button to close</p>
                <hr>
                <form class="mt-5 space-y-6" @submit.prevent="storeQuestion">
                    <div>
                        <label for="title">Question</label>
                        <input v-model="newQuestion.title" type="text" placeholder="Question title"
                            class="input input-bordered input-primary w-full" />
                    </div>
                    <div class="space-y-2">
                        <div v-for="(opt, i) in options" :key="i">
                            <label :for="`title-${i}`">Option {{ i + 1 }}</label>
                            <div class="flex space-x-5">
                                <input type="text" :placeholder="`Option ${i + 1}`" v-model="options[i]"
                                    class="input input-bordered input-primary w-full h-9" />
                                <label class="label cursor-pointer space-x-2">
                                    <input type="checkbox" v-model="answer" :true-value="opt"
                                        class="checkbox checkbox-primary" />
                                    <span class="label-text">correct</span>
                                </label>
                                <button type="button" class="bg-red-500 p-2 rounded-lg" @click="removeOption(i)">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <button type="button" class="btn btn-link" @click="addOption">add More options</button>
                    </div>
                    <button type="submit" onclick="my_modal_3.close()"
                        class="btn bg-indigo-600 hover:bg-indigo-800">Submit</button>
                </form>
            </div>
        </dialog>
    </div>
</template>