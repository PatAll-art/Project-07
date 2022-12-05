<template>
    <div id="signUp">
        <div class="logoContainer"> <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" /></div>
        <h1>Sign Up</h1>
        <div>
            <form class="registerAcc" @submit.prevent="signup" >
                <input type="text" v-model="userName" placeholder="Username" />
                <input type="email" v-model="email" placeholder="Email" />
                <input type="password" v-model="password" placeholder="Password" />
                <button type="submit" value="register">Enter</button>
            </form>
        </div>
    </div>
</template>

<script>

 export default {
    data() {
        return {
            email: "",
            userName: "",
            password: "",
    };
},
    methods: {
        // Sign up form email and password
        signup() {
            const Url = 'http://localhost:3000/api/auth/signup';
            const data = {
                userName: this.userName,
                email: this.email,
                password: this.password,
            };
            fetch(Url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(data => console.log(data));

        }
    }
}



</script>


<style lang="scss">
#signUp {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
}

.logoContainer {
    width: 100%;
    background-color: #152147;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 8px 0;
    
}

.registerAcc input {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    border: solid darkgrey 1px;
    border-radius: 30px;
    padding: 12px;
    width: 400px;
    height: 20px;
    margin-bottom: 20px;
}

.registerAcc button {
    border: none;
    border-radius: 30px;
    padding: 30px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: darkgrey;
    align-items: center;
    margin-bottom: 20px;
} 

.registerAcc {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>