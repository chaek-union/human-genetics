# Chapter 25. Forward Genetics: From Phenotype to Gene

You've sequenced a patient's genome and found 4 million variants. The patient has a severe developmental disorder. Which variant is responsible?

This is the central challenge of forward genetics: starting from an observable trait or disease and working backward to find the genetic cause. It's detective work—you know something went wrong, but you need to figure out which gene is the culprit.

Forward genetics has been around since Mendel crossed pea plants in the 1860s, but the tools we use today are unrecognizable from those early days. Instead of breeding flies or counting wrinkled peas, we now scan entire genomes across thousands of people, looking for statistical patterns that link specific variants to disease risk.

---

## The evolution of gene hunting

In the early 20th century, geneticists like Thomas Hunt Morgan worked forward from visible traits—like white eyes in fruit flies—to map genes on chromosomes. They didn't know what DNA was, but they could trace inheritance patterns through generations.

By the 1980s and 1990s, human geneticists were using **linkage analysis** to find disease genes in families. If a disease consistently travels with a chromosomal region across multiple generations, that region probably contains the causal gene. This approach identified hundreds of single-gene disorders, including cystic fibrosis (*CFTR*), Huntington's disease (*HTT*), and Duchenne muscular dystrophy (*DMD*).

But linkage analysis has limits. It works well for rare, high-penetrance Mendelian diseases that run in families. It struggles with common diseases like diabetes or schizophrenia, where hundreds of variants each contribute a tiny amount of risk and no single family can reveal the full picture.

```
Timeline of Gene Hunting Approaches
====================================

1860s-1900s: Classical Genetics
Mendel → Morgan → Chromosome mapping
• Method: Cross breeding, pedigree analysis
• Scale: Single families, visible traits
• Output: Inheritance patterns

1980s-1990s: Linkage Analysis
• Method: Track chromosomal regions in families
• Scale: Dozens of families, microsatellite markers
• Output: Chromosomal regions (cM resolution)
• Success: CFTR, HTT, DMD identified

2000s-2010s: GWAS Era
• Method: Genotype millions of SNPs in thousands of people
• Scale: 10K-1M individuals, common variants (>1% frequency)
• Output: Genomic loci (kb resolution)
• Success: 100+ loci per complex trait

2010s-Present: Sequencing Era
• Method: Whole-exome/genome sequencing + burden tests
• Scale: 10K-100K individuals, all variants
• Output: Specific genes and mutations
• Success: Rare variant architecture revealed
```

Enter the genomic era. In the 2000s, microarrays made it possible to genotype hundreds of thousands of variants across the genome in thousands of people simultaneously. This gave birth to **genome-wide association studies (GWAS)**, which revolutionized how we find genes for complex traits. At the same time, next-generation sequencing allowed discovery of ultra-rare variants that only appear in a handful of individuals—leading to the development of **burden tests** that aggregate rare variants within genes.

Today, forward genetics in humans relies on two complementary strategies:

```
Forward Genetics Workflow
=========================

Observable Phenotype (Disease/Trait)
           ↓
    [Choose Strategy]
           ↓
    ┌──────┴──────┐
    ↓             ↓
  GWAS      Burden Tests
    ↓             ↓
Common variants  Rare variants
Small effects   Large effects
    ↓             ↓
    └──────┬──────┘
           ↓
   Candidate Genes
           ↓
   Reverse Genetics
   (Functional Testing)
```

Let's see how each one works.

---

## Genome-wide association studies (GWAS)

GWAS asks a simple question: across many people, are certain genetic variants more common in individuals with a disease compared to those without?

Here's how it works. Imagine you recruit 50,000 people with type 2 diabetes and 50,000 people without diabetes. You genotype about 1 million common SNPs across the genome in each person. Then, for every SNP, you calculate: *Is this variant more frequent in cases than controls?*

```
GWAS Process Flow
=================

Step 1: Recruit cohort
├─ Cases: 50,000 individuals with disease
└─ Controls: 50,000 unaffected individuals

Step 2: Genotype
└─ ~1 million SNPs per person (genome-wide)

Step 3: Test association
└─ For each SNP: frequency in cases vs. controls

Step 4: Statistical testing
├─ Most SNPs: no difference (noise)
└─ Some SNPs: significant enrichment (signal)

Step 5: Multiple testing correction
└─ Genome-wide significance: p < 5×10⁻⁸

Output: List of associated loci
└─ Typically 10-400+ loci per trait
```

