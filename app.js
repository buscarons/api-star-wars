function getCatFacts(done) {
    const result = fetch("https://cat-fact.herokuapp.com/facts")

    result
        .then(response => response.json())
        .then(data => done(data))
}

getCatFacts(data => {
    console.log(data)
    data.forEach(element => {
        const article = document.createRange().createContextualFragment(`
         <div class="card">
            <p>${element.text}</p>
        </div>`)

        document.querySelector(".container").append(article);
    });
})