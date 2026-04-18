<script setup>
const user = useUser();
definePageMeta({
    layout: "plain",
});
</script>
<template>
    <form @submit.prevent="user.login" action="">
        <h1>Login</h1>
        <label for=""
            >Username
            <input type="text" name="" id="" />
        </label>
        <label for=""
            >Password
            <input type="password" name="" id="" />
        </label>
        <button>Login</button>
    </form>
</template>
