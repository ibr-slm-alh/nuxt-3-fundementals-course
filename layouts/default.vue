<script setup>
const user = useUser();
</script>
<template>
    <nav style="display: flex; gap: 10px">
        <NuxtLink href="/">Home</NuxtLink>
        <NuxtLink href="/movies">Movies</NuxtLink>
        <!-- <NuxtLink href="/https://vueschool.io">Vue School</NuxtLink> -->
        <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
        <a href="#" v-else @click.prevent="user.isLoggedIn = false" to="/login"
            >Logout</a
        >
    </nav>
    <slot></slot>
</template>
