<script setup>
useHead({
    // title: "Movies site",
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - My movie site` : `My movie site`;
    },
});
</script>
<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
