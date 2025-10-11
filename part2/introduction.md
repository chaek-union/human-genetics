# Part 2. Mendelian Genetics in Next-Generation Sequencing: From Peas to Patients

## Introduction: From Counting Ratios to Reading Variants

In the 1860s, Gregor Mendel grew pea plants in a monastery garden and noticed something puzzling. When he crossed purple-flowered plants with white-flowered plants, the offspring weren't pale purple—they were all purple. But when he crossed those offspring with each other, white flowers reappeared in a predictable ratio: about 3 purple to 1 white.

Mendel realized that traits don't blend. Instead, they're controlled by discrete **"factors"** that remain distinct as they pass from generation to generation. He couldn't see these factors. He didn't know what they were made of. He couldn't isolate them or measure them directly. But by carefully counting offspring and analyzing patterns, he deduced that these invisible factors must follow specific rules: they **segregate** during reproduction (each parent contributes one), they **assort independently** (different traits are inherited separately), and they come in different versions that can be **dominant** or **recessive**.

Mendel was doing genetics without genes. It would be like a detective solving a crime by studying footprints without ever seeing the person who made them.

For over a century, human genetics remained this way—inferring the existence of disease genes from inheritance patterns in families. Scientists could see that conditions like Huntington's disease ran in families in a dominant pattern, or that cystic fibrosis required two carrier parents, but they couldn't directly identify which gene was responsible or what the mutation was. Finding disease genes required years of linkage studies to narrow down chromosomal regions, followed by tedious candidate gene sequencing using Sanger sequencing, one gene at a time.

Then came **Next-Generation Sequencing (NGS)**. Suddenly, instead of sequencing one gene at a time, researchers could sequence all 20,000 protein-coding genes simultaneously using whole-exome sequencing (WES), or even the entire genome using whole-genome sequencing (WGS). The cost dropped from prohibitively expensive to clinically feasible. The time frame shrank from years to months, then to weeks.

In 2010, a landmark study used WES to identify the gene causing Miller syndrome—a rare recessive disorder—by sequencing just four affected individuals. What would have taken a decade with traditional methods was done in months. Since then, NGS has solved thousands of genetic mysteries, identified countless disease-causing variants, and transformed medical genetics from an academic pursuit into a routine clinical tool.

But here's the remarkable part: the **same patterns** Mendel discovered in pea plants 150 years ago apply perfectly to human disease genes we discover today. A dominant disease gene behaves just like Mendel's purple flower allele—one copy is enough. A recessive disease requires two copies, just like white flowers. The 3:1 ratios Mendel observed in his garden appear in human family studies. The laws haven't changed. We've just moved from observing their effects to observing their causes—from counting offspring phenotypes to reading DNA sequence variants.

---

## What This Chapter Is About

This chapter explores Mendelian inheritance through the lens of modern sequencing technologies. You'll see how the discrete "factors" Mendel described are precisely the DNA sequence variants we detect in NGS data today, and how the patterns he observed emerge directly from how these variants are transmitted and function at the molecular level.

We'll cover seven interconnected topics that, together, explain how modern genetics studies inheritance:

**Genetic Variants**: What are the different types of DNA changes (SNVs, indels, structural variants) that underlie Mendel's "factors"? How do we detect them with sequencing, and how do we distinguish harmless variation from disease-causing mutations using population databases and pathogenicity predictions?

**Transmission**: How are variants inherited from parents, or do they arise spontaneously (de novo)? How can we track inheritance patterns through families using NGS data, and what do Mendel's laws of segregation and assortment look like when we observe them directly in sequence reads?

**Dominant Alleles**: Why does one mutant copy sometimes cause disease while the other normal copy can't compensate? We'll explore three molecular mechanisms—haploinsufficiency (not enough protein), gain-of-function (harmful new activity), and dominant-negative effects (the mutant interferes with the normal protein)—through examples from Kabuki syndrome, autism, seizures, and congenital heart disease.

**Haploinsufficiency**: Why do some genes need both copies working properly? You'll learn about pLI and LOEUF scores—tools that measure how sensitive genes are to loss-of-function mutations based on patterns in large populations—and how natural selection shapes which variants survive.

