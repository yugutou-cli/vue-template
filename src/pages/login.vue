<template>
  <div class="max-w-md mx-auto mt-12 p-6 bg-gray-50 rounded-lg shadow-md">
    <h2 class="text-gray-800 font-semibold text-xl mb-6 text-center">Login</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <label for="email" class="text-gray-700 font-medium">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Enter your email"
          class="px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-gray-700 font-medium">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
          placeholder="Enter your password"
          class="px-4 py-3 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button type="submit" class="px-4 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors mt-2">Login</button>
      <p class="text-red-600 text-center mt-2" v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({
  email: '',
  password: '',
})
const error = ref('')

const handleLogin = async () => {
  try {
    error.value = ''
    // 这里应该是实际的登录API调用
    // 模拟登录成功
    console.log('Login attempt:', form.value)
    
    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // 登录成功后跳转到首页
    router.push('/')
  } catch (err) {
    error.value = 'Login failed. Please check your credentials.'
    console.error('Login error:', err)
  }
}
</script>