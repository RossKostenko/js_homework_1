https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
 // let rna;
  for (let i=0; i<dna.length; i++) {
    if (dna[i] !== "T") {
     let rna = dna[i];
      } else {
     let rna = "U";
    }
  } return rna;
  // create a function which returns an RNA sequence from the given DNA sequence
} 

https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  let a = 0;
  let words = [];
  for (i=0; i<string.length; i++) {
    if (string[i] !== " ") {
      words[a] += string[i];
    } else {
      words.push;
      a++;
      }
  } return [words];
}

