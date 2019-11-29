<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Listen to the words and repeat.
        </p>
        <b-row>
            <b-col sm="2" v-for="(word, i) in words" v-bind:key="i">
                <img id="img12312" :src="require(`@/assets/images/exercise12312/${word.word}.jpg`)" :alt="word.word"><br>
                <drag v-if="word.status" class="drag" :transfer-data="{ value: word.word }">
                    {{ word.word }}
                </drag>
                <label v-else id="lbl12312">{{ word.word }}</label>
            </b-col>
        </b-row><br>
        <b-table class="text-left" :fields="fields" :items="items">
            <template v-slot:cell(opinion)="data">
                <drop id="drop12312" class="drop" @drop="pushOpinion">
                    <label v-for="(o, i) in opinion" v-bind:key="i">{{ o }}</label>
                </drop>
            </template>
            <template v-slot:cell(size)="data">
                <drop id="drop12312" class="drop" @drop="pushSize">
                    <label v-for="(s, i) in size" v-bind:key="i">{{ s }}</label>
                </drop>
            </template>
            <template v-slot:cell(shape)="data">
                <drop id="drop12312" class="drop" @drop="pushShape">
                    <label v-for="(s, i) in shape" v-bind:key="i">{{ s }}</label>
                </drop>
            </template>
            <template v-slot:cell(age)="data">
                <drop id="drop12312" class="drop" @drop="pushAge">
                    <label v-for="(a, i) in age" v-bind:key="i">{{ a }}</label>
                </drop>
            </template>
            <template v-slot:cell(color)="data">
                <drop id="drop12312" class="drop" @drop="pushColor">
                    <label v-for="(c, i) in color" v-bind:key="i">{{ c }}</label>
                </drop>
            </template>
            <template v-slot:cell(material)="data">
                <drop id="drop12312" class="drop" @drop="pushMaterial">
                    <label v-for="(m, i) in material" v-bind:key="i">{{ m }}</label>
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
import words123121 from '@/assets/json/exercise12312-1.json'
import answers123122 from '@/assets/json/exercise12312-2.json'
export default {
    name: 'Exercise_12312',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            words: [],
            fields: ['opinion', 'size', 'shape', 'age', 'color', {key: 'material', label: 'Material/type'}],
            items: [{opinion: '', size: '', shape: '', age: '', color: '', material: ''}],
            opinion: [], size: [], shape: [], age: [], color: [], material: [],
            ocupadas: 0,
            positions: []
        }
    },
    methods: {
        show(){
            var max = Object.keys(words123121).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    word: words123121[item].word,
                    status: words123121[item].status
                }
                this.words.push(datos);
            }
        },
        onCheck(){
            var acumOp = this.checkWords(this.opinion, 0);
            var acumSi = this.checkWords(this.size, 1);
            var acumSh = this.checkWords(this.shape, 2);
            var acumAg = this.checkWords(this.age, 3);
            var acumCo = this.checkWords(this.color, 4);
            var acumMa = this.checkWords(this.material, 5);
            
            if(acumOp === 4 && acumSi === 3 && acumSh === 3 && acumAg === 3 && acumCo === 7 && acumMa === 4){
                this.$swal('Well done!', '', 'success');
            } else {
                this.$swal('Try again', '', 'info');
            }
        },
        checkWords(typeArray, pos){
            var acum = 0;
            for(const i in typeArray){
                for(const j in answers123122[pos]){
                    if(typeArray[i] === answers123122[pos][j])
                        acum += 1;
                }
            }
            return acum;
        },
        pushOpinion(data){
            this.opinion.push(data.value);
            this.disabledWord(data.value);
        },
        pushSize(data){
            this.size.push(data.value);
            this.disabledWord(data.value);
        },
        pushShape(data){
            this.shape.push(data.value);
            this.disabledWord(data.value);
        },
        pushAge(data){
            this.age.push(data.value);
            this.disabledWord(data.value);
        },
        pushColor(data){
            this.color.push(data.value);
            this.disabledWord(data.value);
        },
        pushMaterial(data){
            this.material.push(data.value);
            this.disabledWord(data.value);
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