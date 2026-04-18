<script setup>
const query = ref("batman");
const movies = ref([]);
async function search() {
    const { Search } = await $fetch(
        `http://www.omdbapi.com/?apikey=8e3f600b&s=${query.value}`,
    );
    movies.value = Search;
}
search();
</script>

<template>
    <form @submit.prevent="search">
        <input type="text" v-model="query" />
        <button>Search</button>
    </form>
    <ul
        style="
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            list-style: none;
        "
    >
        <li v-for="movie in movies" :key="movie.imdbID">
            <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
                <!-- <img :src="movie.Poster" :alt="movie.title" /> -->
                <NuxtImg
                    :src="movie.Poster"
                    sizes="sm:100vw md:50vw lg:800px"
                    format="webp"
                    quality="80"
                    loading="lazy"
                    style="width: 100%"
                />
            </NuxtLink>
        </li>
    </ul>
    <NuxtImg
        src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        style="width: 100%"
    />
    <NuxtImg
        src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        style="width: 100%"
    />
    <NuxtImg
        src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        style="width: 100%"
    />
    <NuxtImg
        src="https://res.cloudinary.com/demo/image/upload/sample.jpg"
        sizes="(max-width: 768px) 100vw, 50vw"
        style="width: 100%"
    />
</template>

<style scoped></style>
