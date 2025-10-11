# Chapter 6. NGS Application for Genomics

## The Fundamental Question: Why Not Always Sequence Everything?

If sequencing technology can read all 3.2 billion base pairs of the human genome, why would we choose to sequence only part of it? It's a bit like asking: if you're looking for a lost key in your house, why not search every room, every drawer, every pocket? The answer is simple: time, cost, and practicality.

In genomics, we face a similar trade-off. You can sequence:

1. **The whole genome** - all 3.2 billion bases, every gene and every space between genes
2. **Just the exome** - only the ~30-50 million bases that code for proteins (about 1-2% of the genome)

The choice between these approaches has shaped how we discover disease genes, diagnose patients, and conduct research. Let's understand what each approach offers and when to use which one.

---

## Understanding the Exome: Where Most Disease Variants Hide

Before we compare WGS and WES, we need to understand what the **exome** is and why it's special.

Your genome contains about 20,000 protein-coding genes. But genes aren't continuous stretches of DNA. Instead, each gene is split into:

- **Exons**: the parts that code for proteins (typically 50-200 bases each)
- **Introns**: the non-coding parts between exons (often thousands of bases long)

When cells make proteins, they transcribe the entire gene into RNA, then cut out the introns and splice the exons together. The final messenger RNA (mRNA) contains only exonic sequence, which is then translated into protein.

The collection of all exons in the genome is called the **exome**. It makes up only 1-2% of your total DNA—about 30-50 million base pairs out of 3.2 billion. But here's why it's important:

**About 85% of known disease-causing mutations occur in exons.**

Why? Because exons directly code for proteins. A single base change in an exon can:
- Swap one amino acid for another (missense mutation)
- Create a premature stop signal (nonsense mutation)
- Shift the reading frame (frameshift mutation)

Any of these can break a protein's function, potentially causing disease. Changes in introns or intergenic regions *can* affect gene regulation or RNA splicing, but they're less likely to have dramatic effects.

This 85% statistic created an opportunity: if most disease variants are in exons, why not sequence just those parts?

---

## Whole-Exome Sequencing (WES): The Focused Approach

### How It Works

WES doesn't actually sequence only exons—that would be technically challenging. Instead, it uses a clever trick called **target capture** or **enrichment**:

1. Extract DNA and break it into fragments (just like WGS)
2. Add special "bait" molecules—short DNA sequences complementary to exons
3. These baits bind to exonic fragments and pull them out of the mix
4. Sequence only these captured fragments

Think of it like using a magnet to pick out just the metal pieces from a mixed pile of materials.

