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

    initButtonEvents(){
        let buttons = document.querySelectorAll(".btn");

        buttons.forEach((btn, index) => {
            addEventListenerAll(btn, "click drag", e=>{
                console.log(btn.innerHTML);
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