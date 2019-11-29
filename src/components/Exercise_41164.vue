<template>
    <div class="container">
        <b-card id="card41164" class="text-left">
            We use going to when we want to talk about our future plans or future intentions.
            I am going to get up early.
            She is going to move to a new house next month.
            We also use going to when we see clearly that
            something is about to happen in the future.
            Look at those clouds, it is going to rain soon.
            Follow this formula:
            Subject + verb to be + going to + verb in
            simple form + complement.
            You form the structure using verb to be and
            going to.
            I + am + going to
            He / She / It + is + going to
            You / We / They + are + going to
        </b-card>
        <p class="instrucciones"><b class="numero-vineta">a.</b> Complete the sentences with the correct form of verb to be + going to + an appropriate verb.</p>
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
import sentences41164 from '@/assets/json/exercise41164.json'
export default {
    name: 'Exercise_41164',
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
            var max = Object.keys(sentences41164).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    part1: sentences41164[item].part1,
                    part2: sentences41164[item].part2,
                    answer: sentences41164[item].answer
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