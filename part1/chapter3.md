# Chapter 3. The CHM13 Cell Line



To understand why the T2T project used the CHM13 cell line, we need to understand a fundamental challenge in genome sequencing: **heterozygosity**. 

In a typical human genome, you inherit one set of chromosomes from your mother and another from your father. These two sets are similar but not identical—they differ at millions of positions, creating what we call **heterozygous variants**. For most of the genome, this isn't a problem. But in highly repetitive regions like centromeres or ribosomal DNA arrays, these small differences create a serious headache.

Here's why: when you sequence DNA, you break it into millions of fragments and then use computers to reassemble them, like putting together a jigsaw puzzle. If you have two slightly different copies of a repetitive region—one from mom, one from dad—the computer can't always tell which fragments belong to which copy. Should this read go with the maternal chromosome or the paternal one? In repetitive regions where the same sequence appears dozens or hundreds of times, this ambiguity makes accurate assembly nearly impossible.

The earlier human reference genome, GRCh38, was built from DNA of multiple individuals, creating what's essentially a patchwork of different people's chromosomes. It contains about 151 million base pairs of gaps, mostly in these problematic repetitive regions. The heterozygous variants made these regions too complex to assemble accurately with the technology available at the time.

The T2T Consortium needed a different approach. They needed DNA where both chromosome copies were identical—eliminating the confusion caused by heterozygous variants. That's where CHM13 comes in.

---

## What Is a Complete Hydatidiform Mole?

The CHM13 cell line comes from a rare biological phenomenon called a **complete hydatidiform mole (CHM)**. To understand what this is, let's first review normal fertilization.

### Normal Fertilization

When a sperm fertilizes an egg, the resulting cell—the zygote—has 46 chromosomes: 23 from the mother (in the egg) and 23 from the father (in the sperm). Each chromosome from mom pairs with the corresponding chromosome from dad (chromosome 1 from mom with chromosome 1 from dad, and so on). This creates a **diploid** genome with two versions of every chromosome.

Because mom and dad have different genetic variants, these chromosome pairs aren't identical. You might inherit brown-eye variants from dad and blue-eye variants from mom. This genetic diversity is normal and healthy—it's why siblings look similar but not identical.

### What Happens in a Complete Hydatidiform Mole

A complete hydatidiform mole occurs when something goes wrong during fertilization. The egg loses its nucleus (and therefore all maternal DNA), leaving essentially an empty egg. When a sperm fertilizes this empty egg, there's only paternal DNA present. To compensate for the missing maternal contribution, the sperm's DNA duplicates itself.

The result is a cell with 46 chromosomes—a normal number—but all of them are identical copies from the father. There are two copies of dad's chromosome 1, two copies of dad's chromosome 2, and so on. No maternal DNA at all.

This creates what geneticists call a **functionally haploid** genome. "Haploid" usually means having only one copy of each chromosome (like in sperm or eggs, which have 23 chromosomes). But in this case, "functionally haploid" means that even though there are two copies of each chromosome (making it diploid in number), both copies are identical—so it behaves like a haploid genome for sequencing purposes.

The karyotype is 46,XX (46 chromosomes, with two X chromosomes and no Y), all derived from the father.

![CHM13 Karyotype](https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41586-020-2547-7/MediaObjects/41586_2020_2547_Fig4_ESM.jpg)

**Figure: Karyotyping of CHM13**. The image shows two types of chromosome analysis: (a) spectral karyotyping, where each chromosome type is labeled with a different color, and (b) G-banding, which reveals chromosome structure through staining patterns. Both confirm that CHM13 has a normal 46,XX karyotype with no structural abnormalities.

### Why This Is Perfect for Sequencing

Because both chromosome copies in CHM13 are identical, there are no heterozygous variants to confuse the assembly process. When sequencing reads come from a repetitive region, the computer doesn't have to guess which chromosome copy they belong to—they're the same either way.

Think of it this way: imagine you're assembling two jigsaw puzzles simultaneously. In a normal diploid genome, you have pieces from two similar but not identical puzzles mixed together—some pieces fit in puzzle A, some in puzzle B, and some might fit in either. In CHM13, both puzzles are identical, so it doesn't matter which piece goes where. This makes the assembly dramatically simpler, especially for the repetitive regions that plagued earlier sequencing efforts.

---

## The hTERT Modification: Making Cells Immortal

The full name of the cell line is **CHM13hTERT**. The "hTERT" part refers to a genetic modification that was added to make the cells **immortal**.

### The Telomere Problem

Normal human cells can only divide a limited number of times—typically 40 to 60 divisions—before they stop. This limit exists because of structures called **telomeres**, which are repetitive DNA sequences (TTAGGG repeated thousands of times) that cap the ends of chromosomes, like the plastic tips on shoelaces.

Every time a cell divides and copies its DNA, the telomeres get slightly shorter. This happens because the DNA copying machinery can't fully replicate the very ends of chromosomes. Eventually, telomeres become so short that the cell recognizes them as damaged DNA and stops dividing—a state called **senescence** (cellular aging).

