# Chapter 16. Heritability

We've been talking about how thousands of genetic variants shape traits like height. Each variant nudges the trait up or down by a tiny amount, and the cumulative effect determines where you land on the spectrum. But here's a question: if we add up all these genetic effects, how much of the variation we see between people is actually due to genetics versus environment?

This question leads us to one of the most important—and most misunderstood—concepts in genetics: **heritability**. It's a number that tells us what proportion of trait variation in a population comes from genetic differences. But it doesn't tell us whether a trait is "fixed" by genes or how much environment matters. We'll get to why that distinction is so important.

To understand heritability, we need to go back over a century to 1918, when a statistician named R.A. Fisher figured out how to connect Mendel's discrete genetic laws with the continuous variation we see in traits like height. Fisher's framework—called the **polygenic model**—is still the foundation of modern genetics. We'll explore his insights and then connect them to recent studies on human height, BMI, and disease risk.

---

## Fisher's 1918 Paper and the Polygenic Model

### Fisher's Unification of Mendel and Biometry

In the early 1900s, biology had a problem. Two groups of scientists were arguing about how traits are inherited, and they couldn't agree.

On one side were the **Mendelians**. They studied traits that come in discrete categories—like the pea plants Mendel worked with. Round or wrinkled seeds. Tall or short stems. These traits seemed to follow simple rules: you inherit one allele from each parent, and the trait appears in a predictable way.

On the other side were the **biometricians**. They measured traits like human height or weight, which don't come in neat categories. Instead, these traits show continuous variation—a smooth spectrum from short to tall, light to heavy. The biometricians argued that Mendelian laws couldn't explain continuous traits. They thought something else must be going on.

In 1918, R.A. Fisher figured out that both groups were right. His insight was simple but profound: continuous variation can arise from the combined small effects of many Mendelian genes.

Think of it like baking a cake. Each ingredient—flour, sugar, eggs, butter—contributes a little bit to the final taste. No single ingredient determines whether the cake is good or bad. But together, in the right proportions, they create something complex. That's how genes work for traits like height. Hundreds or thousands of genes, each following Mendel's rules, combine to produce the continuous variation we observe.

This 1918 paper laid the foundation for **quantitative genetics**, the field that studies complex traits without needing to know the specific genes involved ([Visscher et al. 2019, Genetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC6456325/)). Fisher's framework is still used today, from twin studies to genome-wide association studies (GWAS) to polygenic risk scores.

---

### Partitioning Phenotypic Variance

Fisher's next move was to mathematically break down trait variation into components. He asked: if we measure a trait like height in a population, where does all that variation come from?

He showed that total trait variation—what we call **phenotypic variance (VP)**—can be split into several pieces:

```
VP = VA + VD + VE + VEnvironment
```

Let's unpack each component:

**VA (Additive variance)** is the variation due to additive alleles—the kind we've been talking about throughout this chapter. Each allele contributes a small, independent effect. If you have more height-increasing alleles, you're taller. If you have fewer, you're shorter. Additive variance is the major source of heritable variation in most human traits.

**VD (Dominance variance)** captures the extra variation that comes from dominance—when having one copy of an allele (AB) produces an effect that's not simply halfway between AA and BB. We saw in the last section that dominance effects are rare and weak in most traits. They contribute a bit of variance, but it's usually small.

**VE (Epistatic variance)** refers to gene-gene interactions—when the effect of one gene depends on which alleles you have at another gene. Epistasis definitely exists, but at the population level, it explains very little of the variance in most traits. Fisher recognized this early on.

**VEnvironment** is everything non-genetic. Nutrition, lifestyle, chance events during development—all the factors that make you different from someone else even if you have identical genomes. For height, environment includes childhood nutrition, illnesses, and other factors that affect bone growth.

Fisher emphasized that **additive genetic variance (VA)** is the key component. Why? Because additive effects determine how much a trait can respond to selection (evolution) and how well we can predict offspring traits from parent traits. Most of the heritability we measure today reflects additive variance.

