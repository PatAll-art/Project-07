<template>
    <div id="logIn">
        <div class="logoContainer"> <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" /></div>
        <h1>Log In</h1>
        <div class="registerAcc">
            <input type="text" v-model="userName" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit" @click="logIn">Enter</button>
        </div>
    </div>

</template>

<script>

import router from '../router/index'

export default {
    data() {
        return {
            userName: "",
            password: "",
        };
    },
    methods: {
        logIn() {
            const Url = 'http://localhost:3000/api/auth/login';
            const data = {
                userName: this.userName,
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
                .then(data => {
                    if (data.userId != null) {
                        console.log(data);
                        this.$store.dispatch('setUserId', data.userId);
                        this.$store.dispatch('setToken', data.token);
                        this.$store.dispatch('setEmail', data.email);
                        router.push("Threads");
                    }

                });
        },
        logOut() {
            this.$store.dispatch('setEmail', '');
            this.$store.dispatch('resetSeen');
            this.$store.dispatch('setUserId', '');
            this.$store.dispatch('setToken', '');
           
        }
    }
}


</script>

<style lang="scss">
#logIn {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
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
}

.registerAcc {
    display: flex;
    flex-direction: column;
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
@media only screen and (max-width: 768px) {
    .registerAcc input {
        
       width: 75%;
    }
}
</style>