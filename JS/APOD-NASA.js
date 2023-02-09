fetch('https://api.nasa.gov/planetary/apod?api_key=ks6TXrbTOp8Wu7Yuh3EZ0ggOaie6q6LepkF70acW')
    .then(res => res.json())
    .then(data => {

        const img = document.querySelector('img');
        img.src = data.url; 

    });
