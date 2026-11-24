export const KNOWLEDGE_BASE = [
  {
    id: "intro-comp-bio",
    title: "Introduction to Computational Biology",
    category: "Foundations",
    icon: "Binary",
    shortDescription: "The intersection of biology, computer science, and data analysis to decode living systems.",
    summary: "Computational Biology is the application of computer science, statistics, and mathematics to solve problems in biology. It involves developing algorithms, mathematical models, and computational simulations to understand complex biological systems.",
    simpleExplanation: "Imagine living cells are supercomputers running biological software written in the 4-letter code of DNA (A, T, C, G). Computational biology is like reverse-engineering that biological code using computer programs instead of petri dishes!",
    detailed: `### What is Computational Biology?

Computational Biology bridges biological observation with computational simulation and analysis. While wet-lab biology relies on physical reagents and test tubes, computational biology uses **in silico** (computer-based) modeling to decipher:
- How genes interact in cellular networks
- How molecular structures move and fold over picoseconds to milliseconds
- How diseases spread through dynamic epidemiological simulations
- How evolutionary pressures shape organism genomes over millions of years

#### Core Subfields:
1. **Computational Genomics:** Decoding genomes, finding mutations, and understanding non-coding DNA.
2. **Structural Bioinformatics:** Predicting and simulating the 3D structures of biomolecules (e.g., proteins, RNA).
3. **Systems Biology:** Modeling entire cellular pathways and metabolic circuits using differential equations and network graphs.
4. **Computational Evolutionary Biology:** Tracing ancestry and species divergence through tree algorithms.

#### Why is it essential today?
Modern high-throughput sequencing machines generate terabytes of genomic data in a single run (Next-Generation Sequencing). Human brains cannot manually spot patterns in 3.2 billion base pairs; we require sophisticated algorithms like dynamic programming, graph theory, and machine learning.`,
    realLifeExample: "The Human Genome Project (completed in 2003) sequenced all 3 billion chemical base pairs in human DNA. Without computational sequence assembly algorithms like Celera Assembler and BLAST, analyzing the fragmented reads would have taken centuries.",
    keyTerms: [
      { term: "In Silico", definition: "Biological experiments performed via computer modeling or simulation." },
      { term: "High-Throughput Sequencing", definition: "Technologies that sequence millions of DNA fragments in parallel." },
      { term: "Systems Biology", definition: "Holistic computational study of complex interactions in biological systems." }
    ],
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
    detailed: `### Bioinformatics: Managing the Information of Life

Bioinformatics is an interdisciplinary field combining computer science, mathematics, engineering, and molecular biology. While Computational Biology often focuses on mathematical modeling of biological processes, Bioinformatics emphasizes the software tools, database architecture, and data engineering necessary to process biological datasets.

#### Major Applications of Bioinformatics:
1. **Personalized & Precision Medicine:**
   Sequencing an oncology patient's tumor genome to identify unique somatic mutations and choose chemotherapy drugs targeted precisely to that patient's genetic profile.
2. **Pharmacogenomics & Drug Discovery:**
   Virtual screening of millions of small chemical compounds against viral or human protein receptors using molecular docking simulations (e.g., AutoDock, Rosetta).
3. **Agricultural Biotechnology:**
   Designing drought-resistant and nutrient-enriched crops by identifying gene variants associated with yield and stress resilience.
4. **Forensics & Paternity Testing:**
   Short Tandem Repeat (STR) profiling and mitochondrial DNA analysis to identify individuals from microscopic crime scene evidence.
5. **Pathogen Tracking (Molecular Epidemiology):**
   Real-time tracking of viral mutations during outbreaks (e.g., Nextstrain platform tracing SARS-CoV-2 variants around the globe).`,
    realLifeExample: "During the COVID-19 pandemic, scientists used bioinformatics software within 48 hours of obtaining the viral sequence in January 2020 to map the spike protein gene, allowing vaccine design (like mRNA-1273 and BNT162b2) to start immediately before physical samples were even distributed.",
    keyTerms: [
      { term: "Pipeline", definition: "A chain of computational data-processing steps linked together." },
      { term: "Molecular Docking", definition: "Simulating how a drug molecule binds to a target protein pocket." },
      { term: "Variant Calling", definition: "Computational identification of differences between a sequenced sample and a reference genome." }
    ],
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
    summary: "DNA (Deoxyribonucleic Acid) and RNA (Ribonucleic Acid) are nucleic acids carrying genetic instructions. DNA is typically a double-stranded antiparallel right-handed helix (A-T, G-C), while RNA is generally single-stranded (A-U, G-C) and acts as messenger, transfer, or catalytic agent.",
    simpleExplanation: "Think of DNA as a twisted spiral ladder (a double helix). The sides of the ladder are sugars and phosphates, and the rungs are 4 chemical letters: Adenine always locks with Thymine (A-T), and Guanine locks with Cytosine (G-C). RNA is like a portable photocopy of one side of the ladder that uses Uracil (U) instead of Thymine.",
    detailed: `### Nucleic Acid Architecture: The Digital Tape of Biology

#### 1. DNA (Deoxyribonucleic Acid):
- **Structure:** Double-stranded helix discovered by Watson, Crick, Franklin, and Wilkins (1953).
- **Subunit:** Nucleotides composed of:
  - 5-carbon sugar (2'-deoxyribose)
  - Phosphate group (giving DNA its negative charge)
  - Nitrogenous base (Purines: Adenine [A], Guanine [G]; Pyrimidines: Cytosine [C], Thymine [T])
- **Base Pairing (Chargaff's Rules):**
  - **A pairs with T** via **2 hydrogen bonds**
  - **G pairs with C** via **3 hydrogen bonds** (making G-C rich regions more thermally stable)
- **Directionality:** Strands run antiparallel from **5' (phosphate end)** to **3' (hydroxyl end)**.

#### 2. RNA (Ribonucleic Acid):
- **Key Differences from DNA:**
  - Sugar is **ribose** (has a reactive 2'-OH hydroxyl group, making RNA chemically less stable and more versatile).
  - Nitrogenous base **Uracil (U)** replaces Thymine (T); U pairs with A.
  - Usually single-stranded, allowing it to fold into complex 3D shapes (hairpins, ribozymes).
- **Major Types:**
  - **mRNA (messenger RNA):** Carries genetic code from nucleus to ribosome.
  - **tRNA (transfer RNA):** Delivers specific amino acids matching codons.
  - **rRNA (ribosomal RNA):** Forms the catalytic core of ribosomes.
  - **miRNA/siRNA:** Regulate gene expression post-transcriptionally.`,
    realLifeExample: "Polymerase Chain Reaction (PCR) machines rely on knowing DNA's G-C melting temperature: regions high in G-C content require higher temperatures (~95°C) to denature because of the 3 hydrogen bonds compared to only 2 in A-T pairs.",
    keyTerms: [
      { term: "Antiparallel", definition: "The two strands of DNA run in opposite directions (5'→3' and 3'→5')." },
      { term: "Purines vs Pyrimidines", definition: "Purines (A, G) have double-ring structures; Pyrimidines (C, T, U) have single-ring structures." },
      { term: "Phosphodiester Bond", definition: "The strong covalent linkage between sugar and phosphate along the backbone." }
    ],
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
    summary: "Proteins are polymers of 20 distinct amino acids linked by peptide bonds. They fold into intricate 3D shapes across four structural levels (Primary, Secondary, Tertiary, Quaternary) that dictate their biochemical functions as enzymes, antibodies, structural fibers, and molecular motors.",
    simpleExplanation: "If amino acids are like Lego bricks of 20 different colors snapped in a row, the protein's true superpower is folding into a 3D robot or key. If the shape folds even slightly wrong, the key won't fit into the lock, leading to diseases like sickle cell.",
    detailed: `### Hierarchical Architecture of Proteins

Proteins are the workhorses of the cell. Their primary sequence dictates their final native 3D conformation (Anfinsen's dogma).

#### Four Levels of Protein Structure:
1. **Primary Structure (1°):**
   The linear sequence of amino acids linked by covalent peptide bonds (read from N-terminus to C-terminus).
2. **Secondary Structure (2°):**
   Local spatial arrangements stabilized by hydrogen bonds between backbone carbonyl (C=O) and amino (N-H) groups:
   - **α-helix:** Coiled rod-like structure.
   - **β-pleated sheet:** Parallel or antiparallel corrugated sheets.
3. **Tertiary Structure (3°):**
   The overall 3D folding of a single polypeptide chain, driven by hydrophobic interactions (non-polar side chains bury inside) and stabilized by:
   - Disulfide bridges (covalent bonds between Cysteine residues)
   - Salt bridges (ionic attractions between Lys/Arg and Asp/Glu)
   - Van der Waals forces and hydrogen bonds
4. **Quaternary Structure (4°):**
   Assembly of two or more polypeptide subunits (e.g., Hemoglobin is a tetramer with two α and two β subunits).

#### Key Functions:
- **Catalysis (Enzymes):** DNA Polymerase, Amylase (speeds up reactions by millions of times).
- **Defense:** Antibodies (Immunoglobulins) identifying foreign antigens.
- **Transport:** Hemoglobin carrying oxygen through bloodstream.
- **Structural Support:** Collagen in skin, Keratin in hair/nails.
- **Signaling:** Insulin regulating glucose uptake.`,
    realLifeExample: "In Sickle Cell Anemia, a single amino acid substitution at position 6 of the hemoglobin beta chain (Glutamic acid [polar] mutated to Valine [hydrophobic]) causes the proteins to clump into rigid sickle-shaped fibers that block blood capillaries.",
    keyTerms: [
      { term: "Peptide Bond", definition: "Covalent bond between the carboxyl group of one amino acid and amino group of another." },
      { term: "Hydrophobic Collapse", definition: "The driving force where water-fearing amino acids cluster inside the protein core." },
      { term: "Denaturation", definition: "Loss of native 3D structure due to heat, pH changes, or chemicals, destroying function." }
    ],
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
    summary: "Proposed by Francis Crick in 1958, the Central Dogma states that genetic information flows from DNA (replication) to messenger RNA through Transcription, and from mRNA to Functional Protein through Translation. Information cannot flow back from protein to nucleic acid.",
    simpleExplanation: "Think of DNA as the master cookbook kept locked in a secure library (the nucleus). Transcription is writing down a single recipe on an index card (mRNA) to take home. Translation is the chef (the ribosome) cooking the delicious meal (the protein) following that recipe!",
    detailed: `### The Flow of Biological Information

$$\\text{DNA} \\xrightarrow{\\text{Transcription}} \\text{mRNA} \\xrightarrow{\\text{Translation}} \\text{Protein}$$

#### 1. Replication:
DNA duplicates itself with high fidelity during the S-phase of the cell cycle so daughter cells receive identical genetic instructions.

#### 2. Transcription (DNA → RNA):
RNA Polymerase reads the template DNA strand (3'→5') and synthesizes a complementary pre-mRNA transcript (5'→3'). In eukaryotes:
- Splicing removes non-coding **introns** and ligates coding **exons**.
- A 5' cap and poly-A tail are added for stability and nuclear export.

#### 3. Translation (RNA → Protein):
Ribosomes read the mRNA in 3-nucleotide units called **codons**.
- There are 64 possible codons for 20 standard amino acids (genetic code is **degenerate** / redundant).
- Start codon: **AUG** (codes for Methionine).
- Stop codons: **UAA, UAG, UGA** (signal termination).
- Transfer RNAs (tRNAs) bring the corresponding amino acid matching each codon via its complementary **anticodon**.

#### Famous Exceptions to the Classical Central Dogma:
- **Reverse Transcription (RNA → DNA):** Retroviruses like HIV use Reverse Transcriptase to convert viral RNA into host cDNA.
- **RNA Replication (RNA → RNA):** Some RNA viruses replicate directly without DNA intermediates.
- **Prions (Protein → Protein Conformation):** Misfolded prion proteins cause normal proteins to misfold without nucleic acid instructions (e.g., Mad Cow Disease).`,
    realLifeExample: "The Pfizer-BioNTech and Moderna COVID-19 vaccines leverage the central dogma: they deliver mRNA encoding the viral spike protein. Human ribosomes translate this mRNA directly into protein, training the immune system without ever touching or modifying our nuclear DNA.",
    keyTerms: [
      { term: "Codon", definition: "A triplet of nucleotides in mRNA that specifies an amino acid or stop signal." },
      { term: "Introns & Exons", definition: "Introns are non-coding sequences spliced out; Exons code for the mature protein." },
      { term: "Reverse Transcriptase", definition: "Enzyme that synthesizes DNA from an RNA template (found in retroviruses)." }
    ],
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
    simpleExplanation: "Before a cell splits in two, it unzips its two DNA strands like a jacket. An molecular factory reads each half and builds the matching other half. When finished, you have two complete jackets, each with one original side and one brand new side!",
    detailed: `### The Molecular Machinery of Replication

DNA replication occurs with remarkable accuracy (less than 1 error per 10^9 to 10^10 nucleotides due to 3'→5' proofreading).

#### Key Enzymes in the Replisome:
1. **Helicase:** Unwinds and separates the DNA double helix at the replication fork by breaking hydrogen bonds.
2. **Single-Strand DNA-Binding Proteins (SSBs):** Prevent the single strands from re-annealing.
3. **Topoisomerase (Gyrase):** Relieves positive supercoiling strain ahead of the replication fork by making temporary nicks.
4. **Primase:** Synthesizes short RNA primers (~10-12 nucleotides) to provide the free 3'-OH group required by DNA polymerase.
5. **DNA Polymerase (e.g., Pol III in bacteria, Pol δ/ε in eukaryotes):**
   - Synthesizes new DNA strictly in the **5' to 3' direction**.
   - Possesses 3'→5' exonuclease proofreading activity to remove mismatched bases.
6. **DNA Ligase:** Seals the phosphodiester nicks between Okazaki fragments.

#### Leading vs Lagging Strand:
- **Leading Strand:** Synthesized continuously toward the replication fork (5'→3').
- **Lagging Strand:** Synthesized discontinuously away from the fork as short stretches called **Okazaki fragments** (~1000-2000 bp in prokaryotes, ~100-200 bp in eukaryotes).`,
    realLifeExample: "The antibiotic Ciprofloxacin kills bacteria by inhibiting bacterial DNA Gyrase (topoisomerase), causing overwhelming supercoiling strain during bacterial DNA replication, thereby halting bacterial cell division.",
    keyTerms: [
      { term: "Semi-Conservative", definition: "Replication model where each new DNA molecule retains one intact parent strand." },
      { term: "Okazaki Fragment", definition: "Short segments of DNA synthesized discontinuously on the lagging strand." },
      { term: "Replication Fork", definition: "The Y-shaped region where the double helix unwinds for duplication." }
    ],
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
    detailed: `### Step-by-Step Protein Biosynthesis

#### 1. Transcription:
- **Initiation:** RNA Polymerase recognizes and binds to a specific **promoter sequence** (e.g., the TATA box in eukaryotes) with the help of transcription factors.
- **Elongation:** RNA Polymerase unwinds the DNA and adds ribonucleotides (ATP, UTP, CTP, GTP) complementary to the 3'→5' template strand.
- **Termination:** In prokaryotes, via Rho-dependent or Rho-independent hairpin loops; in eukaryotes, via polyadenylation signal (AAUAAA).
- **Post-Transcriptional Modification (Eukaryotes):**
  - 5' 7-methylguanosine cap addition.
  - Splicing of introns by the **spliceosome**.
  - 3' Poly-A tail (150-250 adenines) added to prevent degradation.

#### 2. Translation:
- **Initiation:** The small ribosomal subunit binds mRNA at the 5' cap or Shine-Dalgarno sequence and scans for the start codon **AUG**. Methionyl-tRNA binds to the P-site.
- **Elongation:**
  1. A new aminoacyl-tRNA enters the **A-site** (Aminoacyl).
  2. The ribosome's peptidyl transferase center forms a peptide bond between the amino acids.
  3. The ribosome translocates 3 bases forward along the mRNA: the empty tRNA moves to the **E-site** (Exit) and the growing peptide chain stays at the **P-site** (Peptidyl).
- **Termination:** When a stop codon (**UAA, UAG, UGA**) reaches the A-site, Release Factors bind, cleaving the completed peptide chain.`,
    realLifeExample: "Many life-saving antibiotics target bacterial translation without harming human cells. For example, Erythromycin blocks the exit tunnel of the bacterial 50S ribosomal subunit, preventing bacteria from synthesizing essential proteins.",
    keyTerms: [
      { term: "Promoter", definition: "A specific DNA sequence where RNA polymerase binds to initiate transcription." },
      { term: "Spliceosome", definition: "A complex of snRNAs and proteins that excises introns from pre-mRNA." },
      { term: "Anticodon", definition: "A sequence of 3 bases in a tRNA molecule that pairs with a complementary mRNA codon." }
    ],
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
    summary: "Sequence alignment arranges DNA, RNA, or protein sequences to identify regions of similarity that indicate functional, structural, or evolutionary relationships. Core techniques include Dynamic Programming (Needleman-Wunsch, Smith-Waterman) and Heuristic search (BLAST).",
    simpleExplanation: "Imagine two books written in ancient languages with typos and missing sentences. Sequence alignment aligns the paragraphs side by side, inserting gaps where words were skipped, to prove whether both books descended from the same original story!",
    detailed: `### Algorithms for Comparing Biological Sequences

When two sequences share high similarity, they are likely **homologous** (derived from a common ancestor) and often share similar 3D structures and functions.

#### 1. Pairwise Sequence Alignment:
- **Global Alignment (Needleman-Wunsch Algorithm - 1970):**
  - Aligns sequences from end-to-end across their entire length.
  - Best for sequences of similar length with overall similarity.
  - Uses dynamic programming grid with time complexity $O(mn)$.
- **Local Alignment (Smith-Waterman Algorithm - 1981):**
  - Finds the highest-scoring local matching sub-region or domain.
  - Reset negative scores to zero ($max(0, ...)$).
  - Ideal for comparing distant proteins that share only an active site or conserved motif.

#### 2. Scoring Schemes:
- **Match / Mismatch scores:** e.g., +1 for match, -1 for mismatch.
- **Gap Penalties:**
  - Linear gap penalty: $w = g \\cdot k$
  - **Affine gap penalty:** $w = g_{open} + (k-1) \\cdot g_{extend}$ (penalizes opening a gap heavily, but extending an existing gap lightly, reflecting biological insertion/deletion reality).
- **Substitution Matrices (for Proteins):**
  - **PAM (Point Accepted Mutation):** Based on closely related proteins (e.g., PAM250 for distant homologs).
  - **BLOSUM (Blocks Substitution Matrix):** Based on conserved blocks of aligned sequences. **BLOSUM62** is the worldwide default for BLAST searches.

#### 3. Heuristic Algorithms (BLAST & FASTA):
Dynamic programming is too slow for searching a sequence against billions of database entries.
- **BLAST (Basic Local Alignment Search Tool):**
  1. Breaks query into short "words" (e.g., length 3 for proteins, 11 for DNA).
  2. Finds exact word matches in database.
  3. Extends matches without gaps, then with gaps.
  4. Returns statistically significant hits measured by **E-value** (Expectation value).`,
    realLifeExample: "When biologists discover a newly isolated ocean bacterium, they sequence its 16S ribosomal RNA and run BLAST against the NCBI GenBank database. Within 3 seconds, BLAST aligns the sequence against millions of species to determine its exact taxonomic genus.",
    keyTerms: [
      { term: "Homology", definition: "Similarity between sequences due to shared evolutionary ancestry." },
      { term: "E-Value (Expect Value)", definition: "The number of alignments with equal or better score expected to occur purely by random chance." },
      { term: "Affine Gap Penalty", definition: "A penalty model assigning a high cost to start a gap and a lower cost to extend it." }
    ],
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
    summary: "Genomics analyzes the complete set of DNA within an organism (its genome), including gene mapping and sequencing. Proteomics is the large-scale comprehensive study of all proteins (the proteome) expressed by an organism, tissue, or cell under specific environmental conditions.",
    simpleExplanation: "Genomics is like studying the architectural blueprint of an entire city—it shows every possible building that could be constructed. Proteomics is walking through the city streets right now to see which buildings are actually inhabited and what the people inside are doing at this exact moment!",
    detailed: `### From Static Genomes to Dynamic Proteomes

While the genome is largely identical in every cell of a multicellular organism (e.g., skin cells and brain neurons share the same DNA), the proteome is dynamic and changes continuously in response to internal signals, diet, stress, and disease.

#### 1. Genomics:
- **Structural Genomics:** Sequencing genomes and constructing physical/genetic chromosome maps.
- **Functional Genomics:** Understanding the function of genes and non-coding elements using techniques like:
  - **RNA-Seq:** Quantifying expression levels of every mRNA in a tissue.
  - **ChIP-Seq:** Mapping where transcription factors bind to DNA.
- **Comparative Genomics:** Comparing genomes of different species (e.g., human vs chimpanzee [~98.8% identical]) to find conserved functional elements.

#### 2. Proteomics:
- **Techniques:**
  - **Mass Spectrometry (MS/MS):** Ionizes digested peptide fragments (via MALDI or ESI) and measures their mass-to-charge ($m/z$) ratio with ultra-high precision to identify protein sequences.
  - **2D Gel Electrophoresis:** Separates proteins first by charge (isoelectric point, pI) and second by molecular weight.
- **Post-Translational Modifications (PTMs):**
  Phosphorylation, glycosylation, ubiquitination that switch proteins on or off. Genomics cannot detect PTMs; proteomics is indispensable.`,
    realLifeExample: "Liquid biopsy cancer screening uses proteomics and cell-free DNA genomics to detect early-stage ovarian and pancreatic tumors from a simple blood sample by identifying aberrant phosphorylated protein biomarkers months before a physical tumor appears on a CT scan.",
    keyTerms: [
      { term: "Transcriptome", definition: "The full collection of RNA transcripts produced by the genome at a given time." },
      { term: "Mass Spectrometry (LC-MS)", definition: "Analytical method that identifies proteins based on mass-to-charge ratios of peptide ions." },
      { term: "Post-Translational Modification", definition: "Chemical changes made to a protein after its synthesis (e.g. phosphorylation)." }
    ],
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
    detailed: `### Reconstructing the Tree of Life

Phylogenetic analysis allows evolutionary biologists to infer how modern species descended from common ancestors.

#### Anatomy of a Tree:
- **Root:** The most recent common ancestor of all entities in the tree.
- **Nodes (Internal):** Hypothetical taxonomic ancestors representing speciation or gene duplication events.
- **Branches:** Evolutionary pathways; branch length can represent chronological time or number of nucleotide substitutions per site.
- **Leaves (Tips / Taxa):** The existing observed species or analyzed sequences.
- **Clade (Monophyletic group):** An ancestor and all of its descendants.

#### Tree Construction Methods:
1. **Distance-Based Methods:**
   Calculate a pairwise genetic distance matrix between all sequences, then cluster them:
   - **UPGMA:** Assumes a strict molecular clock (equal mutation rates along all lineages; rarely true in nature).
   - **Neighbor-Joining (NJ):** Fast, allows varying evolutionary rates along different branches. Widely used for large sequence sets.
2. **Character-Based (Optimality) Methods:**
   - **Maximum Parsimony (Occam's razor):** Chooses the tree that requires the fewest total evolutionary mutations to explain the observed sequences.
   - **Maximum Likelihood (ML):** Uses probabilistic substitution models (e.g., Jukes-Cantor, Kimura 2-parameter) to find the tree topology that maximizes the probability of observing the data.
   - **Bayesian Inference (MrBayes):** Computes posterior probability distribution of trees using Markov Chain Monte Carlo (MCMC).`,
    realLifeExample: "Phylogenetic tracking of HIV-1 envelope gene sequences in the 1990s helped epidemiologists reconstruct the origins of the human HIV pandemic back to cross-species transmission events from chimpanzees (SIVcpz) in Central Africa circa 1908.",
    keyTerms: [
      { term: "Monophyletic", definition: "A group of organisms that includes an ancestor and all of its descendants." },
      { term: "Molecular Clock", definition: "The hypothesis that genetic mutations accumulate at a relatively constant rate over millions of years." },
      { term: "Bootstrap Value", definition: "A statistical resampling technique to test the reliability and confidence of branches in a tree." }
    ],
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
    detailed: `### The Global Repositories of Biological Knowledge

The biological community adheres to strict open-data policies: publishing a scientific paper describing a new gene or protein structure requires depositing the raw data into an international public database.

#### Primary vs Secondary Databases:
- **Primary Databases:** Store original, direct experimental submissions without modification (e.g., raw DNA reads in GenBank).
- **Secondary Databases:** Contain curated, analyzed, and value-added data derived from primary sources (e.g., UniProtKB/Swiss-Prot with expert human annotations).

#### The Major Global Databases:
1. **NCBI (National Center for Biotechnology Information - USA):**
   - **GenBank:** Worldwide repository of nucleotide sequences; part of the INSDC consortium (collaborating with ENA in Europe and DDBJ in Japan).
   - **PubMed:** Over 35 million biomedical literature abstracts.
   - **BLAST server:** Online sequence comparison engine.
2. **UniProt (Universal Protein Resource):**
   - The gold standard for protein sequence and functional annotation.
   - Comprises **Swiss-Prot** (manually reviewed by PhD biocurators) and **TrEMBL** (automatically translated).
3. **PDB (Protein Data Bank):**
   - The worldwide archive of 3D macromolecular structures solved experimentally by X-ray crystallography, Cryo-EM, or NMR spectroscopy.
4. **Ensembl:**
   - Genome browser for vertebrate and eukaryotic genomes with comprehensive gene models and variant consequences.
5. **KEGG (Kyoto Encyclopedia of Genes and Genomes):**
   - Network maps of metabolic pathways, signaling cascades, and disease mechanisms.`,
    realLifeExample: "When scientists deciphered the 3D atomic structure of the ribosome (which won the 2009 Nobel Prize), they deposited the atomic coordinates into the Protein Data Bank (PDB ID: 1FKA). Today, any student or pharmaceutical researcher can download and spin the 3D molecule for free.",
    keyTerms: [
      { term: "Accession Number", definition: "A unique alphanumeric identifier assigned to a specific DNA or protein record (e.g., NC_045512 for SARS-CoV-2)." },
      { term: "FASTA Format", definition: "Text format starting with '>' header followed by lines of sequence characters." },
      { term: "PDB File Format", definition: "Standard file containing 3D atomic coordinates (X, Y, Z) of every atom in a protein." }
    ],
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
    summary: "Artificial Intelligence and Deep Learning are revolutionizing biology. AI systems can predict 3D protein structures with atomic accuracy (AlphaFold), generate novel de novo therapeutic molecules, optimize CRISPR gene-editing guides, and diagnose complex pathologies from digital biopsies.",
    simpleExplanation: "For 50 years, predicting how a protein folds in 3D from its 1D sequence was considered an unsolvable grand challenge in biology that took PhD students 5 years in a wet lab. DeepMind's AlphaFold solved this in minutes using neural networks, predicting the 3D shape of almost every known protein on Earth!",
    detailed: `### The AI Revolution in Life Sciences

Biology is inherently high-dimensional, noisy, and non-linear—characteristics where modern deep learning architectures (Transformers, Graph Neural Networks, Diffusion Models) excel.

#### 1. Protein Structure Prediction:
- **AlphaFold 2 & AlphaFold 3 (Google DeepMind):**
  - Uses Evoformer neural networks and invariant point attention to model physical interactions and evolutionary co-variation across Multiple Sequence Alignments (MSAs).
  - Predicted 3D structures for >200 million proteins across all living organisms with accuracy rivaling experimental crystallography.
  - AlphaFold 3 extends this to protein-DNA, protein-RNA, and small-molecule drug ligand complexes.
- **ESMFold (Meta):**
  - Large language model trained directly on raw protein sequences (BERT-style) predicting 3D structures in seconds without requiring MSAs.

#### 2. Generative AI for De Novo Protein & Drug Design:
- **RFdiffusion & Chroma:**
  - Diffusion models (similar to Midjourney, but operating in 3D SE(3) geometric space) that design brand-new functional proteins never seen in nature from scratch—e.g., customized enzymes that break down plastic pollutants.
- **Generative Chemistry (GANs & VAEs):**
  - Generating novel small molecules with desired drug-like properties, low toxicity, and high binding affinity to cancer targets.

#### 3. Genomics & Gene Editing AI:
- **CRISPR Off-Target Prediction:** Deep neural networks predicting whether a Cas9 guide RNA will mistakenly cut unintended genomic sites.
- **Genomic Foundation Models (e.g., Nucleotide Transformer, HyenaDNA):** Pre-trained on whole human and bacterial genomes to identify enhancer regions, splice sites, and disease-causing non-coding mutations.`,
    realLifeExample: "Using AI diffusion models, University of Washington biochemists designed artificial luciferase enzymes from scratch in 2023 that glow brightly and novel neutralizing mini-proteins against respiratory syncytial virus (RSV) in a fraction of the time needed by traditional directed evolution.",
    keyTerms: [
      { term: "AlphaFold", definition: "Deep learning system developed by Google DeepMind that predicts 3D protein structures from amino acid sequence." },
      { term: "Diffusion Model", definition: "Generative AI architecture that generates molecules by learning to reverse gradual noise addition." },
      { term: "Evolutionary Scale Modeling (ESM)", definition: "Protein language models that learn biological syntax directly from billions of sequences." }
    ],
    suggestedQuestions: [
      "How does AlphaFold predict 3D protein structures?",
      "Can AI design new enzymes from scratch?",
      "How is deep learning used to predict CRISPR off-target cuts?"
    ]
  }
];
