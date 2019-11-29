<template>
    <div class="container">
        <p class="instrucciones"><b class="numero-vineta">a.</b> Listen to the words and repeat them.</p>
        <b-row>
            <b-col sm="2" v-for="(word, i) in words" v-bind:key="i">
                <img id="img21228" :src="require(`@/assets/images/exercise21228/${word.word}.jpg`)" :alt="word.word"><br>
                <drag v-if="word.status" class="drag" :transfer-data="{ answer: word.word }">
                    {{ word.word }}
                </drag>
                <label id="lbl21228" v-else>{{ word.word }}</label>
                <br>
            </b-col>
        </b-row>
        <b-table class="text-left" :fields="fields" :items="answers">
            <template v-slot:cell(family)="data">
                <drop id="drop21228" class="drop" @drop="pushFamily">
                    <label v-for="(wfamily, i) in wordsfam" v-bind:key="i">{{ wfamily }}</label>
                </drop>
            </template>
            <template v-slot:cell(school)="data">
                <drop id="drop21228" class="drop" @drop="pushSchool">
                    <label v-for="(wschool, i) in wordssch" v-bind:key="i">{{ wschool }}</label>
                </drop>
            </template>
            <template v-slot:cell(others)="data">
                <drop id="drop21228" class="drop" @drop="pushOthers">
                    <label v-for="(wother, i) in wordsoth" v-bind:key="i">{{ wother }}</label>
                </drop>
            </template>
        </b-table>
        <div class="text-right">
            <b-button variant="success" class="btn-finish" @click="onCheck()">
                <font-awesome-icon icon="check-circle"/> Check
            </b-button>
        </div>
    </div>
</template>

<script>
import words212281 from '@/assets/json/exercise21228-1.json'
import registers212282 from '@/assets/json/exercise21228-2.json'
export default {
    name: 'Exercise_21228',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            words: [],
            fields: ['family', 'school', 'others'],
            answers: [{family: '', school: '', others: ''}],
            positions: [],
            wordsfam: [],
            wordssch: [],
            wordsoth: [],
            ocupadas: 0
        }
    },
    methods: {
        show(){
            var max = Object.keys(words212281).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    word: words212281[item].word,
                    status: words212281[item].status
                }
                this.words.push(datos)
            }
        },
        onCheck(){
            var acumFam = this.checkWords(this.wordsfam, 0);
            var acumSch = this.checkWords(this.wordssch, 1);
            var acumOth = this.checkWords(this.wordsoth, 2);
            
            if(acumFam === 5 && acumSch === 6 && acumOth === 9){
                this.$swal('Well done!', '', 'success');
            } else {
                this.$swal('Try again', '', 'info');
                this.wordsfam = [];
                this.wordssch = [];
                this.wordsoth = [];
            }
        },
        checkWords(typeArray, pos){
            var acum = 0;
            for(const i in typeArray){
                for(const j in registers212282[pos]){
                    if(typeArray[i] === registers212282[pos][j])
                        acum += 1;
                }
            }
            return acum;
        },
        pushFamily(data){
            this.wordsfam.push(data.answer);
            this.disabledWord(data.answer);
        },
        pushSchool(data){
            this.wordssch.push(data.answer);
            this.disabledWord(data.answer);
        },
        pushOthers(data){
            this.wordsoth.push(data.answer);
            this.disabledWord(data.answer);
        },
        disabledWord(word){
            this.words.forEach(element => {
                if(element.word === word){
                    this.ocupadas += 1;
                    element.status = false;
                }     
            });
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