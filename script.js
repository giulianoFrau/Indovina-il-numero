'use strict';

/***** Definiamo il numero casuale che dovra essere indovinato ******/

let secretNumber = Math.trunc(Math.random() * 20) + 1; //generazione numero casuale da 0 a 20(math trunc fa sparire i decimali),numero che poi dovrà essere confrontato

/****** Definiamo il numero che si decrementerà ogni qualvolta non viene indovinato il numero ******/

let score = 20;

/****** Definiamo il numero che conterrà il valore piu alto ******/

let highscore = 0;




/***** aggiungiamo l'add listener,un evento che si verifica alla pressione del pulsante(pulsante check) ******/
/*selezioniamo solo la classe che ci serve,perchè se selezioniamo anche la classe btn prende anche 
l'altro pulsante(NB:LA CLASSE CHECK NON E' PRESENTE NEL CSS)*/
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value); //abbiamo bisogno di castarlo a number in quanto se no il valore restituisce (lo fa sempre)una stringa
  if (!guess) { //questo fa si che se non si seleziona nessun numero compare un avviso

    /*visto che la query selector per i message è ripetuta piu volte,possiamo creare una funzione che ha per argomento il messaggio da
    selezionare: function display(msg){document.querySelector('.message').textContent =msg;} e richiamiamo solo la funzione
    con all'interno il messaggio : display("Nessun numero selezionato")*/
    document.querySelector('.message').textContent =
      'Nessun numero selezionato';


  } else if (guess === secretNumber) { //se il numero viene indovinato
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Numero indovinato';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  
  
  } else if (guess !== secretNumber && score > 0) { //se il numero non viene indovinato
    //operatore ternario per farci dire se il numero da indovinare è piu alto o basso di quello messo da noi
    guess > secretNumber
      ? (document.querySelector('.message').textContent =
          'Hai messo un numero troppo alto')
      : (document.querySelector('.message').textContent =
          'Hai messo un numero troppo basso');
    score--;
    document.querySelector('.score').textContent = score;
  } 
  
  
  else { //se si esce dal ciclo dello " score > 0 "
    document.querySelector('.message').textContent = 'Hai perso ';
  }
});

/*  alternativa rapida per ricaricare la pagina
document.querySelector('.again').addEventListener('click', function () {
  reload = location.reload();
});*/




/***** aggiungiamo l'add listener,un evento che si verifica alla pressione del pulsante(pulsante again) ******/
/* questo invece permette di ricaricare tutto di default senza che si ricarichi la pagina per il punteggio alto*/

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;//ridefiniamo un altro numero casuale
  score = 20; //va definito se no si genera un errore
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;//riga 73
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
