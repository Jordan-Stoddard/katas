// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a funciton which translates a given DNA string into RNA.

// For example:

// DNAtoRNA("GCAT") returns ("GCAU")
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    // iterate over string
    let rna = ''

    for (let i = 0; i < dna.length; i++) {
        // store the current letter in a variable
        const currentLetter = dna[i]
        // if the current letter in the iteration is 'T' then push a U into rna string
        if(currentLetter === 'T') {
            rna += 'U'
            // else return the current letter.
        } else {
            rna += currentLetter
        }
    }
    return rna
  }


console.log((DNAtoRNA("TTTT")), "UUUU")
console.log((DNAtoRNA("GCAT")), "GCAU")
console.log((DNAtoRNA("GACCGCCGCC")), "GACCGCCGCC")