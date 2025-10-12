# Part 5. From Variant to System: Experimental Genetics and Gene Regulation

## When Finding the Gene Wasn't Enough

In 1989, Francis Collins and Lap-Chee Tsui identified the gene responsible for cystic fibrosis—*CFTR*—after four years of painstaking work. The discovery made headlines worldwide. Families celebrated. Researchers declared it a breakthrough.

But then came the hard part.

Knowing that *CFTR* mutations caused cystic fibrosis didn't explain *how*. What did the CFTR protein actually do? Why did losing it fill lungs with mucus? Could you fix the disease by restoring the protein? And which of the 2,000+ different *CFTR* mutations could be treated the same way?

These questions required a completely different toolkit. Not sequencing or statistics, but **experimental manipulation**: knocking out genes in cells, measuring what changed, testing whether restoring function rescued the disease. It took another decade of reverse genetics—creating cell lines and mouse models with precise *CFTR* mutations—before researchers understood that CFTR was a chloride channel, that its loss disrupted ion transport, and that different mutations affected protein folding, trafficking, or function in distinct ways.

This pattern repeats across genetics. GWAS finds hundreds of type 2 diabetes loci—but which genes at each locus actually matter? Burden tests implicate loss-of-function mutations in *SCN2A* in epilepsy—but can you treat it by boosting the remaining gene copy? Variant discovery is just the beginning. Understanding mechanism requires **moving from variant to system**.

Then in 2024, Lenk and colleagues used CRISPR activation to treat *SCN2A* haploinsufficiency in mice—not by fixing the mutation, but by increasing expression of the normal copy. Neurons fired properly again. Seizures decreased. The approach worked because they understood not just which gene was broken, but *how* gene regulation could be manipulated to restore normal function.

This chapter lives at the intersection of discovery and mechanism: how we find disease genes, how we test their function experimentally, how gene regulation controls which genes are active, and how genetic variants affect molecular traits.

---

## What This Chapter Is About

This chapter explores the complete path from genetic association to biological mechanism, integrating experimental manipulation with molecular measurement.

### Five Interconnected Topics

**1. Forward Genetics: Phenotype to Gene**  
How do we find disease genes in human populations? You'll learn how GWAS tests millions of common variants across huge cohorts, how burden tests aggregate rare variants to find genes where loss-of-function causes disease, and why association isn't causation—understanding the crucial difference between finding a locus and identifying the causal gene.

**2. Reverse Genetics: Gene to Function**  
How do we test what genes actually do? We'll explore the experimental toolkit: CRISPR-based editing, knockouts, overexpression, and high-throughput screens. You'll learn how to design functional experiments, interpret phenotypic rescue, and understand why reverse genetics provides the causality that association studies can't.

**3. CRISPRa Therapy for *SCN2A* Haploinsufficiency**  
How does this work in practice? Using *SCN2A* epilepsy as a case study, you'll see how researchers moved from identifying loss-of-function mutations to developing CRISPR activation therapy. We'll trace the complete pipeline: genetic discovery → functional validation → mechanism → therapeutic strategy → preclinical testing.

**4. Gene Regulation: The Control Layer**  
How do cells decide which genes to express? You'll learn how promoters initiate transcription, how enhancers control it from a distance (sometimes megabases away), and how 3D chromatin looping brings regulatory elements together. We'll cover the key technologies—RNA-seq, ChIP-seq, ATAC-seq, Hi-C—that map the regulatory landscape and reveal where most disease variants actually act.

**5. QTLs: Connecting Genotype to Molecular Phenotype**  
How do genetic variants affect gene expression and protein levels? We'll explore expression QTLs (eQTLs) connecting variants to RNA abundance, protein QTLs (pQTLs) connecting variants to protein levels, and how integrating QTL data with GWAS identifies causal genes and mechanisms. You'll see how the same variant can affect multiple genes in different tissues, and why this matters for disease.

---

## What Makes This Different

| Discovery (Parts 1-4) | Mechanism (Part 5) |
|----------------------|-------------------|
| Where is the disease gene? | What does the gene do? |
| Statistical association | Experimental causation |
| GWAS p-values and odds ratios | Knockout phenotypes and rescue experiments |
| Population-level patterns | Cellular and molecular mechanisms |
| Finding candidate genes | Testing candidate genes |
| Variants affect disease risk | Understanding *how* variants affect biology |

**The shift**: From identifying genetic associations to understanding biological mechanisms. From knowing *that* a variant matters to knowing *how* it works and *what* we can do about it.

---

## How to Approach This Chapter

### Think in Complementary Directions

**Forward genetics** (phenotype → gene) and **reverse genetics** (gene → phenotype) aren't competing approaches—they're two halves of the discovery loop. GWAS finds candidates. Knockouts test them. QTLs connect them to molecular changes. Each method has blind spots that the others cover.

### Connect Association to Mechanism

