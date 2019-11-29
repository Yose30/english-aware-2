<template>
    <div class="container">
        <p class="instrucciones"><b class="numero-vineta">a.</b> Listen to the words and repeat them.</p>
        <b-row>
            <b-col sm="3" v-for="(word, i) in words" v-bind:key="i">
                {{ word.word }}
            </b-col>
        </b-row>
        <p class="instrucciones"><b class="numero-vineta">b.</b> Write the correct word.</p>
        <ol class="text-left">
            <li v-for="(sentence, i) in sentences" v-bind:key="i">
                {{ sentence.part1 }}
                <input type="text" :pattern="sentence.answer">
                {{ sentence.part2 }}
            </li>
        </ol>
    </div>
</template>

<script>
import words412641 from '@/assets/json/exercise41264-1.json'
import sentences412642 from '@/assets/json/exercise41264-2.json'
export default {
    name: 'Exercise_41264',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            words: [],
            sentences: [],
            positions: []
        }
    },
    methods: {
        show(){
            var maxS = Object.keys(sentences412642).length;
            for (var i = 0; i < maxS; i++) {
                var itemS = this.randomSent(maxS);
                var datosS = {
                    part1: sentences412642[itemS].part1,
                    part2: sentences412642[itemS].part2,
                    answer: sentences412642[itemS].answer
                };
                this.sentences.push(datosS);
            }
            var maxW = Object.keys(words412641).length;
            for (var i = 0; i < maxW; i++) {
                // var itemW = randomSent(maxW);
                var datosW = {
                    word: words412641[i].word
                };
                this.words.push(datosW);
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