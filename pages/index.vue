<script setup>
import { reactive, ref } from 'vue';


const isOpen = ref(false)
const openCard = (id) => {
  console.log(id);
  
}
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



</script>



<template>
  <div class="bg-gray-50 ">
    <Header></Header>
    <!-- <h1>Welcome to the homepage</h1> -->

    <div class="grid grid-cols-8 ">
      <div class="col-span-6 space-y-14 pt-10">
        <div v-for="article in articles" :key="article.id" class="  p-5 space-y-8">
          <h1 class="font-semibold text-3xl text-blue-800"> {{ article.title }}</h1>
          <div class="h-96 overflow-hidden object-cover rounded-tr-[3.5rem]">
            <img :src="article.image" alt="article image" class="w-full ">

          </div>
          <div class=" border-[8px] p-5 font-sans rounded-br-[3.5rem] shadow-inner ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolor adipisci consectetur repellat ex hic
            at commodi architecto possimus aut natus nobis, distinctio ut quidem libero cum necessitatibus eaque et cumque
            eveniet voluptatibus iste consequatur perferendis! Soluta laboriosam eius nostrum quaerat optio modi iste
            culpa assumenda eveniet facilis aut eum beatae a, accusantium voluptatibus quam dolorum inventore porro
            molestias sequi et, distinctio eligendi nemo! Nam nostrum tempora quas necessitatibus, eius perspiciatis iste.
            Fugiat laborum fuga nisi ullam. Nulla hic consequatur illum soluta unde voluptate enim temporibus veniam
            voluptas aut placeat magnam magni eligendi recusandae quae velit veritatis quam incidunt repudiandae modi
            sapiente, doloribus debitis assumenda quia! Dolore explicabo hic quas? Quas esse enim quis ad autem magni
            voluptate recusandae. Voluptatem libero commodi fugiat, ad cumque suscipit asperiores quaerat quas ab delectus
            aperiam ducimus ea, eos fuga blanditiis rerum! Libero perferendis commodi, magni architecto laudantium optio
            blanditiis ipsum deserunt fuga officia modi quibusdam esse assumenda hic quidem incidunt distinctio.
            Necessitatibus quibusdam corporis nulla mollitia, id unde ullam odio minus sed eligendi voluptate inventore
            iusto voluptas totam qui eum. Totam aut eius quidem, fuga qui praesentium explicabo ea. Ex corrupti, esse
            minus debitis eaque fuga quos nesciunt. Vero cumque libero quae facere.
          </div>
          <div class=""  >
            <div class="border-4 p-2 flex justify-between">
              <h1 class="" >Task </h1>
              <button @click="openCard(article.id)">open</button>
            </div>
            <div v-show="isOpen" :id="article.id"  class="duration-700 translate-y-2 transition" style="display: none;">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reprehenderit beatae possimus nemo doloribus culpa laudantium reiciendis expedita aliquam omnis temporibus, accusantium officiis cum architecto unde quas. Assumenda, rem laudantium.
            </div>
          </div>
        </div>

      </div>
      <div class="col-span-2 bg-gray-200"></div>

    </div>

  </div>
</template>

