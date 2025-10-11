# Chapter 24. Data Type for Alleles and Population

Here's a question that might not seem obvious at first: how do you turn a genome into data?

When you sequence someone's DNA, you get billions of short reads—fragments of sequence, each maybe 100-150 bases long. Those reads need to be assembled, aligned to a reference genome, and compared to figure out where this person's DNA differs from the reference. Once you've identified all those differences—the SNPs, the small insertions and deletions, maybe some larger variants—how do you write them down? How do you store them in a file that computers can read, that other scientists can use, that databases can search?

The answer is a standardized file format called **VCF (Variant Call Format)**. It's the universal language for describing genetic variation. Every variant caller—the software that finds differences between your sequence and the reference—outputs VCF files. Every genetic database stores data in VCF or a closely related format. Every analysis tool that works with variants expects VCF as input.

Understanding VCF is essential for modern genomics. It's how we turn biological variation—the actual differences in DNA molecules—into structured data that can be analyzed, compared, and shared across the world. Let's see how it works.

---

## From Sequencing to Variant Calling

The path from DNA sample to variant list goes through several steps. First, you extract DNA and sequence it using a technology like Illumina. That gives you millions or billions of short reads—raw sequence fragments. 

Next, you align those reads to a **reference genome**. For humans, that's usually GRCh38, the current standard reference assembly. Alignment means figuring out where each read came from in the genome. You use software like BWA or Bowtie2 to match each read to its best location. The output is a BAM file (or its more compressed version, CRAM)—essentially a sorted list of all your reads and where they map.

Now comes **variant calling**. You compare the aligned reads to the reference genome and identify positions where your sample differs. If the reference has an "A" at position 12345 on chromosome 1, but your sample's reads consistently show a "T" instead, you've found a variant—an A→T substitution.

Variant calling software (like GATK, DeepVariant, or FreeBayes) scans through every position in your BAM file, looks at the reads covering that position, and decides: is this a variant or not? It considers read quality, mapping quality, strand bias, and other factors to make that call. The output? A VCF file—a text file listing every detected variant.

---

## What is a VCF File?

A VCF file is surprisingly simple in concept, though it can get complex in practice. It's a plain text file with one line per variant. Each line describes where the variant is, what the reference allele is, what the alternate allele is, and how confident we are about it.

Let's break down what information each VCF line contains. Think of it like a recipe card, but for genetic variants.

**CHROM** tells you which chromosome the variant is on. Could be "chr1", "chrX", "chrM" (mitochondrial), or whatever naming scheme your reference genome uses.

**POS** is the genomic position—the exact base pair coordinate where the variant occurs. This is a 1-based coordinate, meaning the first base of a chromosome is position 1 (not position 0 like in some programming languages).

**ID** is an optional identifier. If this variant has been seen before and catalogued in a database like dbSNP, it gets an "rs" number—something like "rs12345678". If it's novel, this field is usually just a dot (.).

**REF** is the reference allele—what the reference genome has at this position. Usually a single base (A, T, G, or C) for SNPs, but could be longer for insertions and deletions.

**ALT** is the alternate allele—what your sample has instead. Again, usually a single base for SNPs, but can be longer or even represent multiple possible alternates separated by commas.

**QUAL** is a quality score. Higher numbers mean more confidence that this variant is real and not just a sequencing error. A QUAL of 30 means roughly 99.9% confidence. A QUAL of 10 means 90% confidence.

**FILTER** indicates whether the variant passed quality filters. "PASS" is good—it means the variant looks legit. Other values like "LowQual" or "StrandBias" suggest potential problems.

**INFO** is where things get interesting. This field holds all sorts of metadata about the variant: how many reads support it, what the allele frequency is in the sample or population, functional annotations, and more. It's a semicolon-separated list of key=value pairs.

**FORMAT** describes the structure of the per-sample data that comes next. It's a colon-separated list of field names, like "GT:DP:AD", telling you what information appears for each individual.

**Sample columns** come after FORMAT. If you're analyzing one person, there's one sample column. If you're analyzing 1,000 people, there are 1,000 sample columns. Each one gives that person's genotype and related metrics at this variant site.

Here's a concrete example:
```
chr1  1234567  rs12345  A  T  99.0  PASS  AC=3;AN=6;AF=0.5  GT:DP  0/1:32
```

This says: On chromosome 1 at position 1,234,567, the reference genome has an A, but we've found a T variant (rs12345). We're very confident about it (quality 99). It passed filters. In our sample or samples, there are 3 alternate alleles out of 6 total alleles (50% frequency). The sample we're showing has genotype 0/1 (heterozygous) with 32 reads covering this site.

---

## Decoding the INFO Field

The INFO field is where population-level statistics live. Let's unpack what those cryptic abbreviations mean.

**AC (Allele Count)** tells you how many copies of the alternate allele were found across all your samples. If you sequenced 100 people (200 alleles, since humans are diploid), and 10 of those alleles are the alternate, AC=10.

**AN (Allele Number)** is the total number of alleles successfully called at this site. Ideally, this is 2 × number of samples. But sometimes sequencing quality is poor for some individuals at some sites, so those samples get marked as "missing" (./.), and AN is reduced.

