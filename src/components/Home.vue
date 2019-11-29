<template>
    <div class="container">
        <b-row>
            <b-col sm="4" v-for="(exercise, i) in exercises" v-bind:key="i">
                <router-link class="btn home" :to="`/${exercise.route}`">{{exercise.title}}</router-link>
                <hr>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import exercisesJSON from '@/assets/json/exercises.json'
    export default {
        name: 'Home',
        created: function () {
            var max = Object.keys(exercisesJSON).length;
            for (var i = 0; i < max; i++) {
                var datos = {
                    route: exercisesJSON[i].route,
                    title: exercisesJSON[i].title
                }
                this.exercises.push(datos)
            }
        },
        data () {
            return {
                exercises: []
            }
        }
    }
</script>