And here's the cool part: modern studies confirm Fisher's model. Remember the 2022 GWAS on height? The study found **12,111 SNPs** spread across **7,209 genomic segments**, almost all with additive effects ([Yengo et al. 2022, Nature](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/)). That's Fisher's model in action, nearly 100 years later.

---

### Additive Alleles and the No-Dominance Assumption

Fisher made a simplifying assumption that turned out to be surprisingly accurate: he assumed that most alleles act additively, without dominance. Each additional copy of an allele adds a fixed amount to the trait value.

Let's use height again. Imagine you have an allele called B that increases height. Under the no-dominance assumption:
- If you have **AA** (no B alleles), that's your baseline height—let's say 170 cm.
- If you have **AB** (one B allele), you gain 0.5 cm—now you're 170.5 cm.
- If you have **BB** (two B alleles), you gain another 0.5 cm—now you're 171 cm.

Notice that the effect is linear. Each B allele adds exactly 0.5 cm, regardless of how many you already have. There's no dominance—AB is exactly halfway between AA and BB.

Fisher knew this was a simplification. Dominance and epistasis do exist. But at the population level, their contributions to overall variance are small. The no-dominance assumption captures most of what's going on, which is why it's still used in many genetic models today.

---

## Understanding Heritability

### What Heritability Means (and Doesn't Mean)

Now we're ready to define **heritability (h²)**. It's the proportion of phenotypic variance in a population that can be attributed to genetic differences.

For example, if height has an h² of 0.68, that means **68% of the variation in height among people** is explained by genetic differences. The other 32% comes from environmental differences—nutrition, health, and so on.

But here's the critical part, and it's where most people get confused: **heritability describes variation within a population, not how fixed or predetermined a trait is for an individual.**

Let me illustrate with an example. Imagine you plant 100 seeds from the same plant variety in two different fields. Field A has rich, well-watered soil. Field B has poor, dry soil. 

In Field A, the plants grow to different heights—some are 150 cm, others are 180 cm. Because all the plants get the same excellent conditions, most of that variation is due to genetic differences between seeds. You'd calculate a high heritability—say, h² = 0.80.

In Field B, the plants also vary in height, but they're all shorter overall—maybe 100 to 130 cm. Again, because they all experience the same poor conditions, most of the variation within Field B is genetic. You'd calculate a similar h² = 0.80.

Now here's the key insight: even though heritability is high in both fields, the **difference between the two fields is entirely environmental**. The plants in Field A aren't genetically superior—they just had better soil. Heritability tells you nothing about why Field A plants are taller on average. It only tells you why plants within each field differ from each other.

This is why heritability doesn't mean a trait is "fixed" or that environment doesn't matter. High heritability just means that **within the specific environment you're studying**, most of the remaining variation between individuals comes from genetic differences. Change the environment, and heritability can change too.

For human height, h² ≈ 0.68 in modern populations with good nutrition. But if we compared populations with vastly different access to food, environmental variance would increase, and heritability would drop—even though the genes haven't changed at all.

---

### Narrow-Sense and Broad-Sense Heritability

There are actually two types of heritability, and it's worth knowing the difference.

**Narrow-sense heritability (h²)** measures the fraction of variance due to additive genetic effects. It's calculated as:

```
h² = VA / VP
```

where VA is additive variance and VP is total phenotypic variance. Narrow-sense heritability is what matters for predicting resemblance between parents and offspring. If you want to know how tall your children will be based on your height, narrow-sense heritability is the relevant number.

**Broad-sense heritability (H²)** includes all genetic effects—additive, dominance, and epistatic. It's calculated as:

```
H² = (VA + VD + VE) / VP
```

Broad-sense heritability captures the total genetic influence on a trait, but it's less useful for prediction. Why? Because dominance and epistatic effects don't reliably pass from parent to offspring. When you make a baby, you're shuffling alleles and creating new combinations. Additive effects pass on predictably, but dominance and epistatic effects get scrambled.

In practice, most studies focus on narrow-sense heritability because it's more informative for understanding inheritance and evolution.

---

## How Heritability Is Estimated

