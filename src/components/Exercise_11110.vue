<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Read the following information.
        </p>
        <b-card id="card11110" class="text-left">
            An adjective says something about a noun (a person, a thing or a place). It always goes before the noun.
            <b-row>
                <b-col>
                    <ul>
                        <li>big house</li>
                        <li>tall boy</li>
                    </ul>
                </b-col>
                <b-col></b-col>
            </b-row>
            <b-row>
                <b-col>
                    You can use adjectives after the verb.
                    <ul>
                        <li>Tom is Italian.</li>
                        <li>The books are American</li>
                    </ul>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-card>
        <p class="instrucciones">
            <b class="numero-vineta">b.</b> Complete the sentences using adjectives from the box.
        </p>
        <b-card>
            <b-row>
                <b-col v-for="(word, i) in words" v-bind:key="i">{{ word.word }}</b-col>
            </b-row>
        </b-card>
        <br>
        <ol class="text-left" id="listSent11110"></ol>
    </div>
</template>

<script>
import words111101 from '@/assets/json/exercise11110-1.json'
import sentences111102 from '@/assets/json/exercise11110-2.json'
export default {
    name: 'Exercise_11110',
    data () {
        return {
            words: [],
            sentences: [],
            positions: []
        }
    },
    mounted: function () {
        this.append_list();
    },
    methods: {
        append_list(){
            // WORDS
            var max = Object.keys(words111101).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datosW = {
                    word: words111101[item].word
                };
                this.words.push(datosW);
                var datosS = {
                    sentence: sentences111102[item].sentence,
                    image: sentences111102[item].image
                }
                this.sentences.push(datosS)
            }
            document.getElementById('listSent11110').innerHTML = '';
            for (const i in this.sentences) {
                $('#listSent11110').append(this.sentences[i].sentence)
            }
        },
        randomSent (max) {
            if (this.positions.length !== max) {
                var repetir;
                while (repetir !== false) {
                    var aleatorio = Math.floor(Math.random() * (max - 0) + 0);
                    repetir = this.repeat(aleatorio, max);
                }
                this.positions.push(aleatorio);
                return aleatorio;
            }
        },
        repeat (num, max) {
            var variable = false;
            for (var i = 0; i < max; i++) {
                if (num === this.positions[i])
                    variable = true;
            }
            return variable;
        }
    }
  
}
</script>