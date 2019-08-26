console.log("I exist still Article");

function handleSubmitArticle(event) {
    event.preventDefault()
    var url = document.querySelectorAll('input[name=test-url]')
    console.log("BUILDING REQUEST");
    console.log(JSON.stringify(url[0].value));
    fetch('http://localhost:3000/article', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: url[0].value})
    })
        .then(res => res.json())
        .then(function(res) {
            document.querySelector('section.url-results #polarity').innerHTML = res.polarity
            document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
            document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
            document.querySelector('section.url-results #excerpt').innerHTML = res.text
        })
}

export {handleSubmitArticle}