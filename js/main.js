const allQueries = document.querySelector('.querycontainer');
const queryDiv = allQueries.querySelectorAll('div');

// console.log(queryDiv);

queryDiv.forEach(
    items => items.addEventListener('click', showDetails)
);


function showDetails(e) {
    // console.log(this);

    // chaning + to x , and x to + signs.
    const textAndSignDiv = this.querySelector('.text-and-sign');
    const showAnswer = this.querySelector('.showAnswer');
    const iP = textAndSignDiv.querySelector('p');
    const iClass = textAndSignDiv.querySelector('i');


    if (iClass.innerHTML == '+') {
        iClass.innerHTML = 'x';

        // show answer div
        showAnswer.style.display = 'block';
        this.style.height = 'auto';
        iP.style.margin = "1.5rem 0 0 1.5rem"
    }
    else if (iClass.innerHTML == 'x') {
        iClass.innerHTML = '+';

        // hide answer div
        showAnswer.style.display = 'none';
        this.style.height = '5rem';
        iP.style.margin = "0 0 0 1.5rem"
    }
}