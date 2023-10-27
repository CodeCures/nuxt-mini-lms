<script setup>
import { reactive, ref } from 'vue';
// import nuxtStorage from 'nuxt-storage';
import { getData, setData } from 'nuxt-storage/local-storage'
const isopen = ref(false);
const editArticle = ref(false);
const articleIndex = ref('');
const title = ref('');
const poster = ref('');
const author = ref('');
const created_at = ref(new Date().toDateString());
const description = ref('');
const imageUrl = ref('');
const questionTitle = ref('');
const options = [
  { title: '', correct: ref(false) },
  { title: '', correct: ref(false) },
  { title: '', correct: ref(false) }
];

const courses = JSON.parse(getData("courses")) || [];
const questions = JSON.parse(getData("questions")) || [];

const saveCourse = () => {

  const course = {
    title: title.value,
    description: description.value,
    poster: poster.value,
    author: author.value,
    image: imageUrl.value,
    created_at: created_at.value,

  }

  courses.push(course)
  if (title.value !== '' &&  description.value !== '')  {

    setData('courses', JSON.stringify(courses))
    console.log(courses);
  }
};

const deleteCourse = index => {

  const courses = JSON.parse(getData("courses")) || [];

  const Othercourses = courses.filter((course, i) => i !== index)

  setData("courses", JSON.stringify(Othercourses));
}


const creatQuestion = () => {
  const question = {
    article_id: articleIndex.value,
    title: questionTitle.value,
    options: options,

  }
  questions.push(question)
  if (questionTitle.value !== '')  {
    setData('questions', JSON.stringify(questions))
    
    console.log(questionTitle);
  }  
  return
  
}
const editCourse = (index) => {
  const x = articleIndex.value = index
}


</script>
<template>
  <div class=" space-y-4">

    <div class="w-[80%] mx-auto pt-20 ">
      <div class="text-right">
        <button class="bg-green-600 py-2 px-4 rounded-md text-white " @click="isopen = true">Create course</button>
      </div>
      <div class="space-y-5">
        <h1 class="font-bold text-xl">My Courses</h1>
        <hr>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div v-for="(course, index) in courses" :key="index" course
            class=" w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" class="w-full">
              <img class="rounded-t-lg w-full h-52  object-cover" :src="course.image" alt="" />
            </a>
            <div class="p-5">
              <button>
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ course.title }}</h5>
              </button>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{{ course.description }}</p>
              <div class="flex justify-between space-x-2">
                <div class="text-xs ">
                  <p class="text-gray-300">Author: {{ course.poster }} </p>
                  <p class="text-gray-500">{{ course.created_at }}</p>
                </div>
                <div class="space-x-2">
                  <button @click="deleteCourse(index)"
                    class="inline-flex items-center  p-1 text-xs font-medium text-center text-white bg-red-700 rounded-full hover:bg-red-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button @click="editArticle = true, editCourse(index)"
                    class="inline-flex items-center  p-1 text-xs font-medium text-center text-white bg-green-700 rounded-full hover:bg-green-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- <div  class="font-bold text-xl" v-else>Create course</div> -->

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
          <button @click="isopen = false">X</button>
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
            <label for="description" class="input-label">
              Course description
            </label>

            <div class="mt-2">
              <input id="description" name="description" type="text" v-model="description" autocomplete="off"
                class="form-control" placeholder="..">

            </div>
          </div>
          <div>
            <label for="imageUrl" class="input-label">
              Course imageUrl
            </label>

            <div class="mt-2">
              <input id="imageUrl" name="imageUrl" type="text" v-model="imageUrl" autocomplete="off" class="form-control"
                placeholder="image url">

            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-5">
            <div>
              <label for="poster" class="input-label">
                poster
              </label>

              <div class="mt-2">
                <input id="poster" name="poster" type="text" v-model="poster" autocomplete="off" class="form-control"
                  placeholder="image url">

              </div>
            </div>
            <div>
              <label for="author" class="input-label">
                author
              </label>

              <div class="mt-2">
                <input id="author" name="author" type="text" v-model="author" autocomplete="off" class="form-control"
                  placeholder="image url">

              </div>
            </div>
          </div>

          <div>
            <button class="btn-primary" @click="saveCourse(), isopen=false">Create</button>
          </div>

        </div>
      </div>
    </div>

    <div
      class="fixed items-center justify-center  flex top-0 left-0  mx-auto w-full h-full bg-gray-600 bg-opacity-20 z-10 transition duration-1000 ease-in-out"
      v-show="editArticle" style="display: none;">
      <div
        class="bg-white w-[90%] lg:w-[70%]  shadow-inner  border rounded-lg overflow-auto  pb-6 px-5 transition-all relative duration-700">
        <div class="space-y-5 pt-5 ">
          <button @click="editArticle = false">X</button>
          <div>

            <h1>Add questions to article</h1>
            <div>
              <div>
                <label for="question" class="input-label">
                  Course question
                </label>

                <div class="mt-2">
                  <input id="question" name="question" type="text" v-model="questionTitle" autocomplete="off"
                    class="form-control" placeholder="question">

                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                <div>
                  <label for="options" class="input-label">
                    Course options
                  </label>

                  <div class="mt-2">
                    <input id="options" name="options" type="text" v-model="options[0].title" autocomplete="off"
                      class="form-control " placeholder="options">
                    <div class="flex justify-between">
                      <p><input type="radio" value="true" name="option1" v-model="options[0].correct"> Correct</p>
                      <p><input type="radio" value="false" name="option1" v-model="options[0].correct"> Incorrect</p>
                    </div>

                  </div>
                </div>
                <div>
                  <label for="options" class="input-label">
                    .
                  </label>

                  <div class="mt-2">
                    <input id="options" name="options" type="text" v-model="options[1].title" autocomplete="off"
                      class="form-control " placeholder="options">
                    <div class="flex justify-between">
                      <p><input type="radio" value="true" name="option2" v-model="options[1].correct"> Correct</p>
                      <p><input type="radio" value="false" name="option2" v-model="options[1].correct"> Incorrect</p>
                    </div>

                  </div>
                </div>
                <div>
                  <label for="options" class="input-label">
                    .
                  </label>

                  <div class="mt-2  ">
                    <input id="options" name="options" type="text" v-model="options[2].title" autocomplete="off"
                      class="form-control " placeholder="options">
                    <div class="flex justify-between">
                      <p><input type="radio" value="true" name="option3" v-model="options[2].correct"> Correct</p>
                      <p><input type="radio" value="false" name="option3" v-model="options[2].correct"> Incorrect</p>
                    </div>

                  </div>
                </div>
              </div>
              <div class="mt-4">
                <button class="btn-primary" @click="creatQuestion(), editArticle=false">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>