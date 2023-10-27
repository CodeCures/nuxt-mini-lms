<script setup>
import { reactive, ref } from 'vue';
// import nuxtStorage from 'nuxt-storage';
import { getData, setData } from 'nuxt-storage/local-storage'
const isopen = ref(false);
const title = ref('');
const content = ref('');
const imageUrl = ref('');
const question = ref('');
const option1 = ref('');
const option2 = ref('');
const option3 = ref('');
const courses = JSON.parse(getData("courses")) || [];
const saveCourse = () => {

  const course = {
    id: "1",
    title: title.value,
    content: content.value,
    image: imageUrl.value,

    question: question.value,
    options: [
      { "id": 1, "text": option1.value },
      { "id": 2, "text": option2.value },
      { "id": 3, "text": option3.value }
    ]
  }

  courses.push(course)
  setData('courses', JSON.stringify(courses))
  console.log(courses);
};
const deleteCoures = () => {

}


</script>
<template>
  <div class="bg-gray-50 h-full">

    <div class="w-[80%] mx-auto pt-20 ">
      <div class="text-right">
        <button class="bg-red-600 py-2 px-4 rounded-md text-white " @click="isopen = true">Create course</button>
      </div>
      <div>
        <h1>My Courses</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
          <!--  -->

          <div v-for="(course, index) in courses"  :key="index" course class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" :src="course.image " alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ course.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ course.content }}</p>
              <a href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
                
              </a>
            </div>
          </div>
     
          <!--  -->

        </div>
      </div>
    </div>
    <div
      class="fixed items-center justify-center my-0  flex top-0 left-0 mx-auto w-full h-full bg-gray-600 bg-opacity-20 z-10 transition duration-1000 ease-in-out"
      v-show="isopen" style="display: none;">
      <div
        class="bg-white w-[90%] lg:w-[70%]  shadow-inner  border rounded-lg overflow-auto  pb-6 px-5 transition-all relative duration-700">
        <div class="space-y-5 pt-5 ">
          <div>
            <label for="title" class="input-label">
              Topic
            </label>

            <div class="mt-2">
              <input id="title" name="title" type="text" v-model="title" autocomplete="off" class="form-control"
                placeholder="Title">

            </div>
          </div>
          <div>
            <label for="content" class="input-label">
              Coures Content
            </label>

            <div class="mt-2">
              <input id="content" name="content" type="text" v-model="content" autocomplete="off" class="form-control"
                placeholder="..">

            </div>
          </div>
          <div>
            <label for="imageUrl" class="input-label">
              Coures imageUrl
            </label>

            <div class="mt-2">
              <input id="imageUrl" name="imageUrl" type="text" v-model="imageUrl" autocomplete="off" class="form-control"
                placeholder="image url">

            </div>
          </div>
          <div>
            <label for="question" class="input-label">
              Coures question
            </label>

            <div class="mt-2">
              <input id="question" name="question" type="text" v-model="question" autocomplete="off" class="form-control"
                placeholder="question">

            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div>
              <label for="options" class="input-label">
                Coures options
              </label>

              <div class="mt-2">
                <input id="options" name="options" type="text" v-model="option1" autocomplete="off" class="form-control"
                  placeholder="options">

              </div>
            </div>
            <div>
              <label for="options" class="input-label">
                Coures options
              </label>

              <div class="mt-2">
                <input id="options" name="options" type="text" v-model="option2" autocomplete="off" class="form-control"
                  placeholder="options">

              </div>
            </div>
            <div>
              <label for="options" class="input-label">
                Coures options
              </label>

              <div class="mt-2">
                <input id="options" name="options" type="text" v-model="option3" autocomplete="off" class="form-control"
                  placeholder="options">

              </div>
            </div>
          </div>
          <div>
            <button class="btn-primary" @click="saveCourse()">Create</button>
          </div>

        </div>
      </div>
  </div>

</div></template>