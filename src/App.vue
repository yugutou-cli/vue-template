<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-50 py-4 border-b border-gray-200 flex justify-between items-center px-4 md:px-6">
      <h1 class="text-xl font-semibold text-gray-800">Vue Template</h1>
      <nav class="flex gap-4">
        <router-link to="/" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</router-link>
        <router-link to="/login" class="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors">Login</router-link>
      </nav>
    </header>
    <main class="flex-1 p-4 md:p-8">
      <router-view />
    </main>
  </div>
</template>
