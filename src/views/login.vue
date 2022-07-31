<template>
<div class="login-wrapper" v-if="auth.currentUser == null">
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
        <h1>Login</h1>
        <form class="form">
            <input placeholder="Email" type="text" v-model="email" >
            <input placeholder="Password" type="password" v-model="password" >
        </form>
        <div style="display: flex; justify-content: center; margin: 10px;">
            <button style="height: 30px; width: 150px; cursor: pointer; border-radius: 25px;" @click="loginUser">Login</button>        
        </div>
    </div>
</div>
    <div v-if="auth.currentUser">
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
            <h1>You are already logged in.</h1>
            <button style="height: 30px; width: 200px; cursor: pointer; border-radius: 25px; margin-top: 10px; background-color: #000000; color: #ffffff; border: 1px solid white;" @click="homeRoute">Go to the home page</button>
            <button style="height: 30px; width: 150px; cursor: pointer; border-radius: 25px; margin-top: 10px;" @click="logoutUser">Sign out</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {useRouter} from 'vue-router';
import router from '../router/index.js';

const email = ref("");
const password = ref("");
const auth = getAuth();

const loginUser = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Login succesful.")
        router.push('/')
    })
    .catch((error)=> {
        console.log(error.code)
        alert(error.message)
    })
}

const logoutUser = () => {
    signOut(auth).then(()=>{
        alert("Signed out.")
        router.push("/");
        location.reload();
    }).catch((error)=> {
        alert(error.message)
    })
}

const homeRoute = async () => {
    await router.push("/");
    location.reload();
}




</script>
<style scoped>
h1 {
    color: white;
    font-size: 3rem;
}
.login-wrapper {
    display: flex;
    width: 100vw;
    height: 60vh;
    justify-content: center;
    align-items: center;
}
.form {
    display: flex;
    flex-direction: column;
}

.form input{
    padding: 5px;
    margin-top: 5px;
    width: 250px;
}
</style>