const singleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    let result = [];
    let num = number;
    if (num >= 100) {
        result.push(singleNumbers[Math.trunc(num / 100)]);
        result.push('hundred');
        num = num % 100;
    }
    if (num >= 20) {
        result.push(dozens[Math.trunc(num / 10)]);
        num = num % 10;
    }
    if (num < 20 && num > 0) {
        result.push(singleNumbers[num]);
    }
    if (num === 0 && result.length === 0) {
        result.push(singleNumbers[num]);
    }

    return result.join(' ');
}