This built-in limit is actually a protective mechanism that prevents cells from dividing uncontrollably. But for research purposes, it's a problem. If you're trying to grow cells for extensive sequencing experiments, you need a large, consistent supply of cells with identical DNA. Running out of cells halfway through your project isn't an option.

### Enter Telomerase

The solution is an enzyme called **telomerase**, which adds new TTAGGG repeats to telomeres, preventing them from shortening. Telomerase is naturally active in germ cells (sperm and eggs) and stem cells, allowing them to divide indefinitely. But it's turned off in most adult cells, which is why they have limited lifespans.

Cancer cells often reactivate telomerase, allowing them to divide without limit—one reason tumors can grow indefinitely.

### The hTERT Gene

The CHM13 cells were genetically modified to express **human telomerase reverse transcriptase (hTERT)**, the key component of telomerase. This modification makes the cells immortal—they can divide indefinitely while maintaining stable telomeres and consistent DNA.

For the T2T project, this meant researchers could grow as many CHM13 cells as needed, extracting large quantities of identical DNA for sequencing. The cells remain genetically stable through many divisions, ensuring that the DNA sequenced at the beginning of the project matches the DNA sequenced at the end.

---

## Ancestry and Genetic Background

The CHM13 genome doesn't represent all of humanity—it comes from a single source of DNA (one father's duplicated genome). Genetic ancestry analysis shows that this genome is primarily of **European origin**, with small amounts of **admixture** (genetic contributions from other populations, such as South Asian or East Asian ancestry) and traces of **Neanderthal DNA**.

Nearly all modern humans of non-African descent carry some Neanderthal DNA—typically 1-2% of their genome—inherited from interbreeding that occurred roughly 50,000-60,000 years ago. CHM13 is no exception.

Does this ancestry matter for its use as a reference? Not really. The key advantage of CHM13 isn't its specific genetic variants, but rather its lack of heterozygous variants. The goal of T2T-CHM13 was to create a complete, gapless **structure** that shows where all the genes and repetitive elements are located. Once you have that complete map, you can study how different variants exist in different populations—which is exactly what the Human Pangenome Reference Consortium is doing.

---

## Why CHM13 Made T2T Possible

Let's bring all these pieces together. The T2T Consortium needed to sequence regions that had defeated earlier efforts—centromeres, ribosomal DNA arrays, and segmental duplications. These regions are highly repetitive, and in a normal diploid genome, small differences between the two chromosome copies make accurate assembly nearly impossible.

The CHM13hTERT cell line solved this problem through three key features:

1. **Functionally haploid genome**: Both chromosome copies are identical (duplicated paternal DNA), eliminating heterozygous variants that confuse assembly in repetitive regions.

2. **Immortalized cells**: The hTERT modification allows unlimited cell division, providing a consistent, stable supply of DNA for extensive sequencing.

3. **Genetic stability**: Karyotype analysis confirmed a normal 46,XX chromosome structure with no abnormalities, ensuring the cells remain stable through many divisions.

When combined with advanced long-read sequencing technologies (PacBio HiFi and Oxford Nanopore), CHM13's unique properties enabled the first complete human genome assembly—all 3.055 billion base pairs with no gaps, covering the 22 autosomes and the X chromosome (the Y chromosome was added later in version 2.0).

This achievement wouldn't have been possible with DNA from a typical diploid individual. CHM13 provided the genomic simplicity needed to finally see what was hiding in the genome's most complex regions.

---

## Comparing Haploid and Diploid Approaches

The table below summarizes how CHM13's functionally haploid genome compares to the diploid approach used in earlier reference genomes like GRCh38.

| **Feature** | **CHM13 (Functionally Haploid)** | **GRCh38 (Diploid)** |
|-------------|----------------------------------|----------------------|
| **Chromosome Copies** | Two identical copies from duplicated paternal DNA | Two different copies (one maternal, one paternal) with heterozygous variants |
| **Assembly Complexity** | Simple—no ambiguity in repetitive regions since both copies are identical | Complex—heterozygous variants create ambiguity, especially in repeats |
| **Gaps in Assembly** | Zero gaps—complete 3.055 billion bp coverage | ~151 million bp of gaps, mostly in repetitive regions |
| **Repetitive Regions** | Accurately assembled (centromeres, rDNA arrays, segmental duplications) | Often incomplete or missing due to variant ambiguity |
| **Strength** | Enables complete, gapless assembly of complex regions | Represents typical human genetic diversity with maternal and paternal alleles |
| **Limitation** | Represents only one source of DNA; doesn't capture population diversity | Incomplete in repetitive regions; potential reference bias |

---

## Moving Beyond CHM13

While CHM13 was essential for creating the first complete human genome, it represents just one individual's DNA (or more accurately, one father's duplicated DNA). Human genetic diversity is vast—populations differ in thousands of structural variants, gene copy numbers, and sequence variations.

That's why the Human Pangenome Reference Consortium is building on the T2T foundation by sequencing complete, high-quality genomes from dozens of individuals representing diverse global populations. The goal is to create a reference that captures human genetic diversity, not just a single complete genome.

CHM13 showed us what a complete human genome looks like. The pangenome shows us how we differ.