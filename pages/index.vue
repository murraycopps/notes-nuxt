<template>
  <div class="index">
    <h1>Notes</h1>
    <nuxt-link to="/create">
      <button>Create Note</button>
    </nuxt-link>
    <div v-for="note in notes" :key="note._id" class="">
      <nuxt-link :to="`/notes/${note._id}`">
        <NoteCard :name="note.name" :text="note.text" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import NoteCard from '../components/NoteCard.vue';

export default {
  name: "IndexPage",
  components: { NoteCard },
  data() {
    return {
      notes: []
    };
  },
  created() {
    fetch("http://localhost:3000/api/notes")
      .then(res => res.json())
      .then(data => {
        this.notes = data.data;
      });
  },
}
</script>

<style>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}

.index h1 {
  font-size: 2rem;
  margin: 1rem;
}

.index button {
  font-size: 1rem;
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: rgb(253 224 71);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

</style>
