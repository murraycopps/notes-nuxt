<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center gap-4">
        <NoteCard :key="note._id" :name="note.name" :text="note.text" />
        <div class="card-width flex flex-row gap-4">
            <nuxt-link :to="`${this.$route.params.id}/edit`" class="grow">
                <button class="text-xl px-4 w-full py-2 rounded-md bg-yellow-300 shadow-lg">Edit Note</button>
            </nuxt-link>
            <button class="text-xl px-4 py-2 grow rounded-md bg-yellow-300 shadow-lg" @click="deleteNote">Delete
                Note</button>
        </div>
        <div class="fixed top-0 left-0 m-2">
            <nuxt-link to="/">
                <button
                    class="bg-yellow-300 text-xl shadow-lg rounded-md py-2 px-4 text-center w-full hover:bg-yellow-400">Home</button>
            </nuxt-link>
        </div>
    </div>
</template>
  
<script>
import NoteCard from '../../../components/NoteCard.vue';

export default {
    name: "NotePage",
    components: { NoteCard },
    data() {
        return {
            note: {
                id: '',
                name: '',
                text: '',
            },
        };
    },
    created() {
        fetch(`http://localhost:3000/api/note/${this.$route.params.id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                this.note = data.data;
                if (this.note === null) {
                    this.$router.push(`/`)
                }
            });

    },
    methods: {
        async deleteNote() {
            await fetch(`http://localhost:3000/api/note/${this.$route.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            this.$router.push(`/`)
        }
    }
}
</script>
  