Most variants show no difference—they're just random noise. But some variants pop up significantly more often in people with diabetes. Those are your association signals.

GWAS typically identifies dozens to hundreds of genomic regions (called **loci**) associated with a trait. For example, the largest GWAS of type 2 diabetes to date found over 600 risk loci across 1.4 million participants ([Suzuki et al. 2024, Nature](https://www.nature.com/articles/s41586-024-07019-6)). Each individual locus has a tiny effect—maybe increasing disease risk by 5% or 10%—but together they point to biological pathways involved in insulin secretion, glucose metabolism, and pancreatic beta-cell function.

### What GWAS tells you

GWAS results are usually summarized as **summary statistics**: for each variant, you get an effect size (how much it changes disease risk), a p-value (how confident you are it's real), and an allele frequency (how common it is in the population).

```
GWAS Summary Statistics Format
===============================

CHR    POS        SNP          A1  A2   FREQ   BETA    SE      P
-------------------------------------------------------------------
1      12345678   rs123456     T   C    0.35   0.082   0.015   4.2e-08
6      89012345   rs789012     G   A    0.12   0.145   0.023   2.1e-10
10     45678901   rs345678     C   T    0.48   0.063   0.012   1.5e-07

CHR  = Chromosome
POS  = Position (bp)
SNP  = Variant identifier
A1   = Effect allele
A2   = Reference allele
FREQ = Effect allele frequency
BETA = Effect size (log odds ratio)
SE   = Standard error
P    = P-value
```

These summary statistics are incredibly useful beyond the original study:

| Application | Description | Example |
|------------|-------------|---------|
| **Polygenic risk scores (PRS)** | Combine effects of thousands of variants into a single genetic risk estimate | Top 10% of T2D PRS → 3-4× higher risk than median |
| **Genetic correlation** | Compare GWAS across traits to identify shared genetic factors | Schizophrenia and bipolar disorder show strong correlation |
| **Mendelian randomization** | Use variants as natural experiments to test causality | LDL-raising variants → heart disease implies causation |
| **Fine-mapping** | Narrow down causal variants within loci | Identify credible sets of likely causal SNPs |
| **Gene prioritization** | Integrate with eQTL data to identify target genes | Connect GWAS locus to regulated gene |

### What GWAS doesn't tell you

GWAS is powerful for finding *where* genetic risk lies, but it's frustratingly vague about *what* those variants actually do.

| GWAS Limitation | Challenge | Solution Needed |
|----------------|-----------|----------------|
| **Non-coding variants** | 93% of GWAS hits are outside genes | Regulatory annotation, eQTLs, functional screens |
| **Linkage disequilibrium** | Multiple correlated variants—which is causal? | Fine-mapping, statistical genetics |
| **Distant regulation** | Variant may regulate gene 500kb away | Chromatin looping (Hi-C), enhancer mapping |
| **Common variants only** | Misses rare, high-impact mutations | Sequencing + burden tests |
| **Population-specific** | LD structure differs across ancestries | Multi-ancestry GWAS, functional validation |

First, most GWAS hits aren't in genes at all—they're in regulatory regions between genes. A variant might be 500 kilobases away from the nearest gene. Which gene does it regulate? You'll need additional experiments to figure that out.

Second, GWAS only detects **common** variants (usually >1% frequency in the population). If a disease is caused by hundreds of different ultra-rare mutations scattered across a gene, GWAS will miss them entirely.

That's where burden tests come in.

---

## Burden tests: hunting rare variant effects

Many genetic diseases—especially severe developmental disorders or early-onset conditions—are caused by rare or even **de novo** (brand new) mutations. These variants are so uncommon that you might see each one in only a single family, or even a single person.

Here's the problem: if a variant appears in just one individual out of 50,000, you can't do statistics on it. The sample size is literally 1.

The solution? Instead of testing variants one by one, test **genes**. Specifically, ask: *Do individuals with this disease carry more damaging mutations in a particular gene than expected by chance?*

This is called a **burden test**, because you're measuring the total mutational burden within a gene.

### How burden tests work

```
Burden Test Process
===================

Step 1: Sequence cohort
├─ Cases: 10,000 individuals with disease
└─ Controls: 10,000 unaffected individuals

Step 2: Variant calling & filtering
├─ Identify all variants in coding regions
└─ Filter to damaging variants:
    ├─ Loss-of-function (LoF): nonsense, frameshift, splice
    ├─ Missense: predicted damaging (CADD, PolyPhen)
    └─ Filter by frequency: MAF < 0.1%

Step 3: Aggregate by gene
└─ Count carriers per gene (not individual variants)

Step 4: Statistical test
└─ For each gene: cases vs. controls burden

Step 5: Multiple testing correction
└─ Genome-wide significance: p < 2.5×10⁻⁶ (20,000 genes)

Output: Ranked list of intolerant genes
```

Let's say you're studying autism. You sequence the exomes of 10,000 individuals with autism and 10,000 unaffected controls. For every gene, you count how many people carry a loss-of-function (LoF) mutation—nonsense, frameshift, or splice-site variants that knock out the gene.

In most genes, you'll see about the same number of LoF carriers in cases and controls. But in a few genes—like *CHD8*, *SCN2A*, or *SYNGAP1*—you'll see a striking excess in autism cases ([Satterstrom et al. 2020, Cell](https://www.cell.com/cell/fulltext/S0092867419313984)). For example, 30 autism cases might carry a *CHD8* LoF mutation, while only 2 controls do. That imbalance is statistically significant and tells you *CHD8* is an autism risk gene.

Burden tests are especially powerful for:

| Use Case | Description | Why It Works |
|----------|-------------|--------------|
| **De novo mutations** | Brand-new mutations not inherited from parents | Even single occurrences are informative if recurrent across unrelated cases |
| **Ultra-rare variants** | Each mutation unique to one family | Aggregating across gene overcomes individual variant rarity |
| **Recessive diseases** | Requires two hits in same gene | Test for enrichment of compound heterozygotes or homozygotes |
| **Gene intolerance** | Identify genes critical for development | LoF-intolerant genes show depletion in controls (gnomAD pLI) |

### Burden test output

Burden test results are typically presented as a list of genes ranked by statistical significance:

```
Example Burden Test Results (Autism)
====================================

Gene      Cases_LoF  Controls_LoF  Odds_Ratio  P-value      Interpretation
------------------------------------------------------------------------------
CHD8      35         2             18.5        1.2e-25      High-confidence risk gene
SCN2A     28         3             9.8         4.5e-20      High-confidence risk gene
SYNGAP1   22         1             23.1        8.1e-18      High-confidence risk gene
GRIN2B    18         4             4.7         2.3e-10      Moderate-confidence
SHANK3    15         2             7.8         6.7e-09      Moderate-confidence
ADNP      12         1             12.5        3.2e-08      Suggestive

Interpretation thresholds:
• p < 2.5×10⁻⁶: Genome-wide significant (Bonferroni for ~20K genes)
• Odds ratio > 5: Strong effect size
• Cases > 10: Sufficient observations for confidence

Source: Satterstrom et al. 2020, Cell
```

These results tell you which genes are intolerant to mutation and likely play a key role in the disease.

---

## GWAS vs burden tests: two sides of the same coin

GWAS and burden tests aren't competing methods—they're complementary. They detect different types of genetic risk.

| Feature | GWAS | Burden Tests |
|---------|------|--------------|
| **Variant type** | Common (MAF > 1%) | Rare/ultra-rare (MAF < 0.1%) |
| **Effect size** | Small (OR 1.05-1.3) | Large (OR 2-50) |
| **Variant location** | Mostly non-coding (93%) | Mostly coding (exons) |
| **Mechanism** | Gene regulation | Protein disruption |
| **Metaphor** | Volume knob | Light switch |
| **Sample size needed** | 50K-1M people | 5K-50K people |
| **Per-variant power** | Low (must be common) | High (aggregate effect) |
| **Population frequency** | Present in many individuals | Private to few families |
| **Clinical utility** | Polygenic risk scores | Diagnostic testing |

**GWAS** finds common variants that individually have small effects but are shared across many people. These variants tend to sit in regulatory regions and fine-tune gene expression levels. Think of them as turning a volume knob: they don't break the system, but they shift it slightly up or down. Because each variant has a modest effect, you need large sample sizes (tens or hundreds of thousands of people) to detect them reliably.

**Burden tests** find rare variants that individually have large effects but are seen in only a few families. These variants tend to disrupt protein-coding sequences and knock out or severely damage gene function. Think of them as flipping a light switch off: the effect is dramatic, but each variant is unique. Because the effects are big, you can detect them with smaller sample sizes—though you still need thousands of individuals to find enough mutation carriers.

### Example: Schizophrenia genetic architecture

```
Schizophrenia: Integrated Genetic Architecture
==============================================

GWAS Findings (Common Variants)
├─ 287 genome-wide significant loci
├─ Each variant: OR 1.03-1.15 (3-15% risk increase)
├─ Collectively: ~20% of liability variance explained
├─ Location: 95% non-coding (regulatory regions)
└─ Mechanism: Fine-tune gene expression
   Source: Trubetskoy et al. 2022, Nature

Burden Test Findings (Rare Variants)
├─ 10 high-confidence risk genes
├─ Each LoF mutation: OR 3-50 (3-50× risk increase)
├─ Frequency: 0.01-0.1% of cases carry each mutation
├─ Location: Protein-coding exons
└─ Mechanism: Knock out gene function
   Source: Singh et al. 2022, Nature

Key Risk Genes from Burden Tests:
• SETD1A: Histone methyltransferase (chromatin regulation)
• GRIN2A: NMDA receptor subunit (glutamate signaling)
• GRIA3: AMPA receptor subunit (glutamate signaling)
• RB1CC1: Autophagy regulator
• SP4: Transcription factor
• TRIO: Rho guanine nucleotide exchange factor
• CACNA1G: Voltage-gated calcium channel
• CUL1, HERC1: Ubiquitin ligases
• XPO7: Nuclear export protein

Biological Convergence:
Both common and rare variants converge on:
→ Synaptic function (glutamate signaling)
→ Chromatin regulation (gene expression control)
→ Neuronal development pathways
```

Here's a concrete example. In **schizophrenia**, GWAS has identified 287 common risk loci that collectively explain about 20% of the genetic variance in liability ([Trubetskoy et al. 2022, Nature](https://www.nature.com/articles/s41586-022-04434-5)). Most of these variants are in non-coding regions and probably affect gene regulation. But whole-exome sequencing and burden tests have also found that ultra-rare LoF mutations in 10 genes—like *SETD1A* and *GRIN2A*—dramatically increase schizophrenia risk ([Singh et al. 2022, Nature](https://www.nature.com/articles/s41586-022-04556-w)). Each mutation is found in maybe 0.01% of cases, but when you carry one, your risk goes up 3-50 fold.

So the full genetic architecture of schizophrenia includes:

- **Hundreds of common variants** (GWAS), each shifting risk by a few percent
- **Ten rare variant genes** (burden tests), each shifting risk by several hundred percent

Both matter. GWAS tells you which biological pathways are involved at the population level. Burden tests tell you which genes, when severely disrupted, cause or strongly predispose to disease. Together, they give you a comprehensive map of genetic risk.

---

## From association to causation

Forward genetics gets you from phenotype to a list of candidate genes. But association isn't causation. Just because a gene shows up in a GWAS or burden test doesn't mean you understand what it *does* or how it contributes to disease.

```
The Forward → Reverse Genetics Loop
====================================

FORWARD GENETICS                    REVERSE GENETICS
(Discovery)                         (Validation)
                                   
Phenotype                          Manipulate gene
   ↓                                     ↓
GWAS/Burden test                   Measure phenotype
   ↓                                     ↓
Candidate genes    →→→→→→→→        Confirm causation
   ↓                                     ↓
Association signal                 Mechanism
   ↓                                     ↓
"This gene matters"    ←←←←←←      "This is how it works"

Key Questions Answered by Reverse Genetics:
• Is this gene sufficient to cause the phenotype?
• Is this gene necessary for normal function?
• What cellular processes does it affect?
• Can we rescue the phenotype by restoring function?
• Which variants are gain vs. loss of function?
```

That's where the next step comes in: **reverse genetics**—deliberately manipulating those candidate genes to see what happens. We'll cover that in the next chapter, where we'll explore how CRISPR, CRISPRa, base editing, and high-throughput screens let you move from gene lists to functional mechanisms.

For now, remember the key principle of forward genetics: **start with the biology (the phenotype), and let the data lead you to the genes**. It's the foundation of modern human genetics—and the starting point for everything that follows.