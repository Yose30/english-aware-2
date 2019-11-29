<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Read the text and answer the questions.
        </p>
        <img id="img21529" :src="require(`@/assets/images/exercise21228/READING.jpg`)"><br>
        <p>
            For me one of the most important stages of my life was childhood. During this special stage
            was when I learned new things, developed skills and sweet memories were stuck on my mind and
            heart. Some of the most important people in my life were my parents, grandmother and siblings.
            Their help and love were the main ingredients for a happy childhood. I attended the same school
            from kindergarten to high school. My classmates were with me for a long time. The saddest time was
            when we decided to attend different universities. Sometimes we were together again in special
            occasions, but some of them decided to leave our country and start a new life. Undoubtedly, my
            childhood was the best stage of my life.
        </p>
        <div class="text-right">
            <b-button variant="primary" class="descarga-pdf" @click="download()">Download</b-button>
        </div>
        <div id="questions21529" class="text-left">
            <ol>
                <li v-for="(question, i) in questions" v-bind:key="i">
                    {{ question.question }} <br>
                    <textarea id="txt21529" v-model="question.answer"></textarea>
                </li>
            </ol>
        </div>
        <!-- MODALS -->
        <b-modal ref="my-modal" centered hide-footer hide-header="">
            <b-row>
                <b-col sm="8">
                    <b-form-input v-model="nameStudent" :state="state" placeholder="Enter your name"></b-form-input>
                </b-col>
                <b-col sm="4">
                    <b-button variant="primary" @click="generatePDF()">Continue</b-button>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
import questions21529 from '@/assets/json/exercise21529.json'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
var doc = new jsPDF();
var img = new Image();
export default {
    name: 'Exercise_21529',
    data () {
        return {
            questions: [],
            nameStudent: '',
            state: null,
            positions: []
        }
    },
    mounted: function () {
        this.show();
    },
    methods: {
        show(){
            var max = Object.keys(questions21529).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    question: questions21529[item].question,
                    answer: questions21529[item].answer
                };
                this.questions.push(datos);
            }
        },
        download(){
            this.$refs['my-modal'].show();
            html2canvas(document.querySelector('#questions21529')).then(function (canvas) {
                img.src = canvas.toDataURL('image/svg', 2)
                img.width = 190
                img.height = 140
                doc.addImage(img.src, 'SVG', 10, 20, img.width, img.height)
            });
        },
        generatePDF(){
            if(this.nameStudent.length > 5){
                this.state = null;
                this.$refs['my-modal'].hide();
                // Default export is a4 paper, portrait, using milimeters for units
                doc.setFont('helvetica');
                doc.setFontType('bold');
                doc.setFontSize(10);
                doc.text(10, 15, 'Student name: ' + this.nameStudent);
                doc.save('exercise.pdf');
            } else {
                this.state = false;
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