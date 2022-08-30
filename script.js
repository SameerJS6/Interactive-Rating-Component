const RatingComponent = document.querySelector('.container');
const Thankyou = document.querySelector('.thanks');
const showRate = document.getElementById('rate')
const Rating = document.querySelectorAll('.btn-rating');
const Submit = document.querySelector('.btn-submit');
const Reset = document.querySelector('.btn-reset');

    // For Submit Button and Reset Button 
    Submit.addEventListener('click', ()=> {
        RatingComponent.style.display = 'none';
        Thankyou.classList.remove("hide");

    });
    // Reset 
    Reset.addEventListener('click', ()=> {
        Thankyou.classList.add("hide");
        RatingComponent.style.display = 'block';
        
    });

    // For Passing the information from user to displaying
    Rating.forEach((rate) => {
        rate.addEventListener('click', ()=> {
            showRate.innerHTML = rate.innerHTML
            console.log(rate.innerHTML);

        })
    });