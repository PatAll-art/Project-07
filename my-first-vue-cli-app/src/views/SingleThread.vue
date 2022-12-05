<template>
    <div>
        <div id="homeBanner">
            <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" />
        </div>

        <section class="threadSection">
            <h3 class="titleWord">Title</h3>
            <h1 class="threadTitle">{{ thread.title }}</h1>
            <p class="threadTxt">
                {{ thread.text }}
            </p>
        </section>
        <section class="commentSection">
            <h3 class="commentTitle">Comments</h3>
            <textarea class="commentBox" v-model="text" placeholder="What do you think...">
            </textarea>
            <button class="submitButton" type="submit" @click="postComment">Comment</button>

            <div>
                <ol class="commentList">
                    <li class="singleComment" v-for="comment in comments" v-bind:key="comment.id">
                        <h4 class="userName">{{ comment.userName }}</h4>
                        <p class="commentTxt">{{ comment.text }}</p>
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


        const commentUrl = 'http://localhost:3000/api/comment/' + threadId;
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


.threadSection {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: stretch;
    align-content: center;

}

.titleWord {
    margin: 5px;
}

.threadTitle {
    margin: 5px;
}

.threadTxt {
    width: 70%;
    border: solid lightgrey 1px;
    border-radius: 20px;
    padding: 15px;
}

.commentSection {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
}

.commentTitle {
    margin: 5px;
    align-items: flex-start;
}

.commentBox {
    width: 100%;
    border-radius: 16px;
    padding: 5px;
}

.submitButton {
    color: white;
    background-color: #152147;
    padding: 8px;
    border-radius: 30px;
    border: solid #152147;
    display: flex;
    margin: 5px;
}

.commentList {
    list-style: none;

}

.singleComment {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 8px;
    border: solid #152147;
    border-radius: 30px;
    padding: 12px;
} .userName {
    margin:0;
}
</style>
