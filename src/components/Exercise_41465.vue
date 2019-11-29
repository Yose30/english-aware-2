<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Read and write.
        </p>
        <p>
            I am really excited because I am going to go to the beach next weekend. I am going
            to spend time under the sun sunbathing and swimming in the sea. I am determined to take
            surfing lessons. I have bought a surf board on the Internet and I am going to pick it up in a
            store near the hotel where I am going to stay. I am going to eat delicious seafood, lay on the
            beach chair and relax while I remember all the work I need to do at my office!
        </p>
        <div class="text-right">
            <b-button variant="primary" class="descarga-pdf" @click="download()">Download</b-button>
        </div>
        <div id="questions41465" class="text-left">
            <ol>
                <li v-for="(question, i) in questions" v-bind:key="i">
                    {{ question.question }} <br>
                    <textarea id="txt41465" v-model="question.answer"></textarea>
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
import questions41465 from '@/assets/json/exercise41465.json'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
var doc = new jsPDF();
var img = new Image();
export default {
    name: 'Exercise_41465',
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
            var max = Object.keys(questions41465).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    question: questions41465[item].question,
                    answer: questions41465[item].answer
                };
                this.questions.push(datos);
            }
        },
        download(){
            this.$refs['my-modal'].show();
            html2canvas(document.querySelector('#questions41465')).then(function (canvas) {
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