**Recessive Alleles**: What happens when both copies of a gene are broken? We'll see how consanguinity (marriage between relatives) reveals recessive diseases by increasing autozygosity, and how studying populations with high consanguinity has uncovered hundreds of new disease genes for both rare Mendelian disorders and common complex traits.

**Structural Variations**: What about large-scale DNA rearrangements—deletions, duplications, inversions, translocations—that affect thousands to millions of base pairs? These variants can have dramatic effects but are harder to detect than simple SNVs. We'll explore how they form through different molecular mechanisms and why they're subject to natural selection.

Throughout, you'll see how NGS technologies make it possible to connect Mendel's 19th-century observations with the 21st-century molecular mechanisms that produce them.

---

## From Mendel's Factors to DNA Sequence Variants

Let's make the connection explicit between what Mendel studied and what we study today.

When Mendel crossed purple and white pea plants, he found that:
- The F1 generation was all purple (the dominant phenotype)
- The F2 generation showed a 3:1 ratio (3 purple : 1 white)
- White flowers only appeared when plants inherited two "white factors"

In modern molecular terms, here's what was actually happening:

**Mendel's "factors"** = different alleles of a flower color gene

**The purple allele** might have the sequence ...ATGCGATCG..., producing an enzyme that makes purple pigment

**The white allele** might have ...ATGC**T**ATCG..., where a single base change (G→T) breaks the enzyme

That single-letter difference is what we now call a **variant** or **mutation**. When Mendel observed purple versus white flowers, he was seeing the phenotypic consequence of that G→T variant. When we sequence the gene today, we see the variant directly.

Now consider a human disease example: cystic fibrosis, a recessive disorder. In the most common disease-causing variant:
- The normal allele has the sequence ...ATCATCTTTGGTGTT... 
- The mutant allele is missing three bases: ...ATCATC---GGTGTT...
- This deletion removes one amino acid (ΔF508) from the CFTR protein

When two carrier parents (each with one normal and one mutant allele) have children:
- 25% get two normal alleles (unaffected)
- 50% get one of each (carriers, like the parents)
- 25% get two mutant alleles (affected with cystic fibrosis)

That's Mendel's 3:1 ratio (3 unaffected : 1 affected)—the same pattern he saw with flower color, now explained at the DNA sequence level.

A modern geneticist studying cystic fibrosis would:
1. Sequence the *CFTR* gene in affected individuals and their parents
2. Align the sequences to identify differences from the reference genome
3. Find the ΔF508 deletion (or other disease-causing variants)
4. Confirm that affected individuals have two mutant alleles
5. Validate inheritance patterns in the family

This is fundamentally different from Mendel's approach—we're reading the DNA directly instead of inferring genes from phenotype ratios. But we're studying the same thing: how discrete hereditary factors produce traits and how they're transmitted from parents to offspring. Mendel's laws still apply perfectly. We've just moved from observing their effects to observing their causes.

---

## Why This Matters: From Academic Curiosity to Clinical Impact

For most of the 20th century, identifying disease genes was slow, expensive, and only feasible for common disorders or diseases with very large affected families. Rare diseases—affecting fewer than 1 in 2,000 people—were often genetic mysteries. Families would spend years seeking a diagnosis, undergoing test after test, with no answers.

NGS changed this completely.

Today, a child with developmental delays and unusual features can have their exome sequenced for under $1,000. Within weeks, geneticists can:
- Identify rare variants not present in the parents (de novo mutations)
- Find homozygous variants inherited from carrier parents
- Discover which gene is responsible for the child's condition
- End years of diagnostic odyssey
- Provide genetic counseling for future pregnancies
- Sometimes, guide treatment based on the specific mutation

This has transformed medical genetics from "we think this might be genetic, but we don't know which gene" to "here's the exact variant causing the disease, here's how it was inherited, and here's what we know about prognosis and treatment."

The impact extends beyond rare diseases:

**Cancer genomics**: Sequencing tumors reveals which mutations drive growth, guiding targeted therapies. A patient with lung cancer might have their tumor sequenced to determine whether an EGFR inhibitor would work.

**Pharmacogenomics**: Genetic variants affect how we metabolize drugs. Knowing someone's genotype can help doctors choose the right medication at the right dose, avoiding adverse reactions.

