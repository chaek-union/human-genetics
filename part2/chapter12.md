# Chapter 12. Recessive Alleles in Human Disorders

Dominant disorders, as we've seen, need only one broken gene copy to cause problems. Recessive disorders play by different rules: you need **both alleles at a locus** to be disrupted before disease appears. Remember, we're diploid organisms—we carry two copies of every autosomal gene, one from Mom and one from Dad. If both copies fail to produce functional protein, the cell has nothing to fall back on, and disease results.

The catch? People with just one bad copy—**carriers**—are typically perfectly healthy. That single working allele makes enough protein to keep everything running normally. This is why recessive disorders often surprise families: two healthy carrier parents can have an affected child who inherited the bad allele from both sides.

**NGS** technologies like WES and WGS have dramatically improved our ability to find recessive alleles, especially in populations where they're more likely to show up. Studies in British Pakistani and Bangladeshi communities, where marriage between relatives is culturally common, have uncovered hundreds of recessive disease associations that would be nearly impossible to detect in outbred populations ([Narasimhan et al., 2016, Science](https://pmc.ncbi.nlm.nih.gov/articles/PMC4985238/); [Bilgüvar et al., 2010, Nature](https://pmc.ncbi.nlm.nih.gov/articles/PMC3129007/); [Heng et al., 2025, Am J Hum Genet](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256797/)).

---

## Alleles, Genotypes, and Variants

Since we're diploid, every locus contains two alleles—one maternal, one paternal. Let's break down the possibilities at any given locus, using a hypothetical gene we'll call Gene X:

**Homozygous reference** means both alleles match the reference genome—the "standard" sequence we use as a comparison point. You'd write this as X<sub>ref</sub>/X<sub>ref</sub>. This is what most people have at most loci.

**Heterozygous** means one allele is reference and the other carries a variant—some change from the reference sequence. Written as X<sub>ref</sub>/X<sub>alt</sub>, where "alt" stands for alternative. This is the carrier state for recessive disorders: you have one working copy and one altered copy.

**Homozygous alternative** means both alleles carry the same variant: X<sub>alt</sub>/X<sub>alt</sub>. If that variant disrupts gene function—say, it's a nonsense mutation that truncates the protein—you've lost function from both copies. This is when recessive disease appears.

The "variant" itself is usually a **single-nucleotide variant (SNV)**—one DNA base swapped for another—or a small **insertion or deletion (indel)** of a few bases. Let me give you concrete examples.

For an SNV, imagine a position where the reference genome has the base G. A **homozygous reference** individual has G on both chromosomes (G/G). A **heterozygous** individual has G on one chromosome and a variant base—say T—on the other (G/T). A **homozygous alternative** individual has T on both chromosomes (T/T). If that T disrupts the gene—maybe it creates a stop codon—the homozygous alternative person loses function from both alleles.

For an indel, let's say the reference sequence is ATG. A **homozygous reference** individual has ATG/ATG. A **heterozygous** individual might have ATG on one chromosome and ATGT on the other (a one-base insertion: ATG/ATGT). A **homozygous alternative** individual has ATGT/ATGT. If that extra T shifts the reading frame and scrambles the downstream protein sequence, both alleles are now producing nonsense.

### Biallelic Variation

**Biallelic variation**—affecting both alleles—is the key to recessive disorders. This can happen two ways:

**Homozygous**: The exact same variant appears on both alleles. You inherit the same mutant allele from Mom and from Dad. This is especially common when parents are related (consanguineous), because they're more likely to both carry the same ancestral mutation. In fact, a study of 3,222 British Pakistani adults—many with parents who were second cousins or closer relatives—found that 94.9% of rare homozygous loss-of-function (rhLOF) variants occurred within **autozygous segments**: stretches of DNA where both chromosomes are identical because they descended from a recent common ancestor ([Narasimhan et al., 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC4985238/)).

**Compound heterozygous**: Two *different* variants, one on each allele, both disrupt the gene. You might inherit variant A from Mom and variant B from Dad, and both knock out function. This is less common in consanguineous populations (where homozygous variants dominate) but shows up in outbred populations. For example, studies in Iceland and the ExAC database found 167 and 299 genes, respectively, with compound heterozygous LOF genotypes.

