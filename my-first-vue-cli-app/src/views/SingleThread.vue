<template>
    <div>
        <div id="homeBanner">
            <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" />
        </div>

        <section>
            <h3>Title</h3>
            <h1>{{ thread.title }}</h1>
            <p>
                {{ thread.text }}
            </p>
        </section>
        <section>
            <h3>Comments</h3>
            <textarea v-model="text" placeholder="What do you think...">
            </textarea>
            <button class="submitButton" type="submit" @click="postComment">Comment</button>

            <div>
                <ol class="commentList">
            <li class="singleComment" v-for="comment in comments" v-bind:key="comment.id">
                <h4>{{ comment.userName }}</h4>
                <p>{{ comment.text }}</p>
            </li>
           </ol>
            </div>
        </section>


    </div>

</template>

<script>
//import { threadId } from 'worker_threads';


export default {
    data() {
        return {
            thread: {},
            text: "",
            comments: [],

        };
    },
    created() {
        const url = window.location.href;
        const threadId = url.split("/").pop();
        const Url = 'http://localhost:3000/api/threads/' + threadId;
        fetch(Url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.token
            },
        }).then(res => res.json())
            .then(res => {
                this.thread = res;
            });

        
            const commentUrl ='http://localhost:3000/api/comment/' + threadId;
            fetch(commentUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token
                }
            }).then(res => res.json())
            .then(res => {
                this.comments = res;
            })

    },
    methods: {
        postComment() {
            const Url = 'http://localhost:3000/api/comment/new';
            const data = {
                userName: this.$store.state.userId,
                text: this.text,
                threadId: this.thread.id
            };
            fetch(Url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token
                },
                body: JSON.stringify(data)
            }).then(res => res.json());
        }
    }

}
</script>

<style lang="scss">
#homeBanner {
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
</style>
