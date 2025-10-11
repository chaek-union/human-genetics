# Chapter 11. Haploinsufficiency

Here's a fundamental question: if we have two copies of each gene—one from Mom, one from Dad—why do we need both? For many genes, the answer is we don't. One working copy makes plenty of protein to keep things running smoothly. But some genes are pickier. They're called **haploinsufficient** genes, and they need both copies churning out protein to maintain normal function. Break one copy with a **protein-truncating variant (PTV)**, and you don't make enough protein—leading to problems like developmental disorders or cancer.

Not all genes are this sensitive, though. Some can lose one or even both copies without causing any noticeable harm. They're **loss-of-function tolerant**, acting like backup systems in our genome. How do scientists figure out which genes fall into which category? They use tools called **pLI** and **LOEUF** that essentially count how many PTVs show up in large populations compared to how many we'd expect by chance. If a gene has way fewer PTVs than expected, that's a sign that evolution has been weeding them out—a process called **purifying selection**—because they reduce **fitness** (the ability to survive and have kids).

This section explains haploinsufficiency, why some genes tolerate loss better than others, and how we measure these differences using population-scale data.

---

## Haploinsufficient Genes vs. Haplosufficient Genes

Let's start with definitions. **Haploinsufficiency** happens when one copy of a gene gets knocked out (usually by a PTV), and the remaining copy can't produce enough protein to maintain normal function. The result? Disease or abnormal traits.

Think of it like baking a cake that requires two cups of sugar. If you only have one cup, you might still get something cake-like, but it won't taste right and the texture will be off. Haploinsufficient genes are like that recipe—they really need both copies to work.

In contrast, **haplosufficient** genes are fine with one functional copy. It's like a recipe that works perfectly well with one cup of sugar because it's more forgiving. Some genes go even further—they're **loss-of-function (LoF) tolerant**, meaning you can completely inactivate one or both copies without causing health problems. These genes often have backup copies elsewhere in the genome, or they're simply not critical for survival and reproduction.

Haploinsufficient genes are exquisitely sensitive to **gene dosage**—the amount of protein being produced. Cut that in half, and things go wrong. But here's the interesting part: even though PTVs are serious mutations that destroy gene function, healthy people walk around carrying about 100 PTVs each. A study of 185 genomes by [MacArthur and colleagues in 2012](https://pmc.ncbi.nlm.nih.gov/articles/PMC3299548/) found that most of these PTVs sit in LoF-tolerant genes that don't affect health. So the mere presence of a PTV doesn't mean disaster—it depends entirely on which gene got hit.

![Frequency of PTVs in Healthy Adults](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/a169/3299548/c5dc1dbdd943/ukmss-41098-f0001.jpg)  

**Frequency of PTVs in Healthy Adults**: This graph compares the frequency of different types of mutations in healthy adults. Notice how high-confidence PTVs (after filtering out sequencing errors and other artifacts) are much rarer than the unfiltered set. This is partly because many apparent PTVs are actually mistakes, but also because real PTVs often occur in LoF-tolerant genes that don't matter much for health. The genes that really matter—the haploinsufficient ones—rarely carry PTVs in healthy people.

---

## Natural Selection and Purifying Selection

Why are PTVs in haploinsufficient genes so rare? The answer is **natural selection**—the process that favors traits improving **fitness** (survival and reproduction) while weeding out harmful traits over generations.

Think of it as a very slow-motion race. If you have a mutation that helps you survive and have kids—say, better disease resistance—that mutation spreads through the population. If you have a mutation that reduces your chances—say, a PTV in a gene critical for brain development—you might not survive to reproduce, and that mutation dies with you. This is how evolution shapes which variants stick around.

**Purifying selection** is a specific type of natural selection focused on removing harmful mutations. It's the genome's quality control system. PTVs in haploinsufficient genes are harmful because they cause diseases, reduce survival, or impair reproduction. Purifying selection actively removes these variants from the population, which is why they're rare when we look at large datasets of healthy people.