Every genetic association has a mechanistic explanation:
- A GWAS locus contains the causal gene (find it with fine-mapping and QTLs)
- The variant affects gene regulation (measure it with eQTLs and ATAC-seq)
- Changed expression alters cellular function (test it with CRISPR)
- Altered function causes disease (validate it with rescue experiments)

Never stop at association. Always ask: what's the mechanism?

### Master the Experimental Logic

Understanding reverse genetics means thinking about controls:
- Knockout shows the gene is necessary
- Overexpression shows it's sufficient
- Rescue proves causality
- Dose-response reveals quantitative relationships

Every experiment answers a specific question. Know which question you're asking.

### Integrate Data Types

Modern genetics combines multiple layers:
- **Genetic**: Which variants associate with disease?
- **Transcriptomic**: How do variants affect RNA levels?
- **Proteomic**: How do RNA changes translate to protein?
- **Functional**: What happens in cells when you manipulate the gene?
- **Organismal**: Does the cellular phenotype cause disease?

Integration across these layers reveals mechanism.

---

## Why This Matters

Modern genomics requires understanding:

**Clinical interpretation**: Finding a *de novo* loss-of-function mutation isn't enough. You need to know whether the gene is dosage-sensitive, whether the protein has essential domains, whether model organisms show relevant phenotypes. Functional evidence determines pathogenicity.

**Drug development**: Most genetic associations don't lead to drugs because we don't understand mechanism well enough. The exceptions—PCSK9 inhibitors for cholesterol, SGLT2 inhibitors for diabetes—came from deep mechanistic work showing that reducing gene function *treats* disease.

**Precision medicine**: Two patients with *CFTR* mutations might need different therapies depending on whether the mutation affects protein folding (treat with correctors) or channel function (treat with potentiators). Mechanism determines treatment.

**Therapeutic strategies**: When you find disease genes, you can: restore function (gene therapy), reduce toxic gain-of-function (antisense oligonucleotides), modulate expression (CRISPRa/i), or target downstream pathways (small molecules). Each strategy requires understanding mechanism.

**Gene regulation**: Most disease variants don't change protein sequence—they affect *when* and *where* genes are expressed. Understanding enhancers, promoters, and chromatin is essential for interpreting non-coding variants, which constitute 93% of GWAS hits.

---

## Learning Objectives

By the end of this chapter, you should be able to:

1. **Distinguish forward and reverse genetics**, explaining when each approach is needed and how they complement each other in the discovery process

2. **Interpret GWAS and burden test results**, understanding what association means, what it doesn't mean, and why fine-mapping and functional studies are essential

3. **Design reverse genetics experiments** using CRISPR, explaining the logic of knockout, activation, and rescue experiments

4. **Explain the CRISPRa strategy** for treating haploinsufficiency, distinguishing it from gene therapy and describing when dosage restoration is appropriate

5. **Describe gene regulation mechanisms**, distinguishing promoters from enhancers, and explaining how 3D chromatin structure brings distant elements together

6. **Interpret regulatory genomics data** from RNA-seq, ChIP-seq, and ATAC-seq experiments

7. **Explain QTL analysis**, distinguishing eQTLs from pQTLs, and describing how QTL integration with GWAS identifies causal genes

8. **Connect variants to mechanisms** by integrating genetic association, gene regulation, and functional data

---

## What Makes This Different from Classic Genetics

| Classic Gene Discovery | Modern Mechanistic Genetics |
|----------------------|---------------------------|
| One gene causes disease | Networks of genes contribute |
| Code for protein | Mostly regulate other genes |
| Mutation disrupts protein function | Variant changes expression timing/location |
| Study one gene at a time | Screen thousands simultaneously |
| Test in model organisms | Validate in human cells and organoids |
| Years to make a knockout mouse | Days to edit cells with CRISPR |

**The transformation**: Speed, scale, and sophistication have exploded. Technologies that took decades now take days. But the logic remains: perturb the system, measure what changes, infer mechanism.

---

## Let's Begin

Collins and Tsui spent four years finding *CFTR*. Today you can run GWAS on 500,000 people in hours, identify hundreds of loci, and use QTL databases to nominate causal genes at each locus. Then you can order CRISPR reagents online, knock out the gene in patient-derived cells, measure transcriptome-wide changes, and test rescue with small molecules—all in weeks.

The scale is unimaginable compared to 1989.

But you're asking the same fundamental question: how do genes cause disease, and what can we do about it?

In Parts 1-3, you learned how to find variants and understand their effects. In Part 4, you learned how variants are organized and distributed. Now you'll learn how to move from genetic discovery to biological understanding—how to test mechanism, manipulate regulation, and translate findings into potential therapies.

The tools have changed from chromosomes to CRISPR, from pedigrees to QTLs, from candidate genes to genome-wide screens.

But the goal remains: understand how genetic variation shapes biology, and use that understanding to treat disease.

Let's see how modern experimental genetics bridges the gap between finding variants and understanding systems.