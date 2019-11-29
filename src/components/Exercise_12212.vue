<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Look at the itemIs in the catalogue and read their descriptions. Match the picture to the correct description.
        </p>
        <div class="text-right">
            <b-button variant="success" class="btn-finish" @click="onCheck()">
                <font-awesome-icon icon="check-circle"/> Check
            </b-button>
        </div>
        <b-row align="center">
            <b-col sm="6" v-for="(image, i) in images" v-bind:key="i">
                <img :src="require(`@/assets/images/exercise12212/${image.image}.jpg`)" :alt="image.image"><br>
                <drop 
                    class="drop"
                    id="drop12212"
                    @dragover="pos = i"
                    @drop="handleDrop">
                    {{ image.selected }}
                </drop>
                <hr>
            </b-col>
        </b-row>
        <br>
        <ol class="text-left">
            <li v-for="(answer, i) in answers" v-bind:key="i">
                <drag class="drag" :transfer-data="{ value: answer.answer }">
                    {{ answer.answer }}
                </drag>
            </li>
        </ol>
    </div>
</template>

<script>
import images122121 from '@/assets/json/exercise12212-1.json'
import answers122122 from '@/assets/json/exercise12212-2.json'
export default {
    name: 'Exercise_12212',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            images: [],
            answers: [],
            pos: null,
            positions: []
        }
    },
    methods: {
        show(){
            var max = Object.keys(images122121).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);

                var datosI = {
                    image: images122121[item].image,
                    answer: images122121[item].answer,
                    selected: images122121[item].selected
                };
                this.images.push(datosI);

                var datosA = {
                    answer: answers122122[item].answer
                };
                this.answers.push(datosA);
            }
        },
        handleDrop(data){
            this.images[this.pos].selected = data.value;
        },
        onCheck(){
            var count = 0;
            var max = Object.keys(images122121).length;
            for(const i in this.images){
                if(this.images[i].selected === this.images[i].answer){
                    count += 1;
                }
            }
            if(count === max){
                
            } else {
                
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