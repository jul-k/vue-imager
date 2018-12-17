<template>
    <div class="dropper">
        <input type="file" name="" id="">
        <span>Drag files here!</span>
    </div>
</template>

<script>
export default {
    name: "UploadForm"
}
</script>

<style scoped>
    .dropper {
        height: 30vh;
        border: 2px dashed #000;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .dropper:hover {
        background-color: #eee;
    }
    input {
        width: 100%;
        height: 30vh;
        position: absolute;
        outline: 0;
        opacity: 0;
    }
    input:hover {
        cursor: pointer;
    }
</style>