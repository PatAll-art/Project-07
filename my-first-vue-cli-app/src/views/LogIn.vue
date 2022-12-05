<template>
    <div id="logIn">
        <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" />
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
                        router.push("Threads");
                    }

                });
        },
        logOut() {
            this.$store.dispatch('setUserId', null);
            this.$store.dispatch('setToken', null);
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

.logo {
    width: 50%;
    background-color: #152147;
    block-size: 100px;
    padding: 9px 100%;
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
</style>