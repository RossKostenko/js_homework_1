https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  let rna = dna.replace(/T/g, "U");
  return rna;
}

https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
  let words = [];
  words = string.split(" ");
  return words;
}

https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
// the shortest

function min(list){
  return Math.min.apply(null, list);
}

function max(list){
  return Math.max.apply(null, list);
}

https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let ind = 0;
  let val = arr[0];
  for (let i = 0; i < arr.lenth; i++) {
    if (val - arr[i] > 0) {
      val = arr[i];
      ind = i;
    }
  }
  if (toReturn === "value") {
    return val;
  } else {
    return ind;
  }
}

https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  queue.reverse();
  let N = queue.indexOf("wolf");
  if (N === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return "Oi! Sheep number " + N + "! You are about to be eaten by a wolf!";
}


https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

function maps(x) {
  let y = x.map(doubling);
  function doubling(value) {
    return value * 2;
  }
  return y;
}

https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  let itt = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== itt) {
      let value = arr[i];
      return value;
    }
  }
}

