<template>
    <div class="edit-card">
        <h1 class="edit-title"><input v-model="name" class="edit-input" /></h1>
        <p class="edit-text"><textarea v-model="text" class="edit-input"></textarea></p>
        <button class="edit-button" @click="() => { submit() }">Submit</button>
    </div>
</template>
  
    
<script>
export default {
    props: {
    },
    data() {
        return {
            name: 'New Note',
            text: 'New Note Text',
        }
    },
    methods: {
        submit() {
            fetch(`http://localhost:3000/api/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    text: this.text,
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.$router.push(`/notes/${data.data}`)
                });
        }
    },
}
</script>
  
    
<style>
.edit-card {
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

.edit-title {
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgb(31 41 55);
    padding: .5rem;
    background-color: white;
    border-radius: .75rem;
    margin: 0;
    margin-bottom: .5rem;
}

.edit-text {
    color: rgb(55 65 81);
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    flex-grow: 1;
    background-color: white;
    border-radius: .75rem;
    margin: 0;
    margin-bottom: .5rem;
}

.edit-input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    border-radius: .75rem;
    margin: 0;
}

.edit-button {
    border: none;
    outline: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    border-radius: .75rem;
    margin: 0;
    background-color: white;
    color: rgb(55 65 81);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.edit-button:hover {
    background-color: rgb(253 224 71);
}
</style>
    