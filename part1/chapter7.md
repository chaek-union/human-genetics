# Chapter 7. Annotation and Databases for Genetic Variants

## The Data Deluge Problem

When you sequence someone's genome using NGS, you get millions of differences compared to the reference genome. A typical person has:

- About 4-5 million **single nucleotide variants (SNVs)**
- Around 400,000-500,000 small **insertions and deletions (indels)**
- Thousands of larger **structural variants**

The overwhelming question is: **which ones matter?**

Finding those needle-in-a-haystack variants requires **annotation** (adding meaning to each variant) and **databases** (comparing your findings to what's already known).

---

## What is Variant Annotation?

**Variant annotation** adds biological and clinical context to each variant. For every difference you find, annotation helps answer four key questions:

```
┌─────────────────────────────────────────────────┐
│  THE FOUR ANNOTATION QUESTIONS                  │
├─────────────────────────────────────────────────┤
│  1. LOCATION: Gene? Exon? Regulatory region?    │
│  2. FUNCTION: Protein change? Splicing effect?  │
│  3. POPULATION: Common or rare?                 │
│  4. CLINICAL: Known disease association?        │
└─────────────────────────────────────────────────┘
```

---

## Annotation Tools

Three major tools automate variant annotation. Each has distinct strengths:

| Tool | Primary Strength | Best Used For | Output Example |
|------|-----------------|---------------|----------------|
| **VEP** (Ensembl) | Comprehensive location mapping, regulatory regions | Whole-genome analysis including non-coding regions | "CFTR exon 11, stop-gain, p.Gly542*" |
| **ANNOVAR** | Multi-database integration, flexible filtering | Prioritizing variants from large datasets | Adds gnomAD frequencies, conservation scores, disease links |
| **SnpEff** | Automatic impact classification | Quick screening for disease-causing variants | HIGH (stop-gain), MODERATE (missense), LOW (synonymous) |

**In practice**, researchers often use multiple tools for cross-validation. For example, finding a CFTR stop-gain mutation:
- VEP identifies the precise location and protein change
- ANNOVAR adds population frequency data
- SnpEff flags it as HIGH impact for prioritization

---

## Variant Databases: The Three-Tier System

Variant databases form a hierarchical information structure: known variants → population frequency → clinical significance.

### Tier 1: dbSNP (Variant Catalog)

**What it is:** The comprehensive catalog of human genetic variation maintained by NCBI since 1998.

**Key features:**
- Over 1.1 billion variant sites
- Each variant gets a unique rs number (e.g., rs429358)
- Question answered: "Has this variant been documented?"

**Usage:** Check if your variant has an rs number. If common (>5% frequency), likely benign.

### Tier 2: gnomAD (Population Reference)

**What it is:** High-quality sequencing data from 140,000+ individuals across diverse populations.

**Key features:**
- Provides **allele frequencies** by population
- Question answered: "How common is this variant?"
- Critical logic: Common variants (>1%) can't cause severe childhood diseases

**Example:** A novel variant in a developmental disorder patient:
- In gnomAD at 1% → probably not the cause (too common)
- Absent from all 140,000+ individuals → suspicious, investigate further

**Why diversity matters:** What's common in one population may be rare in another. Population-specific data prevents misclassification.

### Tier 3: ClinVar (Clinical Interpretation)

**What it is:** Clinical variant database linking variants to diseases with evidence-based classifications.

**Classification system:**

```
Pathogenic ←→ Likely Pathogenic ←→ VUS ←→ Likely Benign ←→ Benign
    ▲                                  ▲                       ▲
Causes disease            Uncertain significance      Harmless
```

**Clinical workflow:**
1. Patient with suspected genetic disease → sequence relevant genes
2. Find variant → check ClinVar classification
3. If "Pathogenic" + clinical match → diagnosis confirmed
4. If "VUS" → additional evidence needed

**The VUS challenge:** Many variants lack sufficient evidence for classification. As data accumulates, VUSs get reclassified—patients often recheck results annually.

---

## Predicting Variant Pathogenicity

For variants not yet in ClinVar, computational tools predict likely effects:

| Tool | Scoring System | Interpretation Threshold | Best For |
|------|----------------|-------------------------|----------|
| **CADD** | Phred-like scale | >20 = top 1% deleterious<br>>30 = top 0.1% | General variant impact |
| **REVEL** | 0-1 scale | >0.5 = likely pathogenic | Missense variants in Mendelian diseases |
| **AlphaMissense** | AI-based classification | Benign/Ambiguous/Pathogenic | Structure-based predictions for 71M variants |

**Important limitation:** These are *predictions*, not proof. Functional studies or clinical evidence needed for confirmation.

---

## Genomic Annotation: The Reference Framework

Before annotating variants, we need a map of the genome showing where genes, exons, and regulatory regions are located.

### GENCODE vs. RefSeq

| Feature | GENCODE | RefSeq |
|---------|---------|--------|
| **Coverage** | Comprehensive: ~45,000 genes (coding + non-coding) | Conservative: ~20,000 protein-coding genes |
| **Curation** | Manual + automated | Primarily manual |
| **Identifiers** | ENSG/ENST | NM_/NP_ |
| **Best for** | Research, non-coding RNA studies | Clinical diagnostics |
| **Updates** | Frequent | Less frequent, more stable |

**Clinical example:** BRCA1 founder mutation reported as "NM_007294.3:c.5266dup" using RefSeq coordinates—the standard in clinical settings.

---

## Biobanks: Connecting Genotype to Phenotype

Biobanks are large collections of DNA samples linked to detailed health information. They answer: "Do people with this variant have higher disease rates?"

### Major Biobanks Comparison

| Biobank | Scale | Population | Key Strength | Representative Finding |
|---------|-------|------------|--------------|----------------------|
| **UK Biobank** | 500,000 | UK adults | NHS health records + imaging | Gene-environment interactions (coffee, sleep, heart disease) |
| **All of Us** | 245,000+ | US diversity focus | Addressing health disparities | Population-specific drug metabolism variants |
| **KOVA** | 5,305 | Korean | East Asian variant reference | 22.8% better filtering vs European databases |
| **FinnGen** | 500,000+ | Finnish | Founder effect for rare variants | Rare heart/metabolic disorder variants |
| **ToMMo** | 150,000 | Japanese (3 generations) | Gene-environment over time | Post-disaster stress/trauma genetics |

**Clinical impact:** Population-specific databases prevent misclassification. A variant common in East Asians but absent from European databases could be wrongly labeled pathogenic without appropriate reference data.

---

## Clinical Case: Integrating All Resources

**Patient:** 4-year-old with developmental delays, seizures, abnormal brain MRI.

**Diagnostic workflow:**

```
25,000 variants found (whole-exome sequencing)
         ↓
    [Annotation: VEP + ANNOVAR]
         ↓
    ~200 rare variants affecting protein function
         ↓
    [Filter: ClinVar (remove benign) + gnomAD (<0.5%)]
         ↓
    40 candidate variants
         ↓
    [Prioritize: Genes causing similar symptoms]
         ↓
    3 variants in relevant genes
         ↓
    [Predict: CADD, REVEL, AlphaMissense]
         ↓
    SCN1A variant identified:
    • CADD: 32 (top 0.1%)
    • REVEL: 0.89 (pathogenic)
    • gnomAD: Not in 140,000+ people
    • De novo (new mutation, not inherited)
         ↓
    DIAGNOSIS: Dravet syndrome
```

**Outcome:**
- Diagnostic odyssey ended
- Treatment optimized (specific anti-seizure medications)
- Low recurrence risk for future children
- Family connected to support resources

---

## Why This Matters

These databases and tools enable:

**Research:**
- Discover new disease genes
- Identify drug targets
- Study human evolution

**Medicine:**
- Diagnose rare genetic diseases
- Guide cancer treatment
- Predict drug response
- Assess disease risk

**Global Health:**
- Combat health disparities through diverse reference data
- Build collective knowledge that benefits all patients
- Understand that most genetic variation is benign—diversity is normal

As sequencing becomes widespread, every genome sequenced adds to our collective knowledge, making the next diagnosis faster and more accurate.

---

## Key Takeaways

1. **Annotation adds meaning** to millions of variants through four key questions: location, function, population frequency, and clinical significance

2. **Three-tier database system**: dbSNP (catalog) → gnomAD (frequency) → ClinVar (clinical interpretation)

3. **Multiple tools complement each other**: Use VEP, ANNOVAR, and SnpEff together; combine CADD, REVEL, and AlphaMissense for predictions

4. **Population diversity is essential**: Reference data must match patient ancestry to avoid misclassification

5. **Integration is key**: Clinical diagnosis requires combining annotation tools, databases, pathogenicity prediction, and biobank data into a coherent workflow