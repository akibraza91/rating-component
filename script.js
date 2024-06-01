const ratingNum = document.querySelectorAll('span');
const submitBtn = document.querySelector('button');
const rating = document.getElementById('rating');

const myContainer = document.querySelector('.container');
const thankyou = document.querySelector('.thankyou');
const myMain = document.querySelector('.myContainer');

ratingNum.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        e.preventDefault();

        ratingNum.forEach((element) => element.classList.remove('active'));

        ele.classList.add('active');
    });
});

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    ratingNum.forEach((ele) => {
        if(ele.classList.contains('active')){
            rating.textContent = ele.textContent;
            myMain.style.transform = `translateX(-${myMain.offsetWidth}px)`;
            console.log(myMain.offsetWidth)
        }
    });
});