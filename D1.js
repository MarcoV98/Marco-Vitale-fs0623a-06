/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let spiegazioneStringa = "Il primo tipo di datatype è il dato stringa, ovvero questo che sto utilizzando adesso: esso è costituito da una sequenza di caratteri di una certa lunghezza. Deve essere compreso tra apici ('esempio') o doppi apici, cioè quelli usati per aprire e chiudere questa variabile. Il secondo metodo è preferibile. "
window.alert(spiegazioneStringa)

let spiegazioneNum = "Il secondo tipo di datatype è il dato numerico, cioè il valore di un numero intero, positivo o negativo o decimale. Nel primo caso si tratta di un numero integer, nel secondo di un float. Ricordiamo che nei di numeri non interi non si deve inserire la virgola ma un punto. Un esempio: "
let esempioNum = 12
console.log(spiegazioneNum + esempioNum)

let spiegazioneBoolean = prompt("Il terzo tipo di datatype è il dato boolean. Esso ammette solo due valori: true e false. Hanno vari usi, come indicare se una certa operazione ha avuto o meno successo o per disattivare all'occorrenza certe funzioni di un programma. Se hai capito, scrivi i due valori possibili qui:")
console.log(spiegazioneBoolean)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Marco"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 12
let numero2 = 20
console.log(numero1 + numero2)

/* ESERCIZIO 4pa
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
name = "Vitale"
console.log(name)

const città = "Agrigento"
/*città = "Palermo"*/
console.log(città)
/*Se cambio il valore di città in "Palermo", ottengo l'errore Uncaught TypeError: Assignment to constant variable.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
console.log(name1 === name2)

/* EXTRA */
let celsius = prompt("Inserisci i Gradi Celsius qui:")
let fahrenheit = "gradi fahrenheit"
console.log(celsius * 1.8 + 32 + " " + fahrenheit)

