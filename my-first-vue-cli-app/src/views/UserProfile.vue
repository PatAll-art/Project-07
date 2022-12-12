<template>
    <div id="app">
        <div class="hello-username">
            <h1>Hello! {{ userName }}</h1>
        </div>
        <div class="profileCard">

            <h2>Email: {{ email }}</h2>
            <button type="submit" @click="deleteProfile" class="profileButton">Delete Profile</button>
        </div>


    </div>
</template>
<script>
import router from '../router/index'

export default {
    data() {
        return {
            userName: this.$store.state.userId,
            email: this.$store.state.email
        };
    },
    methods: {
        deleteProfile() {
            const Url = 'http://localhost:3000/api/auth/' + this.userName;
            fetch(Url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token
                },
            }).then(res => res.json())
                .then(() => {
                    this.$store.dispatch('setUserId', '');
                    this.$store.dispatch('setToken', '');
                    router.push("home");
                });

        }
    }
}
</script>

<style>

.hello-username {
    display: flex;
}

.profileCard {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 50%;
    margin: auto;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
}



.profileButton {
    color: white;
    background-color: #152147;
    padding: 20px;
    border-radius: 30px;
    border: solid #152147;
    font-size: large;
    font-weight: bold;
}
@media only screen and (max-width: 768px) {
   
.profileCard {

    max-width:100%;
    
    
}

}
</style>