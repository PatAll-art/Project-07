<template>
        <div id="homeBanner">
    <img class="logo" src="../assets/icon-left-font-monochrome-white.svg"/>
<h1>Welcome to Groupomania</h1>
            <h3>Social space for everyone</h3>
            <ul class="forumCard">
                
                <li class="article">
                    Dogs treat
                </li>
                <li class="article">
                    Dogs Tricks
                </li>
                <li class="article">
                    Selfie of the year
                </li>
            </ul>
        </div>

</template>

<script>
export default {
    name:'HomePage'
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

.article {
    background-color: lightgrey;
    border-radius: 20px;
    width: 300px;
    padding: 30px;
    margin: 20px;
    list-style: none;

}

</style>