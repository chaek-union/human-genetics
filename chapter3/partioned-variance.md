# Partitioned Variance: Learn from Real-World Examples

We've spent the last few sections building up theory—Fisher's model, heritability, additive versus dominant effects. Now let's see how all of this actually works in real biomedical research. How do scientists use the concept of **partitioned variance** to answer messy, complicated questions about health and disease?

The idea is simple but powerful. When you measure a trait in a population, the variation you see comes from multiple sources: genes, environment, behavior, and their interactions. If you can statistically separate these sources—partition the variance—you can figure out what's really driving the trait. More importantly, you can avoid mistaking correlation for causation.

In this section, we'll look at two recent studies that beautifully illustrate this approach:

1. **Yap et al. (2021, Cell)** asked: Does the gut microbiome cause autism? They partitioned variance across biological layers—genome, diet, and microbiome—to find out.

2. **Ahlqvist et al. (2024, JAMA)** asked: Does taking Tylenol during pregnancy increase autism risk? They partitioned variance into familial (shared) and environmental (unique) components using siblings.

Both studies reveal something surprising: associations that seem real at first glance often disappear when you properly account for where the variance comes from. Let's dive in.

---

## The Microbiome and Autism

You've probably heard claims about gut bacteria affecting everything from mood to brain development. One popular idea is that the gut microbiome might play a role in autism spectrum disorder (ASD). Some studies have found differences in gut bacteria between autistic and non-autistic children, and this has led to speculation—and even commercial products—claiming that changing the microbiome could help treat autism.

But here's the question: do those microbial differences actually *cause* autism, or are they just a reflection of something else?

**Yap et al. (2021)** set out to answer this question using a clever approach. They studied 247 children, including those with ASD, and measured three things: autism diagnosis, dietary patterns, and gut microbiome composition. Then they used a statistical method to estimate how much of the variation in each trait could be explained by differences in the microbiome.

They created a metric called the **microbiome-association index (b²)**, which works just like heritability (h²), but for microbes instead of genes. If the microbiome explains a lot of variance in a trait, b² is high. If it explains little, b² is low.

### What They Found

Here's what the numbers showed:

The **microbiome explained almost none of the variance in ASD diagnosis**. The b² was somewhere between 0% and 9%—essentially zero. In other words, knowing someone's gut microbiome composition tells you almost nothing about whether they have autism.

But the microbiome *did* explain a large chunk of variance in **dietary patterns and stool consistency**. For these traits, b² was around 40–64%. That makes sense—what you eat directly affects which bacteria thrive in your gut and how your digestion works.

So what's going on? If the microbiome doesn't explain autism, why do some studies find differences in gut bacteria between autistic and non-autistic kids?

The answer is **indirect pathways**. Here's how it works:

Autism affects behavior, including eating behavior. Many autistic children have selective eating patterns—they prefer certain textures, flavors, or routines around food. These dietary preferences shape the gut microbiome. If you eat a limited variety of foods, your microbiome becomes less diverse. If you eat mostly processed foods, certain bacteria thrive while others don't.

So the chain of causation goes like this:
- Autism → selective eating → altered diet → different microbiome composition

The microbiome isn't causing autism. It's reflecting behavioral traits associated with autism. The microbiome is like a mirror—it shows you something about the person, but it's not the original cause.

### Why This Matters for Variance Partitioning

This study is a great example of how variance partitioning extends beyond just genes and environment. Yap and colleagues effectively divided up the variance into layers:

**Genetic factors (A or D)** affect neurodevelopment and behavior. Some of the genes that increase autism risk also influence sensory processing and eating preferences.

**Behavioral factors** mediate the connection between genes and other traits. Selective eating is a behavior, shaped by both genetics and experience.

**Environmental factors**, including the microbiome, respond to those behaviors. Your gut bacteria are part of your environment, but they're shaped by what you do—especially what you eat.

**Gene-by-environment interactions (G × E)** might also play a role. Maybe certain gut bacteria affect physiology differently depending on your genetic background. But even if those interactions exist, they don't mean the microbiome is causing autism.

By partitioning variance across these biological layers—host genetics, behavior, diet, and microbiome—Yap's team showed that the apparent link between microbiome and autism is mostly a story about behavior, not microbial causation.

---

## Familial Confounding and Additive Factors—Acetaminophen and Autism

Let's look at a different kind of question. Does taking acetaminophen (Tylenol) during pregnancy increase the risk of autism or ADHD in children?

This question matters because acetaminophen is one of the most commonly used medications during pregnancy. It's generally considered safe for pain and fever. But over the past decade, some studies have suggested a link between prenatal acetaminophen use and neurodevelopmental disorders. Understandably, this has worried a lot of pregnant people.

**Ahlqvist et al. (2024)** tackled this question using a massive dataset: **2.48 million children born in Sweden**. They had access to detailed records of medication use during pregnancy and diagnoses of autism and ADHD in childhood.

### What They Found at First

When the researchers ran a standard population-level analysis, they found a weak association. Children whose mothers used acetaminophen during pregnancy had a slightly higher risk of autism and ADHD—about 5–7% higher (hazard ratio ≈ 1.05–1.07).

At first glance, this looks concerning. But here's where variance partitioning comes in.

### The Sibling Control Analysis

Ahlqvist and colleagues did something clever: they compared **siblings born to the same parents**. In some families, the mother took acetaminophen during one pregnancy but not another. By comparing those siblings, the researchers could control for all the factors that siblings share—genetic background, parental health, socioeconomic status, home environment, and so on.

When they ran this sibling control analysis, the association completely disappeared. The hazard ratio dropped to **1.0** for all outcomes—autism, ADHD, everything. No link at all.

### What This Means

