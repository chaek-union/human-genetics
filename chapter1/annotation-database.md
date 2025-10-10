# Annotation and Databases for Genetic Variants

## The Data Deluge Problem

When you sequence someone's genome using NGS, you don't just get a list of their genes. You get millions of differences—places where their DNA sequence differs from the reference genome. A typical person has:

- About 4-5 million **single nucleotide variants (SNVs)**—places where one DNA letter differs (e.g., an A instead of a G)
- Around 400,000-500,000 small **insertions and deletions (indels)**—where a few bases are added or removed
- Thousands of larger **structural variants**—big chunks of DNA that are duplicated, deleted, or rearranged

That's millions of differences in a single person. The overwhelming question is: **which ones matter?**

Most of these variants are harmless—normal differences that make you unique. Some might even be beneficial. But buried somewhere in those millions of differences might be the ones causing disease in a patient, or explaining why someone responds differently to a medication.

Finding those needle-in-a-haystack variants requires two things: **annotation** (adding meaning to each variant) and **databases** (comparing your findings to what's already known). This chapter explains how scientists make sense of genomic data by connecting individual variants to biological function and clinical outcomes.

---

## What Is Variant Annotation?

Think of annotation as adding sticky notes to a manuscript. You've found differences in someone's DNA, but you need to know: Where is this change? What does it affect? Has anyone seen it before? Is it likely to be harmful?

**Variant annotation** is the process of adding biological and clinical context to each variant. For every difference you find, annotation tools help you answer:

### The Location Question
- Is this variant in a gene or between genes?
- If it's in a gene, is it in a coding region (exon) or non-coding region (intron)?
- Is it in a regulatory region that controls when the gene turns on or off?

### The Functional Question
- Does this variant change a protein's amino acid sequence?
- If so, how? Does it:
  - Swap one amino acid for another (**missense** mutation)?
  - Create a premature stop signal (**nonsense** mutation)?
  - Shift the reading frame (**frameshift** mutation)?
- Or does it affect RNA splicing or gene regulation?

### The Population Question
- Is this variant common (seen in many people) or rare?
- If it's common, it's probably benign—just normal human variation
- If it's rare or never seen before, it might be disease-causing

### The Clinical Question
- Has this variant been seen in patients before?
- Is it known to cause disease?
- What disease does it cause, and how is it inherited?

Let's look at how annotation tools help answer these questions.

---

## Annotation Tools: Your Digital Lab Assistants

Several software tools automate the annotation process. Think of them as digital assistants that look up information about each variant and compile a report. Here are the most widely used:

### VEP (Variant Effect Predictor)

Developed by Ensembl, VEP is like a comprehensive GPS for variants—it tells you exactly where each variant is located and predicts its functional impact.

**What it does:**
- Maps variants to genes and transcripts
- Predicts the consequence: missense, nonsense, splice site change, etc.
- Flags variants in regulatory regions
- Calculates protein changes (which amino acid becomes which)

**Example:** You find a variant in the CFTR gene (associated with cystic fibrosis). VEP tells you it's a "stop-gain" mutation—it creates a premature stop codon, truncating the protein. This immediately flags it as potentially pathogenic.

### ANNOVAR

ANNOVAR is incredibly versatile and widely used because it can incorporate information from dozens of databases simultaneously.

**What it does:**
- Annotates gene location and function
- Adds population frequency data (how common is this variant?)
- Includes conservation scores (is this DNA region unchanged across species?)
- Links to disease databases

**Why it's useful:** ANNOVAR helps you prioritize variants. If you have 50,000 variants in a patient's exome, ANNOVAR can quickly filter out the common ones and highlight rare variants in disease-related genes.

### SnpEff

SnpEff focuses on predicting functional effects and categorizing them by severity.

**What it does:**
- Classifies variants as HIGH, MODERATE, LOW, or MODIFIER impact
- HIGH: Loss of function (stop-gain, frameshift)
- MODERATE: Non-synonymous changes (missense)
- LOW: Synonymous changes (no amino acid change)
- MODIFIER: Intergenic or intronic regions

**Why it's useful:** If you're looking for the genetic cause of a severe disease, you'd focus on HIGH-impact variants first.

---

## Variant Databases: The Collective Knowledge

Annotation tools need information to work with. That information comes from databases—massive repositories where researchers worldwide contribute their findings. Let's explore the major databases that make variant interpretation possible.

### dbSNP: The Catalog of Human Variation

**What it is:**

dbSNP (Single Nucleotide Polymorphism Database) is maintained by NCBI and has been cataloging human genetic variants since 1998. Think of it as the phonebook of human genetic variation.

**What's in it:**

- Over 1.1 billion variant sites
- Each variant gets a unique identifier called an rs number (e.g., rs429358 for the APOE variant associated with Alzheimer's risk)
- Includes SNPs, small indels, and other simple variants
- Data comes from large projects like the 1000 Genomes Project, gnomAD, and thousands of research studies

**How you use it:**

When you find a variant, you check dbSNP to see if it's known. If it has an rs number and is common (seen in >5% of people), it's probably benign—just normal variation. If it's not in dbSNP, that doesn't necessarily mean it's pathogenic, but it's rarer and warrants closer attention.

**The Mendelian Connection:**

Each dbSNP entry represents an allele—a specific version of DNA at that position. This is exactly what Mendel studied: different versions (alleles) at the same locus. dbSNP shows us that humans have millions of these loci where we vary, but most don't affect the phenotype.

### gnomAD: The Population Reference

**What it is:**

gnomAD (Genome Aggregation Database) contains high-quality sequencing data from over 140,000 individuals across diverse global populations. Unlike dbSNP, which is a catalog, gnomAD provides **allele frequencies**—how often each variant appears in different populations.

**Why this matters:**

Allele frequency is crucial for interpreting whether a variant could cause disease. Here's the logic:

- If a variant is common (e.g., 20% of people carry it), it can't cause a severe childhood disease—those people would have shown symptoms
- If a variant is rare (e.g., <0.1% frequency) or absent in gnomAD, it *might* be pathogenic, especially if found in a patient with a rare disease

**Example:**

A patient presents with a rare developmental disorder. You sequence their genome and find a novel variant in a gene involved in brain development. You check gnomAD:

- If the variant is in gnomAD at 1% frequency, it's probably not the cause—too common for a rare disease
- If it's absent from all 140,000+ gnomAD individuals, it's more suspicious and warrants further investigation

**Population Diversity Matters:**

gnomAD includes people of African, East Asian, South Asian, European, and Latinx ancestry. This is critical because what's common in one population might be rare in another. A variant common in African populations but rare in European populations could be misclassified as pathogenic if you only look at European data—this is reference bias.

### ClinVar: The Clinical Variant Database

**What it is:**

ClinVar, maintained by NCBI, is where clinicians and researchers submit variants along with interpretations of their clinical significance. It's the bridge between research and medicine.

**What's in it:**

- Variants linked to specific diseases
- Clinical classifications:
  - **Pathogenic**: Known to cause disease
  - **Likely pathogenic**: Strong evidence for disease
  - **Uncertain significance (VUS)**: Not enough evidence
  - **Likely benign**: Probably harmless
  - **Benign**: Definitively harmless
- Evidence summaries explaining why a variant was classified that way
- Information about inheritance pattern (dominant, recessive, etc.)

**How you use it:**

ClinVar is essential for clinical diagnostics. If a patient has a genetic disease, you sequence their genes and check ClinVar:

**Example 1:** A patient with symptoms of cystic fibrosis. You find a CFTR variant that's labeled "pathogenic" in ClinVar, associated with cystic fibrosis, recessive inheritance. If the patient has two copies, this confirms the diagnosis.

**Example 2:** A woman with family history of breast cancer. You find a BRCA1 variant. ClinVar says it's "pathogenic," associated with hereditary breast and ovarian cancer, dominant inheritance. This informs her medical management.

**The Challenge of VUS:**

Many variants are labeled "Variant of Uncertain Significance" (VUS) because there isn't enough evidence to classify them. This is frustrating for patients and doctors—you found a variant in a relevant gene, but you don't know if it's causing disease. As more data accumulates, VUSs get reclassified, which is why patients are often told to check back in a year or two.

---

## Predicting Variant Pathogenicity: When We Don't Know

For variants not in ClinVar, or for VUSs, we need computational tools to predict whether they're likely to be harmful. These tools use various strategies:

### CADD (Combined Annotation Dependent Depletion)

**What it does:**

CADD integrates over 60 different types of information about a variant—conservation across species, gene importance, predicted protein impact, and more—into a single score.

**How to interpret it:**

- Score is on a "Phred-like" scale
- CADD score >10: top 10% most deleterious variants
- CADD score >20: top 1%
- CADD score >30: top 0.1%

**Example:** You find a novel missense variant in a heart disease gene. CADD score = 28. This suggests it's likely damaging and should be prioritized for further study.

### REVEL (Rare Exome Variant Ensemble Learner)

**What it does:**

REVEL specializes in missense variants—changes that swap one amino acid for another. It combines 13 different prediction tools using machine learning.

**How to interpret it:**

- Score ranges from 0 to 1
- Higher scores mean more likely to be pathogenic
- Common threshold: REVEL >0.5 is "likely pathogenic"

**Why it's good:** REVEL was trained specifically on rare variants associated with Mendelian diseases, making it excellent for diagnosing inherited disorders.

**Example:** A child has severe developmental delays. You find a rare missense variant in a neurodevelopmental gene with REVEL score = 0.75. This strongly suggests the variant is pathogenic.

### AlphaMissense: AI Enters the Scene

**What it is:**

AlphaMissense, developed by Google DeepMind (the team behind AlphaFold), uses artificial intelligence to predict variant effects based on protein structure and evolutionary data.

**What makes it different:**

Traditional tools rely on conservation and pre-defined features. AlphaMissense learned directly from protein structures predicted by AlphaFold, understanding how changes affect 3D shape and function.

**How to interpret it:**

- Classifies variants as: Benign, Ambiguous, or Pathogenic
- Shows which variants likely disrupt protein structure

**Impact:** AlphaMissense provided predictions for 71 million possible missense variants in human proteins—covering virtually all possible single amino acid changes. This helps reclassify VUSs and guides research.

**Limitations:** These are predictions, not proof. A high pathogenicity score suggests a variant *might* be harmful, but functional studies or clinical evidence are needed to confirm.

---

## Genomic Annotation: The Reference Framework

Before we can annotate variants, we need to know what's in the genome. **Genomic annotation** is the process of identifying and describing all functional elements: where genes start and end, which parts code for proteins, where regulatory regions are, etc.

Think of genomic annotation as creating a detailed map of the genome. Variant annotation then tells you where on that map each variant falls.

Two major resources provide this map:

### GENCODE: Comprehensive Gene Catalog

**What it is:**

GENCODE is part of the ENCODE (Encyclopedia of DNA Elements) project and provides the most comprehensive annotation of human and mouse genomes.

**What's in it:**

- ~20,000 protein-coding genes
- ~25,000 non-coding RNA genes (long non-coding RNAs, microRNAs, etc.)
- Thousands of pseudogenes
- Detailed transcript information (different versions of mRNA from the same gene)
- Regulatory elements

**How it's built:**

GENCODE combines manual curation (experts carefully review evidence) with automated prediction. This gives both accuracy and completeness.

**Identifiers:**

Each gene gets an ID starting with ENSG (e.g., ENSG00000139618 for BRCA2), and each transcript starts with ENST.

**Why it matters:**

When VEP or ANNOVAR analyze your variants, they use GENCODE to determine:
- Is this variant in a gene?
- Which gene?
- Is it in an exon (coding region) or intron?
- Which transcript is affected?

**Example:** A variant at chromosome 17 position 41,234,420. GENCODE tells us this is in exon 11 of the BRCA1 gene, in a transcript that encodes the full-length protein. This context is essential for interpretation.

### RefSeq: Clinical Standard

**What it is:**

RefSeq (Reference Sequence Database) is maintained by NCBI and provides curated reference sequences for genes, transcripts, and proteins.

**How it differs from GENCODE:**

- More conservative: focuses on well-established, manually curated annotations
- Less comprehensive for non-coding RNAs, but very accurate for protein-coding genes
- Widely used in clinical settings because of its stability and consistency

**Identifiers:**

RefSeq uses different prefixes:
- NM_: mRNA sequence (e.g., NM_007294 for BRCA1)
- NP_: protein sequence
- NG_: genomic sequence

**Clinical importance:**

Many clinical tests report variants using RefSeq coordinates. For example: "NM_007294.3:c.5266dup" is a standard way to describe the BRCA1 founder mutation common in Ashkenazi Jewish populations.

### GENCODE vs. RefSeq: Which to Use?

| Feature | GENCODE | RefSeq |
|---------|---------|--------|
| **Coverage** | Very comprehensive: protein-coding, non-coding, pseudogenes | Focused on high-confidence protein-coding genes |
| **Curation** | Manual + automated | Primarily manual (more conservative) |
| **Best for** | Research, non-coding RNA studies | Clinical diagnostics, standard reporting |
| **Updates** | Frequent | Less frequent but very stable |

For research, especially if you care about non-coding regions, GENCODE is better. For clinical work where consistency matters, RefSeq is standard.

**Both are essential:** Many annotation pipelines use both, cross-referencing to provide the most complete picture.

---

## Biobanks: Connecting Genes to Health

Databases like dbSNP and ClinVar tell us about variants, but they don't tell us about the *people* who carry them. That's where **biobanks** come in.

A biobank is a large collection of biological samples (usually DNA) linked to detailed health information. Researchers can ask: "Do people with this variant have higher rates of heart disease?" or "Does this gene variant affect how people respond to medication?"

Biobanks make the connection between genotype (DNA variants) and phenotype (observable traits, diseases, health outcomes). They're essential for:
- Discovering new disease genes
- Understanding how genes and environment interact
- Developing personalized medicine approaches
- Studying genetic diversity across populations

### Major Biobanks Worldwide

Let's examine the largest and most influential biobanks:

#### UK Biobank

**Scale:** About 500,000 UK adults aged 40-69 enrolled; whole-genome sequencing completed for 490,640 participants (2025)

**What's collected:**
- Whole-genome sequences
- Blood samples and other biospecimens
- Detailed health records from the UK National Health Service
- Lifestyle questionnaires (diet, exercise, smoking, etc.)
- Physical measurements (height, weight, blood pressure)
- Medical imaging (MRI scans) for 100,000+ participants

**Impact:** UK Biobank has enabled thousands of research studies discovering genetic links to diseases like obesity, diabetes, heart disease, and mental health conditions. It's particularly powerful for genome-wide association studies (GWAS).

**Example:** Researchers identified genetic variants associated with coffee consumption, sleep patterns, and how they affect heart disease risk—showing gene-environment interactions.

#### All of Us Research Program (USA)

**Scale:** ~245,000 participants sequenced as of 2023, with a goal of 1 million diverse Americans

**What makes it special:** Deliberately oversample underrepresented populations (racial/ethnic minorities, rural communities, LGBTQ+ individuals) to address health disparities.

**What's collected:**
- WGS and WES data
- Electronic health records
- Surveys about lifestyle, environment, and social factors
- Emphasis on returning results to participants

**Impact:** All of Us is improving our understanding of how genetic variation differs across populations and how this relates to health disparities.

**Example:** Discovery of population-specific variants that affect drug metabolism, explaining why certain medications work differently in different communities.

#### Korean Variant Archive (KOVA)

**Scale:** 5,305 healthy Koreans (3,409 whole-exome sequences, 1,896 whole-genome sequences)

**Why it matters:** Most genetic databases have been built primarily from European populations. KOVA provides crucial data on East Asian genetic variation.

**Impact:** Improves variant filtering for East Asian populations—22.8% better than using European-based databases like ExAC. This means Korean clinicians can better distinguish disease-causing variants from benign population-specific variation.

**Example:** Identification of Korean-specific variants in genes related to drug metabolism, guiding personalized medicine approaches in Korea.

#### FinnGen (Finland)

**Scale:** Over 500,000 Finnish individuals

**What makes Finland special:** Finland has a "founder effect"—the population descends from a small number of ancestors, making rare genetic variants more common and easier to study.

**Impact:** Particularly good for finding rare variants that cause disease. The population's genetic similarity makes it easier to detect associations that would be harder to see in more diverse populations.

**Example:** Discovery of rare variants explaining heart conditions and metabolic disorders that are more common in Finland.

#### Tohoku Medical Megabank (ToMMo) (Japan)

**Scale:** ~150,000 participants across three generations

**What's unique:** Multi-generational data allows study of genetic variants across families and how they interact with environmental changes over time.

**Impact:** Understanding gene-environment interactions, especially in the context of health recovery after disasters (the biobank was established after the 2011 earthquake/tsunami).

**Example:** Studies on how genetic variants influence recovery from stress and trauma-related disorders.

---

## Putting It All Together: A Clinical Example

Let's walk through how all these resources work together in a real scenario.

**Case:** A 4-year-old child has severe developmental delays, seizures, and abnormal brain MRI. Doctors suspect a genetic cause and order whole-exome sequencing.

**Step 1: Sequencing and Variant Calling**
- Lab sequences the exome (~20,000 genes)
- Finds ~25,000 variants compared to the reference genome

**Step 2: Annotation**
- VEP annotates all variants, determining location and functional impact
- ANNOVAR adds population frequencies from gnomAD
- Results: ~200 variants are rare (<1% frequency) and predicted to affect protein function

**Step 3: Filtering Using Databases**
- Check ClinVar: 5 variants are known to be benign, eliminate those
- Check gnomAD: 150 variants appear at >0.5% frequency in healthy people, likely benign
- Check dbSNP: some variants are well-documented normal variation
- Results: Down to ~40 candidate variants

**Step 4: Gene Prioritization**
- Use OMIM (Online Mendelian Inheritance in Man) database to see which genes cause similar symptoms
- Focus on genes known to cause developmental disorders with seizures
- Results: 3 variants in disease-relevant genes

**Step 5: Pathogenicity Prediction**
- Run CADD, REVEL, and AlphaMissense on the 3 candidates
- One variant in gene SCN1A (sodium channel, causes Dravet syndrome):
  - CADD score: 32 (top 0.1%)
  - REVEL score: 0.89 (likely pathogenic)
  - AlphaMissense: Pathogenic
  - gnomAD: Not seen in 140,000+ people
  
**Step 6: Clinical Interpretation**
- Check ClinVar: the exact variant isn't listed, but similar variants in SCN1A are pathogenic for Dravet syndrome
- Check inheritance: SCN1A mutations are typically dominant (one copy can cause disease)
- Check parents: neither parent has the variant (it's de novo—a new mutation)
- The UK Biobank data confirms SCN1A loss-of-function variants are extremely rare and associated with seizures

**Conclusion:** The SCN1A variant is reported as the likely genetic cause. This:
- Confirms the diagnosis (Dravet syndrome)
- Ends the "diagnostic odyssey"—no more tests needed
- Informs treatment (certain anti-seizure medications work better)
- Provides recurrence risk counseling (low risk for future children since it's de novo)
- Connects family to patient support groups

---

## Why This Matters

Variant annotation and databases might seem like technical details, but they're the foundation of modern genetics and medicine. They allow us to:

**For Research:**
- Discover new disease genes
- Understand how genes work
- Study human evolution and migration
- Identify drug targets

**For Medicine:**
- Diagnose rare genetic diseases
- Guide cancer treatment based on tumor genetics
- Predict drug response (pharmacogenomics)
- Assess disease risk
- Enable prenatal and carrier screening

**For Understanding Humanity:**
- Trace human history and migrations
- Understand genetic diversity
- Combat health disparities
- Appreciate that most human genetic variation is benign—we're all different, and that's normal

As sequencing becomes cheaper and more widespread, these databases will only grow more important. Every genome sequenced adds to our collective knowledge, making the next diagnosis faster and more accurate. The data you help generate as a future researcher or clinician will contribute to this global resource, benefiting patients you'll never meet.

That's the power of shared knowledge in genomics.