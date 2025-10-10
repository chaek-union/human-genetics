# Forward Genetics: From Phenotype to Gene

You've sequenced a patient's genome and found 4 million variants. The patient has a severe developmental disorder. Which variant is responsible?

This is the central challenge of forward genetics: starting from an observable trait or disease and working backward to find the genetic cause. It's detective work—you know something went wrong, but you need to figure out which gene is the culprit.

Forward genetics has been around since Mendel crossed pea plants in the 1860s, but the tools we use today are unrecognizable from those early days. Instead of breeding flies or counting wrinkled peas, we now scan entire genomes across thousands of people, looking for statistical patterns that link specific variants to disease risk.

---

## The evolution of gene hunting

In the early 20th century, geneticists like Thomas Hunt Morgan worked forward from visible traits—like white eyes in fruit flies—to map genes on chromosomes. They didn't know what DNA was, but they could trace inheritance patterns through generations.

By the 1980s and 1990s, human geneticists were using **linkage analysis** to find disease genes in families. If a disease consistently travels with a chromosomal region across multiple generations, that region probably contains the causal gene. This approach identified hundreds of single-gene disorders, including cystic fibrosis (CFTR), Huntington's disease (HTT), and Duchenne muscular dystrophy (DMD).

But linkage analysis has limits. It works well for rare, high-penetrance Mendelian diseases that run in families. It struggles with common diseases like diabetes or schizophrenia, where hundreds of variants each contribute a tiny amount of risk and no single family can reveal the full picture.

Enter the genomic era. In the 2000s, microarrays made it possible to genotype hundreds of thousands of variants across the genome in thousands of people simultaneously. This gave birth to **genome-wide association studies (GWAS)**, which revolutionized how we find genes for complex traits. At the same time, next-generation sequencing allowed researchers to discover ultra-rare variants that only appear in a handful of individuals—leading to the development of **burden tests** that aggregate rare variants within genes.

Today, forward genetics in humans relies on two complementary strategies:

1. **GWAS** for common variants with small effects
2. **Burden tests** for rare variants with larger effects

Let's see how each one works.

---

## Genome-wide association studies (GWAS)

GWAS asks a simple question: across many people, are certain genetic variants more common in individuals with a disease compared to those without?

Here's how it works. Imagine you recruit 50,000 people with type 2 diabetes and 50,000 people without diabetes. You genotype about 1 million common SNPs across the genome in each person. Then, for every SNP, you calculate: *Is this variant more frequent in cases than controls?*

Most variants show no difference—they're just random noise. But some variants pop up significantly more often in people with diabetes. Those are your association signals.

GWAS typically identifies dozens to hundreds of genomic regions (called **loci**) associated with a trait. For example, the largest GWAS of type 2 diabetes to date found over 400 risk loci. Each individual locus has a tiny effect—maybe increasing disease risk by 5% or 10%—but together they point to biological pathways involved in insulin secretion, glucose metabolism, and pancreatic beta-cell function.

### What GWAS tells you

