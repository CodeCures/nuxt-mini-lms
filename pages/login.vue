<script setup>
import { reactive, ref } from 'vue';
// import nuxtStorage from 'nuxt-storage';
import {  setData } from 'nuxt-storage/local-storage'

const { session, refresh, update, reset, remove } = await useSession()

const email = ref('');
const password = ref('');

const user = reactive({
    name: 'smith', email: 'admin@gmail.com', password: 'pass123'
})

const login = () => {
    if (email.value === user.email && password.value === user.password) {

        const user = {
            id: session.value.id,
            createdAt: session.value.createdAt,
        };

        // console.log(JSON.stringify(user));
        // localStorage.setItem("sessionData", JSON.stringify(user));
        setData('sessionData', JSON.stringify(user))
    } else {
        console.log('logout');
    }

}
const logout = () => {

    remove();
    localStorage.clear();
}



</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your
                account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

            <div class="space-y-6">


                <div>
                    <label for="email" class="input-label">Email address</label>

                    <div class="mt-2">
                        <input id="email" name="email" type="email" v-model="email" autocomplete="email"
                            class="form-control">

                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="input-label">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" v-model="password"
                            autocomplete="current-password" class="form-control">

                    </div>
                </div>
                <div>
                    <button class="btn-primary" @click="login()">Sign in</button>
                </div>
            </div>
            <button @click="logout()">logout</button>

        </div>
    </div>
</template>
  
