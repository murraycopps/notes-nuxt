<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <EditableNoteCard :new="false" :note="note" />
        <div class="fixed top-0 left-0 m-2">
            <nuxt-link to="/">
                <button
                    class="bg-yellow-300 text-xl shadow-lg rounded-md py-2 px-4 text-center w-full hover:bg-yellow-400">Home</button>
            </nuxt-link>
        </div>
    </div>
</template>
  
<script>
import EditableNoteCard from '../../../components/EditableNoteCard.vue';

export default {
    name: "NotePage",
    components: { EditableNoteCard },
    async asyncData({ props, params }) {
        const { data } = await fetch(`${process.env.baseUrl}/api/note/${params.id}`).then(res => res.json())
        return {
            note: data,
        }
    },
    data() {
        return {
            note: {}
        }
    },
}
</script>
  