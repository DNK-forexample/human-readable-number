module.exports = function toReadable(number) {
        let str = number.toString();
        let arr = str.split('');
        const numbers = {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
            100: 'hundred',
        }
        if (number <= 20) {
          return numbers[number];
        } else if (number < 100 && number % 10 === 0) {
            return numbers[number];
        } else if (number > 20 && number < 100) {
          arr[0] = arr[0] * 10;
          arr[0] = numbers[arr[0]];
          arr[1] = numbers[arr[1]];
          return arr.join(' ');
        } else if (number === 100) {
          return 'one ' + numbers[number];
        } else if (number % 100 === 0) {
          return numbers[arr[0]] + ' hundred';
        } else if (number % 100 !== 0 && arr[1] === '0') {
              arr.splice(1, 1);
            return numbers[arr[0]]  +' hundred ' + numbers[arr[1]];
        } else if (number % 100 !== 0 && number < 1000 && arr[2] === '0') {
              let first = numbers[arr[0]] + ' hundred';
          let dec = arr[1] * 10;
          let dec2 = numbers[dec];
           return `${first} ${dec2}`;
        } else if (number % 100 !== 0 && number < 1000 && arr[1] === '1') {
          let first = numbers[arr[0]] + ' hundred';
          arr.splice(0,1);
          let decima = arr.join('');
          let decima2 = +decima;
          return `${first} ` + numbers[decima2];
        } else if (number % 100 !== 0 && number < 1000 && arr[1] !== '0' && arr[1] !== '1') {
            let first = numbers[arr[0]] + ' hundred';
             let second = arr[1] * 10;
             let second2 = numbers[second];
             let simple = numbers[arr[2]];
             return `${first} ${second2} ${simple}`;
        }
      }
