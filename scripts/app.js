//const movies = [{
    //title:'Думки мої тихі',
    //image: 'https://i.ibb.co/35ZKPNZ/image.jpg',
    //description: 'Думки мої тихі 11111111111',
    //date: '2020-01-16TOO:00:00',
    //director: 'Антоніо Лукіч',
    //duration: '1 год 54 хв'
//},{
   // title: 'Додому',
   // image: 'https://i.ibb.co/9gN9dvj/Evge-poster.jpg',
   // description: 'Додому 22222222222',
  //  date: '2019-07-14TOO:00:00',
   // director: 'Володимир Яценко',
   // duration: '1 год 36 хв'
//}];

//function createSorting(){
    //const sort = new URLSearchParams(location.search).get('sort');

    //const nav = `
   // <a class="sort__item ${sort === 'name' ? 'active' : ''}" href="${location.origin + location.pathname + '?sort=name'}">Назва</a>
   // <a class="sort__item ${sort === 'date' ? 'active' : ''}" href="${location.origin + location.pathname + '?sort=date'}">Дата</a>
   // `;

    //return createFragmentTemplate(nav);
//}


//function createContent (movie) {
    // cart
    //const article = document.createElement('article');
    //article.classList.add('card');

    // header
    //const header = document.createElement('header');
    //header.classList.add('card__header');
    //header.style.backgroundImage = `url(${this.image})`;

    //const h2 = document.createElement('H2');
    //h2.classList.add('card__title');
    //h2.textContent = this.title;
    
    //const info = document.createElement('span');
    //info.classList.add('card__info');
    //info.textContent = `${this.date} - ${this.duration}`;

    //header.appendChild(h2);
    //header.appendChild(info);

    // section
    //const section = document.createElement('section');
    //section.classList.add('card__content');

    //const description = document.createElement('p');
    //description.classList.add('card__discription');
    //description.textContent = this.description;

    //const line = document.createElement('hr');

    //const director = document.createElement('p');
    //director.textContent = this.director;

    //section.appendChild(description);
    //section.appendChild(line);
    //section.appendChild(director);

    //article.appendChild(header);
    //article.appendChild(section);

    //return article;
    //} 

     //function createContentTemplate(movie) {

        //const article = `
        //<article class="card">
       // <header class="card__header" style="background-image: url(${movie.image})">
         //   <h2 class=""card__title>${movie.title}</h2>
          //  <span class="card__info">${movie.date}- ${movie.duration}</spas>
       // </header>
       // <section class="card__content">
           // <p class="card__description">${movie.description}</p>
            //<hr>
            //<p>Режисер: ${movie.director}</p>
        //</section>
       //</article>`;
        //return createFragmentTemplate(article);
     //}

     //function createFragmentTemplate(str) {
        //const template = document.createElement('template');

       // template.innerHTML = str;
        //return template.content;
     //}

    //function appendContent(id, content) {
           // const el = document.getElementById(id);

           // el.appendChild(content);
       // }

    //function sortMovies(data) {
     //const sort = new URLSearchParams(location.search).get('sort');

      //switch(sort) {
       // case 'name':
        //    return data.sort((a,b) => a.title.localeCompare(b.title));
       // case 'date':
         //   return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
       // default:
         //   return data;
     // }
   // }

   import { appendContent } from './helpers.js';
   import { createContentTemplate } from './card.js';
   import { createSorting } from './sorting.js';
   import { getMovies } from './service.js';
        
    function init () {
        appendContent('sort', createSorting());
        getMovies()
        //fetch('https://run.mocky.io/v3/1be5a8b1-2625-488e-95a9-83a508b6cb34')
        //.then((res) => res.json())
        //.then(sortMovies)
        .then((data) =>{
           
            const fragment = document.createDocumentFragment();

            (data).forEach((movie) => {
                fragment.appendChild(createContentTemplate(movie));
            });
    
            appendContent('content', fragment);
            //appendContent('sort', createSorting());

        });
        //const fragment = document.createDocumentFragment();

        //sortMovies(movies).forEach((movie) => {
           // fragment.appendChild(createContentTemplate(movie));
       // });

        //appendContent('content', fragment);
        //appendContent('sort', createSorting());
   }

    init();
