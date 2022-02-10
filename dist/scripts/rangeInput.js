let rangeList = document.querySelectorAll('[type="range"]');
const fillColor = '#2EB670';
const baseColor = '#DBDCDE';

for (let i = 0; i < rangeList.length; i++) {
    rangeList[i].addEventListener("mousemove", function (e) {
        let val = (this.value - this.getAttribute('min')) / (this.getAttribute('max') - this.getAttribute('min'));
        let percent = (val * 100).toFixed(4);
        console.log('Percent: ' + percent);

        //this.style.backgroundImage =
        //    '-webkit-gradient(linear, left top, right top, ' +
        //    'color-stop(' + percent + '%, #df7164), ' +
        //    'color-stop(' + percent + '%, #F5D0CC)' +
        //    ')';

        //this.style.backgroundImage =
        //    '-moz-linear-gradient(left center, #DF7164 0%, #DF7164 ' + percent + '%, #F5D0CC ' + percent + '%, #F5D0CC 100%)';

        //this.style.background = 'red';

        // this.style.setProperty('background', ... ) конструкция нужна для поддержки Safari
        this.style.setProperty('background', 'linear-gradient(to right, ' + fillColor + ' 0%, ' + fillColor + ' ' + percent + '%, ' + baseColor + ' ' + percent + '%, ' + baseColor + ' 100%)');
    });

    // hack from here:
    // https://stackoverflow.com/questions/18389224/how-to-style-html5-range-input-to-have-different-color-before-and-after-slider
    // this comment: https://stackoverflow.com/a/60560815
    rangeList[i].style.height = "3.6px";

    let val = (rangeList[i].value - rangeList[i].getAttribute('min')) / (rangeList[i].getAttribute('max') - rangeList[i].getAttribute('min'));
    let percent = (val * 100).toFixed(4);
    rangeList[i].style.setProperty('background', 'linear-gradient(to right, ' + fillColor + ' 0%, ' + fillColor + ' ' + percent + '%, ' + baseColor + ' ' + percent + '%, ' + baseColor + ' 100%)');

    rangeList[i].addEventListener("mousemove", function (e) {
        const label = document.querySelector('#' + this.getAttribute('data-label'));

        if (label) {
            label.innerHTML = this.value + 'px';
        }
    });
}

