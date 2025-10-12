# Part 2. Mendelian Genetics in Next-Generation Sequencing: From Peas to Patients

## Introduction: The Same Laws, New Tools

In Part 1, you learned how the Human Genome Project and Next-Generation Sequencing made it possible to read entire genomes—transforming genetics from an observational science into a data science. We can now directly see the DNA sequences that Mendel could only infer from breeding patterns.

But having sequencing data raises new questions: **Which variants cause disease? How are they inherited? Why does one mutant copy sometimes cause disease while two copies are needed for others?**

This chapter explores how Mendel's 150-year-old principles apply to modern genomic data. The laws of segregation and independent assortment still govern inheritance, but now we observe them at the molecular level—tracking specific DNA variants through families, understanding *why* alleles are dominant or recessive based on protein function, and predicting pathogenicity from population data.

The shift is profound: Mendel saw 3:1 ratios in flower colors and *inferred* invisible factors. We sequence families, see the exact DNA variants, and watch them segregate according to Mendel's laws—validating his insights while revealing the molecular mechanisms he couldn't observe.

---

## What This Chapter Is About

This chapter has seven interconnected sections that explain how we interpret variants in the NGS era:

### 1. Genetic Variants
What types of DNA changes exist (SNVs, indels, structural variants)? How do we distinguish disease-causing mutations from the millions of benign differences using databases like gnomAD and ClinVar? What tools predict pathogenicity when variants are novel?

### 2. Transmission Through Families
How do we track variants from parents to children in sequencing data? What do Mendel's laws look like when observed directly in sequence reads? How do we identify de novo mutations that weren't inherited from either parent?

### 3. Dominant Inheritance: Molecular Mechanisms
Why does one mutant copy cause disease in some cases? We'll explore three mechanisms through clinical examples:
- **Haploinsufficiency**: One gene copy doesn't produce enough protein (Kabuki syndrome)
- **Gain-of-function**: The mutant does something harmful (autism, seizures)
- **Dominant-negative**: The mutant interferes with the normal protein (heart disease)

### 4. Haploinsufficiency and Gene Constraint
Why are some genes sensitive to losing one copy while others tolerate it? How do pLI and LOEUF scores measure constraint using population-scale data? Why does natural selection eliminate loss-of-function variants in critical genes?

### 5. Recessive Inheritance and Consanguinity
What happens when both gene copies are disrupted? How does marriage between relatives increase autozygosity, revealing recessive alleles? How has studying consanguineous populations accelerated disease gene discovery?

### 6. Structural Variations
What about large DNA rearrangements—deletions of entire genes, duplications causing dosage imbalance, inversions disrupting gene function? How do they form and why are they harder to detect than SNVs?

### 7. Integration: From Variant to Diagnosis
How do we combine all these concepts—variant type, inheritance pattern, gene constraint, population frequency, functional prediction—to determine whether a variant explains a patient's disease?

---

## From Abstract Rules to Molecular Reality

Consider cystic fibrosis, a recessive disorder. The traditional genetic view:
- Two carrier parents (Aa × Aa) 
- 25% unaffected (AA), 50% carriers (Aa), 25% affected (aa)
- Classic 3:1 ratio (Mendel's law)

The NGS molecular view:
- Sequence the *CFTR* gene in patient and parents
- Find the ΔF508 deletion (3-bp loss) in the patient's reads: homozygous mutant
- Parents' reads show: heterozygous (one normal, one deletion allele)
- Mechanism: ΔF508 removes one amino acid, causing protein misfolding
- Confirmation: Both alleles must be disrupted for disease (recessive)

This is the same inheritance pattern Mendel described, but now we see:
- The exact molecular lesion (3-bp deletion)
- Why it's recessive (protein needs both copies functional)
- How it was transmitted (one allele from each parent)
- The sequence reads proving the genotypes

**This chapter focuses on interpretation**: once you have variant calls from NGS data, how do you determine which variants matter and why they cause disease?

---

## How to Approach This Chapter

### Focus on Mechanisms, Not Memorization

Don't memorize that "KMT2D causes Kabuki syndrome." Instead, understand:
- *Why* it's dominant (haploinsufficiency)
- *How* we know (pLI = 1.0, de novo variants in patients)
- *What* this predicts (loss-of-function variants are pathogenic)

### Connect Multiple Evidence Types

Interpreting variants requires integrating:
- **Frequency**: Rare in gnomAD? (Yes → possibly pathogenic)
- **Gene constraint**: High pLI? (Yes → intolerant to loss-of-function)
- **Inheritance**: De novo in affected child? (Yes → strong evidence)
- **Function**: Predicted damaging? (Yes → CADD >30, REVEL >0.5)
- **Clinical match**: Phenotype fits known gene function? (Yes → diagnosis likely)

No single piece of evidence is sufficient. Pathogenicity is a weight-of-evidence determination.

### Recognize What We Don't Know

- ~40-50% of variants remain uncertain significance (VUS)
- Non-coding variants are challenging to interpret
- Incomplete penetrance isn't fully understood
- Novel mechanisms continue to be discovered

The field is evolving rapidly. What's uncertain today may be resolved tomorrow as databases grow.

---

## What Makes This Different From Classical Genetics

| Classical Approach | NGS-Era Approach |
|-------------------|------------------|
| Observe phenotype ratios in crosses | Read actual DNA sequences in families |
| Infer genotypes from breeding patterns | Directly see genotypes in sequence data |
| Map genes to chromosomes via linkage | Identify causal variants in all genes simultaneously |
| "This gene is dominant" (observed) | "This variant causes haploinsufficiency" (mechanistic) |
| Study common Mendelian diseases | Solve rare diseases, understand complex traits |
| Years per gene | Weeks for all genes |

Mendel's laws remain valid—we've just moved from observing their effects to understanding their molecular basis.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. **Classify genetic variants** by type (SNV, indel, structural variant) and explain detection/annotation approaches for each

2. **Trace variant transmission** through families using NGS data, identifying inherited vs. de novo patterns

3. **Explain three dominant mechanisms** (haploinsufficiency, gain-of-function, dominant-negative) with disease examples and predict pathogenicity based on mechanism

4. **Interpret gene constraint metrics** (pLI, LOEUF) and understand how natural selection shapes allele frequencies

5. **Recognize recessive inheritance patterns** in sequencing data, explain how consanguinity reveals recessive alleles, and understand biallelic requirements

6. **Describe structural variant mechanisms** (NAHR, mobile elements) and explain their phenotypic impacts

7. **Integrate evidence** (frequency, constraint, inheritance, function, phenotype) to assess variant pathogenicity

8. **Apply Mendelian principles to genomic data**, connecting abstract genetic rules to concrete molecular observations

---

## Let's Begin

Part 1 showed you how to read genomes. Part 2 shows you how to interpret them—how to look at millions of variants and determine which ones explain disease, how they were inherited, and why they have the effects they do.

Mendel discovered the rules by counting pea plants. We validate those same rules by reading DNA sequences. The principles haven't changed. The resolution has.

Let's see how Mendel's laws manifest in modern genomic data.