**Carrier screening**: Couples planning a family can be screened for hundreds of recessive disease alleles, identifying risks before pregnancy.

**Complex diseases**: While most common diseases involve many genes plus environment, identifying rare high-impact variants (like BRCA1/2 for breast cancer) allows earlier screening and prevention.

**Population genetics**: Studying genetic variation across populations reveals human evolutionary history, adaptation, and migration patterns.

But this revolution didn't happen in a vacuum. It required:
- The Human Genome Project providing a reference sequence (Chapter 1)
- Next-Generation Sequencing making whole-exome and whole-genome sequencing affordable
- Large population databases (gnomAD, ClinVar) to distinguish disease-causing variants from benign variation
- Computational tools to analyze millions of variants per genome
- New biological insights into how variants cause disease through different molecular mechanisms
- A shift from studying genes one at a time to studying genomes as complete systems

This chapter focuses on how we interpret variants once we have them—understanding which are pathogenic, how they're inherited, and why they cause disease.

---

## How to Approach This Chapter

This chapter differs from traditional genetics textbooks in an important way. Instead of presenting Mendelian genetics as abstract rules to memorize (Aa × Aa = 1 AA : 2 Aa : 1 aa), we show you what those patterns look like in actual sequencing data, and we explain the molecular mechanisms that produce them.

You'll notice several recurring themes:

**1. Patterns at multiple levels**

The same inheritance pattern appears at three levels:
- **Phenotypic**: Mendel's 3:1 ratios in pea plant crosses
- **Genotypic**: The allele combinations we infer from family studies  
- **Molecular**: The actual DNA sequence variants we read from NGS data

Understanding how these levels connect is key to modern genetics.

**2. Molecular mechanisms explain dominance and recessiveness**

