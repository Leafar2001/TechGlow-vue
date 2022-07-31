<template>
<div class="login-wrapper">
    <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
        <h1>Login</h1>
        <div class="form">
            <input placeholder="Email" type="text">
            <input placeholder="Password" type="password">
        </div>
        <div style="display: flex; justify-content: center; margin: 10px;">
            <button style="height: 30px; width: 150px; border-radius: 25px; ">Login</button>        
        </div>
    </div>
</div>
    
</template>

<style scoped>
h1 {
    color: white;
    font-size: 3rem;
}
.login-wrapper {
    display: flex;
    width: 100vw;
    height: 90vh;
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