// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand())

// Create a factory function to generate objects
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let newBase = returnRandBase();
      let randomBase = Math.floor(Math.random() * dna.length)
      while (this.dna[randomBase] === newBase) {
        newBase = returnRandBase();
      }
      this.dna = newBase;
    },
    compareDNA(pAequor) {
      let identicalBaseCount = 0;
      (this.dna).forEach(base, i => {
        if (base === pAequor[i]) {
          identicalBaseCount ++;
        }
      });
      return Math.floor((identicalBaseCount / (this.dna).length.toFixed(2) * 100))
    },
    willLikelySurvive() {
      let chanceOfSurvival = (this.dna).filter(base => base === 'C' || 'G')
      if (((chanceOfSurvival.length / (this.dna).length) * 100) > 59) {
        return true;
      }
      return false;
    }
  }
}

let sample = [];
let i = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() == true) {
    sample.push(temp);
    i += 1
  } 
}
pAequorFactory(1, mockUpStrand);
console.log(pAequorFactory(1, mockUpStrand()))