**AF (Allele Frequency)** is simply AC ÷ AN. It's the proportion of alternate alleles. If AC=10 and AN=200, then AF=0.05 (5%). This is the same allele frequency concept we learned about in the first section of this chapter—just computed directly from the genotype data.

These three fields are fundamental for population genetics. They tell you how common a variant is, which helps determine whether it's likely pathogenic (rare variants in disease genes often are) or benign (common variants usually are).

---

## The FORMAT Field and Per-Sample Data

After the INFO field comes FORMAT, which defines what information appears for each sample. The most common FORMAT fields are:

**GT (Genotype)** is the individual's allele combination. It's coded as numbers separated by "/" (unphased) or "|" (phased). The numbers refer to alleles: 0 means the reference allele, 1 means the first alternate, 2 means the second alternate (if there are multiple), and so on.

Here's what the genotype codes mean:

**0/0** is homozygous reference. Both of your alleles match the reference genome. At this position, you don't have the variant.

**0/1** is heterozygous. You have one reference allele and one alternate allele. You're a carrier of the variant.

**1/1** is homozygous alternate. Both of your alleles carry the variant. This is the strongest form—you definitely have this genetic change.

**./.** is missing or no-call. The genotype couldn't be determined at this position, usually because sequencing coverage was too low or read quality was poor. If only 2-3 reads cover a site, the variant caller might not have enough evidence to confidently call a genotype, so it marks it as missing instead of guessing.

If there are multiple alternate alleles listed (for example, REF=A, ALT=T,G), then you might see genotypes like 0/2 (reference + second alternate), 1/2 (first alternate + second alternate), or 2/2 (both second alternate).

**DP (Depth)** is read depth—how many sequencing reads covered this position for this sample. Higher is generally better because it means more evidence. If DP is only 5, you might not trust the genotype call much. If DP is 30 or higher, you can be more confident.

**AD (Allelic Depth)** breaks down the read depth by allele. If DP=30 and AD=15,15, that means 15 reads support the reference allele and 15 support the alternate. That's a balanced heterozygote—exactly what you'd expect for 0/1. If AD=30,0, all reads support the reference, consistent with 0/0. If AD=0,30, all support the alternate, consistent with 1/1.

Let's look at a concrete example:
```
chr1  1003215  .  A  T  99  PASS  .  GT:DP:AD  0/1:32:16,16
```

This sample is heterozygous (0/1), with 32 total reads, split evenly between the A reference allele (16 reads) and the T alternate allele (16 reads). That balanced ratio supports the heterozygous call.

---

## Multi-Sample VCF: Bringing Populations Together

So far, we've mostly talked about single-sample VCFs—one person's variants. But the real power of VCF comes when you analyze multiple samples together in a **multi-sample VCF (msVCF)**.

In an msVCF, each variant site is one row, and each sample is one column. The INFO field summarizes population-level statistics, while each sample column gives that individual's genotype.

Imagine we've sequenced three people—Alice, Bob, and Carol. At position chr1:1234567, the reference is A and we've found a T variant. Here's what the VCF line might look like:

```
#CHROM  POS      ID       REF  ALT  QUAL  FILTER  INFO               FORMAT  SAMPLE001  SAMPLE002  SAMPLE003
chr1    1234567  rs12345  A    T    99    PASS    AC=3;AN=6;AF=0.5   GT      0/1        1/1        0/0
```

Let's read this:
- SAMPLE001 (Alice) has genotype **0/1** (heterozygous): one A, one T
- SAMPLE002 (Bob) has genotype **1/1** (homozygous alternate): both alleles are T
- SAMPLE003 (Carol) has genotype **0/0** (homozygous reference): both alleles are A

Now look at the population statistics in INFO:
- **AC=3**: Alice contributes 1 T allele, Bob contributes 2 T alleles, Carol contributes 0. Total: 3 T alleles.
- **AN=6**: Three people, two alleles each = 6 total alleles
- **AF=0.5**: 3 ÷ 6 = 50% allele frequency

The key insight is that **variant** and **genotype** are different concepts. A **variant** is a site where an alternate allele exists in the population—"there's a T at this position in some people." A **genotype** is an individual's allele combination—"Alice has one A and one T."

One variant, many genotypes. The variant is population-level. The genotypes are individual-level.

---

## Joint Genotyping: Making Sure Everyone's on the Same Page

When you analyze multiple samples, you could call variants on each sample independently and then merge the VCFs. But that creates a problem: sites that are variant in one person but reference in another might not be recorded consistently. You'd end up with missing data and inaccurate allele frequencies.

**Joint genotyping** solves this. Instead of analyzing each sample separately, you analyze all samples together, simultaneously. The variant caller looks at reads from everyone at once and makes genotype calls for every sample at every site—even sites where most people are homozygous reference.

Think of it like taking attendance. If you call out names individually and only write down who answered "present," you won't know who's absent. But if you have a roster and mark everyone as either present or absent, you have complete information.

Joint genotyping ensures that every site in the VCF has a genotype entry for every sample. If Alice is 0/1, Bob is 1/1, and Carol is 0/0, all three genotypes appear in the file. That way, when you calculate AC and AN, you're using complete data.