GWAS results are usually summarized as **summary statistics**: for each variant, you get an effect size (how much it changes disease risk), a p-value (how confident you are it's real), and an allele frequency (how common it is in the population).

These summary statistics are incredibly useful beyond the original study:

- **Polygenic risk scores (PRS)**: You can combine the effects of thousands of variants into a single number that estimates an individual's genetic risk. For instance, someone in the top 10% of a type 2 diabetes PRS has about 3-4 times higher risk than someone in the middle.

- **Genetic correlation**: You can compare GWAS results from different traits to see if they share genetic risk factors. For example, schizophrenia and bipolar disorder show strong genetic correlation, suggesting overlapping biology.

- **Mendelian randomization**: You can use genetic variants as natural experiments to test causality. If a variant raises LDL cholesterol and also raises heart disease risk, that suggests high cholesterol *causes* heart disease, not just correlates with it.

### What GWAS doesn't tell you

GWAS is powerful for finding *where* genetic risk lies, but it's frustratingly vague about *what* those variants actually do.

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

Let's say you're studying autism. You sequence the exomes of 10,000 individuals with autism and 10,000 unaffected controls. For every gene, you count how many people carry a loss-of-function (LoF) mutation—nonsense, frameshift, or splice-site variants that knock out the gene.

In most genes, you'll see about the same number of LoF carriers in cases and controls. But in a few genes—like *CHD8*, *SCN2A*, or *SYNGAP1*—you'll see a striking excess in autism cases. For example, 30 autism cases might carry a *CHD8* LoF mutation, while only 2 controls do. That imbalance is statistically significant and tells you *CHD8* is an autism risk gene.

Burden tests are especially powerful for:

- **De novo mutations**: In trio sequencing (child + both parents), you can identify brand-new mutations that weren't inherited. If dozens of autism cases carry de novo LoF mutations in the same gene, that gene is almost certainly causal.

- **Ultra-rare variants**: Even if each mutation is unique, burden tests can detect a gene-level signal by aggregating across all rare damaging variants.

- **Recessive diseases**: If a gene requires biallelic mutations to cause disease, you can test whether cases are enriched for individuals carrying two hits in the same gene.

### Burden test output

Burden test results are typically presented as a list of genes ranked by statistical significance. You might see:

- *CHD8*: 35 LoF mutations in cases, 2 in controls, p = 1.2 × 10⁻²⁵
- *SCN2A*: 28 LoF mutations in cases, 3 in controls, p = 4.5 × 10⁻²⁰

These results tell you which genes are intolerant to mutation and likely play a key role in the disease.

---

## GWAS vs burden tests: two sides of the same coin

GWAS and burden tests aren't competing methods—they're complementary. They detect different types of genetic risk.

**GWAS** finds common variants that individually have small effects but are shared across many people. These variants tend to sit in regulatory regions and fine-tune gene expression levels. Think of them as turning a volume knob: they don't break the system, but they shift it slightly up or down. Because each variant has a modest effect, you need large sample sizes (tens or hundreds of thousands of people) to detect them reliably.

**Burden tests** find rare variants that individually have large effects but are seen in only a few families. These variants tend to disrupt protein-coding sequences and knock out or severely damage gene function. Think of them as flipping a light switch off: the effect is dramatic, but each variant is unique. Because the effects are big, you can detect them with smaller sample sizes—though you still need thousands of individuals to find enough mutation carriers.

Here's a concrete example. In **schizophrenia**, GWAS has identified over 270 common risk loci that collectively explain about 20% of the genetic variance in liability. Most of these variants are in non-coding regions and probably affect gene regulation. But whole-exome sequencing and burden tests have also found that ultra-rare LoF mutations in about 10 genes—like *SETD1A* and *GRIN2A*—dramatically increase schizophrenia risk. Each mutation is found in maybe 0.01% of cases, but when you carry one, your risk goes up 5-20 fold.

So the full genetic architecture of schizophrenia includes:

- **Hundreds of common variants** (GWAS), each shifting risk by a few percent
- **Dozens of rare variants** (burden tests), each shifting risk by several hundred percent

Both matter. GWAS tells you which biological pathways are involved at the population level. Burden tests tell you which genes, when severely disrupted, cause or strongly predispose to disease. Together, they give you a comprehensive map of genetic risk.

---

## From association to causation

Forward genetics gets you from phenotype to a list of candidate genes. But association isn't causation. Just because a gene shows up in a GWAS or burden test doesn't mean you understand what it *does* or how it contributes to disease.

That's where the next step comes in: **reverse genetics**—deliberately manipulating those candidate genes to see what happens. We'll cover that in the next chapter, where we'll explore how CRISPR, CRISPRa, base editing, and high-throughput screens let you move from gene lists to functional mechanisms.

For now, remember the key principle of forward genetics: **start with the biology (the phenotype), and let the data lead you to the genes**. It's the foundation of modern human genetics—and the starting point for everything that follows.