On the flip side, PTVs in LoF-tolerant genes are more common because they don't harm fitness. Take olfactory receptor genes—we have hundreds of them for detecting smells. Losing one doesn't matter much, so PTVs in these genes are relatively frequent. No selective pressure, no removal.

This interplay between mutation (which constantly generates new PTVs) and purifying selection (which removes harmful ones) is key to understanding why some genes appear "intolerant" to loss-of-function mutations while others don't care.

---

## Measuring Haploinsufficiency with pLI and LOEUF

So how do scientists actually identify haploinsufficient genes? The trick is to look at large populations and ask: "How many PTVs does this gene have compared to how many it *should* have?" If a gene has far fewer PTVs than expected, purifying selection has probably been removing them because they're harmful. That gene is likely haploinsufficient.

Two massive datasets—the **Exome Aggregation Consortium (ExAC)** and the **Genome Aggregation Database (gnomAD)**—developed scoring systems called **pLI** and **LOEUF** to quantify this intolerance. Let's walk through each.

### The ExAC Study and pLI

Back in 2016, the **Exome Aggregation Consortium (ExAC)** analyzed exome sequences from 60,706 adults ([Lek et al., 2016, Nature](https://pmc.ncbi.nlm.nih.gov/articles/PMC5018207/)). Crucially, these were adults without severe developmental disorders—essentially a healthy population baseline. The exome covers the protein-coding parts of the genome, where most disease-causing mutations hide.

**What is pLI?**

pLI stands for **probability of being loss-of-function intolerant**. It's a score from 0 to 1 that tells you how sensitive a gene is to PTVs. A pLI ≥ 0.9 means the gene is highly intolerant—it has way fewer PTVs than expected, suggesting it's haploinsufficient and critical for normal function. A pLI near 0 means the gene tolerates PTVs just fine, like LoF-tolerant genes.

**How is pLI Calculated?**

The calculation starts with an expectation. Based on a gene's length and the background mutation rate, statisticians can predict roughly how many PTVs that gene *should* accumulate in a population of 60,706 people. This expected number accounts for the fact that bigger genes naturally acquire more mutations.

Then they compare this to the *observed* number of PTVs actually found in the ExAC data. If the observed number is dramatically lower than expected—say, near zero—that's strong evidence that purifying selection has been removing PTVs because they reduce fitness. The ExAC study identified 3,230 genes with pLI ≥ 0.9, indicating they're highly intolerant to loss of function. These genes tend to be involved in critical processes like ribosome assembly, chromatin regulation, and cell cycle control.

![Proportion of HI genes](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnature19057/MediaObjects/41586_2016_Article_BFnature19057_Fig3_HTML.jpg)  

**Proportion of Haploinsufficient genes**: This bar chart breaks down different gene categories by their pLI scores. Notice how known haploinsufficient genes (those already linked to dominant disorders) overwhelmingly have high pLI scores (≥0.9), while recessive disease genes are more spread out. This validates pLI as a tool for identifying genes where one broken copy causes problems. The chart also shows that certain functional categories—like transcription factors and chromatin modifiers—are enriched for high pLI genes, reflecting their critical roles.

**Why Focus on Adults Without Developmental Delays?**

This is a smart design choice. Haploinsufficient genes often cause developmental disorders when disrupted. By studying adults who *haven't* been diagnosed with these conditions, the researchers ensured they were looking at a population where harmful PTVs are rare because affected individuals either didn't survive or didn't reproduce. It's like inspecting a library's intact books to figure out which ones are essential—you won't find torn-up copies of the critical ones because those were removed from circulation.

![Allele frequency of PTVs](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnature19057/MediaObjects/41586_2016_Article_BFnature19057_Fig1_HTML.jpg)  

**Allele frequency of PTVs**: This graph shows that most PTVs in the ExAC dataset are extremely rare—the vast majority appear only once (singleton variants). This rarity pattern reflects purifying selection at work: harmful PTVs don't stick around long enough to become common. The contrast between PTVs in haploinsufficient genes (almost all singletons) and LoF-tolerant genes (more spread across frequencies) illustrates how selection shapes variant frequency.

### The gnomAD Study and LOEUF

In 2020, the **Genome Aggregation Database (gnomAD)** expanded on ExAC's work by analyzing 141,456 individuals—more than double the sample size ([Karczewski et al., 2020](https://pmc.ncbi.nlm.nih.gov/articles/PMC7334197/)). This dataset included both exome and whole-genome sequences, providing even more comprehensive coverage. Like ExAC, it focused on adults without severe developmental disorders.

gnomAD introduced a refined metric called **LOEUF** that improves on pLI in important ways.

**What is LOEUF?**

LOEUF stands for **Loss-of-Function Observed/Expected Upper-bound Fraction**. Instead of a binary "intolerant or not" classification, LOEUF provides a continuous score that ranks genes on a sliding scale of PTV sensitivity. A **low LOEUF score** (typically <0.35) indicates a gene with very few PTVs—likely haploinsufficient and critical for fitness. A high LOEUF score means the gene tolerates PTVs well.

**How is LOEUF Calculated?**

The calculation follows a similar logic to pLI: compare observed PTVs to expected PTVs based on gene size and mutation rate. But gnomAD adds sophistication through the **LOFTEE** (Loss-of-Function Transcript Effect Estimator) tool, which filters out false-positive PTVs—things that look like protein-truncating variants but aren't really, like sequencing errors or variants that occur in alternative transcripts where they don't actually truncate the protein.

After identifying 443,769 high-confidence PTVs across the dataset, the team calculated the observed-to-expected ratio for each gene, adjusted for statistical uncertainty (hence "upper-bound fraction"). Genes with low LOEUF scores are depleted for PTVs far beyond what chance alone would explain. These tend to be genes critical for DNA repair, cell division, metabolism, and development—functions where losing one copy has serious consequences.

**Why Continuous Scoring?**

pLI is essentially a yes/no test: a gene either meets the threshold for intolerance (pLI ≥ 0.9) or it doesn't. LOEUF is more like a dimmer switch—it shows *how* intolerant a gene is on a spectrum. This granularity helps identify genes with moderate intolerance that pLI might miss, and it's particularly useful for genes involved in less severe disorders or for prioritizing variants in clinical diagnosis.

![Distribution of LOEUF scores](https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41586-020-2308-7/MediaObjects/41586_2020_2308_Fig3_HTML.png)  

**Distribution of LOEUF scores**: This plot shows how LOEUF scores correlate with other measures of gene importance, like whether knocking out the gene kills mice or causes developmental abnormalities. Genes with low LOEUF scores (left side) are overwhelmingly essential in mouse models, while high-LOEUF genes (right side) can often be knocked out without major consequences. This external validation confirms that LOEUF captures something real about biological importance and links nicely to the concept of fitness—genes you can't lose without reducing survival or reproduction.

### Why These Studies Matter

Both ExAC and gnomAD tell us the same fundamental story: haploinsufficient genes, identified by high pLI or low LOEUF scores, are rare in healthy adults because PTVs in these genes reduce fitness and get removed by purifying selection. Meanwhile, PTVs in LoF-tolerant genes stick around because they don't matter much.

This has immediate clinical applications. When a patient with a genetic disorder gets exome sequencing and doctors find a rare PTV, they can check the pLI or LOEUF score to assess whether that gene is a likely culprit. A PTV in a gene with pLI = 1.0 or LOEUF = 0.1? That's suspicious and warrants further investigation. A PTV in a gene with pLI = 0 or LOEUF = 1.5? Probably not the cause.

There are even cases where PTVs improve health. For example, PTVs in *PCSK9* lower cholesterol levels and reduce heart disease risk. Drug companies developed cholesterol-lowering medications that mimic this effect—essentially "PTVs in a pill." This shows how understanding LoF tolerance can guide therapeutic development.

In summary, haploinsufficiency represents a critical concept linking gene dosage to disease. Through the lens of population genetics and natural selection, tools like pLI and LOEUF help us decode which genes are sensitive to loss, why they're sensitive, and how that knowledge informs medical genetics.