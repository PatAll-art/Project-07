<template>
        <div id="homeBanner">
    <img class="logo" src="../assets/icon-left-font-monochrome-white.svg"/>
<h1>Hello</h1>
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


</style>