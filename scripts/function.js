    /**
     * Metodo para adicionar eventos a um elemento
     * element = elemento
     * events = string com os eventos
     * fn = função a ser executada
     */
    function addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }