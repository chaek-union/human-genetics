# Turning Up the Volume: CRISPRa Therapy for *SCN2A*

Imagine you're a neuron trying to fire an action potential, but you only have half the sodium channels you need. You can still work, but you're sluggish—your signals are weak, your timing is off, and the whole circuit struggles to function normally. That's what happens in *SCN2A* haploinsufficiency, where losing one functional copy of the gene leaves neurons unable to generate normal electrical activity.

For decades, the standard approach to this kind of genetic problem was either gene replacement therapy (add a new working copy) or gene editing (fix the broken copy). But a 2025 study by Tamura and colleagues took a different approach: instead of fixing or replacing the mutant gene, they simply turned up the expression of the remaining normal copy using **CRISPRa**—CRISPR activation.

The results were striking. Boost *SCN2A* expression by about 50%, and neurons regain their firing capacity. Mice show fewer seizures, improved social behavior, and normalized brain activity. It's a proof-of-concept that sometimes the best therapy isn't to rewrite the genome—it's just to adjust the volume.

---

## *SCN2A* and the haploinsufficiency problem

*SCN2A* encodes NaV1.2, a voltage-gated sodium channel that's critical for neuronal excitability. When an action potential starts, sodium channels open and let Na⁺ ions rush into the cell, depolarizing the membrane and propagating the electrical signal. NaV1.2 is especially important in early brain development and in certain types of excitatory neurons.

When you lose one working copy of *SCN2A*—through a nonsense mutation, a frameshift, or a splice-site variant—you're left with only 50% of the normal amount of NaV1.2 protein. This is called **haploinsufficiency**: one copy isn't enough to maintain normal function.

The consequences? Neurons become hypoexcitable. They fire less frequently, generate weaker action potentials, and struggle to participate in fast, coordinated network activity. Clinically, *SCN2A* haploinsufficiency causes developmental and epileptic encephalopathy, autism spectrum disorder, and intellectual disability.

But here's the key point: the remaining *SCN2A* allele is perfectly normal. It's just not producing enough protein to compensate for the missing copy. So the question becomes: *Can we make the good copy work harder?*

---

## Not all *SCN2A* variants are the same

Before we dive into CRISPRa, it's worth clarifying that *SCN2A* variants come in different flavors, and they cause very different problems.

**Loss-of-function (LoF) variants** reduce or eliminate channel activity. These include:
- Nonsense mutations that introduce a premature stop codon
- Frameshift indels that disrupt the reading frame
- Splice-site mutations that skip essential exons
- Some missense variants that destabilize the protein or block its ability to conduct sodium

LoF variants cause **hypoexcitability**—neurons can't fire properly, leading to developmental delays and sometimes paradoxical seizures (because inhibitory circuits are also affected).

**Gain-of-function (GoF) variants**, on the other hand, make channels open too easily or stay open too long. These cause **hyperexcitability**—neurons fire too much, leading to infantile spasms and early-onset epilepsy.

The Tamura study focused on a **LoF missense variant**. Electrophysiology experiments confirmed that this variant produces functional channels, but they conduct less sodium current than wild-type channels. So the protein is there, but it's not working efficiently—a partial LoF. Combined with haploinsufficiency (only one allele makes protein anyway), you get a severe reduction in total sodium current.

---

## What is CRISPRa, and how does it work?

CRISPRa stands for **CRISPR activation**. To understand it, let's start with regular CRISPR–Cas9.

In standard genome editing, Cas9 is a molecular scissor. You give it a guide RNA that tells it where to cut, and Cas9 makes a double-strand break in the DNA. The cell tries to repair the break, and you can use that repair process to introduce or correct mutations.

But Cas9 doesn't *have* to cut. If you mutate the catalytic residues in Cas9, you get **dCas9** (dead Cas9)—a protein that can still bind to DNA at the guide RNA's target site, but it can't cut. By itself, dCas9 is useless. But if you fuse it to other proteins, it becomes a programmable platform for manipulating gene activity without editing the DNA sequence.

**CRISPRa** uses dCas9 fused to transcriptional activators—proteins like VP64, p65, or VPR (a combination of VP64, p65, and Rta). When you guide this complex to a gene's promoter, it recruits the transcriptional machinery and boosts RNA polymerase activity. The result? More mRNA gets made from that gene, and protein levels go up.

Think of it as a volume knob. The DNA sequence doesn't change, but the gene's output increases. You're essentially amplifying the signal from the normal allele.

**CRISPRi** (CRISPR interference) does the opposite. It uses dCas9 fused to repressor proteins (like KRAB) to block transcription. The dCas9 complex sits on the promoter like a roadblock, preventing RNA polymerase from accessing the gene. Expression goes down.

Both CRISPRa and CRISPRi are **epigenetic tools**. They don't rewrite the genetic code—they just tune how much it's read.

---

## Rescuing *SCN2A* haploinsufficiency with CRISPRa

Here's what Tamura and colleagues did.

They started with a mouse model of *SCN2A* haploinsufficiency. These mice carry one wild-type *Scn2a* allele and one mutant allele with a LoF missense variant. The mice show reduced sodium currents in cortical neurons, abnormal EEG patterns, and behavioral deficits—essentially a mouse version of the human disorder.

The team designed a guide RNA targeting the promoter region of *Scn2a*. They packaged this guide RNA along with dCas9–VPR (a strong transcriptional activator) into an adeno-associated virus (AAV), a common gene therapy delivery vehicle.

They injected the AAV into the brains of newborn mutant mice. A few weeks later, they measured the effects.

### Results in mouse neurons

- *SCN2A* mRNA levels increased by about 50%, bringing total expression close to wild-type levels
- Sodium current amplitude in cortical neurons was restored to nearly normal
- Neuronal firing frequency—measured by patch-clamp electrophysiology—recovered
- The neurons looked and behaved like wild-type cells

### Results at the circuit and behavioral level

- EEG recordings showed normalized brain activity with fewer abnormal discharges
- Mice showed reduced seizure-like behaviors
- Social interaction improved—mutant mice that had been socially withdrawn now interacted more with other mice
- Overall, the mice looked phenotypically rescued

### Results in human cells

The team also tested CRISPRa in human iPSC-derived neurons carrying the same *SCN2A* LoF variant. After transduction with the CRISPRa system, *SCN2A* expression increased, sodium currents improved, and the neurons regained normal excitability.

This is important because it shows the approach isn't mouse-specific—it works in human cells too.

---

## Why this matters: dosage restoration therapy

This study demonstrates a new therapeutic concept: **dosage restoration therapy**. Instead of adding a new gene or fixing the mutant allele, you upregulate the endogenous normal allele to compensate for the loss.

Here's why that's powerful:

**1. No DNA cutting**  
CRISPRa doesn't introduce double-strand breaks, so there's less risk of off-target mutations or chromosomal rearrangements. You're not permanently altering the genome—you're just changing how much it's used.

**2. Endogenous regulation**  
The normal *SCN2A* allele remains under its native promoter and enhancers. It's still regulated by the cell's normal signaling pathways, so expression can be modulated in response to developmental or physiological cues. This is much cleaner than inserting a transgene with a strong constitutive promoter, which might overexpress the protein at the wrong time or in the wrong cells.

**3. Tunable and reversible**  
CRISPRa is transient. If you stop expressing dCas9 and the guide RNA, gene expression drifts back toward baseline. This means you can potentially adjust the dose over time, or turn the system off if there are side effects. Compare this to a permanent gene edit, which is irreversible.

**4. Applicable to many haploinsufficiency disorders**  
*SCN2A* is just one example. There are hundreds of genes where losing one copy causes disease—*SHANK3*, *CHD8*, *MECP2*, *FOXP1*, and many others. CRISPRa could, in principle, be applied to any of them, as long as boosting the normal allele is sufficient to restore function.

---

## How does this compare to other approaches?

Let's put CRISPRa in context by comparing it to alternative strategies for treating *SCN2A* haploinsufficiency.

### Gene replacement therapy

This is the classic approach: use a virus (like AAV) to deliver a functional copy of *SCN2A* into cells. The new gene integrates randomly or remains as an episome, and produces NaV1.2 protein.

**Pros**: Well-established method, doesn't require targeting a specific genomic locus  
**Cons**: The transgene isn't under endogenous regulation, so you risk overexpression or expression in the wrong cell types. AAV has packaging size limits (~4.7 kb), and *SCN2A* is about 6 kb, so you'd need a smaller promoter or a split-AAV approach.

### Base editing or prime editing

If the mutation is a point mutation or small indel, you could use base editors or prime editors to directly correct it.

**Pros**: Fixes the root cause, restoring the mutant allele to wild-type  
**Cons**: Requires delivery of the editor plus guide RNA to every affected cell. Off-target editing is a concern. Works only if the mutation is correctable (not all LoF variants are single-base changes).

### Small molecule drugs

Some sodium channelopathies can be treated with drugs that modulate channel activity.

**Pros**: Non-invasive, reversible, can cross the blood-brain barrier  
**Cons**: Drugs typically act on all sodium channels, not just NaV1.2, leading to off-target effects. Hard to achieve precise dosage.

### CRISPRa

**Pros**: Boosts the normal allele without cutting DNA, preserves endogenous regulation, tunable, works regardless of mutation type (as long as one allele is intact)  
**Cons**: Requires viral delivery, dCas9 is large (~4 kb) so packaging can be challenging, potential for off-target activation if guides aren't specific

Each approach has trade-offs. CRISPRa shines when you have a haploinsufficiency disorder with an intact second allele and you want to avoid permanent genome edits.

---

## What does "rescue" mean?

You'll often see the term **"rescue"** in genetics papers. It's worth clarifying what it means.

In molecular biology, a rescue experiment tests whether restoring a missing function can reverse a mutant phenotype. If you knock out a gene and observe a defect, then you add back the normal gene and the defect disappears—that's a rescue. It's strong evidence that the gene is causally responsible for the phenotype.

In the Tamura study, "rescue" means:

- Neurons that were firing weakly (because of *SCN2A* haploinsufficiency) now fire normally (after CRISPRa upregulates *SCN2A*)
- Mice that had seizures and social deficits now show reduced seizures and improved behavior
- The phenotype was reversed by restoring gene dosage

So "rescue" isn't just a metaphor—it's experimental proof that boosting *SCN2A* expression is sufficient to fix the problem.

---

## Looking ahead: cis-regulatory gene therapy

The Tamura study is part of a broader trend toward **cis-regulatory gene therapy**—treatments that work by modulating the activity of a patient's own genes rather than adding new genetic material.

Other examples include:

- Using CRISPRa to boost *MECP2* expression in Rett syndrome
- Using CRISPRi to silence toxic repeat expansions in Huntington's disease
- Using epigenetic editors to reactivate silenced tumor suppressor genes in cancer

The unifying principle is: *adjust gene expression to restore balance*. Sometimes that means turning a gene up (CRISPRa). Sometimes it means turning a gene down (CRISPRi). Either way, you're fine-tuning the system rather than rewriting it.

CRISPRa for *SCN2A* haploinsufficiency is a proof-of-concept that this strategy can work for neurological disorders caused by gene dosage imbalance. The next steps—moving toward clinical trials, optimizing delivery, ensuring long-term safety—are already underway.

And if it works for *SCN2A*, it might work for dozens of other haploinsufficiency disorders too.

---

## Key takeaways

- **Haploinsufficiency** means one gene copy isn't enough—neurons need more protein than a single allele can provide
- **CRISPRa** uses dead Cas9 fused to activators to boost gene expression without cutting DNA
- Boosting *SCN2A* expression by ~50% restores neuronal firing and rescues behavioral deficits in mice
- This approach is **tunable, reversible, and preserves endogenous regulation**—advantages over traditional gene therapy
- **Cis-regulatory therapy** represents a new paradigm: instead of replacing or editing genes, adjust their expression to restore balance

---

## Key terms

- **Loss-of-function (LoF)**: A mutation that reduces or eliminates protein activity
- **Gain-of-function (GoF)**: A mutation that increases or alters protein activity
- **Haploinsufficiency**: A condition where one functional gene copy is not enough for normal function
- **CRISPRa (CRISPR activation)**: A system using dead Cas9 to increase gene transcription
- **CRISPRi (CRISPR interference)**: A system using dead Cas9 to decrease gene transcription
- **Rescue**: An experiment showing that a mutant phenotype can be reversed by restoring the missing function
- **Cis-regulatory therapy**: Treatment that modulates gene expression by targeting regulatory sequences