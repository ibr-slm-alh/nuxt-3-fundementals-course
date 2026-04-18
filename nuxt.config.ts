// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@nuxt/image"],

    imports: {
        dirs: ["stores"],
    },
    routeRules: {
        "/spa": { ssr: false },
        "/static": { static: true },
        "/swr": { swr: true },
    },
});
