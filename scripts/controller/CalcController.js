class CalcController
{
    /**
     * Construtor da classe calculadora
     *  -  displayCalc = manipula o display da calculadora
     *  
     * 
     */
    constructor(){
        this._displayCalc = document.querySelector("#display");
        this.initialize();
        this.initButtonEvents();
    }

    initialize(){
        this.displayCalc = "0";
    }

    execBtn(value){
        switch (value) {
            case 'CE':
                console.log('CE');
                break;
            case 'C':
                console.log('C');
                break;                
            case '+':
                console.log('ADIÇÃO');
                break;
            case '-':
                console.log('SUBTRAÇÃO');
                break;
            case '÷':
                console.log('DIVISÃO');
                break;                                
            case 'X':
                console.log('MULTIPLICAÇÃO');
                break;
            case '=':
                console.log('IGUAL');
                break;
            case ',':
                console.log('PONTO');
                break;
            case '±':
                console.log('MAIS/MENOS');
                break;
            case '←':
                console.log('BACKSPACE');
                break;                
            case '%':
                console.log('PORCENTAGEM');
                break;                
            case '√':
                console.log('RAIZ QUADRADA');
                break;
            case 'x²':
                console.log('POTENCIA');
                break;
            case '¹/x':
                console.log('1/X');
                break;                
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                console.log('NUMEROS');
                break;                                
            default:
                this.displayCalc = "ERROR";
                break;
        }
    }

    initButtonEvents(){
        let buttons = document.querySelectorAll(".btn");

        buttons.forEach((btn, index) => {
            addEventListenerAll(btn, "click drag", e=>{
                console.log('Botão', btn.innerHTML);
                this.execBtn(btn.innerHTML);
            });
 
         });
    }

    /**
    * Metodos GET e SET
    * 
    */
    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }
}