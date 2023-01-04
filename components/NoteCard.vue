<template>
    <div class="card-width card-height bg-yellow-300 flex flex-col shadow-lg rounded-md p-8 text-center">
        <h1 class="text-2xl font-bold text-gray-800 p-2 rounded-xl mb-4">{{ name }}
        </h1>
        <p class="text-lg text-gray-700 grow p-2 rounded-xl">{{ text }}</p>
    </div>
</template>
    
<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        }
    }
}
</script>