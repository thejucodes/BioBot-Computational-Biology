export const CONCEPTS_DATA = [
  {
    id: "intro-comp-bio",
    title: "Introduction to Computational Biology",
    category: "Foundations",
    icon: "Binary",
    shortDescription: "The intersection of biology, computer science, and data analysis to decode living systems.",
    summary: "Computational Biology is the application of computer science, statistics, and mathematics to solve problems in biology. It involves developing algorithms, mathematical models, and computational simulations to understand complex biological systems.",
    simpleExplanation: "Imagine living cells are supercomputers running biological software written in the 4-letter code of DNA (A, T, C, G). Computational biology is like reverse-engineering that biological code using computer programs instead of petri dishes!",
    detailed: `Computational Biology bridges biological observation with computational simulation and analysis. While wet-lab biology relies on physical reagents and test tubes, computational biology uses in silico (computer-based) modeling.

### Core Subfields:
1. **Computational Genomics:** Decoding genomes, finding mutations, and understanding non-coding DNA.
2. **Structural Bioinformatics:** Predicting and simulating the 3D structures of biomolecules (e.g., proteins, RNA).
3. **Systems Biology:** Modeling entire cellular pathways and metabolic circuits using differential equations and network graphs.
4. **Computational Evolutionary Biology:** Tracing ancestry and species divergence through tree algorithms.`,
    realLifeExample: "The Human Genome Project sequenced all 3 billion chemical base pairs in human DNA. Without computational sequence assembly algorithms like Celera Assembler and BLAST, analyzing the fragmented reads would have taken centuries.",
    keyTerms: [
      { term: "In Silico", definition: "Biological experiments performed via computer modeling or simulation." },
      { term: "High-Throughput Sequencing", definition: "Technologies that sequence millions of DNA fragments in parallel." },
      { term: "Systems Biology", definition: "Holistic computational study of complex interactions in biological systems." }
    ],
    sampleSequence: "ATGCGATCGATCGATC",
    suggestedQuestions: [
      "What is the difference between Computational Biology and Bioinformatics?",
      "How do computers help solve biological problems?",
      "What are the main algorithms used in computational biology?"
    ]
  },
  {
    id: "bioinformatics-applications",
    title: "Bioinformatics and its Applications",
    category: "Foundations",
    icon: "Network",
    shortDescription: "Computational tools, software pipelines, and data management in life sciences.",
    summary: "Bioinformatics focuses on developing software tools, databases, and analytical pipelines to store, retrieve, manipulate, and interpret large volumes of biological data, particularly DNA, RNA, and protein sequences.",
    simpleExplanation: "If biology is an enormous library containing billions of unorganized books, bioinformatics is the master librarian who builds digital catalogs, search engines, and automated readers to find the exact paragraph you need in seconds.",
    detailed: `Bioinformatics is an interdisciplinary field combining computer science, mathematics, engineering, and molecular biology.

### Major Applications:
1. **Personalized Medicine:** Sequencing cancer patient tumor DNA to tailor therapies to individual oncogenic mutations.
2. **Drug Discovery & Docking:** Virtual screening of millions of small chemical ligands against pathogen target receptors.
3. **Agricultural Genomics:** Enhancing crop yield and climate resilience through marker-assisted selection.
4. **Molecular Epidemiology:** Tracking real-time viral transmission lineages (e.g., SARS-CoV-2 tracking via Nextstrain).`,
    realLifeExample: "During the COVID-19 pandemic, scientists used bioinformatics software within 48 hours of obtaining the viral sequence in January 2020 to map the spike protein gene, allowing vaccine design (like mRNA-1273 and BNT162b2) to start immediately before physical samples were even distributed.",
    keyTerms: [
      { term: "Pipeline", definition: "A chain of computational data-processing steps linked together." },
      { term: "Molecular Docking", definition: "Simulating how a drug molecule binds to a target protein pocket." },
      { term: "Variant Calling", definition: "Computational identification of differences between a sequenced sample and a reference genome." }
    ],
    sampleSequence: "ATGAAACGCATTAGC",
    suggestedQuestions: [
      "How was bioinformatics used to create COVID-19 mRNA vaccines?",
      "What is molecular docking in drug discovery?",
      "Can bioinformatics help diagnose genetic diseases?"
    ]
  },
  {
    id: "dna-rna-structure",
    title: "DNA and RNA Structure",
    category: "Molecular Biology",
    icon: "Dna",
    shortDescription: "The chemical building blocks, double-helix geometry, and genetic coding rules.",
    summary: "DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid) are nucleic acids carrying genetic instructions. DNA is typically a double-stranded antiparallel right-handed helix (A-T, G-C), while RNA is generally single-stranded (A-U, G-C).",
    simpleExplanation: "Think of DNA as a twisted spiral ladder (a double helix). The sides are sugars and phosphates, and the rungs are 4 chemical letters: Adenine always pairs with Thymine (A-T), and Guanine pairs with Cytosine (G-C). RNA is like a portable photocopy that uses Uracil (U) instead of Thymine.",
    detailed: `### Nucleic Acid Architecture:
- **DNA (Deoxyribonucleic Acid):** Double-stranded helix discovered by Watson, Crick, Franklin, and Wilkins. Strands run antiparallel (5' to 3' and 3' to 5').
- **Chargaff's Rules:**
  - Adenine (A) = Thymine (T) via 2 Hydrogen bonds
  - Guanine (G) = Cytosine (C) via 3 Hydrogen bonds (Higher thermal stability)
- **RNA (Ribonucleic Acid):** Single-stranded, ribose sugar with 2'-OH group, uses Uracil (U) instead of Thymine (T).`,
    realLifeExample: "Polymerase Chain Reaction (PCR) machines rely on knowing DNA's G-C melting temperature: regions high in G-C content require higher temperatures (~95°C) to denature because of the 3 hydrogen bonds compared to only 2 in A-T pairs.",
    keyTerms: [
      { term: "Antiparallel", definition: "The two strands of DNA run in opposite directions (5'→3' and 3'→5')." },
      { term: "Purines vs Pyrimidines", definition: "Purines (A, G) have 2 rings; Pyrimidines (C, T, U) have 1 ring." },
      { term: "Phosphodiester Bond", definition: "The strong covalent linkage between sugar and phosphate along the backbone." }
    ],
    sampleSequence: "ATGCGATCGATCGCTA",
    suggestedQuestions: [
      "Why does Guanine bind with Cytosine using 3 hydrogen bonds?",
      "What is the structural difference between DNA and RNA?",
      "Why is DNA more stable than RNA?"
    ]
  },
  {
    id: "protein-structure-functions",
    title: "Protein Structure and Functions",
    category: "Molecular Biology",
    icon: "Atom",
    shortDescription: "From linear amino acid chains to complex 3D nanomachines.",
    summary: "Proteins are polymers of 20 distinct amino acids linked by peptide bonds. They fold into intricate 3D shapes across four structural levels (Primary, Secondary, Tertiary, Quaternary) that dictate their biochemical functions.",
    simpleExplanation: "If amino acids are like Lego bricks of 20 different colors snapped in a row, the protein's true superpower is folding into a 3D robot or key. If the shape folds even slightly wrong, the key won't fit into the lock, leading to diseases like sickle cell.",
    detailed: `### Four Levels of Protein Structure:
1. **Primary Structure (1°):** Linear sequence of amino acids joined by covalent peptide bonds.
2. **Secondary Structure (2°):** Local folding into α-helices and β-pleated sheets via backbone hydrogen bonding.
3. **Tertiary Structure (3°):** Complete 3D folding driven by hydrophobic interactions, disulfide bridges, and ionic salt bridges.
4. **Quaternary Structure (4°):** Multi-subunit complexes (e.g., Hemoglobin tetramer).`,
    realLifeExample: "In Sickle Cell Anemia, a single amino acid substitution at position 6 of the hemoglobin beta chain (Glutamic acid mutated to Valine) causes the proteins to clump into rigid sickle-shaped fibers that block blood capillaries.",
    keyTerms: [
      { term: "Peptide Bond", definition: "Covalent bond between the carboxyl group of one amino acid and amino group of another." },
      { term: "Hydrophobic Collapse", definition: "Water-fearing amino acids cluster inside the protein core, driving folding." },
      { term: "Denaturation", definition: "Loss of native 3D structure due to heat or chemical extremes, destroying function." }
    ],
    sampleSequence: "AUGGUGCAUCUGACUCCUGAG",
    suggestedQuestions: [
      "What causes a protein to fold into its specific 3D shape?",
      "How does a single mutation in Hemoglobin cause Sickle Cell Disease?",
      "What are the 4 levels of protein structure?"
    ]
  },
  {
    id: "central-dogma",
    title: "Central Dogma of Molecular Biology",
    category: "Molecular Biology",
    icon: "Workflow",
    shortDescription: "The directional flow of genetic information: DNA → RNA → Protein.",
    summary: "Proposed by Francis Crick in 1958, the Central Dogma states that genetic information flows from DNA (replication) to messenger RNA through Transcription, and from mRNA to Functional Protein through Translation.",
    simpleExplanation: "Think of DNA as the master cookbook kept locked in a secure library (the nucleus). Transcription is writing down a single recipe on an index card (mRNA) to take home. Translation is the chef (the ribosome) cooking the delicious meal (the protein) following that recipe!",
    detailed: `### Flow of Genetic Information:
- **DNA Replication:** Duplication of the genome prior to cell division.
- **Transcription (DNA → RNA):** RNA Polymerase synthesizes complementary pre-mRNA from the DNA template.
- **Translation (RNA → Protein):** Ribosomes read mRNA codons (triplets) to link amino acids brought by tRNAs.
- **Exceptions:** Retroviruses (Reverse Transcription: RNA → DNA via Reverse Transcriptase) and Prions.`,
    realLifeExample: "The Pfizer-BioNTech and Moderna COVID-19 vaccines leverage the central dogma: they deliver mRNA encoding the viral spike protein. Human ribosomes translate this mRNA directly into protein, training the immune system without ever touching or modifying our nuclear DNA.",
    keyTerms: [
      { term: "Codon", definition: "A triplet of nucleotides in mRNA that specifies an amino acid or stop signal." },
      { term: "Introns & Exons", definition: "Introns are non-coding sequences spliced out; Exons code for the mature protein." },
      { term: "Reverse Transcriptase", definition: "Enzyme that synthesizes DNA from an RNA template (found in retroviruses)." }
    ],
    sampleSequence: "AUGGCCAUUGUAAUGGGC",
    suggestedQuestions: [
      "Can information ever flow backwards from RNA to DNA?",
      "Why is the genetic code called 'degenerate'?",
      "What are introns and exons in eukaryotic transcription?"
    ]
  },
  {
    id: "dna-replication",
    title: "DNA Replication",
    category: "Molecular Biology",
    icon: "Copy",
    shortDescription: "Semi-conservative duplication of the genome with proofreading fidelity.",
    summary: "DNA replication is the biological process by which a cell duplicates its double-stranded DNA prior to cell division. It is semi-conservative: each daughter molecule contains one original parent strand and one newly synthesized strand.",
    simpleExplanation: "Before a cell splits in two, it unzips its two DNA strands like a jacket. A molecular factory reads each half and builds the matching other half. When finished, you have two complete jackets, each with one original side and one brand new side!",
    detailed: `### Molecular Replisome Machinery:
- **Helicase:** Unwinds the double helix at the replication fork.
- **Primase:** Lays down short RNA primers needed for DNA polymerase initiation.
- **DNA Polymerase:** Synthesizes new DNA strictly in 5' to 3' direction with 3'→5' exonuclease proofreading.
- **Leading vs Lagging Strand:** Leading strand is continuous; lagging strand is discontinuous (Okazaki fragments).
- **Ligase:** Glues together Okazaki fragments.`,
    realLifeExample: "The antibiotic Ciprofloxacin kills bacteria by inhibiting bacterial DNA Gyrase (topoisomerase), causing overwhelming supercoiling strain during bacterial DNA replication, thereby halting bacterial cell division.",
    keyTerms: [
      { term: "Semi-Conservative", definition: "Each daughter DNA molecule preserves one intact parent strand." },
      { term: "Okazaki Fragment", definition: "Short segments of DNA synthesized discontinuously on the lagging strand." },
      { term: "Replication Fork", definition: "The Y-shaped region where the double helix unwinds for duplication." }
    ],
    sampleSequence: "ATGCCGAATTCGAT",
    suggestedQuestions: [
      "Why must the lagging strand be synthesized in fragments?",
      "What is the proofreading mechanism of DNA Polymerase?",
      "What role does DNA Helicase play in replication?"
    ]
  },
  {
    id: "transcription-translation",
    title: "Transcription and Translation",
    category: "Molecular Biology",
    icon: "Repeat",
    shortDescription: "Copying genes into mRNA transcripts and decoding them into functional proteins.",
    summary: "Transcription is the synthesis of complementary RNA from a DNA template directed by RNA Polymerase. Translation is the decoding of the mature mRNA by ribosomes and tRNAs to assemble amino acids into a polypeptide chain.",
    simpleExplanation: "Transcription is like photocopying a single recipe from the DNA archive onto an RNA sheet. Translation is taking that sheet to the kitchen (the ribosome) where helper trucks (tRNA) bring the required ingredients (amino acids) in order until the dish is fully cooked!",
    detailed: `### Transcription:
1. **Initiation:** RNA Polymerase binds promoter (e.g. TATA box).
2. **Elongation:** RNA strand grows in 5' to 3' direction.
3. **Termination:** Polyadenylation signal in eukaryotes.
4. **Modifications:** 5' cap, 3' poly-A tail, spliceosome intron excision.

### Translation:
- **A-Site (Aminoacyl):** Accepts incoming charged aminoacyl-tRNA.
- **P-Site (Peptidyl):** Holds tRNA with growing polypeptide chain.
- **E-Site (Exit):** Releases uncharged tRNA.`,
    realLifeExample: "Many life-saving antibiotics target bacterial translation without harming human cells. For example, Erythromycin blocks the exit tunnel of the bacterial 50S ribosomal subunit, preventing bacteria from synthesizing essential proteins.",
    keyTerms: [
      { term: "Promoter", definition: "A specific DNA sequence where RNA polymerase binds to initiate transcription." },
      { term: "Spliceosome", definition: "A complex that excises introns from pre-mRNA." },
      { term: "Anticodon", definition: "A sequence of 3 bases in a tRNA molecule that pairs with a complementary mRNA codon." }
    ],
    sampleSequence: "AUGCAUUUACGCUAA",
    suggestedQuestions: [
      "What are the three sites (A, P, E) on a ribosome?",
      "How do antibiotics specifically inhibit bacterial translation without killing humans?",
      "What modifications happen to pre-mRNA before leaving the nucleus?"
    ]
  },
  {
    id: "sequence-alignment",
    title: "Sequence Alignment Algorithms",
    category: "Algorithms & Analysis",
    icon: "AlignHorizontalDistributeCenter",
    shortDescription: "Pairwise, multiple alignment, dynamic programming, BLAST, and scoring matrices.",
    summary: "Sequence alignment arranges DNA, RNA, or protein sequences to identify regions of similarity that indicate functional, structural, or evolutionary relationships. Core techniques include Dynamic Programming and Heuristic search.",
    simpleExplanation: "Imagine two books written in ancient languages with typos and missing sentences. Sequence alignment aligns the paragraphs side by side, inserting gaps where words were skipped, to prove whether both books descended from the same original story!",
    detailed: `### Sequence Alignment Techniques:
- **Needleman-Wunsch:** Global alignment using dynamic programming (O(mn) complexity). Best for whole sequences of similar length.
- **Smith-Waterman:** Local alignment finding the highest scoring sub-region by resetting negative scores to zero.
- **BLAST (Basic Local Alignment Search Tool):** Heuristic approximation that finds exact word seeds and extends them rapidly against massive databases.
- **Scoring Matrices:** BLOSUM62 (for proteins) and PAM matrices.`,
    realLifeExample: "When biologists discover a newly isolated ocean bacterium, they sequence its 16S ribosomal RNA and run BLAST against the NCBI GenBank database. Within 3 seconds, BLAST aligns the sequence against millions of species to determine its exact taxonomic genus.",
    keyTerms: [
      { term: "Homology", definition: "Similarity between sequences due to shared evolutionary ancestry." },
      { term: "E-Value", definition: "Statistical metric of chance matches; lower E-value means higher significance." },
      { term: "BLOSUM62", definition: "Standard amino acid substitution matrix used for sequence comparison." }
    ],
    sampleSequence: "HEAGAWGHEE",
    suggestedQuestions: [
      "What is the difference between Needleman-Wunsch and Smith-Waterman?",
      "Why is BLOSUM62 the default scoring matrix in BLAST?",
      "What does an E-value of 1e-50 in a BLAST search mean?"
    ]
  },
  {
    id: "genomics-proteomics",
    title: "Genomics and Proteomics",
    category: "High-Throughput Omics",
    icon: "Layers",
    shortDescription: "Large-scale study of complete organism genomes and dynamic proteomes.",
    summary: "Genomics analyzes the complete set of DNA within an organism, including gene mapping and sequencing. Proteomics is the large-scale comprehensive study of all proteins expressed by an organism, tissue, or cell under specific environmental conditions.",
    simpleExplanation: "Genomics is like studying the architectural blueprint of an entire city—it shows every possible building that could be constructed. Proteomics is walking through the city streets right now to see which buildings are actually inhabited and what the people inside are doing at this exact moment!",
    detailed: `### High-Throughput Omics:
- **Genomics:** Genome sequencing, RNA-Seq transcriptomics, chromatin immunoprecipitation (ChIP-Seq).
- **Proteomics:** High-resolution Tandem Mass Spectrometry (LC-MS/MS) and 2D Gel Electrophoresis.
- **Dynamic Proteome:** Alternative splicing and post-translational modifications (PTMs like phosphorylation) create over 1,000,000 proteoforms from only ~20,000 human genes.`,
    realLifeExample: "Liquid biopsy cancer screening uses proteomics and cell-free DNA genomics to detect early-stage ovarian and pancreatic tumors from a simple blood sample by identifying aberrant phosphorylated protein biomarkers months before a physical tumor appears on a CT scan.",
    keyTerms: [
      { term: "Transcriptome", definition: "The full collection of RNA transcripts produced by the genome at a given time." },
      { term: "Mass Spectrometry", definition: "Analytical method that identifies proteins based on mass-to-charge ratios of peptide ions." },
      { term: "Post-Translational Modification", definition: "Chemical changes made to a protein after its synthesis (e.g. phosphorylation)." }
    ],
    sampleSequence: "ATGGCCGATCGT",
    suggestedQuestions: [
      "Why is the proteome much larger than the genome in humans?",
      "How does Mass Spectrometry identify unknown proteins?",
      "What is RNA-Seq and how does it measure gene expression?"
    ]
  },
  {
    id: "phylogenetic-trees",
    title: "Phylogenetic Trees & Evolutionary Analysis",
    category: "Algorithms & Analysis",
    icon: "GitBranch",
    shortDescription: "Inferring evolutionary relationships, molecular clocks, and tree construction algorithms.",
    summary: "Phylogenetic trees are branching diagrams representing evolutionary relationships and ancestral lineages among biological species or genetic sequences based on genetic, morphological, or molecular similarities.",
    simpleExplanation: "A phylogenetic tree is a family tree, but for millions of years of evolution. Instead of tracing your grandparents, it uses mutations in DNA like ticking clocks to calculate whether humans are more closely related to chimpanzees, whales, or yeast!",
    detailed: `### Tree Terminology & Algorithms:
- **Anatomy:** Root (common ancestor), Nodes (divergence events), Leaves (extant taxa), Clades (monophyletic groups).
- **Distance Methods:** UPGMA (assumes constant molecular clock rate) and Neighbor-Joining (allows varying evolutionary rates).
- **Character Methods:** Maximum Parsimony (minimizes mutation count) and Maximum Likelihood (probabilistic model).`,
    realLifeExample: "Phylogenetic tracking of HIV-1 envelope gene sequences in the 1990s helped epidemiologists reconstruct the origins of the human HIV pandemic back to cross-species transmission events from chimpanzees (SIVcpz) in Central Africa circa 1908.",
    keyTerms: [
      { term: "Monophyletic", definition: "A group of organisms that includes an ancestor and all of its descendants." },
      { term: "Molecular Clock", definition: "The hypothesis that genetic mutations accumulate at a relatively constant rate over millions of years." },
      { term: "Bootstrap Value", definition: "A statistical resampling technique to test the reliability and confidence of branches in a tree." }
    ],
    sampleSequence: "ACCGTTAGCTTG",
    suggestedQuestions: [
      "What is the difference between UPGMA and Neighbor-Joining?",
      "How do molecular clocks estimate when two species diverged?",
      "What is a cladogram versus a phylogram?"
    ]
  },
  {
    id: "biological-databases",
    title: "Biological Databases",
    category: "Data & Resources",
    icon: "Database",
    shortDescription: "Curated repositories of life science data: NCBI, GenBank, UniProt, PDB, and Ensembl.",
    summary: "Biological databases are computerized libraries of biological data—such as nucleotide sequences, protein 3D structures, metabolic pathways, and literature citations—curated and indexed for open scientific access worldwide.",
    simpleExplanation: "Just as GitHub stores computer code and Spotify stores music, biological databases store all known life sciences data. If a scientist in Tokyo sequences a weird fungus, a doctor in London can search UniProt or GenBank 5 minutes later to see the protein it makes!",
    detailed: `### Major Global Repositories:
- **NCBI GenBank:** Primary archive of international nucleotide sequences.
- **UniProtKB:** Comprehensive protein sequence and functional annotation (Swiss-Prot curated).
- **Protein Data Bank (PDB):** Worldwide repository of 3D macromolecular structures.
- **Ensembl:** Vertebrate genome browser with gene annotation and evolutionary orthologs.
- **KEGG:** Molecular pathways and metabolic network diagrams.`,
    realLifeExample: "When scientists deciphered the 3D atomic structure of the ribosome (which won the 2009 Nobel Prize), they deposited the atomic coordinates into the Protein Data Bank (PDB ID: 1FKA). Today, any student or pharmaceutical researcher can download and spin the 3D molecule for free.",
    keyTerms: [
      { term: "Accession Number", definition: "A unique alphanumeric identifier assigned to a specific DNA or protein record (e.g., NC_045512 for SARS-CoV-2)." },
      { term: "FASTA Format", definition: "Standard text format starting with '>' header followed by sequence lines." },
      { term: "PDB File Format", definition: "Standard coordinate file containing 3D atomic coordinates (X, Y, Z) of every atom in a macromolecule." }
    ],
    sampleSequence: ">seq1\nATGCGATCGCTA",
    suggestedQuestions: [
      "What is the difference between GenBank and UniProt?",
      "How do I read a FASTA format sequence file?",
      "What information is stored inside a PDB file?"
    ]
  },
  {
    id: "ai-in-biology",
    title: "Applications of AI in Biology",
    category: "Cutting-Edge",
    icon: "Sparkles",
    shortDescription: "AlphaFold, generative molecular design, AI drug discovery, and CRISPR target prediction.",
    summary: "Artificial Intelligence and Deep Learning are revolutionizing biology. AI systems can predict 3D protein structures with atomic accuracy (AlphaFold), generate novel de novo therapeutic molecules, optimize CRISPR gene-editing guides, and diagnose complex pathologies.",
    simpleExplanation: "For 50 years, predicting how a protein folds in 3D from its 1D sequence was considered an unsolvable grand challenge in biology that took PhD students 5 years in a wet lab. DeepMind's AlphaFold solved this in minutes using neural networks, predicting the 3D shape of almost every known protein on Earth!",
    detailed: `### AI Revolutions in Life Sciences:
- **AlphaFold 2 & AlphaFold 3:** Uses Evoformer neural networks and invariant point attention to predict 3D structures for >200 million proteins and ligand complexes with atomic accuracy.
- **De Novo Molecular Generation:** RFdiffusion and Chroma use generative 3D diffusion models to design customized synthetic proteins from scratch.
- **CRISPR AI:** Predicting off-target cleavages and maximizing on-target Cas9 guide RNA efficacy.
- **Genomic Foundation Models:** Transformers trained on raw DNA to decipher non-coding regulatory syntax.`,
    realLifeExample: "Using AI diffusion models, University of Washington biochemists designed artificial luciferase enzymes from scratch in 2023 that glow brightly and novel neutralizing mini-proteins against respiratory syncytial virus (RSV) in a fraction of the time needed by traditional directed evolution.",
    keyTerms: [
      { term: "AlphaFold", definition: "Deep learning system developed by Google DeepMind that predicts 3D protein structures from amino acid sequence." },
      { term: "Diffusion Model", definition: "Generative AI architecture that generates molecules by learning to reverse gradual noise addition." },
      { term: "Evolutionary Scale Modeling (ESM)", definition: "Protein language models that learn biological syntax directly from billions of sequences." }
    ],
    sampleSequence: "MKWVTFISLLLLFSSAYS",
    suggestedQuestions: [
      "How does AlphaFold predict 3D protein structures?",
      "Can AI design new enzymes from scratch?",
      "How is deep learning used to predict CRISPR off-target cuts?"
    ]
  }
];
