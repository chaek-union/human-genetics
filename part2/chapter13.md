# Chapter 13. Structural Variations in Human Genomes

So far, we've been talking mainly about small changes in DNA—single base swaps (SNVs) or tiny insertions and deletions (indels). But the genome can undergo much bigger rearrangements called **structural variations (SVs)**. These involve chunks of DNA that are 50 nucleotides or longer—sometimes stretching into the thousands or even millions of base pairs.

Think of the genome as a book. SNVs are like single-letter typos: "cat" becomes "bat." But SVs? They're entire paragraphs being cut out, duplicated, flipped upside down, or moved to a different chapter. These large-scale changes can have dramatic effects on gene function, human genetic diversity, and disease risk.

This chapter introduces SVs using insights from a massive 2020 study by [Collins and colleagues in *Nature*](https://www.nature.com/articles/s41586-020-2287-8), which analyzed 14,891 human genomes to create the gnomAD-SV reference—the most comprehensive catalog of structural variation to date. We'll walk through what SVs are, how they're classified, where they occur in the genome, how they form, and what impact they have on health and evolution.

---

## What Are Structural Variants?

**Structural variants** are DNA rearrangements that can include insertions (new DNA added), deletions (DNA removed), duplications (DNA copied), inversions (DNA flipped), or translocations (DNA moved between chromosomes). The key difference from SNVs is scale: while an SNV changes one letter, an SV can affect thousands to millions of letters at once.

These rearrangements can seriously disrupt genes or the regulatory elements that control them. Delete a critical exon, and the gene stops working. Duplicate a gene, and you might produce too much of its protein. Flip a regulatory region, and a gene might get turned on at the wrong time or in the wrong tissue. Understanding SVs is essential for understanding both normal genetic variation and disease.

---

## Classification of SVs

SVs can be grouped based on whether they change the total amount of DNA in the genome—what we call **copy number**. Some SVs add or remove DNA, while others just rearrange it without changing the total amount.

### Copy Number Altering SVs

These variants change how much DNA you have:

**Deletions (DEL)** remove a segment of DNA. If you delete part of a gene, you lose that genetic information, reducing gene dosage—the amount of protein that gene can make. For example, if a deletion removes one copy of a gene in a heterozygous individual, you're left with only one functional copy instead of two.

**Duplications (DUP)** create an extra copy of a DNA segment. Now you have more of that sequence than you should, increasing gene dosage. Some duplications are tandem (the extra copy sits right next to the original), while others insert elsewhere in the genome.

**Insertions (INS)** add new DNA that wasn't there before. Often these come from **mobile elements**—chunks of DNA that can copy themselves and jump to new locations. The three main types are:
- **Alu elements**: Short sequences, about 300 base pairs, that are the most abundant mobile elements in our genome
- **LINE1 (Long Interspersed Nuclear Element 1)**: Longer sequences, around 6,000 base pairs
- **SVA (SINE-VNTR-Alu)**: Composite elements, about 2,100 base pairs, that combine features of other repetitive sequences

These mobile elements leave distinctive signatures in the genome, which we'll see later in the data.

**Multiallelic Copy-Number Variants (MCNVs)** are regions where different people have different numbers of copies. You might have 2 copies of a region, your friend might have 3, and someone else might have 4. These show complex patterns of dosage variation across populations.

### Copy Number Neutral SVs

These variants rearrange DNA without changing the total amount:

**Inversions (INV)** flip a DNA segment 180 degrees. The same bases are there, but they're now in reverse orientation. Imagine reading a sentence backwards—the letters are all present, but the meaning changes.

**Translocations (BND)** swap DNA segments between different chromosomes. You're not losing or gaining DNA overall; it's just being moved around. The abbreviation BND stands for "breakend," referring to where the DNA breaks to make the swap.

**Complex SVs** involve multiple types of rearrangements happening together. For example, you might have an inversion flanked by copy number changes, or **chromothripsis**—a catastrophic event where a chromosome shatters and gets pieced back together in a chaotic way. Depending on how the pieces reassemble, these can be copy number neutral or altering.

![Figure 1: Classes of Structural Variants](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-020-2287-8/MediaObjects/41586_2020_2287_Fig1_HTML.png)

**Figure 1: SV Types**: This figure illustrates the different types of structural variants. Copy number altering variants like deletions and duplications change the amount of DNA, while copy number neutral variants like inversions and translocations rearrange DNA without changing its total amount. Each type affects DNA structure differently, with distinct implications for gene function (Collins et al., 2020).

---

## Distribution of SVs

The gnomAD-SV study analyzed 14,237 genomes from diverse populations to understand how SVs are distributed across humanity. The cohort was remarkably diverse: 54% of individuals were non-European, including African, Latino, East Asian, and European ancestry groups. This diversity matters because SV patterns differ across populations, reflecting their unique evolutionary histories.

### How Many SVs Does Each Person Have?

The study identified 433,371 different SVs across all genomes analyzed. But how many does a typical person carry? The median was **7,439 SVs per genome**—that's a lot more than the 3,441 SVs per genome estimated by the earlier 1000 Genomes Project, which used lower-coverage sequencing that missed many variants.

Think about that number: each of us carries over 7,000 structural rearrangements in our genome. Most don't cause problems—they're just part of normal human genetic variation. But a small fraction can contribute to disease.

### Size Matters

Most SVs are relatively small—under 10,000 base pairs—but there's interesting structure in the size distribution. When you plot the number of SVs at each size, you see distinct peaks at specific lengths (Figure 1f in the original paper). These peaks correspond to mobile element insertions:

- A peak around **300 base pairs** from Alu insertions
- A peak around **2,100 base pairs** from SVA insertions  
- A peak around **6,000 base pairs** from LINE1 insertions

These mobile elements are constantly creating new insertions in human genomes, and their characteristic sizes show up clearly in the data.

### Rare Variants Dominate

Here's a striking finding: **49.8% of all SVs are singletons**—they appear in only one person out of 14,237. Why are so many SVs this rare? Partly because they're recent mutations that haven't had time to spread, and partly because many large SVs disrupt important genes. If an SV knocks out a gene you need for normal development or survival, you're less likely to pass it on. Natural selection keeps these harmful variants rare.

The pattern is clear in Figure 1h of the original paper: larger SVs are rarer than smaller ones. A deletion removing 100 base pairs might be tolerable, but a deletion removing 100,000 base pairs that spans multiple genes? That's more likely to cause problems and less likely to stick around in the population.

### Population Structure

When the researchers performed a **principal component analysis** on 15,395 common SVs (variants found in multiple individuals), they found that people clustered by genetic ancestry—African, European, East Asian, and Latino groups separated in the analysis (Figure 1d in the original paper). This tells us that SV patterns differ across populations, shaped by unique demographic histories like population bottlenecks, expansions, and migrations. Some SVs might be common in one population but rare or absent in another.

---

## Mechanisms of SV Formation

How do these large-scale rearrangements actually happen? Several molecular mechanisms can produce SVs, each leaving characteristic signatures in the genome.

### Non-Allelic Homologous Recombination (NAHR)

During meiosis—the cell division that produces sperm and eggs—chromosomes pair up and exchange segments in a process called recombination. Usually this works perfectly: matching sequences on each chromosome (homologous sequences) line up correctly and swap corresponding pieces.

But sometimes things go wrong. If two repetitive sequences that aren't actually at the same position—say, two Alu elements separated by thousands of base pairs—mistakenly pair up, recombination between them produces a deletion on one chromosome and a duplication on the other. This is **non-allelic homologous recombination** (NAHR): homologous sequences that shouldn't recombine do anyway, because they're similar enough to trick the cellular machinery.

NAHR happens most often in regions with **segmental duplications**—large blocks of highly similar sequence scattered throughout the genome. The breakpoints (where the DNA breaks and rejoins) fall within these homologous regions, and the resulting SVs are typically deletions, duplications, or inversions.

### Non-Homologous End Joining (NHEJ)

What happens when a chromosome suffers a double-strand break—both strands of the DNA double helix snap? Cells have repair mechanisms, but they're not always precise. **Non-homologous end joining** (NHEJ) is a quick-and-dirty repair method: the cell just glues the broken ends back together without looking for matching sequences to guide the repair.

This can work fine if the break is clean. But NHEJ often introduces small errors at the junction—tiny insertions or deletions. Sometimes the cell joins the wrong ends together, creating translocations (if pieces from different chromosomes get joined) or complex rearrangements.

NHEJ-mediated SVs show characteristic features: **microhomology** (just 1-10 matching base pairs) or completely blunt junctions at the breakpoints. Depending on what gets joined to what, these SVs can be copy number neutral (like a simple translocation) or altering (if pieces are lost or duplicated).

### Mobile Element Insertion (MEI)

We mentioned Alu, LINE1, and SVA elements earlier. These **retrotransposons** create SVs through a "copy-and-paste" mechanism. Here's how it works:

1. The mobile element gets transcribed into RNA
2. That RNA is reverse-transcribed back into DNA 
3. The new DNA copy inserts into a new location in the genome

The result is a copy number gain—you've inserted new DNA that wasn't there before. These insertions create **target-site duplications** (TSDs): short repeated sequences (2-20 base pairs) flanking the insertion, formed when the insertion machinery cuts the target DNA.

Mobile element insertions are common—we each carry hundreds of them—and they're constantly creating new genetic variation. The distinctive size peaks in the SV distribution we saw earlier come directly from these insertions.

### Replication-Based Mechanisms (Fork Stalling and Template Switching)

DNA replication isn't always smooth. Sometimes the replication fork—the Y-shaped structure where DNA is being copied—stalls. Maybe it hits a difficult-to-replicate sequence, or there's damage in the DNA. When this happens, the replication machinery might switch to a different DNA template to finish copying, then switch back. This is called **fork stalling and template switching (FoSTeS)**.

If the machinery switches to the wrong template or switches multiple times, the result is a complex SV with multiple breakpoints and rearrangements. These can be copy number neutral (like inversions) or altering (like duplications), and they tend to occur in **fragile sites**—regions of the genome that are prone to replication stress.

### Chromothripsis

**Chromothripsis** is the most dramatic mechanism—the name literally means "chromosome shattering." In a single catastrophic event, a chromosome or chromosomal region breaks into dozens or hundreds of pieces. The cell's repair machinery then frantically tries to reassemble the pieces, but not always in the right order. The result is a complex SV with multiple breakpoints clustered in one region, often combining deletions, duplications, and inversions.

Chromothripsis is rare in healthy individuals but more common in cancer, where it can drive tumor evolution by disrupting multiple genes at once. When it does occur, it leaves a distinctive signature: many breakpoints concentrated in a small genomic region, with evidence of chaotic reassembly.

---

## Impact of SVs

SVs don't just passively exist in the genome—they have functional consequences that can affect health and evolution. The impact depends on what type of SV it is and where it occurs.

### Gene Dosage Effects

Copy number altering SVs—deletions and duplications—directly affect **gene dosage**. The gnomAD-SV study found that deletions and duplications contribute to **25-29% of rare protein-truncating events**. That's comparable to the impact of nonsense SNVs! When you delete an entire exon or gene, the result is complete loss of function from that allele, just as devastating as a premature stop codon.

Duplications can be harmful too. More isn't always better—having three copies of a gene instead of two can disrupt tightly regulated processes. The study found that genes intolerant to loss-of-function SNVs (those with high pLI scores that we learned about earlier) are also intolerant to copy number changes. Both too little and too much gene product can be problematic.

### Structural Rearrangements

Copy number neutral SVs—inversions and translocations—don't change gene dosage, but they can still cause problems. An inversion might disrupt a gene by breaking it in the middle, or it might alter gene regulation by moving a gene away from its normal regulatory elements or placing it next to new ones. These effects are generally subtler than complete loss or gain of a gene, and the selection against copy number neutral SVs is weaker.

### Selection Pressure

Figure 4 from the Collins study (shown below) illustrates how natural selection acts on different types of SVs. The plot shows that copy number altering SVs in protein-coding genes face strong negative selection—they're kept rare in the population because they reduce fitness. SVs in noncoding regions (like introns or intergenic sequences) face milder selection, since disrupting these regions is less likely to affect gene function.

Interestingly, the pattern mirrors what we see with SNVs: genes that are intolerant to SNVs are also intolerant to SVs. This makes sense—whether you disrupt a gene with a point mutation or by deleting it entirely, the result is loss of function, and selection weeds out variants that eliminate essential genes.

![Figure 4: Selection Against SVs](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-020-2287-8/MediaObjects/41586_2020_2287_Fig4_HTML.png?as=webp)

**Figure 4: Selection pressures on SVs**: This figure shows that copy number altering SVs affecting protein-coding genes (particularly deletions and duplications in genes intolerant to loss of function) experience strong negative selection, appearing at reduced frequencies in the population. SVs in noncoding regions face weaker selection. The pattern demonstrates that gene dosage—both too little and too much—matters for fitness, and evolution actively removes harmful SVs just as it does with deleterious SNVs (Collins et al., 2020).

### Why This Matters

Understanding SVs is crucial for several reasons. First, they contribute substantially to genetic disease—many developmental disorders, intellectual disabilities, and cancers involve large deletions, duplications, or complex rearrangements. Second, they're a major source of genetic diversity between individuals and populations, shaping everything from disease susceptibility to drug response. Third, they're harder to detect than SNVs with standard sequencing approaches, so building comprehensive catalogs like gnomAD-SV is essential for interpreting patients' genomes.

The 14,891-genome study gave us an unprecedented view of SV diversity across humanity, revealing that we each carry thousands of structural variants, most harmless but some with potential health impacts. As sequencing technology improves and more genomes are analyzed, our understanding of how these large-scale rearrangements shape human biology will only deepen.