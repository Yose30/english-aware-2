<template>
    <div class="container">
        <p class="instrucciones">
            <b class="numero-vineta">a.</b> Read and underline all the adjectives you can find.
        </p>
        <p>
            Hi, Charlie!
            I am very happy in my new school here in Ohio! I’m in a multicultural
            group so I have classmates from different countries in the world.
            Yoko is Chinese; she’s very intelligent and has short and black
            straight hair. Pedro is from Spain; he’s nice, he’s tall, has a beautiful
            smile, he’s gorgeous! Hans is German, he’s funny and laughs all the
            time. He has fair skin, blue eyes and curly, brown hair. Zinnia is from
            India; she’s shy but very pretty, she has dark skin, black eyes and
            black, long hair.
            I have great teachers too, but the math teacher is fantastic! He’s
            always nice, patient and friendly. His classes are very interesting,
            so I’m never late or absent to math classes now. He’s not very tall,
            he has dark brown eyes, short, black hair and he wears glasses. He
            looks interesting. I’m trying to study hard to get good grades. I
            know you have a new English teacher. What’s she like?
            What does she look like?
            See you soon!
        </p>
        <p class="instrucciones">
            <b class="numero-vineta">b.</b> Read again the e-mail. Then answer the following questions. Circle T (true) or F (false).
        </p>
        <div class="text-right">
            <b-button class="btn-finish" variant="success" @click="onCheck()">
                <font-awesome-icon icon="check-circle"/> Check
            </b-button>
        </div>
        <b-table class="text-left" :fields="fields" :items="sentences">
            <template v-slot:cell(index)="data">
                {{ data.index + 1 }}
            </template>
            <template v-slot:cell(truefalse)="data">
                <b-row>
                    <b-col>
                        <b-form-checkbox 
                            size="lg" 
                            v-model="data.item.selected" 
                            :state="data.item.state"
                            value="true">
                        </b-form-checkbox>
                    </b-col>
                    <b-col>
                        <b-form-checkbox 
                            size="lg" 
                            v-model="data.item.selected" 
                            :state="data.item.state"
                            value="false">
                        </b-form-checkbox>
                    </b-col>
                </b-row>
            </template>
        </b-table>
    </div>
</template>

<script>
import sentences11310 from '@/assets/json/exercise11310.json'
export default {
    name: 'Exercise_11310',
    mounted: function () {
        this.show();
    },
    data () {
        return {
            fields: [
                { key: 'index', label: ''  },
                { key: 'sentence', label: ''  },
                { key: 'truefalse', label: ''  }
            ],
            sentences: [],
            positions: []
        }
    },
    methods: {
        show(){
            var max = Object.keys(sentences11310).length;
            for (var i = 0; i < max; i++) {
                var item = this.randomSent(max);
                var datos = {
                    sentence: sentences11310[item].sentence,
                    value: sentences11310[item].value,
                    selected: sentences11310[item].selected,
                    state: sentences11310[item].state
                }
                this.sentences.push(datos)
            }
        },
        onCheck(){
            for (const i in this.sentences) {
                if (this.sentences[i].selected !== this.sentences[i].value) {
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