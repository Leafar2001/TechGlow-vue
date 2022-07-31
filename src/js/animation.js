import 'vue'
import { ref, onBeforeMount } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

//Animaties
window.onload = function () {    

    let isLoggedIn;
    console.log(isLoggedIn)
    let auth
    auth = getAuth();
    //Auth change check
    onAuthStateChanged(auth, (user) => {
      if (user){
        isLoggedIn = true;
        console.log(user)
        console.log(isLoggedIn)
        return;
      } else {
        isLoggedIn = false;
        console.log(isLoggedIn)
        return;
      }
    })
    // auth
    if(auth !== null){
          isLoggedIn = true;
          console.log(isLoggedIn + "222")
    }

    const animations = document.querySelectorAll(".animated");
    window.addEventListener('scroll', fadeAnimatie);

    function fadeAnimatie() {
        for (var i = 0; i < animations.length; i++) {
            var element = animations[i]
            var visible = element.getBoundingClientRect().top - window.innerHeight + 50;
            if (visible < 0) {
                element.classList.add("visible");}
            else {
                element.classList.remove("visible");}
        }
    }
    fadeAnimatie();
}


