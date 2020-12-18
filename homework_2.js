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

function min(list) {
  let minimum = list[0];
  for (let i = 0; i < list.length; i++) {
    if (minimum - list[i] > 0) {
      minimum = list[i];
    }
  }
  return minimum;
}

function max(list) {
  let maximum = list[0];
  for (let i = 0; i < list.length; i++) {
    if (maximum - list[i] < 0) {
      maximum = list[i];
    }
  }
  return maximum;
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
