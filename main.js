let ratingValue = document.querySelector('li')
let submitBtn = document.querySelector('.submit-btn')
let rating = 0
let parseRating = () => {
   return rating = ratingValue.innerText
}
let getRating = (e) => {
    e.preventDefault
    console.log(rating)
}
submitBtn.addEventListener('click', getRating)
ratingValue.addEventListener('click', parseRating)