<template>
    <div class="card bg-yellow-300 flex flex-col shadow-lg rounded-md p-8 text-center">
        <h1 :class="`text-2xl font-bold text-gray-800 p-2 rounded-xl mb-4`">{{ title }}
        </h1>
        <p :class="`text-lg text-gray-700 grow p-2 rounded-xl`">{{ body }}</p>
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
}
</style>
    