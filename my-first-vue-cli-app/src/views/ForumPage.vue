<template>
    <div>
         <div class="logoContainer"> <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" /></div>
        <div class="mainLayout">
            <h1>Today's talk</h1>
            <h2>
                <router-link to="/newpost" class="postLink">Post it!</router-link>
            </h2>
        </div>
        <div>
           <ol class="threadList">
            <li class="singleThread" v-for="thread in threads" v-bind:key="thread.id" v-bind:class = "(thread.seen)?'seen-thread':'not-seen'">
               <router-link :to="'/singlethread/' +  thread.id"> {{ thread.title }} by {{ thread.userName }}</router-link>
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
            threads: [],
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
                for (let thread of res) {
                    const threadId = thread.id.toString();
                    const seenIds = this.$store.state.seen;
                    console.log(threadId);
                    console.log(seenIds);
                    thread.seen = seenIds.includes(threadId);
                    this.threads.push(thread);
                }
                //this.threads = res;
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
.logoContainer {
    width: 100%;
    background-color: #152147;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 8px 0;
    
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
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction:column;
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
.seen-thread {

    opacity: 50%;

}
.not-seen {
    opacity: 100%;
}
@media only screen and (max-width: 768px) {

.mainLayout {
    width: 100%;
    display:flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
   
}
h1 {
    font-size:20px;
    margin: 5px;
    padding: 0;
}
.postLink {
    font-size:15px;
    padding: 10px;
    margin: 0;
 
}
.threadList {
    padding: 0;
   
}
}


</style>