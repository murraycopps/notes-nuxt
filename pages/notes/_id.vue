<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <NoteCard :key="note._id" :name="note.name" :text="note.text" />
  </div>
</template>

<script>
import NoteCard from '../../components/NoteCard.vue';

export default {
  name: "NotePage",
  components: { NoteCard },
  data() {
    return {
      note: {
        id: '',
        name: '',
        text: '',
      }
    };
  },
  created() {
    fetch(`http://localhost:3000/api/note/${this.$route.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.note = data.data;
      });

  }
}
</script>
