var main = document.querySelectorAll('.main .center')[0];

fetch('https://api.themoviedb.org/3/movie/popular?api_key=ff683cd6939a6c42c628ad5eca236146&language=en-US&page=1').then(response => response.json())
.then(data => {
    //console.log(data)
    data.results.map((val1, val2) => {
        if(val2 > 10)
            return;
        if(val2 == 0){
            main.innerHTML += `
            
                <div class="banner-principal" style="background-image: url('https://image.tmdb.org/t/p/original`+val1.backdrop_path+`')"></div>
            
            `;
        }else{
            if(val2 == 1){
                main.innerHTML += `
                
                    <h2>Assista os recomendados</h2>
                    <div class="card-movie">
                        <img src="https://image.tmdb.org/t/p/w500`+val1.poster_path+`" />
                    </div>
                    
                `;
            }else{

                main.innerHTML += `
                
                    <div class="card-movie">
                        <img src="https://image.tmdb.org/t/p/w500`+val1.poster_path+`" />
                    </div>

                `;
            }
        }
    })
})
