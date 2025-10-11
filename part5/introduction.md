# Part 5. From Variant to System

We've come a long way. In the first four chapters, you learned how to find genetic variants—starting from the Human Genome Project and the rise of next-generation sequencing, moving through Mendelian inheritance patterns, exploring common variants and their population-level effects, and understanding how recombination and linkage shape the genome. These tools have given us an incredible catalog: millions of variants, thousands of disease-associated loci, and hundreds of candidate genes.

But here's the problem: **finding a variant is just the beginning**.

Imagine you've done a whole-exome sequencing study on a child with severe developmental delay. You find a de novo loss-of-function mutation in a gene called *SCN2A*. Or maybe you've run a GWAS on 100,000 people with type 2 diabetes and discovered 400 risk loci scattered across the genome. You have the variants. You have statistical significance. You might even have a compelling biological story.

But do you really understand what's happening?

- Which gene at each GWAS locus is actually causal?
- Does the variant affect RNA levels, protein levels, or something else entirely?
- What happens inside a cell when you knock out *SCN2A*?
- Can you restore normal function by boosting expression of the remaining copy?
- How does a single nucleotide change in an enhancer alter the expression of a gene 500 kilobases away?

These are the questions that separate genetic discovery from biological understanding. And answering them requires a completely different set of tools—not just sequencing and statistics, but **experimental manipulation, molecular measurements, and systems-level integration**.

This chapter is about closing that gap. It's about moving from **variant to system**—from knowing *where* genetic risk lies to understanding *how* it works and *what* we can do about it.

---

## Two paths, one goal

The journey from variant to mechanism involves two complementary approaches that have shaped genetics for over a century.

**Forward genetics** starts with a phenotype—a disease, a trait, an observable difference—and works backward to find the responsible gene. This is the classic approach: Mendel didn't know about DNA, but he could see wrinkled peas and infer that something heritable controlled the trait. In humans, forward genetics now operates at massive scale through GWAS and burden tests, scanning millions of people to connect variants to outcomes.

**Reverse genetics** flips the logic. You start with a known gene or variant and deliberately manipulate it to see what happens. Knock it out. Overexpress it. Edit a specific nucleotide. Then measure the consequences—at the cellular level, the organism level, or anywhere in between. Reverse genetics is how we prove causality and figure out mechanism.

These aren't competing strategies—they're two halves of the same process. Forward genetics generates hypotheses. Reverse genetics tests them. Together, they form a discovery loop:

> **Phenotype → Variant → Gene → Function → Mechanism → Therapy**

And in 2025, we have tools for every step of that loop.

---

## What this chapter covers

We'll walk through the full pipeline, from identifying genetic associations to understanding how they shape biology.

### Forward genetics: from phenotype to gene

We'll start by revisiting how modern forward genetics works—not in flies or yeast, but in human populations. You'll see how GWAS detects common variants with small effects by testing millions of people, and how burden tests aggregate rare variants to find genes where loss-of-function mutations drive disease. These methods have transformed our ability to map genetic risk, but they come with a catch: association isn't causation. A GWAS hit might point to 10 genes in a locus. Which one matters? That's where the next step comes in.

### Reverse genetics: from gene to function

Once you have a candidate gene, you need to test it. Does knocking it out cause the phenotype you're studying? Does activating it rescue the defect? We'll cover the toolkit of reverse genetics—from classic approaches like knock-outs and overexpression to modern CRISPR-based systems that can edit DNA, regulate transcription, or even target RNA. You'll learn about high-throughput screens that test thousands of genes simultaneously, and about functional rescue experiments that prove causality by restoring normal function.

### CRISPRa therapy for *SCN2A* haploinsufficiency

