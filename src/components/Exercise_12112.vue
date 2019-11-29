<template>
    <div class="container">
        <p>
            It is important to follow a specific order when using more than one adjective to describe anything. The order we should follow is the next:
        </p>
        <b-table :fields="fields" :items="items"></b-table>
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Follow the adjective order in the table to correct the following descriptions:
        </p>
        <ol class="text-left">
            <li v-for="(sentence, i) in sentences" v-bind:key="i">
                <div id="div12112" v-for="(word, j) in sentence.words" v-bind:key="j" >
                    <drag v-if="!word.state" class="drag" :transfer-data="{ value: word.word }">
                        <b>{{ word.word }} </b>  / 
                    </drag> 
                    <label id="lbl12112" v-else><b>{{ word.word }} </b>  / </label>
                </div>
                <br>
                <drop 
                    v-for="(order, k) in sentence.order" v-bind:key="k"
                    class="drop"
                    id="drop12112"
                    @dragover="assign(order, i, k)"
                    @dragleave="selection = {}"
                    @drop="handleDrop">
                    <b v-if="order.state">{{ order.word }}</b>
                </drop>
            </li>
        </ol>
    </div>
</template>

<script>
import sentences12112 from '@/assets/json/exercise12112.json'
export default {
    name: 'Exercise_12112',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            sentences: [],
            selection: {},
            positions: [],
            fields: ['opinion', 'size', 'shape', 'age', 'color', 'origin',{key: 'material', label: 'Material/type'}],
            items: [{opinion: 'pretty', size: 'small', shape: 'round', age: 'antique', color: 'blue', origin: 'Italian', material: 'glass'}],
        }
    },
    methods: {
        show(){
            var max = Object.keys(sentences12112).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    words: sentences12112[item].words,
                    order: sentences12112[item].order
                }
                this.sentences.push(datos);
            }
        },
        assign(order, i, k){
            this.selection = { word: order.word, posS: i, posW: k };
        },
        handleDrop(data){
            if(data.value === this.selection.word){
                var words = this.sentences[this.selection.posS].words;
                this.sentences[this.selection.posS].order[this.selection.posW].state = true;
                for(const w in words){
                    if(words[w].word === data.value){
                        words[w].state = true;
                    }
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