<template>
  <div>
    <h1>Index Page</h1>
    <p>
      {{ message }}
    </p>
    <NoteCard title="Note 1" body="This is a note" />
    <NoteCard v-for="note in notes" :key="note.id" :title="note.title" :body="note.body" />
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue';

export default {
  name: "IndexPage",
  components: { NoteCard },
  data() {
    return {
      message: "",
      notes: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/notes")
      .then(res => res.json())
      .then(data => {
        this.message = data.message;
        this.notes = data.notes;
      });
  },
}
</script>
