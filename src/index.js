module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen' ,'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number >=0 && number < 10) {
        return units[number];
    }

    if (number >= 10 && number < 20) {
        return teens[number - 10];
    }

    if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            let temp = number / 10;
            return dozens[temp - 2];
        } else {
            let temp = Math.floor(number / 10);
            return `${dozens[temp - 2]} ${units[number % 10]}`;
        }
    }

    if (number >= 100 && number < 1000) {
        let lower = number % 100;
        let upper = (number - lower) / 100;
        return lower == 0 ? `${units[upper]} hundred` : `${units[upper]} hundred ${toReadable(lower)}`;
    }

    if (number >= 1000 && number < 1000000) {
        let lower = number % 1000;
        let upper = (number - lower) / 1000; // exact division
        let terms = upper % 10 == 1 ? 'thousand' : 'thousands';
        return lower == 0 ? `${toReadable(upper)} ${terms}` : `${toReadable(upper)} ${terms} ${toReadable(lower)}`;
    }

    if (number >= 1000000 && number < 1000000000) {
        let lower = number % 1000000;
        let upper = (number - lower) / 1000000; // exact division
        let terms = upper % 10 == 1 ? 'million' : 'millions';
        return lower == 0 ? `${toReadable(upper)} ${terms}` : `${toReadable(upper)} ${terms} ${toReadable(lower)}`;
    }

    return 'Sorry! I can only count up to 1 billion: my arms have too few fingers for more than that!';
}
