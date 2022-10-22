<template>
  <div>
    <h2>home</h2>
    <v-btn color="error" dark large @click="startForm">Start</v-btn>
  </div>
</template>

<script>
import router from '../router';

export default {
    methods: {
        startForm() {
            router.push('/form')
        }
    }
}
</script>