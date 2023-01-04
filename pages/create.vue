<template>
    <div class="w-screen h-screen flex flex-col justify-center items-center">
        <EditableNoteCard :new="true" />
        <div class="fixed top-0 left-0 m-2">
            <nuxt-link to="/">
                <button
                    class="bg-yellow-300 text-xl shadow-lg rounded-md py-2 px-4 text-center w-full hover:bg-yellow-400">Home</button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import EditableNoteCard from '../components/EditableNoteCard.vue';

export default {
    name: "CreatePage",
    components: { EditableNoteCard },
}
</script>