Theory is one thing; application is another. We'll dive into a concrete example: using CRISPR activation (CRISPRa) to treat a neurological disorder caused by *SCN2A* haploinsufficiency. Instead of replacing the broken gene or editing the mutation, researchers boosted expression of the remaining normal copy—a strategy called dosage restoration therapy. The results were striking: neurons regained normal firing, mice showed fewer seizures, and behaviors improved. This case study shows how reverse genetics isn't just about understanding biology—it's about fixing it.

### Gene regulation: how cells read the same genome differently

But wait—how does turning up a gene's expression actually work? To understand that, we need to step back and look at gene regulation itself: the system that controls which genes are on or off in each cell type. You'll learn how promoters initiate transcription, how enhancers control it from a distance, and how 3D chromatin looping brings regulatory elements together. We'll cover the experimental methods—RNA-seq, ChIP-seq, ATAC-seq, CUT&RUN—that let us measure gene expression and map the regulatory landscape. This is where genetics meets cell biology, and where most disease-associated variants actually exert their effects.

### QTLs: connecting genotype to molecular phenotype

Finally, we'll bring it all together with quantitative trait loci (QTLs)—the bridge between DNA variation and molecular traits. You'll see how eQTLs (expression QTLs) connect variants to RNA levels, and how pQTLs (protein QTLs) connect them to protein abundance. These analyses reveal which variants affect gene regulation, in which tissues, and by how much. When you integrate QTL data with GWAS, you can identify the causal genes at disease loci and start building mechanistic models of how genetic risk propagates through molecular layers.

---

## Why "variant to system"?

The title of this chapter—"Variant to System"—reflects a shift in how we think about genetics.

For most of the 20th century, genetics was reductionist: one gene, one trait, one mechanism. Find the mutation, find the protein it encodes, understand what that protein does, and you've solved the problem. That worked beautifully for Mendelian diseases like sickle cell anemia or cystic fibrosis.

But most human traits aren't like that. They're not controlled by single genes. They're **emergent properties of genetic networks**—hundreds or thousands of variants, each with small effects, acting through multiple cell types and regulatory layers, shaped by development and environment.

Understanding these traits requires a **systems perspective**. You can't just look at one gene in isolation. You need to see how it fits into regulatory networks, how its expression changes across tissues and contexts, how genetic variants perturb those networks, and how those perturbations propagate from DNA to RNA to protein to cellular phenotype to disease.

That's what this chapter is about: connecting dots. Not just finding variants, but understanding how they shape biological systems. Not just identifying genes, but figuring out what they do and how to modulate them.

---

## The tools are ready. Now it's about integration.

Here's the exciting part: we have all the pieces.

- Sequencing is cheap and comprehensive. We can genotype millions of variants or sequence whole genomes for a few hundred dollars.
- CRISPR lets us edit, activate, or silence any gene with precision.
- Single-cell technologies reveal how gene expression varies across thousands of individual cells.
- Chromatin profiling maps every regulatory element in the genome.
- QTL databases connect genetic variants to molecular phenotypes in dozens of tissues.
- Computational methods integrate these data layers—GWAS, eQTLs, pQTLs, protein interactions—into predictive models.

The challenge now isn't technology. It's **integration**. How do you combine forward genetics, reverse genetics, regulatory maps, and QTL data into a coherent picture of how variants cause disease? How do you move from a list of candidate genes to therapeutic strategies?

That's the frontier of human genetics in 2025. And that's what this chapter will teach you how to navigate.

---

## A roadmap for the chapter

Here's what's coming:

1. **Forward genetics** → How do we find genes starting from phenotypes? (GWAS, burden tests)
2. **Reverse genetics** → How do we test gene function experimentally? (CRISPR, screens, rescue)
3. **CRISPRa therapy** → A real-world example of reverse genetics applied to human disease
4. **Gene regulation** → How do cells control gene expression? (Promoters, enhancers, chromatin)
5. **QTLs** → How do genetic variants affect molecular traits? (eQTLs, pQTLs)

By the end, you'll understand not just how to find genetic variants, but how to figure out what they do, why they matter, and how we might intervene.

Let's get started.