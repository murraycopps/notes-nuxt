<template>
    <div class="card-width card-height bg-yellow-300 flex flex-col shadow-lg rounded-md p-8 pb-4 text-center">
        <h1 class="text-2xl font-bold text-gray-800 rounded-xl mb-2 bg-white">
            <input v-model="name" class="w-full h-full p-2 bg-transparent " />
        </h1>
        <textarea v-model="text" class="text-lg text-gray-700 grow bg-white rounded-xl p-2 resize-none mb-4"></textarea>
        <button class="bg-yellow-400 shadow-lg rounded-md p-2 text-center w-full hover:bg-yellow-400" @click="() => { submit() }">Submit</button>
    </div>
</template>
  
    
<script>
export default {
    props: {
        new: {
            type: Boolean,
            required: true,
        }
    },
    async asyncData({ props, params }) {
        if (!props.new) {
            const { data } = await fetch(`http://localhost:3000/api/note/${params.id}`).then(res => res.json())
            return {
                name: data.name,
                text: data.text,
            }
        }
    },
    data() {
        return {
            name: 'New Note',
            text: 'New Note Text',
        }
    },
    methods: {
        submit() {
            if (this.new) {
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
                        this.$router.push(`/notes/${data.data}`)
                    });
            }
            else {
                fetch(`http://localhost:3000/api/note/${this.$route.params.id}`, {
                    method: 'PUT',
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
                        this.$router.push(`/notes/${this.$route.params.id}`)
                    });
            }
        }
    },
}
</script>