# Chapter 24. Data Type for Alleles and Population

Here's a question that might not seem obvious at first: how do you turn a genome into data?

When you sequence someone's DNA, you get billions of short reads—fragments of sequence, each maybe 100-150 bases long. Those reads need to be assembled, aligned to a reference genome, and compared to figure out where this person's DNA differs from the reference. Once you've identified all those differences—the SNPs, the small insertions and deletions, maybe some larger variants—how do you write them down? How do you store them in a file that computers can read, that other scientists can use, that databases can search?

The answer is a standardized file format called **VCF (Variant Call Format)**. It's the universal language for describing genetic variation. Every variant caller—the software that finds differences between your sequence and the reference—outputs VCF files. Every genetic database stores data in VCF or a closely related format. Every analysis tool that works with variants expects VCF as input.

Understanding VCF is essential for modern genomics. It's how we turn biological variation—the actual differences in DNA molecules—into structured data that can be analyzed, compared, and shared across the world.

---

## From Sequencing to Variant Calling

The path from DNA sample to variant list goes through several steps. You extract DNA and sequence it using a technology like Illumina, obtaining millions or billions of short reads—raw sequence fragments. 

Next, you align those reads to a **reference genome**. For humans, that's usually GRCh38, the current standard reference assembly. Alignment means figuring out where each read came from in the genome using software like BWA or Bowtie2. The output is a BAM file (or its more compressed version, CRAM)—essentially a sorted list of all your reads and where they map.

Now comes **variant calling**. You compare the aligned reads to the reference genome and identify positions where your sample differs. If the reference has an "A" at position 12345 on chromosome 1, but your sample's reads consistently show a "T" instead, you've found a variant—an A→T substitution.

Variant calling software (like GATK, DeepVariant, or FreeBayes) scans through every position in your BAM file, looks at the reads covering that position, and decides: is this a variant or not? It considers read quality, mapping quality, strand bias, and other factors. The output is a VCF file—a text file listing every detected variant.

---

## VCF File Structure

A VCF file is surprisingly simple in concept. It's a plain text file with one line per variant. Each line describes where the variant is, what the reference allele is, what the alternate allele is, and how confident we are about it.

### Core Columns

**CHROM** tells you which chromosome (chr1, chrX, chrM, etc.)

**POS** is the genomic position—the exact base pair coordinate where the variant occurs (1-based coordinate system)

**ID** is an optional identifier. If catalogued in dbSNP, it gets an "rs" number like rs12345678. If novel, this field is just a dot (.)

**REF** is the reference allele—what the reference genome has at this position

**ALT** is the alternate allele—what your sample has instead

**QUAL** is a quality score. Higher numbers mean more confidence. QUAL of 30 means roughly 99.9% confidence; 10 means 90% confidence

**FILTER** indicates whether the variant passed quality filters. "PASS" is good—the variant looks legitimate. Other values like "LowQual" or "StrandBias" suggest potential problems

**INFO** holds metadata about the variant: read support, allele frequency, functional annotations, and more. It's a semicolon-separated list of key=value pairs

**FORMAT** describes the structure of the per-sample data that follows—a colon-separated list of field names like "GT:DP:AD"

**Sample columns** come after FORMAT. One person = one column; 1,000 people = 1,000 columns. Each gives that person's genotype and related metrics at this variant site

Here's a concrete example:
```
chr1  1234567  rs12345  A  T  99.0  PASS  AC=3;AN=6;AF=0.5  GT:DP  0/1:32
```

This says: On chromosome 1 at position 1,234,567, the reference genome has an A, but we've found a T variant (rs12345). We're very confident (quality 99). It passed filters. There are 3 alternate alleles out of 6 total alleles (50% frequency). The sample shown has genotype 0/1 (heterozygous) with 32 reads covering this site.

---

## The INFO Field: Population-Level Statistics

The INFO field is where population-level statistics live.

**AC (Allele Count)** tells you how many copies of the alternate allele were found across all samples. If you sequenced 100 people (200 alleles, since humans are diploid), and 10 of those alleles are the alternate, AC=10.

