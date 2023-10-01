# js-social-posts

esercizio di oggi: **Social Posts**
nome repo: js-social-posts
Descrizione**
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
**Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
**Milestone 2** - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
**Milestone 3** - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

================================================================================================

1. Creo un array di oggetti con le caratteristiche suggerite, per poter essere stampate nelle relative card;
2. Con un for Each ciclo gli oggetti; 
3. Estrapolo i valori da stampare in pagina;
4. Con una funzione inverto la data e la inserisco nel template;
5. Creo una funzione che inserisce l'immagine se presente;
6. Se l'immagine non è presente la sostituisco con le iniziali del suo nome e cognome;
7. Creo una funzione che prende le sue iniziali e le stampa nel template;
8. Con una istruzione decido se inserire l'immagine oppure le iniziali in base al risultato;
9. Prendo il riferimento del button like e del counter;
10. Salvo in un secondo array i like cliccati.
11. Con una funzione controllo se l'id è compreso nell'array;
12. Se la condizione è vera gli metto la classe che cambia il colore;
13. Ciclo i button e gli aggiungo l'id;
14. Con un evento al click del button like, gli cambio il colore e incremento i like in pagina;
15. Creo una funzione gestisco la classe per cambiare colore;