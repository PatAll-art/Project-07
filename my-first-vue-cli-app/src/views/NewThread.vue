<template>
    <div class="newPost">
        <h1> Write something</h1>
        <label class="message">What's on your mind</label>
        <div class="formText">
        <input class="title" type="text" v-model="title" placeholder="Title" />
        <textarea class="textBox title" v-model="text" placeholder=" Today it was...." />
        <button class="submitButton title" type="submit" @click="postThread">Submit</button>
        </div>
    </div>
</template>
<script>
import router from '../router/index'

export default {
    data() {
        return {
            userName: "",
            title: "",
            text: "",
        };
    },
    methods: {
        postThread() {
            const Url = 'http://localhost:3000/api/threads/new';
            const data = {
                userName: this.$store.state.userId,
                title: this.title,
                text: this.text,
            };
            fetch(Url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.$store.state.token
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(() => {
                    router.push("Threads");

                });
        }
    }
}

</script>

<style>

.newPost {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding: 20px;
}
.formText {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 50%;
    margin: 30px;
}
.title {
    border: solid #152147;
    padding: 12px;
    border-radius: 30px;
    margin: 12px;
}
.textBox {
    height: 300px;
}
.submitButton {
    background-color: #152147;
    color: white;
}
</style>