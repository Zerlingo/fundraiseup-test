let rangeList = document.querySelectorAll('[type="range"]');
const fillColor = '#2EB670';
const baseColor = '#DBDCDE';

const updateValue = function (elem) {
    let val = (elem.value - elem.getAttribute('min')) / (elem.getAttribute('max') - elem.getAttribute('min'));
    let percent = (val * 100).toFixed(4);

    // конструкция this.style.setProperty('background', ... ) нужна для поддержки Safari
    elem.style.setProperty('background', 'linear-gradient(to right, ' +
        fillColor + ' 0%, ' +
        fillColor + ' ' + percent + '%, ' +
        baseColor + ' ' + percent + '%, ' +
        baseColor + ' 100%)');
}

for (let i = 0; i < rangeList.length; i++) {
    rangeList[i].addEventListener("mousemove", function (event) {
        updateValue(event.target);
    });

    // hack from here:
    // https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider
    // this comment: https://stackoverflow.com/a/60560815
    rangeList[i].style.height = "3.6px";

    updateValue(rangeList[i]);

    rangeList[i].addEventListener("mousemove", function (e) {
        const label = document.querySelector('#' + this.getAttribute('data-label'));

        if (label) {
            label.innerHTML = this.value + 'px';
        }
    });
}

