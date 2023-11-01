<script setup>
defineProps(['modelValue', 'data', 'path', 'actionLabel', 'isQuestion'])

const emits = defineEmits(['delete', 'update:modelValue'])
</script>

<template>
    <div class="bg-gray-800 overflow-y-scroll p-3 space-y-3 lg:h-3/4">
        <div class="w-[150px] float-right my-5" v-if="!isQuestion">
            <button class="btn bg-indigo-600 hover:bg-indigo-800" onclick="my_modal_4.showModal()">{{ actionLabel
            }}</button>
        </div>
        <div class="w-full">
            <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text"
                placeholder="Search articles, questions" class="input input-bordered input-primary w-full" />
        </div>
        <div class="overflow-x-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Title</th>
                        <th v-if="isQuestion">Answer</th>
                        <th v-else="isQuestion">Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="item in data" :key="item.id">
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div v-if="!isQuestion" class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img :src="item.poster" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{{ item.title }}</div>
                                    <div class="text-sm opacity-50">
                                        <span v-if="!isQuestion">
                                            {{ item.published ? 'Published' : 'Unpublished' }}
                                        </span>
                                        <span v-else>
                                            {{ item.options }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td v-if="isQuestion">
                            {{ item.answer }}
                        </td>
                        <td v-else="isQuestion">
                            {{ item.created_by }}
                            <br />
                            <span class="badge badge-ghost badge-sm truncate">{{ item.description }}</span>
                        </td>
                        <th class="space-x-3">
                            <NuxtLink :to="`${path}/${item.id}`" v-if="!isQuestion"
                                class="btn btn-circle dark:bg-yellow-500 hover:bg-yellow-800 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>

                            </NuxtLink>

                            <button @click="$emit('delete', item.id)"
                                class="btn btn-circle dark:bg-red-700 hover:bg-red-800">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </th>
                    </tr>

                    <tr v-if="!data.length">
                        <td colspan="4"><i class="tracking-wider">No article has been created yet</i></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th v-if="isQuestion">Answer</th>
                        <th v-else>Description</th>
                        <th>Action</th>
                    </tr>
                </tfoot>

            </table>
        </div>
    </div>
</template>