The initial association wasn't due to acetaminophen causing neurodevelopmental problems. It was due to **familial confounding**—shared factors within families that influence both medication use and child outcomes.

Think about it: which families are more likely to use acetaminophen during pregnancy? Maybe families where the mother has more health problems, or more stress, or different health-seeking behaviors. Those same factors might also affect the child's neurodevelopment, either through genetics or through the prenatal environment.

Here's the chain of hidden causation:
- Shared family factors → both acetaminophen use and child neurodevelopment

The acetaminophen isn't causing autism. It's just correlated with autism because both are influenced by the same underlying family-level factors.

By comparing siblings, the researchers effectively controlled for **additive familial effects (A)** and shared environment. Siblings share about 50% of their DNA and grow up in the same household. When you compare siblings, you're holding constant all those shared factors. What's left is the **unique environmental effect (E)**—the things that differ between pregnancies for the same mother.

And that unique effect of acetaminophen? Zero.

### Connecting This to Fisher's Model

This is a textbook example of variance partitioning in action. Remember Fisher's equation:

**VP = A + D + E + Environment**

In the population-level analysis, acetaminophen use was confounded with A (additive genetic factors) and shared environment. The association looked real because all these factors were tangled together.

In the sibling control analysis, the researchers effectively subtracted out A and shared environment. What remained was the unique environmental effect of acetaminophen during that specific pregnancy. And that effect was zero.

This demonstrates why **additive variance (A)** matters so much in real-world research. Additive effects explain why family members resemble each other, and they can create spurious associations in observational studies. If you don't account for shared familial factors, you can easily mistake correlation for causation.

---

## Connecting the Two Examples

Let's step back and see what these two studies have in common.

**Yap et al.** focused on the microbiome and behavioral mediation. They asked: Does the gut microbiome explain autism? Their approach was to partition variance using b² (the microbiome analog of heritability). They found that the apparent ASD–microbiome link was really a story about diet and behavior. The microbiome reflects dietary patterns, which in turn reflect autism-related eating behaviors. Once you account for behavior, the direct microbiome effect on autism vanishes.

**Ahlqvist et al.** focused on prenatal drug exposure and familial confounding. They asked: Does acetaminophen cause autism? Their approach was a sibling control analysis, which partitions variance into shared family factors versus unique environmental effects. They found that the apparent Tylenol–ASD link was really a story about shared family characteristics. Once you compare siblings (controlling for additive familial factors), the acetaminophen effect vanishes.

Despite studying completely different questions, both studies followed the same logic:
1. Observe an association in the population.
2. Partition variance to separate different sources of variation.
3. Discover that the association is driven by confounding factors, not direct causation.

In the Yap study, the confounding factor was **behavior** (selective eating). In the Ahlqvist study, the confounding factor was **shared family background** (genes and environment). But the principle is the same: don't assume correlation means causation until you've partitioned the variance.

Here's a side-by-side comparison:

**Yap et al. (Cell, 2021)**: They studied the microbiome and behavioral mediation. Their approach used variance partitioning with b² (microbiome analog of heritability). The key finding was that the ASD–microbiome link was explained by diet and behavior, not direct microbial effects. The main takeaway: environmental variation (microbiome) can reflect behavior and gene-by-environment interactions, not causation.

**Ahlqvist et al. (JAMA, 2024)**: They studied prenatal drug exposure and familial confounding. Their approach used sibling control analysis (within-family adjustment). The key finding was that the Tylenol–ASD link was explained by shared family factors, not the drug itself. The main takeaway: additive familial factors must be accounted for to reveal true environmental effects.

Both studies show how **partitioning variance**—into additive, dominance, environmental, and behavioral components—helps answer complex biological questions. By properly accounting for shared influences and environmental interactions, researchers can distinguish genuine causal effects from correlations shaped by family background or behavior.

---

## What We Learn from These Examples

Let's pull out the lessons that apply beyond these specific studies.

**Variance partitioning isn't limited to genetics.** Fisher's framework started with genes, but the logic applies to any biological or environmental variable. Yap's study shows you can partition variance between microbiome, diet, and behavior. The same approach could work for hormones, metabolites, or brain activity patterns. The key is to separate correlated factors and figure out which ones actually drive the trait.

**Apparent associations often disappear when you control for confounding factors.** Both studies found initial associations that looked real—microbiome differences in autistic kids, higher autism risk with Tylenol use. But once they partitioned variance properly, the associations vanished. This is a reminder to be skeptical of observational correlations, especially in complex traits.

**Distinguishing between A (additive) and E (environmental) variance is essential for causal inference.** If you don't account for familial factors (A), you'll mistake shared family characteristics for environmental causes. The sibling control design is one powerful way to separate these components. Twin studies and polygenic scores are others.

**Understanding how variance is distributed across biological and social layers prevents misinterpretation.** Autism research is full of claims about potential causes—vaccines, diet, pollution, microbiome, you name it. Many of these claims come from studies that found correlations but didn't partition variance properly. When you do partition variance, most of these associations either shrink dramatically or disappear.

**Fisher's framework remains a universal tool.** Whether you're studying genome, microbiome, or family-level effects, the logic is the same: VP = A + D + E + Environment. Partition the variance into components, model each one separately, and see which ones actually matter. More than 100 years after Fisher introduced this approach, it's still the gold standard for analyzing complex traits.

---

These real-world examples show why we spent so much time learning theory. The math and concepts aren't just abstract—they're tools for answering the questions that matter. Can we prevent autism by changing gut bacteria? Should pregnant people avoid Tylenol? These are high-stakes questions, and getting the answers right requires careful partitioning of variance.

The next time you see a headline claiming "X causes Y," ask yourself: Did they account for shared familial factors? Did they consider behavioral pathways? Did they partition the variance? If not, take the claim with a grain of sal