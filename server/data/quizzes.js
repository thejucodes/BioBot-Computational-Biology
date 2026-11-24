export const QUIZ_DATABASE = [
  {
    id: "q1",
    topicId: "dna-rna-structure",
    topicTitle: "DNA & RNA Structure",
    difficulty: "Beginner",
    question: "Which type of chemical bond holds the complementary base pairs (A-T and G-C) together in the DNA double helix?",
    options: [
      "Covalent phosphodiester bonds",
      "Hydrogen bonds",
      "Ionic salt bridges",
      "Disulfide bonds"
    ],
    correctIndex: 1,
    explanation: "Complementary nitrogenous bases pair across opposite strands through hydrogen bonds: Adenine and Thymine form 2 hydrogen bonds, while Guanine and Cytosine form 3 hydrogen bonds. Phosphodiester bonds form the sugar-phosphate backbone along a single strand."
  },
  {
    id: "q2",
    topicId: "dna-rna-structure",
    topicTitle: "DNA & RNA Structure",
    difficulty: "Beginner",
    question: "Which nitrogenous base is present in RNA but absent in DNA?",
    options: [
      "Thymine",
      "Adenine",
      "Uracil",
      "Cytosine"
    ],
    correctIndex: 2,
    explanation: "RNA contains Uracil (U) instead of Thymine (T). Both Uracil and Thymine are pyrimidines that pair with Adenine, but Uracil lacks a methyl (-CH3) group at carbon 5."
  },
  {
    id: "q3",
    topicId: "central-dogma",
    topicTitle: "Central Dogma",
    difficulty: "Beginner",
    question: "What is the universal start codon in standard eukaryotic translation, and which amino acid does it encode?",
    options: [
      "UAA, encoding Stop",
      "AUG, encoding Methionine",
      "UGA, encoding Tryptophan",
      "GAU, encoding Aspartate"
    ],
    correctIndex: 1,
    explanation: "AUG is the standard start codon across almost all life. It signals the ribosome to begin translation and directs the incorporation of Methionine (or formylmethionine in prokaryotes)."
  },
  {
    id: "q4",
    topicId: "central-dogma",
    topicTitle: "Central Dogma",
    difficulty: "Intermediate",
    question: "Retroviruses like HIV violate the classical directional flow of the Central Dogma using which specialized enzyme?",
    options: [
      "DNA Ligase",
      "RNA Polymerase II",
      "Reverse Transcriptase",
      "Telomerase"
    ],
    correctIndex: 2,
    explanation: "Reverse Transcriptase is an RNA-dependent DNA polymerase that synthesizes complementary DNA (cDNA) from a viral single-stranded RNA template, reversing the usual DNA → RNA direction."
  },
  {
    id: "q5",
    topicId: "protein-structure-functions",
    topicTitle: "Protein Structure",
    difficulty: "Intermediate",
    question: "Alpha-helices and Beta-pleated sheets represent which level of protein structural organization?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctIndex: 1,
    explanation: "Secondary structure consists of regular, localized conformations of the polypeptide backbone stabilized by hydrogen bonds between peptide carbonyl oxygen atoms and amide hydrogen atoms. Alpha-helices and beta-sheets are the two predominant forms."
  },
  {
    id: "q6",
    topicId: "protein-structure-functions",
    topicTitle: "Protein Structure",
    difficulty: "Intermediate",
    question: "In Sickle Cell Anemia, what specific amino acid mutation occurs at position 6 of the Hemoglobin beta chain?",
    options: [
      "Valine is mutated to Glutamic acid",
      "Glutamic acid is mutated to Valine",
      "Lysine is mutated to Arginine",
      "Alanine is mutated to Glycine"
    ],
    correctIndex: 1,
    explanation: "A point mutation (GAG to GTG) changes the sixth amino acid of the beta-globin chain from charged Glutamic acid (Glu) to non-polar hydrophobic Valine (Val). The exposed hydrophobic patch causes deoxygenated hemoglobin to polymerize into rigid fibers."
  },
  {
    id: "q7",
    topicId: "sequence-alignment",
    topicTitle: "Sequence Alignment",
    difficulty: "Intermediate",
    question: "Which dynamic programming algorithm is specifically designed for LOCAL sequence alignment (finding conserved domains)?",
    options: [
      "Needleman-Wunsch algorithm",
      "Smith-Waterman algorithm",
      "Dijkstra's algorithm",
      "Viterbi algorithm"
    ],
    correctIndex: 1,
    explanation: "The Smith-Waterman algorithm computes local sequence alignments by resetting negative scores in the dynamic programming matrix to zero. Needleman-Wunsch computes global end-to-end alignments."
  },
  {
    id: "q8",
    topicId: "sequence-alignment",
    topicTitle: "Sequence Alignment",
    difficulty: "Advanced",
    question: "What does an Expectation value (E-value) of 1e-45 indicate in a BLAST sequence search result?",
    options: [
      "There is a 45% chance the match is a false positive",
      "The alignment is extremely statistically significant and unlikely to occur by random chance",
      "The query sequence contains 45 gap insertions",
      "The database contains 45 identical sequences"
    ],
    correctIndex: 1,
    explanation: "The E-value represents the number of distinct alignments with an equivalent or better score that one would expect to see purely by random chance in a database of that size. An E-value of 1e-45 is virtually zero, proving extreme biological homology."
  },
  {
    id: "q9",
    topicId: "dna-replication",
    topicTitle: "DNA Replication",
    difficulty: "Intermediate",
    question: "Why is the lagging strand synthesized discontinuously as Okazaki fragments rather than in one continuous piece?",
    options: [
      "DNA Polymerase can only synthesize DNA in the 5' to 3' direction",
      "DNA Helicase moves backward on the lagging strand",
      "RNA primers can only bind to the 3' end of the parent DNA",
      "Topoisomerase blocks continuous synthesis"
    ],
    correctIndex: 0,
    explanation: "All known DNA polymerases synthesize nascent DNA strictly in the 5' to 3' direction by adding dNTPs to a free 3'-OH group. Because DNA strands are antiparallel, the lagging strand template runs 5' to 3', forcing synthesis away from the advancing replication fork in short Okazaki segments."
  },
  {
    id: "q10",
    topicId: "phylogenetic-trees",
    topicTitle: "Phylogenetic Trees",
    difficulty: "Intermediate",
    question: "Which tree-building method is character-based and selects the tree topology that minimizes the total number of evolutionary mutation events?",
    options: [
      "UPGMA",
      "Neighbor-Joining",
      "Maximum Parsimony",
      "K-Means Clustering"
    ],
    correctIndex: 2,
    explanation: "Maximum Parsimony applies Occam's razor (the simplest explanation is preferable): it searches for the phylogenetic tree topology that requires the minimal number of character state changes (mutations) across all analyzed sites."
  },
  {
    id: "q11",
    topicId: "biological-databases",
    topicTitle: "Biological Databases",
    difficulty: "Beginner",
    question: "Which major international database is the primary worldwide archive of 3D macromolecular structures solved by X-ray crystallography, NMR, and Cryo-EM?",
    options: [
      "GenBank",
      "UniProtKB",
      "PDB (Protein Data Bank)",
      "PubMed"
    ],
    correctIndex: 2,
    explanation: "The Protein Data Bank (PDB) is the single global repository for 3D atomic coordinates of biological macromolecules (proteins, nucleic acids, and complex assemblies)."
  },
  {
    id: "q12",
    topicId: "ai-in-biology",
    topicTitle: "AI in Biology",
    difficulty: "Beginner",
    question: "Google DeepMind's AlphaFold achieved a historic scientific breakthrough in which 50-year-old computational biology grand challenge?",
    options: [
      "Full genome sequencing in under 1 second",
      "Protein 3D structure prediction directly from 1D amino acid sequence",
      "Curing bacterial antibiotic resistance through quantum gates",
      "Simulating an entire human brain atom by atom"
    ],
    correctIndex: 1,
    explanation: "AlphaFold revolutionized biology by accurately predicting the 3D atomic coordinates of proteins directly from their linear amino acid sequence, solving the landmark 50-year-old protein folding problem in CASP14."
  },
  {
    id: "q13",
    topicId: "genomics-proteomics",
    topicTitle: "Genomics and Proteomics",
    difficulty: "Intermediate",
    question: "Why can an organism's proteome be vastly more diverse than its number of protein-coding genes (~20,000 in humans)?",
    options: [
      "DNA replication produces different genes in each cell division",
      "Alternative mRNA splicing and post-translational modifications (PTMs)",
      "Ribosomes randomly mutate codons during translation",
      "Amino acids change chemical identities spontaneously in the cytoplasm"
    ],
    correctIndex: 1,
    explanation: "Alternative RNA splicing allows a single gene to produce multiple distinct mRNA isoforms. Furthermore, post-translational modifications (such as phosphorylation, glycosylation, ubiquitination, and proteolytic cleavage) generate hundreds of thousands of distinct functional protein proteoforms from just ~20,000 genes."
  },
  {
    id: "q14",
    topicId: "bioinformatics-applications",
    topicTitle: "Bioinformatics Applications",
    difficulty: "Beginner",
    question: "What computational technique is used in rational drug design to simulate how a drug candidate binds inside a receptor's active site?",
    options: [
      "Molecular Docking",
      "Western Blotting",
      "Flow Cytometry",
      "Chromatography"
    ],
    correctIndex: 0,
    explanation: "Molecular docking computationally models the preferred geometric orientation and binding affinity (ΔG) of a small molecule ligand when bound to a macromolecular target receptor."
  },
  {
    id: "q15",
    topicId: "transcription-translation",
    topicTitle: "Transcription & Translation",
    difficulty: "Advanced",
    question: "During eukaryotic mRNA processing, what multi-component molecular machine removes non-coding introns and ligates coding exons?",
    options: [
      "Proteasome",
      "Spliceosome",
      "DNA Polymerase I",
      "Nucleosome"
    ],
    correctIndex: 1,
    explanation: "The spliceosome, composed of small nuclear RNAs (snRNAs U1, U2, U4, U5, U6) and small nuclear ribonucleoproteins (snRNPs), precisely recognizes splice donor (GU) and acceptor (AG) sites to excise introns as lariat structures and splice exons together."
  }
];
