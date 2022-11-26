<template>
    <div id="signUp">
        <img class="logo" src="../assets/icon-left-font-monochrome-white.svg" />
        <h1>Sign Up</h1>
        <div class="registerAcc">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Enter</button>
        </div>
    </div>
</template>

<script>



</script>


<style lang="scss">
#signUp {
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


.registerAcc input {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    border: solid darkgrey 1px;
    border-radius: 30px;
    padding: 12px;
    width: 400px;
    height: 20px;
    margin-bottom: 20px;
}

.registerAcc button {
    border: none;
    border-radius: 30px;
    padding: 30px;
    width: 300px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: darkgrey;
    align-items: center;
    margin-bottom: 20px;
}

.registerAcc {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>