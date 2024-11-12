Variabili di stato di gioco:
array di numeri random 

[x] Al click sul bottone inizia
  - nascondo gli input dalla pagina 
  - blocco il bottone inizia
  - genero i numeri random
  - mostro i numeri random in pagina
  - faccio partire il timer di 30 secondi
    - alla fine di 30 secondi
      - stoppo il timer
      - nascondo i numeri
      - mostro gli input
      - sblocco il bottone inizia


Al click sul bottone conferma
  - prelevo tutti i valori degli input
  - dichiaro l'array di numeri indovinati
  - per ogni valore degli input
      controllo se è incluso nell'array di numeri random di partenza, se sì
        - pusho il numero nell'array di numeri indovinati
  - Stampo il messaggio con il risultato: Hai indovinato (lunghezza dell'array) numeri: num1, num2, num 3

Funzioni: 
- genera numero random
- genera Array di numeri 