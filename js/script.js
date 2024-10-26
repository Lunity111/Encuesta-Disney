const instancia = {
    data(){
        return{
            mostrar: null,
            newCharacter: '',  
            characters: [],
            memorie: '',
            whichCharact: '',
            resultado: false,
            muestra: 'Mostrar Resultados'
                 

        }
    },
    methods:{
        mostrartemplate: function(n){
                this.mostrar = n;
        },
        addCharacter: function() {
            if (this.newCharacter.trim() !== '') {
              this.characters.push(this.newCharacter);
              this.newCharacter = '';
            }
        },
        mostrarResultado: function(){
            this.resultado =! this.resultado
            if(this.resultado == true)
                this.muestra = 'Ocultar';
            else
                this.muestra = 'Mostrar Resultados';
        },

        eliminar: function(i){
            this.characters.splice(i,1);
        }
    }
};
const app = Vue.createApp(instancia).mount('#section');


