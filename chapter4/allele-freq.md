# Allele Frequency

Here's a question that might seem obvious but turns out to be profound: is a genetic variant rare or common?

If you sequence one person's genome and find a variant that's not in the reference sequence, what does that tell you? Not much, actually. Maybe it's a harmless difference that appears in millions of people worldwide. Maybe it's a disease-causing mutation that just arose in this person. Maybe it's somewhere in between. You can't tell from looking at one genome.

Genetic variation is observed in individuals, but its meaning emerges only when viewed within a **population**. When a DNA variant occurs in a single person, it's a private event—we don't know if it's important or just noise. But when it's shared among many individuals, it reflects the combined forces of **mutation, selection, and genetic drift** that have shaped the genetic landscape over thousands of generations.

To describe how common or rare a variant is, geneticists use the concept of **allele frequency**. It's a simple idea—what proportion of all copies of a gene carry this particular variant?—but it turns out to be remarkably powerful. Allele frequency tells us about evolutionary history, disease risk, and population structure all at once.

Recent large-scale genome analyses have given us an unprecedented view of allele frequency. The gnomAD database sequenced **141,456 people** from diverse populations, cataloging hundreds of millions of variants ([Karczewski et al. 2020, Nature](https://www.nature.com/articles/s41586-020-2308-7)). This dataset is large enough to detect variants that appear in only one or two people out of hundreds of thousands. It's revolutionized how we think about genetic variation.

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

Let's expand this with more examples to make the pattern clear.

**Example 1: One heterozygote**. We just did this one. One person has AT, everyone else has AA. That's 1 T allele total, so the frequency is 1 ÷ 282,912 = 0.00035%.

**Example 2: Two heterozygotes and three homozygotes**. Now things get more interesting. Two people are AT (heterozygotes), and three people are TT (homozygotes for the variant). How many T alleles is that?

Each AT person contributes 1 T allele: 2 people × 1 = 2 T alleles.
Each TT person contributes 2 T alleles: 3 people × 2 = 6 T alleles.
Total: 2 + 6 = 8 T alleles.

The frequency is 8 ÷ 282,912 = 0.000028, or about 0.0028%.

**Example 3: Ten homozygotes**. Suppose we find 10 people who are TT. Each contributes 2 T alleles, so that's 10 × 2 = 20 T alleles. The frequency is 20 ÷ 282,912 = 0.000071, or about 0.0071%.

The general formula is simple:

**Allele frequency = (number of variant alleles) ÷ (2 × number of individuals)**

The tricky part is just remembering to count both alleles from homozygotes and one allele from heterozygotes.

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

## Common, Rare, and Private Variants

Geneticists divide variants into categories based on allele frequency. The exact cutoffs vary slightly between studies, but here's the general framework:

**Common variants** have MAF greater than 5%. These variants are shared by many people—if you randomly pick someone off the street, there's a decent chance they carry at least one copy. Common variants are usually old. They've been around for thousands or tens of thousands of years, persisting through many generations. Most common variants are either neutral (they don't affect fitness much) or under weak selection (they have small effects that natural selection can't efficiently act on). Because they're common and old, they're useful for GWAS—you need variants that lots of people carry to have statistical power.

**Low-frequency variants** have MAF between 1% and 5%. These are intermediate—not common enough to show up in everyone, but not so rare that you'd need huge sample sizes to find them. They might be more recent than common variants, or they might be under mild selection that keeps them from becoming common.

**Rare variants** have MAF below 1%. In a dataset of 141,456 people (282,912 alleles), 1% means about 2,829 copies of the allele. That's still a lot of people carrying it, but in the population as a whole, it's rare. Rare variants are often functional—meaning they actually change how a gene works—and many are deleterious (harmful). They're kept rare by purifying selection, which removes harmful mutations over time. Rare variants are harder to study with GWAS because few people carry them, but they often have larger effects on disease risk than common variants.

**Private variants** are even rarer—they're found in just one person or one family. In terms of frequency, they're essentially 0% (technically something like 0.00035% in our example above). These variants are very recent. Many are *de novo*—they arose as new mutations in that individual and weren't inherited from either parent. Private variants haven't been exposed to selection yet. Most will disappear in the next generation, but a few might spread if they happen to be beneficial or just by chance.

The distinction between these categories has become sharper as datasets have grown. Back when geneticists were sequencing hundreds or even a few thousand people, a variant at 1% frequency would only appear in 20 or 40 chromosomes—not enough to tell if it was really common or just looked common because of small sample size. Now, with over 140,000 people sequenced, we can confidently distinguish variants that appear in hundreds of people from those that appear in just one or two.

---

## Allele Frequency and Selection Pressure

Allele frequency isn't just a descriptive statistic—it's a window into evolutionary history. The frequency of a variant tells you something about how natural selection has acted on it.

Think of natural selection as a filter. Beneficial mutations pass through easily and spread. Neutral mutations drift through randomly—some make it, some don't. Harmful mutations get caught and removed. The frequency of a variant reflects which of these processes has been dominant.

**Common variants are usually neutral or weakly selected.** If a variant is common, it means it's been around for a long time without being removed by selection. Either it has no effect on fitness, or its effect is so small that selection can't efficiently act on it. For example, many common SNPs in intergenic regions (between genes) don't do anything—they're just neutral markers of human genetic diversity.

**Rare variants are often deleterious.** Here's the key insight from the gnomAD data: when Karczewski and colleagues looked at loss-of-function variants—mutations that completely break a gene by introducing a premature stop codon or disrupting splicing—they found that most were **singletons**. That means each variant appeared in only one person out of 141,456. 

Why? Because these variants are harmful. When you break an important gene, it often reduces fitness—maybe you get sick more easily, or your development is slightly disrupted, or your reproduction is less successful. Over generations, natural selection removes these variants from the population. They arise through mutation, but they don't stick around long. The few that do persist at low frequency are either in genes that aren't very important, or they're in heterozygotes where the normal copy compensates.

This creates a striking pattern: the more severe a variant's functional impact, the rarer it tends to be. Synonymous variants (which don't change the amino acid) are often common. Missense variants (which change one amino acid) have intermediate frequencies. Nonsense variants (which truncate the protein) are almost always rare.

**Private variants haven't been filtered yet.** When a variant is brand new—whether it arose *de novo* in a person or it's only a few generations old—it hasn't been exposed to much selection. Its frequency is determined more by chance than by fitness effects. Most new mutations are neutral or mildly deleterious, and most will be lost in the next few generations just by random chance. But occasionally, a new mutation provides an advantage, and it might sweep through the population over many generations. Or a neutral mutation might drift to moderate frequency just by luck.

The **allele age**—how long the variant has been in the population—is very short for private variants. It might be one generation (de novo) or a few generations (inherited from a parent who got it from their parent). Old variants have been through the selection filter many times. Young variants are still being evaluated.

---

## Population Size and the Fate of Variants

The fate of a new variant depends on two things: how much it affects fitness (the **selection coefficient**, s) and the **effective population size** (Ne).

Let's start with selection coefficient. If a variant increases fitness by 1%, we say s = 0.01. If it decreases fitness by 1%, s = -0.01. If it has no effect, s = 0.

Now here's the key: **selection is only effective when s is larger than 1/Ne**. If your selection coefficient is smaller than this threshold, the variant behaves like it's neutral—its fate is determined by random chance (genetic drift) rather than by selection.

Think about what this means. In a **large population**, Ne is big, so 1/Ne is small. That means even tiny fitness effects (small s) can be acted on by selection. Natural selection is efficient. Harmful alleles get removed quickly. Beneficial alleles spread predictably.

In a **small population**, Ne is small, so 1/Ne is large. Now you need a bigger fitness effect before selection can overcome drift. Variants with small s—whether slightly beneficial or slightly harmful—behave neutrally. They might increase in frequency by chance or disappear by chance, regardless of their fitness effects.

Human populations are moderately large (effective size around 10,000 to 50,000, depending on ancestry), so selection can act on variants with effect sizes down to about 0.01% or 0.001%. But that still means many mildly deleterious variants can persist at low frequency just by drifting around.

This explains a pattern in the gnomAD data: loss-of-function variants are overwhelmingly rare, but they're not completely absent. Even harmful mutations persist at low frequency because they keep arising through mutation, and in a finite population, it takes time for selection to purge them. Some stick around for a few generations before disappearing. A few get lucky and drift to higher frequency before selection catches up.

Populations with large effective size tend to have lower frequencies of deleterious variants overall. More efficient selection means fewer harmful alleles slip through. This is one reason why studying large, outbred populations (like the diverse gnomAD cohort) gives us a clearer picture of which variants are truly neutral versus under selection.

---

## Putting It All Together

Let's recap what allele frequency tells us.

**Allele frequency** is the proportion of a specific allele in a population. It's calculated by counting variant alleles and dividing by the total number of alleles (2 × number of people). It's a simple concept, but it encodes a wealth of information.

**Minor allele frequency (MAF)** is the frequency of the less common allele at a locus. It's a key metric in population genetics and GWAS. We use it to categorize variants and design studies.

**Common variants** (MAF > 5%) are usually old and neutral or weakly selected. They've persisted for many generations because they don't harm fitness much. They're useful for GWAS because lots of people carry them.

**Rare variants** (MAF < 1%) are often functional and deleterious. They're kept rare by purifying selection. Many are recent, arising in the last few hundred or thousand years. They often have larger effects on disease but are harder to study.

**Private variants** are found in one person or family. They're very recent—often *de novo*. They haven't been exposed to much selection yet. Most will disappear quickly, but a few might persist or spread.

**Selection pressure** shapes allele frequency. Harmful variants are removed and stay rare. Neutral variants drift and can become common. Beneficial variants (rare in humans) can sweep to high frequency. The frequency of a variant tells you about its evolutionary fate.

**Population size** determines how efficiently selection works. In large populations, even small fitness effects matter. In small populations, drift dominates, and mildly deleterious variants can persist by chance.

Understanding allele frequency is foundational for everything that follows in this chapter. When we talk about population structure, we're really asking: do allele frequencies differ between populations? When we talk about linkage, we're asking: do certain alleles at different loci occur together more often than expected by their frequencies? When we talk about association studies, we're testing: does allele frequency differ between cases and controls?

Allele frequency is the basic unit of population genetics. Get comfortable with it, because you'll see it everywhere.