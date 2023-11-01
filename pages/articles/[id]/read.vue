<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { toRaw } from 'vue';

const route = useRoute();
const { article, getArticle } = useArticle();
getArticle(route.params.id);

const { articleQuestions } = useQuestion(route.params.id);
const page = ref(0);
const currentQuestion = computed(() => articleQuestions.value[page.value]);

const myAnswers = ref({});
const selectOption = (answer) => myAnswers.value[answer.id] = answer.answer

const result = computed(() => {
    let correctCount = 0;
    for (const question of articleQuestions.value) {
        correctCount += myAnswers.value[question.id] === question.answer
    }

    return correctCount;
})

const percentage = computed(() => Math.floor((result.value / articleQuestions.value.length) * 100));

const noAnswers = computed(() => Object.keys(myAnswers.value).length === 0)

function reset() {
    myAnswers.value = {};
    page.value = 0;
}

</script>

<template>
    <div class="w-3/5 space-y-6">
        <div class="w-full px-4 pt-16">
            <div class="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <span>Reading Text</span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pt-4 pb-2 text-sm space-y-3 text-gray-500">
                        <h4 class="text-md tracking-widest uppercase">{{ article.title }}</h4>
                        <p>{{ article.description }}</p>
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                        <span>Follow-up Task</span>
                        <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-purple-500" />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500 space-y-4">
                        <h4>{{ currentQuestion.title }}</h4>
                        <ul class="space-y-3">
                            <li v-for="(option, i) in currentQuestion.options" :key="i">
                                <label class="flex items-center cursor-pointer space-x-1"
                                    :for="`option-${currentQuestion.id}-${i}`">
                                    <input type="radio" @click="selectOption({ id: currentQuestion.id, answer: option })"
                                        :id="`option-${currentQuestion.id}-${i}`"
                                        :checked="myAnswers[currentQuestion.id] === option" class="radio radio-success" />
                                    <span>{{ option }}</span>
                                </label>
                            </li>
                        </ul>
                        <div class="flex items-center justify-between">
                            <ul class="steps">
                                <template v-for="i in articleQuestions.length" :key="i">
                                    <li class="step" :class="{ 'step-primary': i <= page + 1 }"></li>
                                </template>
                            </ul>

                            <div class="join">
                                <button class="join-item btn disabled:text-gray-500" :disabled="page === 0"
                                    @click="page--">«</button>
                                <button class="join-item btn">Question {{ page + 1 }}</button>
                                <button class="join-item btn disabled:text-gray-500"
                                    :disabled="page === articleQuestions.length - 1" @click="page++">»</button>
                            </div>
                        </div>
                        <hr>
                        <div class="flex w-full space-x-3">
                            <button class="btn btn-sm bg-indigo-600 border-0 text-white disabled:text-gray-500"
                                onclick="my_modal_3.showModal()" :disabled="noAnswers">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                </svg>
                                Finish
                            </button>
                            <button class="btn btn-sm btn-active btn-secondary" @click="reset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                Reset
                            </button>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>

    <dialog id="my_modal_3" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 class="font-bold text-lg">Feedback!</h3>
            <p class="py-4">Total score is {{ result }} out of {{ articleQuestions.length }} ({{ percentage }}%)</p>
        </div>
    </dialog>
</template>