For example, without joint genotyping, Carol's 0/0 genotype might not be recorded, and you'd think the allele frequency is 100% (3 alternate alleles out of... 3? 4? We don't know!). With joint genotyping, Carol's 0/0 is explicit, so you correctly calculate AF=0.5 (3 out of 6 alleles).

Joint genotyping is standard practice for population-scale sequencing projects like gnomAD, UK Biobank, and All of Us. It's how we ensure accurate population statistics.

---

## Dense vs. Sparse: The Storage Challenge

Here's a practical problem: as sequencing projects grow to hundreds of thousands of genomes, VCF files become enormous. The UK Biobank has sequenced about 500,000 people. If you store every variant site for every person, that's billions of lines, each with 500,000 genotype columns. The file size is staggering.

Most of those genotypes are 0/0—homozygous reference. They don't carry the variant. For rare variants (which are the majority), maybe 499,990 people are 0/0 and only 10 are 0/1 or 1/1. Storing 499,990 "0/0" entries is wasteful.

This led to two VCF formats:

**Dense VCF** stores every genotype for every sample at every site. It's like a phone book that lists every person in the city, even if most entries are identical. This works fine for small projects (tens to hundreds of samples), but becomes impractical at biobank scale.

**Sparse VCF** stores only non-reference genotypes. If you're 0/0, your entry is omitted. If you're 0/1 or 1/1, your genotype is recorded. It's like a phone book that only lists people with phone numbers—if you don't have a phone, you're not in the book, but we can still infer your existence from the total population count.

Sparse formats drastically reduce file size. A variant present in 10 people out of 500,000 only needs 10 genotype entries instead of 500,000. You still store the population statistics (AC, AN, AF) in the INFO field, so you don't lose information—you just avoid redundancy.

Modern biobanks use sparse formats. GATK has a format called gVCF (genomic VCF) that stores both variant and non-variant sites for each individual, which can then be combined into a sparse multi-sample VCF. BCFtools has sparse VCF options. These formats make large-scale genomics computationally feasible.

---

## Putting It All Together

Let's review what we've learned about how genetic variation becomes data.

**Variant calling** is the process of identifying sequence differences between your sample and the reference genome. You start with aligned reads (BAM/CRAM files) and use variant calling software to detect SNPs, indels, and other changes. The output is a VCF file.

**VCF (Variant Call Format)** is the standard format for storing variants. Each line represents one variant site. Key columns include CHROM (chromosome), POS (position), REF (reference allele), ALT (alternate allele), QUAL (quality), FILTER (pass/fail), INFO (population statistics), FORMAT (data structure), and sample columns (individual genotypes).

**Genotypes** are coded as numbers: **0/0** for homozygous reference, **0/1** for heterozygous, **1/1** for homozygous alternate. These codes tell you which alleles an individual carries. The numbers refer to the order in the REF/ALT fields (0=reference, 1=first alternate, etc.).

**INFO field** statistics like **AC** (allele count), **AN** (allele number), and **AF** (allele frequency) summarize the variant across all samples. These are population-level measures.

**FORMAT field** defines per-sample data. Common fields include **GT** (genotype), **DP** (read depth), and **AD** (allelic depth). These are individual-level measures.

**Multi-sample VCF** combines data from many individuals into one file. Each sample gets its own column. This enables population genetics analysis—you can see who carries which variants and calculate allele frequencies.

**Joint genotyping** ensures that every sample has a genotype call at every variant site, even if that genotype is 0/0. This prevents missing data and enables accurate population statistics.

**Dense vs. sparse formats** represent different storage strategies. Dense VCF stores all genotypes, including 0/0. Sparse VCF stores only non-reference genotypes, saving enormous space for large cohorts. Both preserve the essential information.

---

## Why VCF Matters

VCF is more than just a file format. It's the data structure that makes modern genomics possible.

Before VCF, every lab and every tool had its own way of representing variants. Comparing data across studies was a nightmare. Sharing data required custom converters. Reproducibility was hard.

VCF standardized variant representation. Now, a variant called in one lab can be directly compared to variants from another lab, even if they used different sequencing technologies or variant callers. Databases like gnomAD and ClinVar use VCF to distribute millions of variants to researchers worldwide. Clinical labs use VCF to report results. Every major analysis tool accepts VCF as input.

VCF also scales. The same format that works for one person's exome works for a million people's whole genomes. The logic is identical—just more lines, more columns, and sparse storage tricks.

Understanding VCF is essential for anyone working with genetic data. When you read a paper that says "we identified a rare variant in gene X," that variant came from a VCF file. When you see allele frequencies in gnomAD, those came from VCF INFO fields. When you run a GWAS or do variant annotation, you're manipulating VCF files.

The VCF file is how genomes become data—how biological molecules become numbers that computers can process, compare, and analyze. From a single "A→T" change to biobank-scale datasets with millions of variants across hundreds of thousands of people, VCF is the language we use to describe variation.

It's a simple text file. But it encodes something profound: the genetic diversity of our species, written in a compact digital language of **0/0**, **0/1**, and **1/1**.