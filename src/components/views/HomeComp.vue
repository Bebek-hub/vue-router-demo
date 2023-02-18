<template>
    <div>
        <h1>Home page</h1>
        <p>My first name is {{ name }}</p>
        <p> My other name is {{ student.name }}</p>
        <p>The name of my school is {{  student.school }}</p>
        <button @click="changeName">Change name</button> <br/><br/>
        <router-link to="/about">About page</router-link>
    </div>
</template>

<script setup>
//for reactivity in vue 3
import { ref, reactive } from "@vue/reactivity"
const name = ref("God'sFavour")

const student = reactive({
    name: "Toluwalope",
    school: "Alt-school"
})

// creating methods in vue 3
const changeName = () => {
    name.value = "Olayinka"
}
</script>