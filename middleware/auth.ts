export default defineNuxtRouteMiddleware((to, from) => {
    const usetIsLoggedIn = false;
    if (!usetIsLoggedIn) {
        return navigateTo({
            path: "/login",
        });
    }
});