For this discussion, we'll focus mainly on homozygous variants, since they're more prevalent in the consanguineous cohorts that have powered recent recessive disease discoveries.

---

## Consanguinity and Autozygosity

**Consanguinity**—marriage between close relatives like first or second cousins—dramatically increases the chance of recessive disease because it boosts **autozygosity**: regions of the genome where both your chromosomes are identical by descent (IBD) from a recent common ancestor.

Here's why this matters. Imagine your parents are second cousins. They share a pair of great-grandparents. Any rare mutation those great-grandparents carried has a decent chance of being passed down both family lines to your parents, and then to you—giving you two copies of the same mutant allele. It's like inheriting the same broken tool from both sides of the family.

This effect is particularly pronounced in British Pakistani and Bangladeshi communities in the UK, where about 32% of individuals are offspring of second cousins or closer ([Heng et al., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256797/)). In a study of 44,190 British Pakistani and Bangladeshi individuals, researchers found that 5.6% of the coding genome was autozygous—both chromosomes identical by descent. That's orders of magnitude higher than in outbred populations, where almost no autozygosity exists.

The consequence? These individuals collectively carried 1,111 rare homozygous LOF genotypes across 781 genes. That's a treasure trove for geneticists, because it reveals which genes cause disease when completely knocked out—information that's nearly impossible to get from outbred populations where homozygous knockouts are vanishingly rare.

This autozygosity enabled the detection of 185 genetic loci with recessive associations to 898 common diseases. Many of these associations were completely novel, only detectable because of the unique genetic structure of this cohort.

