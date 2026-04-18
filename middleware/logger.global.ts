export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from, "from the name of middleware");
});
