// export default function ({ route, redirect }) {
//     // Check if the user is authenticated
//     const sessionData = localStorage.getItem('sessionData');
//     if (!sessionData) {
//       // User is not authenticated, redirect to the home page or login page
//       return redirect('/login'); // Replace with the route you want to redirect to
//     }
//     // User is authenticated, continue to the requested page
//   }

export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    const sessionData = localStorage.getItem('sessionData');
    
    if (!sessionData) {
        return navigateTo('/')
    }
})