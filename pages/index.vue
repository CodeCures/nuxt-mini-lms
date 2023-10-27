<script setup>
import { reactive, ref } from 'vue';
import { getData, setData } from 'nuxt-storage/local-storage'


const isOpen = ref(false)
const openCard = (index) => {
  console.log(index);

}
const courses = JSON.parse(getData("courses")) || [];
const questions = JSON.parse(getData("questions")) || [];
const articles = reactive([
  {
    id: "1",
    title: "Sample Article",
    content: "This is the content of the article.",
    image: "https://images.unsplash.com/photo-1697871965881-0911cea7a257?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",

    question: "What is your favorite color?",
    "options": [
      { "id": 1, "text": "Red" },
      { "id": 2, "text": "Blue" },
      { "id": 3, "text": "Green" }
    ]
  },
  {
    id: "2",
    title: "Sample Article for kids",
    content: "This is the content of the article.",
    image: "https://images.unsplash.com/photo-1697871965881-0911cea7a257?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",

    question: "What is your favorite color?",
    options: [
      { "id": 1, "text": "Rice" },
      { "id": 2, "text": "Burger" },
      { "id": 3, "text": "Green" }
    ]
  },
])
const test = (index) => {
  let q ='';

  q = questions.filter(question => question.article_id === index);
  console.log(q);
}
// let text = '';
//  for (let x in questions) {
//     text += x;
//     test(1);
//     // console.log(questions[x]);
//   }



</script>



<template>
  <div class="bg-gray-50 ">
    <Header></Header>
    <!-- <h1>Welcome to the homepage</h1> -->

    <div class="grid grid-cols-8 ">
      <div class="col-span-6 space-y-14 pt-10">
        <div v-for="(course, index) in courses" :key="index" class="  p-5 space-y-8">
          <h1 class="font-semibold text-3xl text-blue-800"> {{ course.title }}</h1>
          <div class="h-96 overflow-hidden object-cover rounded-tr-[3.5rem]">
            <img :src="course.image" alt="article image" class="w-full ">

          </div>
          <div class=" border-[8px] p-5 font-sans rounded-br-[3.5rem] shadow-inner ">
            {{ course.description }}
          </div>
          <div class="">
            <div class="border-4 p-2 flex justify-between">
              <h1 class="">Task </h1>
              <button @click="openCard(index), test(index)">open</button>
            </div>
            <div class="duration-700 translate-y-2 transition">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit beatae possimus nemo doloribus
              culpa laudantium reiciendis expedita aliquam omnis temporibus, accusantium officiis cum architecto unde
              quas. Assumenda, rem laudantium.
            </div>
          </div>
        </div>

      </div>
      <div class="col-span-2 bg-gray-200"></div>

    </div>

  </div>
</template>