**AN (Allele Number)** is the total number of alleles successfully called at this site. Ideally, this is 2 × number of samples. Sometimes sequencing quality is poor for some individuals at some sites, so those samples get marked as missing (./.), and AN is reduced.

**AF (Allele Frequency)** is simply AC ÷ AN—the proportion of alternate alleles. If AC=10 and AN=200, then AF=0.05 (5%).

These three fields are fundamental for population genetics. They tell you how common a variant is, which helps determine whether it's likely pathogenic (rare variants in disease genes often are) or benign (common variants usually are).

---

## The FORMAT Field and Genotypes

After the INFO field comes FORMAT, which defines what information appears for each sample. The most common FORMAT fields are:

**GT (Genotype)** is the individual's allele combination, coded as numbers separated by "/" (unphased) or "|" (phased). The numbers refer to alleles: 0 = reference allele, 1 = first alternate, 2 = second alternate (if multiple), etc.

### Genotype Codes


| Genotype | Type | Phasing | Meaning |
|----------|------|---------|---------|
| `0/0` | Homozygous reference | Unphased | Both alleles match the reference—you don't have the variant |
| `0/1` | Heterozygous | Unphased | One reference allele and one alternate allele—you're a carrier |
| `1/0` | Heterozygous | Unphased | Same as 0/1 (order doesn't matter when unphased) |
| `1/1` | Homozygous alternate | Unphased | Both alleles carry the variant |
| ``./.`` | Missing | Unphased | The genotype couldn't be determined, usually because sequencing coverage was too low or read quality was poor |

You can use `0|1` for heterozygous variants or `0|0`, `1/1` for homozygous genotypes but it has another:
- **/** (slash) = unphased genotypes. We know which alleles are present but not which came from mom vs. dad
- **|** (pipe) = phased genotypes. We know which allele came from which parent (or at least which alleles are on the same chromosome)

If there are multiple alternate alleles (e.g., REF=A, ALT=T,G), you might see 0/2 (reference + second alternate), 1/2 (first alternate + second alternate), or 2/2 (both second alternate).

**DP (Depth)** is read depth—how many sequencing reads covered this position for this sample. Higher is generally better. DP=5 might not be trustworthy; DP=30 or higher provides more confidence.

**AD (Allelic Depth)** breaks down the read depth by allele. If DP=30 and AD=15,15, that means 15 reads support the reference and 15 support the alternate—a balanced heterozygote consistent with 0/1. If AD=30,0, all reads support the reference (consistent with 0/0). If AD=0,30, all support the alternate (consistent with 1/1).

Example:
```
chr1  1003215  .  A  T  99  PASS  .  GT:DP:AD  0/1:32:16,16
```

This sample is heterozygous (0/1), with 32 total reads, split evenly between the A reference allele (16 reads) and the T alternate allele (16 reads). That balanced ratio supports the heterozygous call.

---

## Multi-Sample VCF: Population Data

The real power of VCF comes when analyzing multiple samples together in a **multi-sample VCF (msVCF)**. Each variant site is one row, and each sample is one column. The INFO field summarizes population-level statistics, while each sample column gives that individual's genotype.

Imagine we've sequenced three people—Alice, Bob, and Carol. At position chr1:1234567, the reference is A and we've found a T variant:

```
#CHROM  POS      ID       REF  ALT  QUAL  FILTER  INFO               FORMAT  Alice  Bob  Carol
chr1    1234567  rs12345  A    T    99    PASS    AC=3;AN=6;AF=0.5   GT      0/1    1/1  0/0
```

- Alice: **0/1** (heterozygous) = one A, one T
- Bob: **1/1** (homozygous alternate) = both alleles are T
- Carol: **0/0** (homozygous reference) = both alleles are A

Population statistics in INFO:
- **AC=3**: Alice contributes 1 T allele, Bob contributes 2 T alleles, Carol contributes 0. Total: 3 T alleles
- **AN=6**: Three people × 2 alleles each = 6 total alleles
- **AF=0.5**: 3 ÷ 6 = 50% allele frequency

The key insight: **variant** and **genotype** are different concepts. A **variant** is a site where an alternate allele exists in the population—"there's a T at this position in some people." A **genotype** is an individual's allele combination—"Alice has one A and one T."

One variant, many genotypes. The variant is population-level. The genotypes are individual-level.

---

## Joint Genotyping: Complete Data

When analyzing multiple samples, you could call variants on each sample independently and then merge the VCFs. But that creates a problem: sites that are variant in one person but reference in another might not be recorded consistently, leading to missing data and inaccurate allele frequencies.

**Joint genotyping** solves this by analyzing all samples together, simultaneously. The variant caller looks at reads from everyone at once and makes genotype calls for every sample at every site—even sites where most people are homozygous reference.

Think of it like taking attendance. If you call out names individually and only write down who answered "present," you won't know who's absent. But if you have a roster and mark everyone as either present or absent, you have complete information.

Joint genotyping ensures that every site in the VCF has a genotype entry for every sample. If Alice is 0/1, Bob is 1/1, and Carol is 0/0, all three genotypes appear in the file. That way, when you calculate AC and AN, you're using complete data.

Without joint genotyping, Carol's 0/0 genotype might not be recorded, leading to incorrect allele frequency calculations. With joint genotyping, Carol's 0/0 is explicit, so you correctly calculate AF=0.5 (3 out of 6 alleles).

Joint genotyping is standard practice for population-scale sequencing projects like gnomAD, UK Biobank, and All of Us.

---

## Storage Strategies: Dense vs. Sparse

As sequencing projects grow to hundreds of thousands of genomes, VCF files become enormous. The UK Biobank has sequenced about 500,000 people. If you store every variant site for every person, that's billions of lines, each with 500,000 genotype columns. The file size is staggering.

Most of those genotypes are 0/0—homozygous reference. For rare variants (which are the majority), maybe 499,990 people are 0/0 and only 10 are 0/1 or 1/1. Storing 499,990 "0/0" entries is wasteful.

### Dense vs. Sparse VCF Comparison

| Feature | Dense VCF | Sparse VCF |
|---------|-----------|------------|
| **Storage approach** | Stores every genotype for every sample at every site | Stores only non-reference genotypes (0/1, 1/1, etc.) |
| **0/0 genotypes** | Explicitly written | Omitted (inferred) |
| **File size** | Very large, grows superlinearly with sample count | Much smaller, more efficient storage |
| **Best for** | Small projects (tens to hundreds of samples) | Large-scale projects (thousands to millions of samples) |
| **Population statistics** | Stored in INFO field | Stored in INFO field (no loss of information) |
| **Example** | 500,000 samples with rare variant = 500,000 genotype entries | 500,000 samples with rare variant = ~10-100 genotype entries |
| **Redundancy** | High (most entries are 0/0 for rare variants) | Low (only variant carriers recorded) |
| **Computational feasibility** | Impractical at biobank scale | Enables large-scale genomics |

Sparse formats drastically reduce file size. A variant present in 10 people out of 500,000 only needs 10 genotype entries instead of 500,000. Population statistics (AC, AN, AF) are still stored in the INFO field, so you don't lose information—you just avoid redundancy.

Modern biobanks use sparse formats. GATK has gVCF (genomic VCF) that stores both variant and non-variant sites for each individual, which can then be combined into a sparse multi-sample VCF. BCFtools has sparse VCF options. These formats make large-scale genomics computationally feasible.

---

## The Future of VCF: Scaling for a Genomic Revolution

The explosive growth of genetic variation data has created unprecedented challenges for VCF. National initiatives like Europe's 1+ Million Genomes Initiative, the US All of Us Research Program, and Australian Genomics are generating data from millions of individuals. This ballooning of data means that ways of representing genetic variation must also scale.

### The Scaling Challenge

VCF faces a fundamental scaling problem: when new samples are added to a multi-sample VCF, you need to add rows for newly-observed variants, but you also need to update all existing rows to indicate that old samples did not contain the new variants. These updates expand the data held by all other samples, making file size grow superlinearly—faster than just linearly with sample count.

For example, exporting data from gnomAD (the Genome Aggregation Database) to VCF is in the petabyte range. Doubling the size of gnomAD would make export and interchange in VCF format completely infeasible. This isn't just an inconvenience—it makes workflows slower and sharing files more time-consuming and resource-expensive.

### GA4GH's Approach to Scaling

The Global Alliance for Genomics and Health (GA4GH) maintains the VCF standard through its Large-Scale Genomics Work Stream. The Future of VCF Working Group, formed in 2019, meets monthly to discuss VCF scaling challenges and review different approaches that have been developed to solve them. The group's main goal is to assess scaling solutions, make standards recommendations, and ensure that VCF keeps up with increasing data size and complexity.

Scaling VCF is important to maintain interoperability with other GA4GH standards, including htsget (for downloading variation data from specific genomic regions), Beacon (for querying genomic variants), and CRAM/SAM/BAM file formats (for representing sequencing read data).

### Three Approaches to Scaling

Current scaling solutions can be broadly considered as three related approaches.

**First: VCF specification modifications** that make it scale linearly or sublinearly. Examples include:
- Sparse Allele Vectors (SAV): a format for storing very large sets of genotypes and haplotype dosages that produces small file sizes and is optimized for fast association analysis
- Scalable Variant Call Representation (SVCR): a format which takes advantage of reference block compression to guarantee linear scaling with the number of samples
- Sparse Project VCF (spVCF): works by selectively reducing high-entropy quality control information and run-length encoding reference coverage information

This solution is relatively easy to accomplish and could gain adoption quickly, but adoption depends on the community coalescing around a chosen approach.

**Second: New binary file format** engineered to support large dataset sizes and different operations—for example, querying all data from one sample, or querying one region across all samples. SAV is an extension to BCF (the binary form of VCF). This approach could be challenging for community adoption, as it requires multiple community libraries to implement support.

**Third: API-based solution** with a protocol for how to retrieve data and the format in which data are returned, which could be any VCF format. This is a hybrid approach that exploits VCF specification improvements in parallel with development of protocols that interact with VCF, and is considered the most promising path forward.

### Why VCF Scaling Matters

Successful adoption of VCF scaling solutions is vital for the scientific community. These solutions will enable the reuse of large population-based genomics and health datasets. The method of virtual cohorts—combining data from multiple studies to increase statistical power—will particularly benefit from VCF scaling solutions. This is especially important for studying rare diseases, where research often relies on smaller populations from multiple studies conducted over time.

The GA4GH Future of VCF Working Group offers an ideal collaborative setup to tackle the scaling challenges facing researchers and data service providers, providing a unique forum for exchanging ideas and experience that might otherwise remain siloed.

---

## Why VCF Matters

VCF is more than just a file format—it's the data structure that makes modern genomics possible.

Before VCF, every lab and every tool had its own way of representing variants. Comparing data across studies was a nightmare. Sharing data required custom converters. Reproducibility was hard.

VCF standardized variant representation. Now, a variant called in one lab can be directly compared to variants from another lab, even if they used different sequencing technologies or variant callers. Databases like gnomAD and ClinVar use VCF to distribute millions of variants worldwide. Clinical labs use VCF to report results. Every major analysis tool accepts VCF as input.

VCF also scales—though with the challenges outlined above. The same format that works for one person's exome can work for a million people's whole genomes with appropriate scaling solutions. The logic remains identical—just more lines, more columns, and sophisticated storage strategies.

When you read a paper that says "a rare variant in gene X was identified," that variant came from a VCF file. When you see allele frequencies in gnomAD, those came from VCF INFO fields. When you run a GWAS or do variant annotation, you're manipulating VCF files.

The VCF file is how genomes become data—how biological molecules become numbers that computers can process, compare, and analyze. From a single A→T change to biobank-scale datasets with millions of variants across hundreds of thousands of people, VCF is the language we use to describe variation.

It's a simple text file. But it encodes something profound: the genetic diversity of our species, written in a compact digital language of **0/0**, **0/1**, and **1/1**.