console.log("I exist still, I am the Text");

function handleSubmit(event) {
    event.preventDefault()
    var text = document.querySelectorAll('input[name=test-statement]')
    console.log("This is a text")
    console.log(text[0].value);
    fetch('http://localhost:3000/api', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: text[0].value})
    })
        .then(res => res.json())
        .then(function(res) {
            document.querySelector('section.text-results #polarity').innerHTML = res.polarity
            document.querySelector('section.text-results #subjectivity').innerHTML = res.subjectivity
            document.querySelector('section.text-results #polarity_confidence').innerHTML = res.polarity_confidence
            document.querySelector('section.text-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
        })
}

function uppercase(str, callback) {
    callback(str.toUpperCase())
}
module.exports = uppercase

export { handleSubmit, uppercase }