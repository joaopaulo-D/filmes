var main = document.querySelectorAll('.center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ff683cd6939a6c42c628ad5eca236146&language=en-US&page=1').then(response => response.json())
.then(data => {
    data.results.map((val) => {
        main.innerHTML += `
        <div class="post">
            <img src="https://image.tmdb.org/t/p/w500`+val.poster_path+`" />
            <h3>Filme: `+val.title+`<h3>
            <p>Descrição: `+val.overview+`</p>
         </div>
        `;
    })
});