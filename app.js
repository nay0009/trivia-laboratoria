function saveName()
{
  var  nameUser = document.getElementById("name").value;
  if(nameUser==="")
  {
    document.getElementById("welcome").innerHTML = ("Por favor, ingresa tu nombre.");//indica que la respuesta es incorrecta
  }
  else {
    document.getElementById("welcome").innerHTML = ("Bienvenido, " + nameUser);

  }
}

var score = 0;
  function firstAnswer() //funcion para guardar y comparar la primer respuesta
    {
      var answer1 = document.getElementById("answerOne").value;
      if(answer1==="c"){//comparando la respuesta del usuario con la respuesta correcta
        document.getElementById("firstResult").innerHTML = ("Correcta! Ganaste 100 puntos.");//informa al usuario que su respuesta es correcta
        score = score + 100;//adiciona 100 puntos
      }
      else if (answer1==="") {
        document.getElementById("firstResult").innerHTML = ("Ingresa una respuesta valida.");//indica que la respuesta es incorrecta
      }
      else {
        document.getElementById("firstResult").innerHTML = ("Incorrecta! La respuesta correcta era el inciso c.");//indica que la respuesta es incorrecta
      }
    }

    function secondAnswer(){//funcion para guardar y comparar la segunda respuesta
      var answer2 = document.getElementById("answerTwo").value;
      if(answer2==="a"){
        document.getElementById("secondResult").innerHTML = ("Correcta! Ganaste 100 puntos.");
        score = score + 100;
      }
      else if (answer2==="") {
        document.getElementById("secondResult").innerHTML = ("Ingresa una respuesta valida.");//indica que la respuesta es incorrecta
      }
      else {
        document.getElementById("secondResult").innerHTML = ("Incorrecta! La respuesta correcta era el inciso a.");
      }
    }

    function thirdAnswer(){//funcion para guardar y comparar la tercer respuesta
      var answer3 = document.getElementById("answerThree").value;
      if(answer3==="b"){
        document.getElementById("thirdResult").innerHTML = ("Correcta! Ganaste 100 puntos.");
        score = score + 100;
      }
      if (answer3==="") {
        document.getElementById("thirdResult").innerHTML = ("Ingresa una respuesta valida.");//indica que la respuesta es incorrecta
      }
      else {
        document.getElementById("thirdResult").innerHTML = ("Incorrecta! La respuesta correcta era el inciso b.");
      }

      document.getElementById("finalScore").innerHTML = ("Felicidades! Tu puntuacion total es de " + score + " puntos.");//informa al usuario su puntuacion final
   }

function endGame(){
  document.getElementById("content").innerHTML = ("<center>Esta bien.<br>Nos vemos pronto!</center>");
}
