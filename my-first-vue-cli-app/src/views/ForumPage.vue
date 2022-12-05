<template>
    <div>
        <div class="mainLayout">
            <h1>Today's talk</h1>
            <h2>
                <router-link to="/newpost" class="postLink">Post it!</router-link>
            </h2>
        </div>
        <div>
           <ol class="threadList">
            <li class="singleThread" v-for="thread in threads" v-bind:key="thread.id">
               <router-link :to="'/singlethread/' +  thread.id"> {{ thread.title }} </router-link>
                <p>{{ thread.text }}</p>
            </li>
           </ol>
        </div>

    </div>

</template>
<script>

export default {
    data() {
        return {
            threads: []
        };
    },
    created() {
        const Url = 'http://localhost:3000/api/threads';
            fetch(Url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }).then(res => res.json())
            .then(res => {
                this.threads = res;
            })
    },
  
}

</script>

<style>

.mainLayout {
    display:flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
.thread {
    display: flex;
    flex-direction: row;
    width: 30%;
    border-radius: 20px;
    background-color: #152147;
    opacity: 50%;
    margin: 12px 0;
    padding: 8px;
    flex-wrap: wrap;
    justify-content: space-between;


}

a {
    text-decoration: none;
    color: #152147;
    font-weight: bolder;
}


.threadList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    margin:10px;
}
.singleThread {
    width: 45%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    border-radius: 30px;
    background-color: darkgrey;
    margin: 10px;
}

.postLink {
    color: white;
    background-color: #152147;
    padding: 20px;
    border-radius: 30px;
    border: solid #152147;
}

</style>