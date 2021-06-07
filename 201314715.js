const express = require('express')
const app = express()
const port = 4000
var path    = require("path");
app.use('/style', express.static('style'));
module.exports = {

    substractNumbers: function(value1, value2){
      return value1 - value2;
    },
    esPrimo: function(numero){
        if( numero % 2 == 0 && !( numero == 2 || numero == -2 )){
            print("Numeros pares no son primos (Excepcion el 2).");
            return false;
        }
        if(numero == 2 || numero == -2){
            return true;
        }
    	contador = 2;
    	primo = true;
    	while( (primo) && (contador!=numero) ){
            if( numero % contador == 0 )
                    primo = false;
            contador++;
    	}
    	return primo;
    },

    PotenciaCubo: function(numero){
        a = numero * numero * numero;
        return a;
    },

    SayGoodbye: function(){
      return 'GoodBye';
    },

    ParImar: function(numero){
        if(numero%2==0){
            return 'par';
        }else{
         return 'impar'   
        }
    }
  
  }


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/', (req, res) => {
  res.send('Software Avanzado, Practica 1, Vacaciones Junio 2021')
})

app.listen(port, () => {
  console.log(`Practica 1 app listening at http://localhost:${port}`)
})