So how do scientists actually calculate heritability? There are several methods, but they all rely on the same basic idea: **closer relatives share more genes and thus have more similar traits**.

### Covariance and Relatedness

The key concept here is **covariance between relatives**. Covariance is a statistical measure of how two things vary together. If you and your sibling are both tall, or both short, your heights covary. If one is tall and the other is short, there's less covariance.

Genetic relatives share DNA, so their traits tend to covary. The more DNA they share, the stronger the covariance. Here's what that looks like in practice:

**Identical twins** share about 100% of their DNA (they're genetic clones). If you measure height in identical twins, you'll find they're very similar—not exactly the same, because environment still plays a role, but very close.

**Siblings** share about 50% of their DNA on average. Each sibling inherits a random half of each parent's genome. Siblings are more similar in height than unrelated people, but less similar than identical twins.

**First cousins** share about 12.5% of their DNA. They're more similar than strangers, but much less similar than siblings.

The pattern is clear: **closer relatives, stronger covariance**. This relationship forms the mathematical basis for estimating heritability. If you know how much DNA two relatives share and how similar their traits are, you can work backward to estimate how much of the trait variation is due to genetics.

### Twin Studies

Twin studies are one of the classic methods for estimating heritability. The idea is to compare two types of twins:

**Monozygotic (MZ) twins**—also called identical twins—share about 100% of their DNA. They come from a single fertilized egg that split into two embryos.

**Dizygotic (DZ) twins**—also called fraternal twins—share about 50% of their DNA, just like regular siblings. They come from two separate fertilized eggs.

Here's the logic: if MZ twins are more similar in a trait than DZ twins, the difference reflects genetic influence. If MZ and DZ twins are equally similar, environment must be the main factor.

For height, MZ twins are much more similar than DZ twins. This gives an h² estimate of about 0.80 for height from twin studies—pretty high, meaning genetics plays a strong role.

But there's a caveat. Twins, especially MZ twins, often share very similar environments. They grow up in the same household, eat the same food, and may even be dressed alike. This shared environment can make them appear more similar, slightly inflating heritability estimates. Modern studies try to account for this by comparing twins raised together versus twins raised apart, but such cases are rare.

### SNP-Based Heritability

Modern genetics offers a more direct approach: estimate heritability from genetic data itself. Instead of inferring shared DNA from pedigrees, we can now sequence people's genomes and measure how genetically similar they are at millions of SNPs.

Here's how it works. Take a large sample of unrelated individuals—say, 50,000 people. Measure a trait like height. Then compare genetic similarity (based on SNPs) to trait similarity. If people who are slightly more genetically similar also tend to have more similar heights, that tells you genetics influences the trait.

One popular method is **LDSC (linkage disequilibrium score regression)**, which we encountered in the previous section. LDSC estimates heritability by looking at how strongly trait-associated SNPs correlate with nearby SNPs due to linkage disequilibrium.

For height, SNP-based heritability comes out to about **h² ≈ 0.68**. That's a bit lower than the twin-study estimate of 0.80, and there are a few reasons why. SNP-based heritability typically uses common SNPs (MAF > 1%), so it misses some rare variants. Also, it doesn't capture structural variants or other genetic differences that SNP chips don't detect well.

Interestingly, when rare variants are included, the estimate goes up. A 2022 study using whole-genome sequencing found that rare variants in low linkage disequilibrium contribute about 0.31 of the phenotypic variance in height ([Wainschtein et al. 2022, Nat Genet](https://pmc.ncbi.nlm.nih.gov/articles/PMC9119698/)). Add that to the common SNP component, and you're getting closer to the twin-study estimate.

---

## Why Heritability Changes Across Traits and Environments

Heritability is not a fixed property of a trait. It can differ across populations, time periods, or environments. Here's why.

Remember the formula:

```
h² = VA / VP
```

Heritability depends on both the numerator (genetic variance) and the denominator (total phenotypic variance). If environmental variance changes, the denominator changes, and so does heritability—even if genetic variance stays the same.

Let's look at a few examples:

**Height** has an h² of about 0.68 in well-nourished populations. Why not higher? Because even in genetically similar people, environmental factors like childhood nutrition, illness, and growth conditions create variation. But in populations with severe malnutrition, environmental variance would be much larger, and heritability would drop.

**BMI (body mass index)** has an h² of about 0.30—much lower than height. Why? Because BMI is strongly influenced by diet, exercise, and lifestyle. Genetic differences still matter, but environmental differences dominate. If you took the same population and put everyone on identical diets and exercise routines (which you can't do in real life, but imagine), environmental variance would shrink and heritability would appear to increase.

**Blood pressure** has an h² of about 0.25, also relatively low. Diet, stress, physical activity, and medication all have large effects. Genetic differences contribute, but environment is a major player.

Here's the key takeaway: **high heritability does not mean environment is unimportant**. It simply means genetic differences explain most of the remaining variation within that specific population and environment. Change the environment, and the picture can shift dramatically.

---

## Fisher's Model in Modern Context

More than a century after Fisher's 1918 paper, his framework is still the backbone of modern genetics. Let's see how recent findings fit with his model.

**Thousands of common SNPs contribute small additive effects.** The 2022 GWAS on height found 12,111 SNPs spread across 7,209 genomic regions ([Yengo et al. 2022, Nature](https://pmc.ncbi.nlm.nih.gov/articles/PMC9605867/)). Almost all of these effects are additive, just as Fisher predicted. Each SNP nudges height up or down by a fraction of a centimeter, and together they explain most of the genetic variance.

**Dominance effects are rare and weak.** The 2023 UK Biobank study found dominance effects at 183 loci, but they explained less than 1% of the additive variance on average ([Palmer et al. 2023, Science](https://pmc.ncbi.nlm.nih.gov/articles/PMC10345642/)). Fisher was right to focus on additive variance—it's where most of the action is.

**Epistasis exists but contributes little to population-level variation.** A 2019 review emphasizes this point: gene-gene interactions happen, but they don't explain much of the trait variance we observe across populations ([Visscher et al. 2019, Genetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC6456325/)). Additive effects dominate.

Fisher's model has proven remarkably robust. It underlies everything from **twin studies** to **GWAS** to **polygenic risk scores**—those scores that combine information from thousands of SNPs to predict traits or disease risks.

As noted in a 2019 review, Fisher's 1918 framework still guides how we study genetic architecture today ([Visscher et al. 2019, Genetics](https://pmc.ncbi.nlm.nih.gov/articles/PMC6456325/)). It explains **trait variation**, not individual destiny. And that's an important distinction. Knowing that height has high heritability doesn't tell you how tall *you* will be—it tells you why people in a population differ from each other.

---

## Putting It All Together

Let's recap what we've learned about heritability:

Fisher unified Mendelian genetics with continuous trait variation back in 1918. He showed that many genes, each with small additive effects, could produce the smooth variation we see in traits like height. His insight gave birth to quantitative genetics.

Phenotypic variance can be partitioned into components: **Additive (VA)** + **Dominance (VD)** + **Epistatic (VE)** + **Environment (VEnvironment)**. Additive variance drives most heritability and evolutionary response. Dominance and epistasis exist, but they explain little variance at the population level.

**Heritability (h²)** measures variation within a population, not genetic "determination" of individuals. An h² of 0.68 for height means 68% of the differences among people come from genetic differences, not that your height is 68% genetic. Your height is 100% the product of genes and environment working together.

Heritability depends on environmental conditions and can change over time. If nutrition improves and everyone gets adequate food, environmental variance shrinks, and heritability can appear to increase—even though genes haven't changed. Heritability is a snapshot of a specific population in a specific environment.

We estimate heritability through **covariance** between relatives. Twin studies compare identical and fraternal twins. SNP-based studies measure genetic similarity directly. Both approaches confirm that traits like height have substantial genetic influence, while traits like BMI and blood pressure show stronger environmental effects.

Fisher's model still underlies modern GWAS and polygenic prediction. More than 100 years later, his framework remains the foundation for understanding complex traits. The details have gotten more sophisticated—we can now identify specific SNPs and measure their effects—but the basic model is Fisher's.