<template>
    <div class="card">
        <h1 class="title">{{ title }}
        </h1>
        <p class="`text`">{{ body }}</p>
    </div>
</template>
    
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        }
    }
}
</script>
  
    
<style>
.card {
    width: clamp(300px, 50%, 500px);
    min-height: 300px;
    background-color: rgb(253 224 71);
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.375rem;
    padding: 2rem;
    text-align: center;
    margin: 1rem;
}

.title {
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgb(31 41 55);
    padding: .5rem;
    margin-bottom: 1rem;
}

.text {
    color: rgb(55 65 81);
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    flex-grow: 1;
}
</style>
    