![Figure: Recessive inheritance of WDR62 mutations](https://cdn.ncbi.nlm.nih.gov/pmc/blobs/cd58/3129007/a61339f564cd/nihms-218517-f0002.jpg)

**Recessive inheritance of WDR62 mutations**: These pedigrees from six families (NG26, NG30, NG190, NG294, NG339, NG537) show classic autosomal recessive inheritance of *WDR62* mutations. Each chromatogram shows the mutant allele (left, red bases) and the normal sequence (right, green bases). Notice the variety of mutation types—frameshifts (like V1402GfsX12), nonsense mutations (E526X, Q470X), missense variants (W224S, E526K), and small deletions (G1280AfsX21)—all occurring independently in different families. This illustrates genetic heterogeneity: different mutations in the same gene can cause the same disease. The bottom panel (g) maps where these variants sit along the *WDR62* gene. All affected individuals are homozygous for their respective mutations, consistent with consanguinity increasing the likelihood of inheriting the same recessive allele from both parents ([Bilgüvar et al., 2010, Nature](https://pmc.ncbi.nlm.nih.gov/articles/PMC3129007/)).

---

## Recessive Alleles in Mendelian and Complex Diseases

Traditionally, we think of recessive disorders as **Mendelian diseases**—single-gene conditions with dramatic phenotypes and clear inheritance patterns. Classic examples include cystic fibrosis, sickle cell disease, and Tay-Sachs. Break both copies of the gene, get the disease, with high penetrance (nearly everyone with the genotype shows symptoms).

But NGS studies have revealed that recessive alleles also contribute to **complex diseases**—conditions like hypertension, diabetes, and liver disease where multiple genes and environmental factors interact. The effects are subtler, but they're real and clinically important.

### Mendelian Disorders

A great example comes from a WES study that identified homozygous recessive mutations in the *WDR62* gene across several consanguineous families ([Bilgüvar et al., 2010](https://pmc.ncbi.nlm.nih.gov/articles/PMC3129007/)). Affected individuals had severe brain malformations: microcephaly (abnormally small heads), pachygyria (unusually thick, simplified brain folds), and lissencephaly (smooth brain, lacking normal folding).

The mutations varied—one family had a 4-base-pair deletion causing a frameshift, another had a nonsense mutation, others had missense variants—but all resulted in complete loss of *WDR62* function. This protein is critical for neural progenitor cells, which divide to build the developing brain. Without functional *WDR62*, these cells can't proliferate properly, leading to the severe structural defects seen in affected children. The homozygous nature of these mutations, revealed by the consanguineous pedigrees, definitively proved recessive inheritance.

### Complex Diseases

The 44,190-person British Pakistani and Bangladeshi cohort uncovered something more surprising: 185 loci with recessive associations to common diseases ([Heng et al., 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12256797/)). These aren't dramatic Mendelian disorders—they're everyday health conditions.

For instance, a missense variant in *SGLT4* (rs61746559) showed a protective effect against hypertension. People homozygous for this variant had an 80% lower risk of high blood pressure (odds ratio = 0.2, p = 3 × 10⁻⁸). That's a huge effect size for a common disease. The variant likely alters how the kidney handles sodium, affecting blood pressure regulation through the renin-angiotensin-aldosterone system.

Another example: a recessive variant in *PNPLA3* (rs66812091) was strongly associated with non-alcoholic fatty liver disease (odds ratio = 1.3, p = 2 × 10⁻¹²). Homozygous individuals had elevated liver enzyme levels and increased disease risk. This variant disrupts fat metabolism in liver cells, causing lipid accumulation.

These findings highlight how recessive alleles can influence complex traits through more modest effects. Traditional GWAS studies, which typically assume additive genetic models, often miss these recessive associations. Only by specifically testing for recessive effects—made possible by the high autozygosity in consanguineous populations—do they become visible.

---

## Population Genetics and Selection

Recessive alleles, especially harmful ones, face **natural selection** when they become homozygous. If a recessive mutation causes severe disease or death, individuals homozygous for it won't survive to reproduce, and that allele gets removed from the gene pool. This is why truly deleterious recessive alleles remain rare, even in consanguineous populations.

The British Pakistani study quantified this effect. Researchers compared the observed number of rare homozygous LOF genotypes to the expected number based on allele frequencies and consanguinity rates. They found a 13.7% deficit—there were fewer homozygous knockouts than expected. What happened to the missing ones? They likely caused embryonic or fetal loss, preventing those individuals from reaching adulthood and being counted in the study.

By modeling this deficit, the researchers estimated that each person carries approximately 1.6 recessive lethal-equivalent LOF variants. These are mutations that, when homozygous, cause death before birth or severe disease that prevents reproduction. In consanguineous populations, where these variants become homozygous more often, this "genetic load" manifests as increased rates of pregnancy loss and infant mortality.

But here's the nuance: not all recessive knockouts are harmful. The same study found a healthy mother who was homozygous for a LOF mutation in *PRDM9*, a gene involved in meiotic recombination (how chromosomes swap segments during sperm and egg formation). She had three healthy children, indicating that complete loss of *PRDM9* has minimal health impact in humans, even though it's essential in mice.

This shows that "loss of function" doesn't automatically mean "disease." Some genes are dispensable, or have redundant backups, or only matter in specific contexts. The *PRDM9* example reminds us that the effects of recessive alleles span a spectrum from lethal to neutral to occasionally even beneficial.

---

## Clinical and Biological Implications

Recessive alleles are a goldmine for understanding gene function and disease mechanisms, with direct implications for medicine and drug development.

On one end of the spectrum, severe recessive disorders like the *WDR62* brain malformations teach us about critical developmental processes. Identifying the causative gene helps with diagnosis, genetic counseling, and potentially prenatal testing for at-risk families. It also reveals which cellular pathways are essential—in this case, neural progenitor proliferation—opening avenues for basic research into brain development.

On the other end, the protective *SGLT4* variant against hypertension suggests a new therapeutic target. If knocking out *SGLT4* lowers blood pressure without major side effects, maybe a drug that inhibits *SGLT4* could treat hypertension. This is the same logic that led to PCSK9 inhibitors for cholesterol—copy what beneficial human knockouts do, but with a pill.

The *PNPLA3* variant associated with fatty liver disease has already informed our understanding of lipid metabolism and might guide treatments for this increasingly common condition, which affects millions worldwide and can progress to cirrhosis and liver cancer.

More broadly, studying recessive alleles in consanguineous populations acts like a natural knockout screen—revealing which genes are essential, which are redundant, and which have unexpected roles in common diseases. The fact that 185 loci showed recessive associations to complex traits suggests we've been missing a significant component of the genetic architecture of common diseases by focusing mainly on additive models.

As NGS becomes more widespread and affordable, sequencing diverse populations—including those with high consanguinity—will continue to uncover recessive alleles that inform both rare disease diagnosis and common disease biology. The key insight: two broken copies can teach us as much about human health as one broken copy, just in different ways.