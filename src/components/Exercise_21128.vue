<template>
    <div class="container">
        <b-card class="text-left" id="card21128">
            We use verb to be in simple past, to talk about a past state of being, for example how someone
            felt. For this, you can often use verb to be + an adjective, noun or prepositional phrases.
            <br>Follow this formula: <br>
            <b>Subject + was / were + adjective, noun or
            prepositional phrase</b><br>
            My sister was proud to receive the prize.
            Lauren was busy at weekends. <br>
            We use verb to be in past in affirmative form as
            follows: <br>
            <b>I / He / She / It + was</b>
            <b>We / You / They + were</b>
        </b-card>
        <p class="instrucciones"><b class="numero-vineta">a.</b> Complete the sentence with the correct form of the word in parenthesis.</p>
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
import sentences21128 from '@/assets/json/exercise21128.json'
export default {
    name: 'Exercise_21128',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            sentences: [],
            positions: []
        }   
    },
    methods: {
        show(){
            var max = Object.keys(sentences21128).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    part1: sentences21128[item].part1,
                    part2: sentences21128[item].part2,
                    answer: sentences21128[item].answer
                }
                this.sentences.push(datos);
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