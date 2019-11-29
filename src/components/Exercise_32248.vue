<template>
    <div class="container">
        <p class="instrucciones"><b class="numero-vineta">a.</b> Listen to the words and repeat them.</p>
        <b-row>
            <b-col sm="3" v-for="(word, i) in words" v-bind:key="i">
                <img id="img21228" :src="require(`@/assets/images/exercise32248/${word.word}.jpg`)" :alt="word.word"><br>
                {{ word.word }}
            </b-col>
        </b-row>
        <p class="instrucciones"><b class="numero-vineta">b.</b> Complete the sentences.</p>
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
import words322481 from '@/assets/json/exercise32248-1.json'
import sentences322482 from '@/assets/json/exercise32248-2.json'
export default {
    name: 'Exercise_32248',
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
            var maxW = Object.keys(words322481).length;
            var maxS = Object.keys(sentences322482).length;

            for (var i = 0; i < maxW; i++) {
                // var itemW = this.randomSent(maxW);
                var datosW = {
                    word: words322481[i].word
                };
                this.words.push(datosW);
            }

            for (var j = 0; j < maxS; j++) {
                var itemS = this.randomSent(maxS);
                var datosS = {
                    part1: sentences322482[itemS].part1,
                    part2: sentences322482[itemS].part2,
                    answer: sentences322482[itemS].answer
                };
                this.sentences.push(datosS);
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