<script setup>
import { useArticle } from "@/composables/article";
import { unref } from "vue";
const { newArticle } = useArticle();

const { session } = useAuth()

const emits = defineEmits(['submit']);

function submit() {
    if (
        newArticle.title === '' ||
        newArticle.poster === '' ||
        newArticle.description === ''
    ) {
        alert('Please complete all fields!');
        return;
    }

    newArticle.created_by = session.value.user.name;


    emits('submit', { ...unref(newArticle) })
}

</script>

<template>
    <dialog id="my_modal_4" class="modal">
        <div class="modal-box w-3/5">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">Click the button at the bottom-left corner to close</p>
            <div class="modal-action">
                <form @submit.prevent="submit" class="w-full space-y-3">
                    <div class="w-full">
                        <label for="title">Article Title</label>
                        <input type="text" placeholder="Article title" class="input input-bordered input-primary w-full"
                            v-model="newArticle.title" />
                    </div>
                    <div>
                        <label for="poster">Poster</label>
                        <input type="url" id="poster" placeholder="article image"
                            class="input input-bordered input-primary w-full" v-model="newArticle.poster" />
                    </div>
                    <div>
                        <label for="description">Description</label>
                        <textarea class="textarea textarea-primary w-full" placeholder="Description"
                            v-model="newArticle.description"></textarea>
                    </div>
                    <div class="flex justify-between">
                        <button type="button" class="btn" onclick="my_modal_4.close()">Close</button>
                        <button type="submit" onclick="my_modal_4.close()"
                            class="btn bg-indigo-600 hover:bg-indigo-800">Close</button>
                    </div>
                </form>
            </div>
        </div>
    </dialog>
</template>