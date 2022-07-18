module.exports = function toReadable (num) {
    let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let two = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let three = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    num = num.toString().split('');


    if (num.length === 1) { 
        let units = num[0];
        return `${one[units]}`;
     } else if (num.length === 2) { 
        let units = num[1];
        let tens = num[0];
  
        if (tens === '1') {
           return `${one[tens + units]}`;
        } else {
           if (units === '0') {
              return `${two[tens - 2]}`;
           }
           return `${two[tens - 2]} ${one[units]}`;
        }
     } else { 
        let units = num[2];
        let tens = num[1];
        let hundreds = num[0];
  
        if (tens === '1') {
           return `${three[hundreds - 1]} ${one[tens + units]}`;
        } else if ((tens === '0')) {
           if (units === '0') {
              return `${three[hundreds - 1]}`;
           }
           return `${three[hundreds - 1]} ${one[units]}`;
        } else {
           if (units === '0') {
              return `${three[hundreds - 1]} ${two[tens - 2]}`;
           }
           return `${three[hundreds - 1]} ${two[tens - 2]} ${one[units]}`;
        }
     }




}
