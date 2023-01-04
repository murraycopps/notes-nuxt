<template>
  <div class="flex flex-col items-center gap-4 justify-start">
    <nuxt-link to="/create">
      <button class="text-xl px-4 py-2 rounded-md m-2 fixed left-0 top-0 bg-yellow-300 shadow-lg hover:bg-yellow-400">Create Note</button>
    </nuxt-link>
    <NoteCardLink v-for="note in notes" :key="note.id" :name="note.name" :text="note.text" :href="`/notes/${note._id}`" />
  </div>
</template>

<script>
import NoteCardLink from '../components/NoteCardLink.vue';

export default {
  name: "IndexPage",
  components: { NoteCardLink },
  data() {
    return {
      notes: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/notes", { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        this.notes = data.data;
      });
  },
}
</script>