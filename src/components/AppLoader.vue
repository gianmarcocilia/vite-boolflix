<script>
export default {

}
</script>

<template>
    <div>
        <div class="loading"></div>
    </div>
</template>

<style lang="scss" scoped>
div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 6rem;

    .loading {
        border: 20px solid #f3f3f3;
        border-top: 20px solid rgb(150, 1, 1);
        border-radius: 50%;
        width: 150px;
        height: 150px;
        animation: spin 1s linear infinite;
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>