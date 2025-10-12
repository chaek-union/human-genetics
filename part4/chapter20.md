# Chapter 20. Allele Frequency

Here's a question that might seem obvious but turns out to be profound: is a genetic variant rare or common?

If you sequence one person's genome and find a variant that's not in the reference sequence, what does that tell you? Not much, actually. Maybe it's a harmless difference that appears in millions of people worldwide. Maybe it's a disease-causing mutation that just arose in this person. Maybe it's somewhere in between. You can't tell from looking at one genome.

Genetic variation is observed in individuals, but its meaning emerges only when viewed within a **population**. When a DNA variant occurs in a single person, it's a private event—we don't know if it's important or just noise. But when it's shared among many individuals, it reflects the combined forces of **mutation, selection, and genetic drift** that have shaped the genetic landscape over thousands of generations.

To describe how common or rare a variant is, geneticists use the concept of **allele frequency**. It's a simple idea—what proportion of all copies of a gene carry this particular variant?—but it turns out to be remarkably powerful. Allele frequency tells us about evolutionary history, disease risk, and population structure all at once.

Recent large-scale genome analyses have given us an unprecedented view of allele frequency. **141,456 people** from diverse populations were sequenced in the gnomAD database, cataloging hundreds of millions of variants ([Karczewski et al. 2020, Nature](https://www.nature.com/articles/s41586-020-2308-7)). This dataset is large enough to detect variants that appear in only one or two people out of hundreds of thousands. It's revolutionized how we think about genetic variation.

Let's start with the basics and build up to why this matters.

---

## Definition of Allele Frequency

**Allele frequency** is the proportion of a specific allele among all alleles at a given genetic locus in a population. Think of it as asking: if we collected all the copies of this gene from everyone in the population, what fraction would have this particular variant?

Here's where being human (and diploid) matters. Each person has two copies of every autosomal gene—one from mom, one from dad. So each person contributes two alleles to the population count.

Let's work through a concrete example. Suppose we're looking at a specific position on chromosome 21: chr21:2232323. At this position, most people have an A (adenine), but occasionally someone has a T (thymine) instead.

Now imagine we've sequenced **141,456 people**—that's the size of the gnomAD dataset. We find that **one person** is heterozygous for this variant—they have one A and one T. Everyone else is AA.

How do we calculate the allele frequency of the T allele?

First, count the total number of alleles in the dataset:
```
141,456 people × 2 alleles per person = 282,912 alleles
```

Second, count how many T alleles we observed. Our one heterozygote has one T allele, so:
```
1 T allele out of 282,912 total alleles
```

The allele frequency is:
```
1 ÷ 282,912 = 0.0000035
```

We usually express this as a percentage: **0.00035%**. That's extremely rare—about 3.5 in a million.

---

## How to Calculate Allele Frequency

The general formula is simple:

**Allele frequency = (number of variant alleles) ÷ (2 × number of individuals)**

The key is remembering to count both alleles from homozygotes and one allele from heterozygotes. Let's look at a few scenarios in the gnomAD dataset (141,456 people = 282,912 alleles):

| Scenario | Heterozygotes (AT) | Homozygotes (TT) | T alleles | Calculation | Frequency |
|----------|-------------------|------------------|-----------|-------------|-----------|
| Very rare | 1 | 0 | 1 | 1 ÷ 282,912 | 0.00035% |
| Rare | 2 | 3 | 8 | 8 ÷ 282,912 | 0.0028% |
| Low frequency | 10 | 0 | 10 | 10 ÷ 282,912 | 0.0035% |
| More common | 0 | 10 | 20 | 20 ÷ 282,912 | 0.0071% |

**Counting rule**: Each heterozygote contributes 1 variant allele, each homozygote contributes 2 variant alleles.

---

## Minor Allele Frequency (MAF)

At most positions in the genome, we find two alleles in the population. One is more common—we call this the **major allele**. The other is less common—the **minor allele**. The frequency of the minor allele is called the **Minor Allele Frequency (MAF)**.

For example, suppose at a certain position:
- 92% of alleles are A (the major allele)
- 8% of alleles are T (the minor allele)

The MAF is 0.08, or 8%.

Why do we care about the minor allele specifically? Because in population genetics and GWAS, we're usually interested in the less common variant. The major allele is often just the "reference" or "normal" state. The minor allele is what varies, and variation is what we study.

MAF is also useful for categorizing variants. A variant with MAF > 5% is common—lots of people carry it. A variant with MAF < 1% is rare—few people have it. These categories matter because common and rare variants behave differently in studies and have different evolutionary implications.

---

## Variant Categories by Frequency

Geneticists divide variants into categories based on allele frequency. However, **the exact cutoffs vary considerably between studies and research contexts**. There is no universal consensus, and different fields use different thresholds depending on their specific questions and datasets.

### Commonly Used Classification Schemes

Multiple classification systems exist in the literature, reflecting different research needs:

| Study | Common | Low-frequency | Rare | Ultra-rare/Singleton |
|-------|--------|---------------|------|----------------------|
| **1000 Genomes ([Byrska-Bishop et al. 2022, Cell](https://www.cell.com/cell/fulltext/S0092-8674(22)01026-4))** | AF > 1% | 0.5% ≤ MAF < 5% | AF ≤ 1% | Singletons (AC = 1) |
| **Schizophrenia genetics ([Akingbuwa et al. 2022, Mol Psychiatry](https://www.nature.com/articles/s41380-022-01621-8))** | MAF > 1% | - | AF < 0.1% (excluding singletons) | Singletons only |
| **Gene expression heritability ([Glassberg et al. 2019, Nat Genet](https://www.nature.com/articles/s41588-019-0481-0))** | - | - | - | Singletons; gnomAD MAF < 0.01% |
| **AD/dementia GWAS ([Andrews et al. 2023, EBioMedicine](https://doi.org/10.1016/j.ebiom.2023.104511))** | MAF > 5% | 1-5% | MAF < 1% | - |
| **COVID-19 severity ([Fallerini et al. 2021, Hum Genet](https://link.springer.com/article/10.1007/s00439-021-02397-7))** | MAF ≥ 5% | 1% ≤ MAF < 5% | 0.1% ≤ MAF < 1% | MAF < 0.1% |

**Key observation**: As noted in a comprehensive review, "the threshold of MAF in rare variants has not yet been clearly defined" and varies between 0.1% and 5% across studies ([Momozawa & Mizukami 2021, J Hum Genet](https://www.nature.com/articles/s10038-020-00845-2)). The cutoffs are somewhat arbitrary and should be chosen based on the specific research question, disease penetrance, and available sample size.

### Why Do Cutoffs Vary?

The variation in frequency thresholds reflects different research priorities:

**Disease-specific considerations**: For highly penetrant neuropsychiatric disorders, researchers often focus on ultra-rare variants or singletons that likely represent recent, highly deleterious mutations. In schizophrenia genetics, ultra-rare variants (singletons only) showed the strongest association with disease, while "rare" variants (AF < 0.1% excluding singletons) showed no significant enrichment ([Akingbuwa et al. 2022, Mol Psychiatry](https://www.nature.com/articles/s41380-022-01621-8)). This suggests that the most deleterious variants are truly ultra-rare, supporting stringent thresholds for some disorders.

**Methodological and technological constraints**: The 1000 Genomes Project with high-coverage sequencing (30X) defined multiple frequency categories: very rare (MAF < 0.5%), rare (0.5% ≤ MAF < 5%), and common (AF > 1%), reflecting their ability to robustly detect variants across the entire frequency spectrum ([Byrska-Bishop et al. 2022, Cell](https://www.cell.com/cell/fulltext/S0092-8674(22)01026-4)). Array-based GWAS historically focused on MAF > 5% due to imputation limitations, while whole-genome sequencing enables finer distinctions.

**Statistical and biological considerations**: Studies examining gene expression found that 90% of singleton heritability derives from variants with population frequency < 0.01% in gnomAD ([Glassberg et al. 2019, Nat Genet](https://www.nature.com/articles/s41588-019-0481-0)). This suggests that functionally important regulatory variants are kept at extremely low frequencies by selection, motivating even stricter definitions of "ultra-rare" for specific biological questions.

When reading genetic studies, always check how the authors define their frequency categories—it matters for interpretation.

### General Framework

Despite variation in exact thresholds, most studies follow this general pattern:

| Category | Typical MAF Range | Typical Allele Age | Selection Pattern | Study Implications |
|----------|-------------------|-------------------|-------------------|-------------------|
| **Common** | > 5% | Thousands to tens of thousands of years | Usually neutral or weakly selected | Useful for GWAS; high statistical power |
| **Low-frequency** | 1-5% | Intermediate | Mild selection or recent spread | Moderate power; specialized designs needed |
| **Rare** | 0.1-1% (or < 1%) | Recent (hundreds to thousands of years) | Often under purifying selection; may be functional | Large effects but hard to study; low power |
| **Ultra-rare** | < 0.1% | Very recent | Strong selection; often deleterious | Detected mainly by sequencing; often private |
| **Private (singletons)** | ~0% | Very recent (1-10 generations); often *de novo* | Not yet filtered by selection | Uncertain significance; most will be lost |

### Key Insights by Category

**Common variants** have persisted through many generations because they don't harm fitness much. Most are in non-coding regions or have minimal functional impact. They're old enough that selection has had plenty of time to act—if they were harmful, they'd be gone by now. Their high frequency makes them ideal for GWAS, where you need many people carrying the variant to detect associations.

**Rare variants** tell a different story. Here's a striking pattern from the gnomAD data: when loss-of-function variants were examined—mutations that completely break a gene by introducing a premature stop codon or disrupting splicing—most were found to be **singletons** ([Karczewski et al. 2020, Nature](https://www.nature.com/articles/s41586-020-2308-7)). Each variant appeared in only one person out of 141,456. Why? Because breaking an important gene reduces fitness, and natural selection removes these variants before they can spread. Rare variants are often functional and frequently deleterious—they're kept rare by selection constantly pushing them down.

The definition of "rare" varies by context. For highly penetrant Mendelian diseases where even heterozygotes show symptoms, researchers often use stricter thresholds (MAF < 0.01% or even < 0.001%) to filter out benign variants ([Gambin et al. 2018, Eur J Hum Genet](https://www.nature.com/articles/s41431-018-0169-4)). For complex diseases with reduced penetrance, more relaxed thresholds (MAF < 1% or < 5%) are common. The choice depends on the expected disease prevalence, penetrance, and genetic heterogeneity.

**Private variants** are too new to tell us much about selection. They haven't been tested by evolutionary forces yet. Most arose recently—perhaps *de novo* in the individual, or inherited from a parent who got a new mutation. Most will disappear in the next few generations through random chance or selection, but a tiny fraction might persist or even spread if they happen to be neutral or beneficial.

The distinction between these categories has become sharper as datasets have grown. With over 140,000 people sequenced, we can confidently distinguish variants that appear in hundreds of people from those that appear in just one or two—something impossible with smaller sample sizes.

---

## How Selection Shapes Allele Frequency

Allele frequency isn't just a descriptive statistic—it's a window into evolutionary history. The frequency of a variant tells you something about how natural selection has acted on it.

Think of natural selection as a filter. Beneficial mutations pass through easily and spread. Neutral mutations drift through randomly—some make it, some don't. Harmful mutations get caught and removed. The frequency of a variant reflects which of these processes has been dominant.

### The Frequency-Function Relationship

There's a striking pattern in genomic data: **the more severe a variant's functional impact, the rarer it tends to be.**

- **Synonymous variants** (don't change the amino acid) → often common
- **Missense variants** (change one amino acid) → intermediate frequencies
- **Nonsense variants** (truncate the protein) → almost always rare

This gradient reflects selection intensity. Variants that break genes completely are removed quickly. Variants with subtle effects take longer to remove, or may drift to moderate frequency if their effects are small enough.

### Selection Coefficient and Population Size

The fate of a new variant depends on two things:
1. **Selection coefficient (s)**: How much it affects fitness
2. **Effective population size (Ne)**: How large the population is

Here's the critical relationship:

> **Selection is only effective when s > 1/Ne**

If your selection coefficient is smaller than this threshold, the variant behaves like it's neutral—its fate is determined by random chance (genetic drift) rather than by selection.

**In large populations:**
- Ne is large → 1/Ne is small
- Even tiny fitness effects matter
- Selection efficiently removes harmful variants
- Few deleterious alleles persist

**In small populations:**
- Ne is small → 1/Ne is large
- Only large fitness effects overcome drift
- Mildly harmful variants behave neutrally
- More deleterious alleles persist by chance

Human populations have moderate effective sizes (Ne ≈ 10,000-50,000, depending on ancestry), so selection can act on variants with effect sizes down to about 0.01-0.001%. But that still means many mildly deleterious variants persist at low frequency, drifting around until selection eventually removes them or they disappear by chance.

This explains why loss-of-function variants are overwhelmingly rare but not completely absent. They keep arising through mutation, and in a finite population, it takes time for selection to purge them. Some stick around for a few generations before disappearing. A few get lucky and drift to higher frequency before selection catches up.

### The Allele Frequency-Effect Size Spectrum

This inverse relationship between allele frequency and effect size creates a distinctive pattern in genetic disease. Variants across the genome occupy different positions along two dimensions: how common they are (minor allele frequency) and how much they affect disease risk (effect size).

![Andrews2023-EBioMed-Fig1](../assets/figures/Andrews2023-EBioMed-Fig1.png)

**Figure: Genetic architecture of Alzheimer's disease showing the relationship between allele frequency and effect size.** Variants are conceptualized along two dimensions: population minor allele frequency (x-axis, log scale) and effect size as odds ratio (y-axis, log scale). Highly penetrant mutations in APP, PSEN1, and PSEN2 causing autosomal dominant AD are extremely rare (MAF < 0.0001) with large effect sizes (OR > 5). APOE genotypes show intermediate patterns with APOE ε4/ε4 at ~2% frequency conferring substantial risk (OR ~12). Most variants discovered by GWAS are common to low-frequency (MAF > 0.01) with small effect sizes (OR < 1.5). The gray shaded area illustrates statistical power to detect associations at different effect sizes and frequencies with current sample sizes. This pattern reflects natural selection: variants with strong detrimental effects are kept rare by purifying selection, while common variants that have persisted must have weak or neutral effects on fitness. The same inverse relationship between frequency and effect size appears across many complex diseases. Source: Andrews, S.J. et al. (2023). The complex genetic architecture of Alzheimer's disease: novel insights and future directions. EBioMedicine 90, 104511. https://doi.org/10.1016/j.ebiom.2023.104511. License: CC BY-NC-ND 4.0.

---

## Summary

**Allele frequency**—the proportion of a variant in a population—is the fundamental unit of population genetics. It's calculated simply (count variant alleles, divide by total alleles), but this single number encodes evolutionary history, functional impact, and disease risk.

### Core Concepts

**Frequency categories** vary by study context, but generally span common (MAF > 5%), low-frequency (1-5%), rare (< 1%), and ultra-rare/private variants. These categories reflect variant age and selection history: common variants are old and survived selection, rare variants are recent and often functional, private variants are brand new and untested by evolution.

**Selection shapes frequency**: The gnomAD dataset revealed that loss-of-function variants are overwhelmingly singletons—direct evidence of purifying selection removing harmful mutations. The inverse relationship between effect size and frequency appears across diseases: variants that strongly affect fitness cannot reach high frequency.

**Population size modulates selection efficiency**: In large populations like humans (Ne ≈ 10,000-50,000), even mildly deleterious variants face selection pressure. But drift still matters—many rare variants persist temporarily before selection removes them or chance makes them disappear.

### Why This Matters

Allele frequency is essential for:
- **Variant interpretation**: Distinguishing pathogenic mutations (rare) from benign polymorphisms (common)
- **Study design**: Powering GWAS (need common variants) versus rare variant studies (need large samples)
- **Understanding disease architecture**: Common variants explain much heritability despite small individual effects

### Looking Ahead

This chapter established *what* allele frequencies are and *why* they vary. But a critical question remains: why do the same variants have different frequencies in different populations? 

The next chapter on **Population Structure** will explore how human history—migration, isolation, admixture—created frequency differences between populations. We'll learn to distinguish genetic ancestry from social categories, interpret PCA plots showing population relationships, and understand why population structure matters for genomic medicine.

Then we'll see how variants don't just vary in frequency—they travel together on chromosomes. **Linkage and Recombination** will explain how physical proximity creates correlations between variants, how recombination breaks these correlations, and how haplotypes—blocks of variants inherited together—record this history.

Finally, we'll learn to work with this data. **VCF format** encodes allele frequencies, genotypes, and annotations in a standardized way, making modern population-scale genomics possible.

Allele frequency is where population genetics begins. Get comfortable with it—you'll see it in every chapter that follows.