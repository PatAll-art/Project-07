<template>
    <div>
        <div id="homeBanner">
           <div class="logoContainer"> <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" /></div>
            <h1>Welcome to Groupomania</h1>
            <h3>Social space for everyone</h3>

        </div>
    </div>
</template>

<script>


</script>

<style lang="scss">
#homeBanner {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
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

.article {
    background-color: lightgrey;
    border-radius: 20px;
    width: 300px;
    padding: 30px;
    margin: 20px;
    list-style: none;

}
</style>