// find all box and span(by attribute)
//

const getSection = (num) => {
    const numbers = document.querySelectorAll('span');
    // numbers.dataset.number;
    const selectedNum = [...numbers].find(
        (span) => span.attributes['data-number'].value == num
    );

    return selectedNum.closest('.box').dataset.section;
};

getSection(5);
