/*
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
6. Creo una funzione che prende le sue iniziali e le stampa nel template;
7. Con una istruzione decido se inserire l'immagine oppure le iniziali in base al risultato;


*/

//1.
const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 120,
    created: "2021-09-03",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 78,
    created: "2021-05-15",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 56,
    created: "2021-04-03",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 95,
    created: "2021-03-05",
  },
];

//REFERENCES
const postListRef = document.querySelector(".posts-list");

//2.
posts.forEach((post) => {
  //3.
  const { id, content, media, author, likes, created } = post;
  const { name, image } = author;
  console.log(id);
  console.log(name);
  postListRef.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
            ${author.image ? getImage(author) : firstLetters(author)}            
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${name}</div>
                <div class="post-meta__time">${changeDate(created)}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${content}</div>
    <div class="post__image">
        <img src="${media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
            </div>
        </div> 
    </div>
</div>`;
});

function changeDate(date) {
  return date.split("-").reverse().join("/");
}

function getImage(author) {
    return `<img class="profile-pic" src="${author.image}" alt="${author.name}"> `;
}

function firstLetters(author) {
    const {name} = author;
    const letters = name.split(' ').map(nameSplit => nameSplit.charAt(0));
    const firstLetter = letters.join(' ');
   
    return `<div class="profile-pic-default">
    <span>${firstLetter}</span>
    </div>`;
}
