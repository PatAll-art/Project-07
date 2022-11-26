<template>
<div>
    <h1>Today's talk</h1>
<p>Please post</p>
<ol class="threadList">
    <li class="thread">
        <a href="#">
            <h3>Thread 1</h3>
        </a>
        <div class="threadCont">
            <p class="msg">
                Talking about that talk
            </p>
            <p class="timeStamp">10/21/2022</p>
            <p class="commentCount">10 comments</p>
        </div>
    </li>
    <li class="thread">
        <a href="#">
            <h3>Thread 2</h3>
        </a>
        <div class="threadCont">
            <p class="msg">
                Talking about that talk
            </p>
            <p class="timeStamp">10/21/2022</p>
            <p class="commentCount">10 comments</p>
        </div>
    </li>
    <li class="thread">
        <a href="#">
            <h3>Thread 3</h3>
        </a>
        <div class="threadCont">
            <p class="msg">
                Talking about that talk
            </p>
            <p class="timeStamp">10/21/2022</p>
            <p class="commentCount">10 comments</p>
        </div>
    </li>
</ol>
</div>
</template>
<script>


</script>

<style>

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
    

} a {
    text-decoration: none;
    color: white;
    font-weight: bolder;
} .threadCont {
    display: flex;
    flex-direction: row;
    color: white;
    flex-wrap: wrap;
    justify-content: space-between;
} .threadList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

</style>