const inp = document.getElementById("panel-num");
const pText = document.getElementById("anterior");
let temporal= 0;
let opTemp="";
let FirstVal = false;




// funcion para detectar la operacion
function onClickOperator(op){
    // FirstVal=true
    opTemp = op;
    pText.innerHTML = inp.value + opTemp;
    temporal = inp.value;
    inp.value =null;
}

function opRealizar(){
    let resultado;
    
    switch (opTemp) {
        case '+':
            resultado = Number.parseFloat(temporal) + Number.parseFloat(inp.value);
            pushRes(resultado);
            break;
        
        case '%':
            resultado = Number.parseFloat(temporal) % Number.parseFloat(inp.value);
            pushRes(resultado);
            break;
        
        case '/':
            resultado = Number.parseFloat(temporal) / Number.parseFloat(inp.value);
            pushRes(resultado);
            break;
        
        case '*':
            resultado = Number.parseFloat(temporal) * Number.parseFloat(inp.value);
            pushRes(resultado);
            break;
        
        case '-':
            resultado = Number.parseFloat(temporal) - Number.parseFloat(inp.value);
            pushRes(resultado);
            break;
        
        default:
            break;
    }
    
}


// Funcion para agregar el contenido en el sumador
function onClickB(simb){
    inp.value = inp.value + simb
}

// Funcio para borrar el contenido
function onClickClear(){
    inp.value="";
}
// Publicar el resultado en la parte superior, asigar el resultado a una variable temp
function pushRes(res){
    
    pText.innerHTML = temporal + opTemp + inp.value;
    inp.value = res;
    temporal =res;
}


function detectarTecla(evento) {
    const codigoTecla = evento.keyCode;
    console.log("Se presionó la tecla con código:", codigoTecla);
  
   
    switch (codigoTecla) {
        case 8:
            onClickClear();    
        break;

        
        case 13:
            opRealizar();
        break;
        case 48: 
            onClickB(0);
        break;
        case 49:
             onClickB(1);
        break;
      case 50: 
            onClickB(2);
        break;
      case 51: 
            onClickB(3);
        break;
      case 52: 
            onClickB(4);
        break;
      case 53: 
            onClickB(5);
        break;
      case 54: 
            onClickB(6);
        break;
      case 55: 
            onClickB(7);
        break;
      case 56: 
             onClickB(8);
        break;
      case 57: 
            onClickB(9);
        break;
      
      default:
        
    }
  }
