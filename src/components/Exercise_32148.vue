<template>
    <div class="container">
        <b-card id="card32148" class="text-left">
            We use modal verb can to say that an action, a situation or event is possible to happen. <br>
            It can be quite cold in April. <br>
            I can understand clearly what you say.<br>
            We use the modal verb could to say that an action, situation or event was possible to happen
            in the past. <br>
            The police could help him after the accident.<br>
            I could study more for the exam.<br>
            We use be able to to talk about a possibility in the future. Add auxiliary will.<br>
            She will be able to help with the party.
        </b-card>
        <p class="instrucciones"><b class="numero-vineta">a.</b> Complete the sentences.</p>
        <ol class="text-left">
            <li v-for="(sentence, i) in sentences" v-bind:key="i">
                {{ sentence.part1 }}
                <b-form-select
                    id="sel32148"
                    :options="options"
                    :state="sentences[i].state"
                    v-model="sentences[i].selected">
                </b-form-select>
                {{ sentence.part2 }}
            </li>
        </ol>
        <div>
            <b-button class="btn-finish" variant="success" @click="onCheck()">
                <font-awesome-icon icon="check-circle"/> Check
            </b-button>
        </div>
    </div>
</template>

<script>
import sentences32148 from '@/assets/json/exercise32148.json'
export default {
    name: 'Exercise_32148',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            positions: [],
            sentences: [],
            options: [
                {text: 'can', value: 'can'},
                {text: 'could', value: 'could'},
                {text: 'be able to', value: 'be able to'},
                {text: 'will be able to', value: 'will be able to'},
            ]
        }
    },
    methods: {
        show(){
            var max = Object.keys(sentences32148).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    part1: sentences32148[item].part1,
                    part2: sentences32148[item].part2,
                    answer: sentences32148[item].answer,
                    selected: sentences32148[item].selected,
                    state: sentences32148[item].state
                };
                this.sentences.push(datos);
            }
        },
        onCheck(){
            for(const i in this.sentences){
                if(this.sentences[i].selected !== this.sentences[i].answer){
                    this.sentences[i].state = false;
                } else {
                    this.sentences[i].state = true;
                }
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