![Whole Exome Sequencing Process](https://microbenotes.com/wp-content/uploads/2024/09/Whole-Exome-Sequencing.jpeg)

**Figure: WES Process with Target Capture**. This diagram shows the key step that distinguishes WES from WGS: exome enrichment. After DNA extraction and fragmentation, biotinylated probes (baits) are added that specifically bind to exonic sequences. These probes are then captured using streptavidin-coated magnetic beads, physically separating exonic fragments from the rest of the genome. The non-exonic DNA is washed away, and only the enriched exonic fragments are sequenced. This targeted approach concentrates sequencing effort on the ~1-2% of the genome that codes for proteins, where most disease-causing variants occur. The captured exons are then sequenced, aligned to a reference genome, and analyzed for variants—just like WGS, but focused only on coding regions. Source: MicrobeNotes

The result: you've concentrated your sequencing effort on the 1-2% of the genome that's most likely to contain disease-causing variants.

### The Numbers

- **Bases sequenced**: ~30-50 million (1-2% of genome)
- **Data generated**: ~6 GB at 100× coverage depth
- **Cost**: Originally 10× cheaper than WGS; now about $400-500 per sample
- **Analysis time**: Faster—fewer variants to interpret
- **Coverage depth**: Higher than WGS for the same cost (typically 100×+ for exons)

### What WES Can Find

WES excels at detecting variants that affect protein sequence:

- **Single nucleotide variants (SNVs)** in coding regions
- **Small insertions and deletions (indels)** in exons
- **Splice site mutations** at exon-intron boundaries

### What WES Misses

- Variants in introns (except near splice sites)
- Variants in regulatory regions (promoters, enhancers)
- Large structural variants (big deletions, duplications, inversions)
- Some exons that don't capture well (technical limitations)

### The Historic Success: Miller Syndrome (2010)

WES made its breakthrough in 2010 with a paper that became a model for the approach. Researchers were studying four siblings with **Miller syndrome**—a rare developmental disorder causing facial abnormalities. Traditional gene-hunting methods had failed.

The strategy was simple but revolutionary:
1. Sequence all exons in the four affected siblings
2. Look for variants they share but their healthy parents don't have
3. Focus on rare variants (not common polymorphisms)

They found variants in a gene called **DHODH** that none of the healthy family members carried. DHODH had never been linked to any human disease before. This discovery took months instead of years and cost thousands instead of millions.

This paper launched the WES era. Suddenly, researchers could identify disease genes for rare disorders by sequencing just a few affected individuals. The strategy worked because:
- Rare Mendelian diseases are usually caused by rare, high-impact variants
- Those variants are usually in exons
- WES provides high coverage of exons, making rare variants easy to spot

### Clinical Impact of WES

WES quickly became the first-line genetic test for diagnosing rare diseases. Current statistics:

- **Diagnostic yield**: 25-50% for rare diseases
- Meaning: for patients with suspected genetic disorders, WES identifies the genetic cause in about one-third to half of cases
- This is remarkable considering these patients had often undergone years of testing with no diagnosis

**When WES works well:**
- Rare Mendelian disorders (single-gene diseases)
- Diseases known to be caused by coding variants
- When you need to screen many genes at once
- When cost is a major consideration

**When WES comes up short:**
- No variant found in known disease genes
- Patient's disease might be caused by non-coding variants
- Structural variants might be involved
- Coverage gaps in technically challenging exons

---

## Whole-Genome Sequencing (WGS): The Comprehensive Approach

### How It Works

WGS is conceptually simpler than WES—you just sequence everything:

1. Extract DNA and break it into fragments
2. Add adapters (for Illumina) or prepare libraries (for PacBio/Nanopore)
3. Sequence all fragments
4. Align to the reference genome

No target capture step. No enrichment. Just sequence the whole thing.

![Whole Genome Sequencing Workflow](https://microbenotes.com/wp-content/uploads/2024/07/Whole-Genome-Sequencing.jpeg)

**Figure: Whole-Genome Sequencing (WGS) Workflow**. This diagram illustrates the complete process of WGS from sample to analysis. Starting with DNA extraction from biological samples, the DNA is fragmented and prepared into sequencing libraries with adapters. The entire genome is then sequenced using high-throughput platforms, generating millions of reads. These reads are aligned to a reference genome, and variants are called—identifying differences from the reference. Finally, variants are annotated with biological information and analyzed to identify disease-causing mutations or other genetic features of interest. Unlike WES, this process captures all genomic regions including coding exons, introns, regulatory elements, and intergenic sequences. Source: MicrobeNotes

### The Numbers

- **Bases sequenced**: ~3.2 billion (100% of genome)
- **Data generated**: ~90-100 GB at 30× coverage depth
- **Cost**: ~$600-1,000 per sample (Illumina, 2024)
- **Analysis time**: Longer—millions more variants to interpret
- **Coverage depth**: Lower than WES for the same cost (typically 30-40×)

### What WGS Can Find

Everything WES finds, plus:

- **Intronic variants** affecting splicing
- **Regulatory variants** in promoters, enhancers, silencers
- **Structural variants**: large deletions (>50 bp), duplications, inversions, translocations
- **Copy number variants (CNVs)**: extra or missing copies of large DNA segments
- **Repeat expansions**: diseases like Huntington's (CAG repeats) or fragile X syndrome (CGG repeats)
- **Mitochondrial DNA variants** (often missed by WES)
- Better coverage of exons that WES captures poorly

### What WGS Still Struggles With

- Very large structural variants can still be challenging
- Highly repetitive regions (though long-read sequencing helps)
- Determining which non-coding variants are functional (interpretation challenge)

### The Power of Seeing Everything: A Real Example

Consider a patient with developmental delay and seizures. WES found nothing.

With WGS, researchers discovered:
- A large deletion removing three exons of a neurodevelopmental gene
- WES had missed this because target capture requires intact DNA to bind to baits
- When exons are deleted, there's nothing for the baits to capture
- WGS, by sequencing everything, detected the deletion through absence of reads in that region

This happens in about 5-10% of cases where WES fails—the answer is a structural variant that WES cannot detect.

### Non-Coding Variants: The Frontier

WGS opens up the study of non-coding variants, which make up 98% of the genome. Most non-coding sequence is probably functionally neutral, but some regions are critically important:

**Regulatory elements**: Enhancers and promoters control when and where genes are expressed. A mutation in an enhancer can affect a gene hundreds of thousands of bases away, causing disease without touching the gene itself.

**Example**: Some forms of beta-thalassemia (reduced hemoglobin production) are caused by mutations in the regulatory regions of the HBB gene, not in the coding sequence. These would be missed by WES.

**Intronic splice sites**: While WES captures exon-intron boundaries, deep intronic variants can create new splice sites or destroy existing ones. These "cryptic splice variants" can cause disease.

**The challenge**: We're still learning which non-coding variants matter. The human genome contains millions of non-coding variants, and distinguishing functional from neutral ones is difficult. This is an active area of research.

---

## The Technical Process: From Sample to Variants

Now that we understand what WGS and WES are and when to use each approach, let's explore how they actually work. Whether you're sequencing a whole genome or just the exome, the basic workflow is similar—with one key difference for WES: an extra step to capture only the exons.

This section walks through the laboratory and computational process that transforms a blood sample into a list of genetic variants. Understanding these steps will help you interpret sequencing data and troubleshoot when things go wrong.

---

### Step 1: Library Preparation

**Library preparation** is the process of converting your DNA sample into a form that sequencing machines can read. Think of it as preparing ingredients before cooking—you need to cut, process, and package everything properly.

#### 1.1 DNA Extraction

First, you need high-quality DNA. This typically comes from blood, saliva, tissue biopsies, or cultured cells.

**Amount needed:**
- **WGS**: ~1 microgram (μg) of genomic DNA
- **WES**: ~200-500 nanograms (ng)—less DNA because you're only targeting exons
- **PacBio Revio (WGS)**: ~500 ng with newer SPRQ chemistry

**Why quality matters:** Degraded or contaminated DNA leads to poor sequencing results. Labs use spectrophotometry (measuring UV absorbance) and fluorometry (using fluorescent dyes) to check DNA quality and concentration.

#### 1.2 Fragmentation

Sequencing machines can't read long DNA molecules—they need shorter pieces. So we deliberately break the DNA into fragments.

**Methods:**
- **Sonication**: Uses high-frequency sound waves to shear DNA randomly. Think of it like using ultrasound to break glass. This is common for Illumina sequencing.
- **Enzymatic digestion**: Uses enzymes that cut DNA at specific or random sites, producing more controlled fragmentation.

**Fragment sizes:**
- **Illumina (WGS/WES)**: 150-500 base pairs
  - WES uses slightly shorter fragments (150-300 bp) because they work better for exon capture
- **PacBio Revio (WGS)**: 15,000-20,000 base pairs (much longer!)
  - Long fragments can span repetitive regions that short reads can't resolve

**Why fragment size matters:** Short reads are easier to sequence accurately but harder to map uniquely to repetitive regions. Long reads are harder to sequence accurately but can span entire genes or structural variants.

#### 1.3 End Repair and Adaptor Ligation

After fragmentation, DNA ends are "ragged"—they need to be cleaned up and prepared for sequencing.

**End repair:** Enzymes trim the fragments to create clean, blunt ends or add compatible overhangs.

**Adaptor ligation:** Short, synthetic DNA sequences called **adaptors** (or **adapters**) are attached to both ends of each fragment. These adaptors serve several functions:
- Provide known sequences for PCR primers to bind
- Allow fragments to attach to the sequencing flow cell
- Include barcodes for multiplexing (sequencing multiple samples together)

For **PacBio Revio**, special hairpin adaptors are added to create **SMRTbell templates**—circular DNA molecules that allow the polymerase to sequence the same fragment multiple times, improving accuracy.

#### 1.4 Amplification (PCR)

After adaptor ligation, you typically have too little DNA for sequencing. **PCR (Polymerase Chain Reaction)** amplifies your library—making millions of copies of each fragment.

**How it works:** PCR primers bind to the adaptors and DNA polymerase copies each fragment multiple times. After ~12-15 PCR cycles, you have billions of fragment copies.

**Trade-offs:**
- **Pro**: Creates enough DNA for sequencing
- **Con**: Introduces bias—some sequences amplify better than others, particularly GC-rich or GC-poor regions
- **Con**: Can create PCR duplicates—multiple copies of the exact same original molecule, which need to be removed during analysis

**PacBio HiFi sequencing** often skips PCR amplification entirely, sequencing native DNA molecules. This eliminates PCR bias and allows detection of DNA modifications like methylation.

#### 1.5 Target Capture (WES Only!)

This is where WES diverges from WGS. After amplification, WES adds a **target capture** step to enrich for exons.

**How exome capture works:**

1. **Design capture probes**: Short DNA or RNA sequences (baits) are synthesized to be complementary to all known exons. These probes are labeled with biotin.

2. **Hybridization**: Mix your library with these biotinylated probes. The probes bind to exonic fragments through complementary base pairing (A with T, G with C).

3. **Capture**: Add streptavidin-coated magnetic beads. Streptavidin binds extremely tightly to biotin, so the beads attach to the probe-exon complexes.

4. **Wash away non-exonic DNA**: Use a magnet to pull down the beads (with captured exons attached). Everything else—introns, intergenic regions—gets washed away and discarded.

5. **Elution**: Release the captured exonic fragments from the beads for sequencing.

**Commercial capture kits:** Several companies make exome capture kits:
- Agilent SureSelect
- Illumina TruSeq
- Twist Bioscience

Each targets slightly different exon sets and has different capture efficiencies.

**Capture efficiency:** Not all exons capture equally well. Regions with extreme GC content (very high or very low), repetitive sequences, or complex secondary structures may capture poorly, leading to gaps in coverage.

#### 1.6 Quality Control

Before sequencing, labs perform quality control checks:

**Fragment size distribution:** Run the library on a **Bioanalyzer** or **TapeStation** to ensure fragments are the right size. If they're too small or too large, sequencing efficiency drops.

**Concentration measurement:** Use **qPCR** or fluorometry to measure the exact concentration of sequenceable molecules. This ensures you load the right amount onto the sequencer.

**If WES, check enrichment:** Use qPCR targeting exonic and non-exonic regions to verify that exons are enriched as expected.

---

### Step 2: Sequencing

Now your library is ready to be loaded onto a sequencing machine. The process differs slightly depending on the platform.

#### Illumina Sequencing (Most Common for WGS and WES)

**Loading the flow cell:**

The library is loaded onto a **flow cell**—a glass slide with millions of tiny spots (called lanes) where sequencing happens. Each lane is coated with oligonucleotides (short DNA sequences) complementary to the adaptors.

**Cluster generation (bridge amplification):**

1. Library fragments bind to oligonucleotides on the flow cell surface
2. The fragment bends over and binds to an adjacent oligonucleotide, forming a "bridge"
3. DNA polymerase copies the fragment
4. The bridge denatures, leaving two copies
5. This process repeats ~35 times, creating a dense cluster of ~1,000 identical copies

**Why clustering?** Single molecules don't produce enough fluorescent signal to detect. Clusters amplify the signal.

**Sequencing by Synthesis (SBS):**

1. All four nucleotides (A, C, G, T), each labeled with a different fluorescent dye, are added along with DNA polymerase
2. The polymerase adds one base to each growing strand
3. These are **reversible terminators**—they block further addition until removed
4. A camera takes a picture, recording which color (and therefore which base) was added at each cluster
5. The fluorescent tag and terminator are chemically removed
6. Repeat for 150-300 cycles (depending on desired read length)

This produces millions of short reads simultaneously—typically 2×150 bp (paired-end sequencing, reading both ends of each fragment).

**Typical output:**
- **WES**: ~50-100 million reads (~6-10 GB of data at 100× depth)
- **WGS**: ~1 billion reads (~90-100 GB of data at 30× depth)

#### PacBio Revio Sequencing (For WGS, Especially Structural Variants)

**SMRT Cells:**

PacBio uses **SMRT Cells** containing 25 million tiny wells called **zero-mode waveguides (ZMWs)**. Each well holds a single DNA polymerase molecule at the bottom.

**Single-Molecule Real-Time (SMRT) sequencing:**

1. A single SMRTbell template (your circular DNA molecule) is loaded into each ZMW
2. Fluorescently labeled nucleotides are added
3. As the polymerase incorporates each base, it flashes a brief pulse of light
4. A detector at the bottom of the ZMW records the color (base identity) in real time
5. The polymerase can circle around the template multiple times, reading the same sequence repeatedly

**HiFi reads:** By reading the same molecule 10-20 times and taking a consensus, PacBio achieves >99.9% accuracy despite single-pass error rates of ~1-2%. These are called **HiFi (High-Fidelity) reads**.

**Read lengths:** 15,000-20,000 bp on average, with some reads exceeding 100,000 bp.

**Why this matters:** Long, accurate reads can:
- Span entire genes
- Resolve structural variants
- Phase variants (determine which variants are on the same chromosome)
- Sequence through repetitive regions

**Typical output for WGS:**
- Each SMRT Cell produces ~360 Gb of HiFi data
- Revio can run 4 cells simultaneously (up to 1.4 Tb per day)
- One human genome at 30× depth requires ~2-3 SMRT Cells

#### Oxford Nanopore Sequencing (For Ultra-Long Reads)

Nanopore sequencing threads DNA through protein pores in a membrane. As bases pass through, they disrupt an electrical current in characteristic ways. This enables:
- **Ultra-long reads**: >100,000 bp, sometimes >1 million bp
- **Real-time results**: You see data as it's generated
- **Portable devices**: MinION is USB-sized

Nanopore was critical for the T2T-CHM13 project, providing ultra-long reads that spanned entire repetitive arrays.

---

### Step 3: Variant Calling - From Reads to Biological Meaning

After sequencing, you have millions or billions of short (or long) reads. Now comes the computational challenge: figuring out what your genome looks like and how it differs from the reference.

#### 3.1 Quality Control of Raw Reads

**Base quality scores:** Each base call comes with a quality score (Q score) indicating confidence:
- Q20 = 99% accuracy (1 in 100 chance of error)
- Q30 = 99.9% accuracy (1 in 1,000 chance of error)
- Q40 = 99.99% accuracy (1 in 10,000 chance of error)

**FastQC** or similar tools check:
- Per-base quality (does quality drop at the end of reads?)
- Sequence duplication levels
- Adapter contamination
- GC content distribution

**Trimming:** Low-quality bases (usually at read ends) and adapter sequences are removed.

#### 3.2 Alignment to Reference Genome

Your reads need to be mapped back to their original genomic positions. This is called **alignment** or **mapping**.

**Alignment tools:**
- **BWA (Burrows-Wheeler Aligner)**: Standard for Illumina short reads
- **Bowtie2**: Another popular short-read aligner
- **Minimap2**: Designed for long reads (PacBio, Nanopore)

**How alignment works:**

1. The aligner compares each read to the reference genome (e.g., GRCh38 or T2T-CHM13)
2. It finds the best-matching location based on sequence similarity
3. Allows a few mismatches or small indels (these might be real variants)
4. Produces a **BAM file** (Binary Alignment Map)—a compressed, indexed file showing where each read mapped

**Challenges:**
- **Repetitive regions**: If a read maps equally well to multiple locations, it's ambiguous. Short reads struggle here.
- **Structural variants**: Large deletions, insertions, or rearrangements can cause reads to align incorrectly or not at all.

#### 3.3 Removing PCR Duplicates

Remember that PCR step? It created many identical copies of some original DNA molecules. During alignment, you'll see multiple reads with identical start and end positions—these are likely PCR duplicates, not independent evidence of the DNA sequence.

**Picard MarkDuplicates** or similar tools identify and mark (or remove) duplicates based on:
- Identical mapping positions
- Identical sequences

**Why remove them?** Duplicates inflate coverage artificially and can bias variant calling, making some positions appear more covered than they truly are.

#### 3.4 Variant Detection

Now the real work begins: comparing your aligned reads to the reference genome to identify differences.

**Variant callers:** These are sophisticated software tools that use statistical models to distinguish real variants from sequencing errors.

Popular tools:
- **GATK (Genome Analysis Toolkit)**: The gold standard, developed by the Broad Institute
- **FreeBayes**: Bayesian variant caller
- **DeepVariant**: Uses deep learning/AI, developed by Google
- **DRAGEN**: Hardware-accelerated variant calling (Illumina)

**How variant calling works:**

For each position in the genome:

1. **Pileup**: Stack up all reads covering that position
2. **Count bases**: How many reads show A? C? G? T? A deletion? An insertion?
3. **Calculate likelihood**: What's the probability this is a real variant vs. sequencing error?
4. **Consider quality scores**: Bases with high quality scores (Q30+) are trusted more
5. **Check depth**: Positions with only 2-3 reads are unreliable; 20-30+ reads give confidence
6. **Apply filters**: Remove low-confidence variants

**Example:**
- Position chr1:12345 in reference: G
- Your sample:
  - 28 reads show A (all Q30+)
  - 2 reads show G (one Q15, one Q20)
- Conclusion: This is likely a real **homozygous SNP** (A/A instead of G/G)

**Types of variants detected:**
- **SNPs (Single Nucleotide Polymorphisms)**: Single base changes
- **Indels**: Small insertions or deletions (1-50 bp)
- **CNVs (Copy Number Variants)**: Large duplications or deletions
- **SVs (Structural Variants)**: Inversions, translocations, large insertions/deletions (>50 bp)

**Variant calling produces a VCF file (Variant Call Format):**

A standardized text file listing all detected variants with their:
- Position (chromosome and coordinate)
- Reference base(s)
- Alternate base(s)
- Quality score
- Genotype (heterozygous, homozygous)
- Supporting read depth

#### 3.5 Filtering Variants

Your initial variant call set will contain false positives—apparent variants that are actually sequencing or alignment errors. Filtering removes these.

**Common filters:**
- **Minimum depth**: Require ≥10-20 reads supporting the variant
- **Quality threshold**: Require quality score ≥20 or ≥30
- **Strand bias**: If all reads supporting a variant come from one DNA strand, it might be an artifact
- **Allele balance**: For heterozygous variants (e.g., A/G), expect roughly 50% of reads showing each allele. Strong deviations suggest problems.

**Result:** A high-confidence variant call set, typically thousands to millions of variants depending on WGS vs. WES.

#### 3.6 Variant Annotation

Now you have a list of variants, but what do they mean? **Annotation** adds biological context.

**Annotation tools** (VEP, ANNOVAR, SnpEff) tell you:

**Genomic location:**
- Is this variant in a gene? Which gene?
- Is it in an exon (coding), intron, or intergenic region?
- Is it near a splice site?

**Functional impact:**
- **Synonymous**: Changes DNA but not amino acid (e.g., CCA→CCG, both code for proline)
- **Missense**: Changes amino acid (e.g., GAA→GTA: glutamate→valine)
- **Nonsense**: Creates a stop codon (e.g., CAG→TAG: glutamine→STOP)
- **Frameshift**: Insertion or deletion not divisible by 3, shifting the reading frame
- **Splice site**: Affects where exons are joined together

**Population frequency:**
- How common is this variant in databases like gnomAD or dbSNP?
- Common variants (>1% frequency) are usually benign
- Rare variants (<0.1%) might be pathogenic

**Clinical significance:**
- Is it in ClinVar? What's the classification (pathogenic, benign, VUS)?
- Associated with any diseases?

**Prediction scores:**
- CADD score: How deleterious is this variant likely to be?
- REVEL score: Is this missense variant pathogenic?
- Conservation: Is this position highly conserved across species?

**Output:** An annotated VCF file, often converted to a spreadsheet or database for easier interpretation.

---

### Putting It All Together: A Complete Workflow

Let's trace a sample through the entire process:

**Day 1: Sample arrives**
- Blood sample from a patient with suspected genetic disease
- DNA extracted: 2 μg of high-quality genomic DNA

**Day 2-3: Library preparation (WES)**
- Fragment DNA to 200 bp average size
- Ligate Illumina adaptors
- Amplify with PCR (12 cycles)
- Perform exome capture
- QC check: good enrichment, proper size distribution

**Day 4-5: Sequencing**
- Load library onto NovaSeq 6000 (Illumina)
- Run paired-end 2×150 bp sequencing
- Generate ~80 million read pairs
- Result: ~12 GB of raw data

**Day 6-7: Bioinformatics**
- QC raw reads with FastQC: quality looks good
- Align to GRCh38 with BWA: 95% of reads align successfully
- Mark duplicates: 10% duplication rate (acceptable)
- Average depth over exons: 120× (excellent)
- Call variants with GATK: 28,000 variants detected
- Filter: 22,000 pass filters
- Annotate with VEP: categorize by functional impact

**Day 8-10: Interpretation**
- Filter for rare variants (<1% frequency): 850 candidates
- Focus on genes related to patient's symptoms: 12 genes
- Prioritize HIGH impact variants: 3 variants
- Check ClinVar: 1 variant is "Pathogenic" for patient's condition
- Validate with Sanger sequencing: confirmed

**Result:** Genetic diagnosis made in ~10 days, compared to months or years with older approaches.

---

## Head-to-Head Comparison

Let's directly compare these approaches across key dimensions:

| Feature | Whole-Exome Sequencing (WES) | Whole-Genome Sequencing (WGS) |
|---------|------------------------------|--------------------------------|
| **Coverage** | ~1-2% of genome (exons only) | 100% of genome |
| **Target size** | 30-50 million bases | 3.2 billion bases |
| **Data per sample** | ~6 GB (at 100× depth) | ~90-100 GB (at 30× depth) |
| **Cost (2024)** | ~$400-500 | ~$600-1,000 |
| **Typical depth** | 100-150× | 30-40× |
| **SNVs/indels in exons** | ✓ Excellent | ✓ Excellent |
| **Structural variants** | ✗ Mostly missed | ✓ Detected |
| **Non-coding variants** | ✗ Missed | ✓ Detected |
| **Regulatory regions** | ✗ Missed | ✓ Detected |
| **Repeat expansions** | ✗ Missed | ✓ Detected (especially with long reads) |
| **Analysis complexity** | Lower—fewer variants | Higher—millions of variants |
| **Interpretation** | Easier—focus on coding | Harder—non-coding interpretation uncertain |
| **Storage needs** | Moderate | High |
| **Diagnostic yield (rare disease)** | 25-50% | 30-55% (slightly higher) |
| **Best for** | Known coding disorders, cost-sensitive studies | Complex cases, structural variants, discovery |

---

## The Clinical Decision Tree: Which Test to Order?

If you're a clinician trying to diagnose a patient with a suspected genetic disorder, how do you choose? Here's a practical guide:

### Start with WES if:

1. **The patient has features of a known Mendelian disorder**
   - Most Mendelian diseases have coding variants
   - Example: A child with developmental delay, seizures, and regression—consistent with known neurodevelopmental disorders

2. **You need to screen many genes simultaneously**
   - Example: Hearing loss can be caused by mutations in >100 genes
   - WES covers them all at once

3. **Cost matters**
   - WES is still cheaper
   - Important for large studies or resource-limited settings

4. **The phenotype suggests a coding variant**
   - Loss of protein function
   - Example: Metabolic disorders often result from missing or broken enzymes

### Move to WGS if:

1. **WES was negative but you still suspect a genetic cause**
   - WGS finds an answer in ~10-30% of WES-negative cases

2. **You suspect a structural variant**
   - Developmental delay with dysmorphic features
   - Multiple congenital anomalies
   - Family history suggests deletions/duplications

3. **The phenotype is complex or atypical**
   - Doesn't fit known disease patterns
   - Might involve regulatory variants

4. **You need to rule out all possible genetic causes**
   - Example: Couples planning pregnancy want comprehensive carrier screening

5. **You want to preserve data for future analysis**
   - WGS data can be reanalyzed as we learn more about non-coding regions
   - WES data becomes outdated as we discover non-coding disease mechanisms

### A Real Decision-Making Case

**Patient**: 8-year-old boy with intellectual disability, autism, and dysmorphic facial features

**Clinical reasoning**:
- Could be a microdeletion/microduplication syndrome (structural variant)
- Could be a de novo coding variant in a neurodevelopmental gene
- Broad differential diagnosis

**Testing strategy**:
1. **First test**: Chromosomal microarray (cheap, quick, detects large CNVs)
   - Result: Normal

2. **Second test**: WES (covers most known intellectual disability genes)
   - Result: Several variants of uncertain significance, nothing diagnostic

3. **Third test**: WGS
   - Result: 150 kb deletion removing first 5 exons of a neurodevelopmental gene
   - This deletion was missed by WES (no exons to capture) and too small for microarray

**Diagnosis made**: WGS provided the answer after other methods failed.

---

## The Economics and Practicalities

### The Cost Trajectory

The cost gap between WES and WGS is shrinking:

- **2010**: WES ~$5,000, WGS ~$50,000 (10× difference)
- **2015**: WES ~$1,000, WGS ~$5,000 (5× difference)
- **2020**: WES ~$500, WGS ~$1,000 (2× difference)
- **2024**: WES ~$400-500, WGS ~$600-1,000 (1.5× difference)

As costs converge, the argument for WES weakens. Soon, WGS may cost the same as WES, making the choice obvious.

### Storage and Computing

These aren't trivial considerations:

**WES**: 6 GB per sample
- 1,000 samples = 6 TB

**WGS**: 90 GB per sample
- 1,000 samples = 90 TB

For large biobanks or population studies, this 15× difference in storage needs matters. You need:
- More hard drives
- Faster data transfer
- More powerful computers for analysis
- Longer analysis time

**Example**: The UK Biobank sequenced 500,000 genomes. At 90 GB each, that's 45 petabytes (45,000 terabytes) of raw data. This requires serious infrastructure.

### The Analysis Bottleneck

Sequencing is fast. Interpretation is slow.

**WES**: ~20,000 variants per person
- Focus on coding variants
- Most have known functional impact or clearly benign
- Can analyze in days

**WGS**: 4-5 million variants per person
- Includes millions of non-coding variants
- Interpretation uncertain for most
- Can take weeks to analyze thoroughly

As one geneticist put it: "We went from being starved for data to drowning in it."

---

## The Future: Is WES Becoming Obsolete?

There's an interesting argument emerging: **WES might be a transitional technology**.

Here's why:

### The "WGS Now, Interpret Exome First" Strategy

You can do WGS but initially analyze only the exonic regions—getting WES-equivalent results while keeping the full dataset for later. This gives you:

1. **Immediate WES-level analysis** (just look at exons)
2. **Option to expand analysis** to non-coding regions if exons are negative
3. **Future-proofing**: As we learn more about non-coding variants, reanalyze the same data

This is increasingly common in research and at some clinical centers.

### What's Driving the Shift?

1. **Cost convergence**: WGS is approaching WES pricing
2. **Improved long-read sequencing**: Technologies like PacBio and Oxford Nanopore handle structural variants and repeats that short-read WGS struggled with
3. **Better interpretation tools**: AI and machine learning are helping interpret non-coding variants
4. **Clinical evidence**: WGS diagnostic yield is consistently 5-10% higher than WES

### But WES Isn't Dead Yet

WES still has advantages for certain applications:

- **Large population studies**: Storage and cost still matter at scale
- **Focused disease studies**: If you know the disease involves coding variants
- **Lower-income settings**: Where every dollar counts
- **High coverage needs**: WES provides deeper coverage of exons for the same cost

---

## Practical Advice for Students and Researchers

### If You're Designing a Study:

**Choose WES if:**
- Your budget is tight
- You're studying a disease known to involve coding variants
- You need high coverage (>100×) of specific genes
- Your sample size is very large (>10,000 people)

**Choose WGS if:**
- You can afford it
- You're doing discovery research
- The disease mechanism is unknown
- You need to detect structural variants
- You want future-proof data

### If You're Interpreting Clinical Cases:

**Use WES results for:**
- Known Mendelian disorders
- Coding variant screening
- Initial diagnostic workup

**Consider WGS for:**
- Negative WES cases
- Complex phenotypes
- Suspected structural variants
- Cases where you need comprehensive answers

### If You're a Patient or Family:

**Understand that:**
- A negative WES doesn't rule out a genetic cause
- You might need WGS if WES is negative
- Even WGS might not find an answer (yet)—our knowledge is still growing
- Reanalysis in 1-2 years can sometimes yield new answers as we learn more

---

## A Glimpse of the Long-Read Future

Most WGS and WES today uses short-read sequencing (Illumina), which struggles with:
- Very repetitive regions
- Structural variants
- Phasing (determining which variants are on the same chromosome)

**Long-read sequencing** (PacBio HiFi, Oxford Nanopore) is changing this:

- Reads of 15,000-20,000 bp (PacBio) or >100,000 bp (Nanopore)
- Can span entire genes in single reads
- Reveals structural variants directly
- Phases variants naturally
- Sequences through repetitive regions

The T2T-CHM13 genome (the first complete human genome) was built using long reads. As long-read WGS becomes more affordable, it will likely replace short-read approaches, providing:

- All the benefits of current WGS
- Plus better structural variant detection
- Plus access to previously "invisible" repetitive regions
- Plus phasing information

---

## Summary: The Bottom Line

**Whole-Exome Sequencing**:
- Focused, cost-effective approach
- Great for known Mendelian disorders
- Misses structural and regulatory variants
- Still widely used clinically
- Likely a transitional technology

**Whole-Genome Sequencing**:
- Comprehensive, unbiased approach
- Detects all variant types
- More expensive and complex
- Increasingly preferred as costs drop
- The future of clinical and research sequencing

**The trend is clear**: We're moving toward universal WGS. But for now, both approaches have their place, and the choice depends on your specific question, resources, and needs.

The key insight: WES isn't a subset of WGS in practice—it's a different experimental design with different strengths and weaknesses. Understanding when to use each approach is an essential skill for modern geneticists and clinicians.

As sequencing costs continue to plummet and interpretation tools improve, the day may come when we always sequence whole genomes and ask questions later. Until then, choose wisely based on your specific goals.