Dominance isn't a fundamental property of alleles—it's a consequence of molecular mechanisms. One gene might be dominant due to haploinsufficiency (one copy doesn't make enough protein), while another might be dominant due to a dominant-negative effect (the mutant protein interferes with the normal one). Understanding *why* a variant is dominant or recessive requires understanding what the gene does and how the variant affects its function.

**3. Population data is essential**

A variant found in one patient might be:
- A new disease-causing mutation (if it's rare and in a disease gene)
- A benign polymorphism (if it's common in healthy populations)
- Uncertain (if we don't have enough data)

Tools like pLI scores and population allele frequencies from gnomAD let us distinguish these cases. You can't interpret a variant in isolation—you need population context.

**4. Not all variants are created equal**

A nonsense variant truncating a critical gene is almost certainly pathogenic. A synonymous variant that doesn't change the amino acid sequence is probably benign. A missense variant changing one amino acid? It depends on which gene, which amino acid, how conserved that position is, what the protein does, and whether we've seen that variant before. Interpreting variants requires integrating multiple lines of evidence.

**5. We're still learning**

Even with whole-genome sequencing and massive databases, we can only definitively interpret about 50-60% of variants. Many variants of uncertain significance (VUS) remain. Non-coding variants are particularly challenging. The field is evolving rapidly as we accumulate more data and better understand gene function.

As you read, focus less on memorizing specific examples and more on understanding:
- **What molecular mechanism** causes a variant to be dominant or recessive
- **How inheritance patterns** emerge from variant transmission through families
- **Why some genes** are sensitive to loss of function while others tolerate it
- **How population data** helps interpret individual variants
- **What types of evidence** support calling a variant pathogenic versus benign

---

## The Big Picture: What Makes This Different From Classical Genetics

Before NGS, studying Mendelian genetics meant:
- Observing phenotypes in families and inferring genotypes
- Using linkage analysis to map genes to chromosomal regions
- Sequencing candidate genes one at a time (slow and expensive)
- Focusing on simple disorders with clear inheritance patterns
- Studying highly penetrant variants with obvious effects

After NGS, studying Mendelian genetics means:
- Directly observing genotypes by reading DNA sequences
- Identifying causal variants through sequencing all genes at once
- Distinguishing disease variants from benign variation using population databases
- Studying rare diseases that were previously intractable
- Understanding incomplete penetrance and variable expressivity at the molecular level
- Discovering that "Mendelian" diseases often have more complex genetic architecture than expected

The principles Mendel discovered remain valid—segregation, independent assortment, dominance, and recessiveness are real phenomena. But now we understand them mechanistically. A variant isn't "dominant" as an abstract property—it's dominant because it causes haploinsufficiency, or because it produces a toxic protein, or because it activates a pathway inappropriately. These mechanisms make specific, testable predictions.

Mendel gave us the rules. NGS lets us see the players following those rules in real time, base by base, variant by variant.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. **Explain the connection** between Mendel's "factors" and modern DNA sequence variants, understanding how the same inheritance patterns apply across scales from pea plants to human disease.

2. **Distinguish different types of genetic variants** (SNVs, indels, structural variants) and explain how each is detected and annotated using NGS data and population databases.

3. **Interpret transmission patterns** in family-based sequencing data, recognizing inherited variants, de novo mutations, and how Mendel's laws of segregation and independent assortment manifest in actual sequence reads.

4. **Explain the molecular mechanisms** underlying dominant inheritance, including haploinsufficiency, gain-of-function, and dominant-negative effects, using specific disease examples.

5. **Understand why some genes are haploinsufficient** while others tolerate loss of function, and use pLI and LOEUF scores to assess gene constraint based on population-scale evidence.

6. **Describe how recessive inheritance works** at the molecular level, explain how consanguinity increases autozygosity and reveals recessive alleles, and recognize biallelic patterns in sequencing data.

7. **Explain what structural variants are**, how they differ from small variants, how they form through mechanisms like NAHR and mobile element insertion, and why they're subject to natural selection.

8. **Integrate multiple types of evidence** to assess variant pathogenicity, including allele frequency, gene constraint, predicted functional impact, segregation with disease in families, and experimental validation.

9. **Recognize the limitations** of current approaches, including our incomplete understanding of non-coding variants, challenges with structural variants, and the large number of variants of uncertain significance.

10. **Apply Mendelian principles to real genomic data**, understanding how abstract genetic concepts (dominance, recessiveness, penetrance) emerge from concrete molecular mechanisms that we can observe through sequencing.

---

## A Note on Terminology

As you read this chapter, you'll encounter terms used in ways that might seem interchangeable but have subtle distinctions:

**Allele vs. variant**: "Allele" emphasizes that we're talking about different versions of the same gene (purple allele vs. white allele). "Variant" emphasizes the specific DNA sequence difference. They refer to the same thing from different perspectives.

**Mutation vs. variant**: "Mutation" historically implied something new or harmful, while "variant" is more neutral. Modern usage prefers "variant" for any sequence difference, reserving "mutation" for the process of change or for clearly pathogenic variants.

**Pathogenic vs. benign vs. VUS**: Variants are classified by their clinical impact. "Pathogenic" means disease-causing, "benign" means harmless, "VUS" (variant of uncertain significance) means we don't have enough evidence to decide.

**De novo vs. inherited**: "De novo" variants arose in the egg or sperm that formed the affected individual and weren't present in either parent. "Inherited" variants were passed down from a parent who also carried them.

**Dominant vs. recessive**: These describe inheritance patterns. "Dominant" means one mutant allele causes disease. "Recessive" means two mutant alleles are required. But these are consequences of molecular mechanisms, not inherent properties.

**Haploinsufficiency vs. haplosufficiency**: "Haploinsufficiency" means one functional gene copy isn't enough—losing one copy causes disease. "Haplosufficiency" means one copy is fine—the gene tolerates loss of function.

Don't worry about memorizing all these terms upfront. Their meanings will become clear through examples and context as you read.

---

## Let's Begin

Mendel published his pea plant experiments in 1866. For decades, his work was ignored—most biologists didn't understand its significance. It wasn't until the early 1900s that geneticists rediscovered Mendel's laws and recognized their fundamental importance.

Now, over 150 years later, we're still using those same laws—but with tools Mendel couldn't have imagined. We can read the exact DNA sequences that produce the traits he described. We can watch variants segregate through families in real time. We can predict inheritance patterns by examining parents' genomes before a child is conceived. We can identify disease-causing variants in a matter of weeks instead of years.

But the principles remain the same. Discrete factors. Segregation. Independent assortment. Dominant and recessive traits. Mendel got it right.

He just couldn't see what he was counting.

Now we can.

Let's see how it works.