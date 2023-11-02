<script setup>
import { reactive, ref } from 'vue';

definePageMeta({ middleware: "guest-only" })

const { signIn } = useAuth()
const hasError = ref(false);
const credentials = reactive({ email: "admin@example.com", password: '' });

async function login() {
    const { isLoggedIn, user } = await $fetch('api/auth/login', {
        method: "POST",
        body: credentials
    });

    if (isLoggedIn) {
        await signIn('credentials', user)
    }
}
</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">Sign in to your account</h2>

        <form @submit.prevent="login" class="space-y-3 mt-6">
            <div>
                <label for="email" class="input-label">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" v-model="credentials.email" autocomplete="email"
                        class="form-control bg-gray-200" readonly>
                </div>
            </div>

            <div>
                <label for="password" class="input-label">Password</label>
                <div class="mt-2">
                    <input id="password" name="password" type="password" v-model="credentials.password"
                        autocomplete="current-password" class="form-control bg-gray-200 text-gray-700" placeholder="****">
                </div>
            </div>
            <div>
                <button type="submit" class="w-full btn bg-indigo-700 hover:bg-indigo-600">Sign in</button>
            </div>
        </form>
    </div>
</template>
  
