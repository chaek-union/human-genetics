# Getting Started

## Why I wrote this book for undergraduate students

If you learned genetics in Korean high school, you probably remember learning about "유전자" (gene) when studying Mendel's pea plant experiments. Later, you might have encountered "대립유전자" (allele) and thought, "Isn't that just another type of 유전자?" This confusion isn't your fault—it's a symptom of how biological concepts have evolved faster than the language we use to teach them. The two Korean terms sound like they're related (one just has 대립- added to the front), but they actually refer to completely different biological concepts. A gene is a functional unit of DNA that codes for a protein or RNA, like a recipe in a cookbook. An allele is a specific sequence variant at a position in your genome, like having version A versus version B of that recipe. The distinction matters profoundly when you move from textbook exercises to real research.

Many of you will graduate and enter research labs and companies where you'll analyze NGS (Next-Generation Sequencing) data. There, you'll encounter terms like "genetic variants," "allele frequencies," and "SNVs"—concepts that seem disconnected from what your textbooks taught. This gap exists because both high school and university textbooks often teach genetics from perspectives developed decades ago, while modern genomics operates with fundamentally different frameworks. But this disconnect reveals something deeper about how science actually works: it is not about memorizing terms, but about *how our perspectives evolve*. Biology has advanced not because new words were invented, but because scientists began to *see the same phenomena differently*.

Genetics shows this transformation more clearly than perhaps any other field. Over the past 150 years, what we now call an "allele" evolved from an invisible "factor" to a measurable genetic variant. Each generation of discovery didn't erase the previous one—it *expanded* what "allele" could mean, revealing new layers of how inheritance actually works.

Consider what Mendel himself wrote in 1866. In his original German paper, he never used words like "gene" or "allele." Instead, he wrote about *Factoren*—factors:

> *"Wir müssen es daher als nothwendig erachten, dass auch bei Erzeugung der constanten Formen an der Hybridpflanze vollkommen gleiche Factoren zusammenwirken." Mendel, G. (1866). Versuche über Pflanzenhybriden. Verhandlungen des naturforschenden Vereines in Brünn, Bd. IV, 3-47."*
>
> (We must therefore consider it necessary that perfectly equal factors also work together in the production of the constant forms on the hybrid plant.)

Mendel never saw these *Factoren*. He inferred their existence purely from mathematical ratios—3:1, 9:3:3:1—in pea plants. He proposed that hybrids must produce different types of reproductive cells, each carrying different combinations of these invisible factors. This was radical: reducing inheritance to countable, combinable units that followed predictable laws, like equations in physics. 

What Mendel called *Factoren* became the conceptual ancestor of both "gene" and "allele"—but these two descendants now mean very different things. The table below traces how scientific understanding evolved, and how what began as a single abstract concept gradually split into distinct ideas.

| Era | Conceptual View | Key Idea |
|------|-----------------|-----------|
| 1860s | **Mendel's Factoren (Gregor Mendel)** | Invisible hereditary units determine observable traits through predictable ratios |
| 1900s | **Chromosome Theory of Inheritance (Walter Sutton, Theodor Boveri)** | Mendel's hereditary factors correspond to specific parts of chromosomes |
| 1910s | **Linkage and Recombination (Thomas Hunt Morgan)** | Factors are arranged linearly on chromosomes and can recombine during meiosis |
| 1940s | **One Gene–One Enzyme Hypothesis (George Beadle & Edward Tatum)** | Each factor (now "gene") encodes a specific enzyme → *gene as functional unit* |
| 1950s | **Central Dogma (James Watson, Francis Crick, Sydney Brenner)** | DNA → RNA → Protein; genetic information flows from DNA sequence to biological function |
| 1960s–1970s | **Regulatory Unit (François Jacob, Jacques Monod, Barbara McClintock)** | Genes act as dynamic regulatory units; variation in genes creates different outcomes |
| 2000s–Now | **Genome as a Collection of Variants (NGS Era)** | Genetic individuality is defined by sequence variation → *allele as genetic variant* |

This journey—from invisible *Factoren* to molecular information, and now to measurable sequence variation—marks one of the most profound transformations in biology. What began as Mendel's mathematical inference became a physical chromosome segment in the early 1900s, then a DNA sequence in the 1950s, and finally variants we can read directly from your genome at single-nucleotide resolution. Along the way, that original concept of *Factoren* split into two related but fundamentally different ideas: the *gene* as a functional unit (a DNA segment encoding a protein or RNA), and the *allele* as a sequence variant (version A versus version B at a specific genomic position). When you analyze NGS data in a research lab, you're not studying "genes" in Mendel's sense—you're identifying *alleles*, the specific DNA variants that differ between individuals and populations.

To study genetics is not simply to learn definitions, but to follow how scientists have *redefined what it means to inherit information*. Many students arrive at university after years of exam preparation, where memorization often dominated science education. But modern biology evolves rapidly as new data emerge daily. Because biology interprets natural phenomena, our understanding shifts as new evidence accumulates. What matters most is not remembering every term, but learning to interpret data and think about the principles that best explain life *right now*—and recognizing that those principles will themselves evolve as new technologies and discoveries emerge.

In this textbook, we'll examine essential concepts through key scientific papers and explore how they're applied in real research today. By connecting historical discoveries like Mendel's *Factoren* to current genomic approaches like variant calling and population genetics, you'll see how biological understanding grows through evidence and reinterpretation. You'll learn not just what scientists currently think, but *why* they think it—and how new data might change that thinking tomorrow.

Science advances when perspectives evolve—and your own research may one day become part of that evolution.

---

## From consuming knowledge to creating it

The confusion between "gene" and "allele" isn't just a translation problem—it reflects something deeper about how biological knowledge evolves. Every generation of scientists inherits not only data, but also a **paradigm**: a shared framework for interpreting the world. A paradigm defines what counts as a meaningful question, what methods are trusted, and what kinds of explanations make sense.

Consider the historical shifts we traced earlier. When Mendel's invisible *Factoren* became visible as chromosomes under the microscope, biologists didn't just gain new facts—they gained a **new way of asking questions**. Before chromosomes were seen, the question "Where in the cell are hereditary factors located?" seemed almost philosophical. After chromosomes, it became an experimental question with testable answers. When Watson and Crick revealed DNA's structure, the paradigm shifted again: genes became **information** encoded in sequence, not just physical substances. The Human Genome Project shifted it once more: suddenly, biology became a data science where computational analysis mattered as much as laboratory experiments. These weren't just discoveries—they were **changes in how we recognize and organize knowledge itself**. Each technological advance didn't simply add information; it transformed what "understanding genetics" actually meant.


In Korean education, success has traditionally meant absorbing established knowledge and reproducing it accurately. This approach works well when knowledge is stable and well-defined. But as you transition into research, your role fundamentally changes—from *knowledge consumer* to *knowledge producer*. Most research questions have **no predefined answers**. More importantly, they often don't even have predefined *language* yet.

When researchers first encountered millions of DNA sequence variants from the 1000 Genomes Project, existing terminology struggled to keep up. Were these all "mutations"? "Polymorphisms"? "Alleles"? The field had to negotiate new vocabulary because the old categories didn't capture what sequencing revealed. You'll face similar moments in your career—situations where you must interpret patterns that don't yet have names, or where established terms don't quite fit what you observe.

This is why learning to express ideas **in your own language** becomes crucial. Science advances not through repetition, but through reinterpretation. Someone must look at familiar data through a new lens, articulate what they see differently, and convince others that this new perspective reveals something important. That "someone" could be you.

In this book, we'll focus on the **logic of discovery**, not just conclusions. You'll read historical milestones and modern papers not to memorize their results, but to understand **how ideas shift when technology lets us see differently**. Recognizing these patterns will help you navigate future paradigm shifts—and perhaps contribute to them.

Your scientific journey begins not with knowing all the answers, but with learning to ask: *What do we believe today, and why? What might the next generation see differently?*

---

## Why this course feels different

Some students tell me this course feels too computational or mathematical for biology. They're right—and that reflects how genetics itself has transformed. When I was a student in the early 2000s, understanding genetics meant knowing key mechanisms: how transcription works, how proteins fold, how genes regulate cell behavior. Today, the questions have fundamentally changed. We don't ask "What does this gene do?" but "How do thousands of genetic variants collectively influence disease risk?" We don't just describe what genes are expressed, but build models to predict expression patterns from DNA sequence using machine learning.

This shift happened because our ability to measure life exploded. We went from studying individual genes to analyzing millions of variants simultaneously. From microscope observations to computational predictions. Biology became a data science. That's why this textbook looks different. When we discuss alleles, we'll also examine allele frequencies and Hardy-Weinberg equilibrium—not as abstract formulas, but as tools for interpreting real population genomic data. When we explore gene expression, we'll see how RNA-seq data are quantified, because understanding data generation shapes interpretation.

You're entering biology at a remarkable moment: the boundary between wet-lab experiments, computation, and theory has never been thinner. Some concepts from earlier courses may look different here—not because your previous education was wrong, but because you're now seeing genetics through the lens contemporary researchers actually use. This course prepares you not just to understand today's genetics, but to help create tomorrow's.

---

## Learning the Language of Science

Scientific papers often feel difficult not because of their content, but because they use a *special dialect*—what we call **scientific jargon**. Every field, every era, and even every research group develops its own preferred terms and expressions. When you read a paper, remember that a single phrase or word is **not a fixed dogma**, but the author's best attempt to describe a complex idea in the language available at that time. Learning to read science means learning to *translate* these expressions—to understand the author's intention rather than memorizing the phrasing.

### Types of Scientific Papers

Not all papers serve the same purpose. Recognizing the type helps you approach it with the right expectations:

| **Paper Type** | **Purpose** | **When to Read** |
|----------------|-------------|------------------|
| **Article (Research Article)** | Reports original experimental findings—new data, new discoveries | To see how researchers test hypotheses and generate evidence |
| **Article (Resource)** | Presents large datasets or computational tools, common in genomics and omics fields | When you need access to data or methods for your own analysis |
| **Review** | Summarizes and synthesizes existing research on a topic | To understand the big picture and catch up on a field (no new data) |
| **Perspective** | Offers an author's viewpoint on a field's direction or interpretation | To understand debates about what questions matter most or how to interpret conflicting results |
| **Methods** | Describes a new experimental or computational technique | When you need to understand *how* something is done, not *what* was discovered |

### Practical Tips for Reading Scientific Papers

1. **Start with the big picture.** Read the **title**, **abstract**, and **figure legends** first. Try to understand what question the authors asked and why it matters—not every technical detail.

2. **Focus on the question, not the methods.** Beginners often get lost in experimental procedures. Instead, ask: *"What were they trying to test?"* and *"Did their data support that idea?"* The logic matters more than the jargon.

3. **Read the figures before the text.** Figures are the core of a paper. Even if you don't understand all of them, try to guess what story the figure is telling—it trains scientific reasoning.

4. **Don't trust AI summaries blindly.** Tools that summarize papers can be helpful, but they often miss nuances, misinterpret complex arguments, or oversimplify critical details. Always read the original paper yourself—especially the figures and key results sections—to verify what the AI told you.

5. **Avoid secondary sources for cutting-edge genomics.** For the latest genomic and genetic research, **Korean-language resources simply don't exist**—not on Naver, not on Tistory blogs, not even in translated news articles. These sources are often outdated, oversimplified, or outright incorrect. If you're serious about understanding current research, you must read the original English papers.

6. **Wikipedia vs. research papers.** Wikipedia offers consensus knowledge—a stable background. Papers reflect active discovery—sometimes uncertain or even contradictory. The difference between them is what makes science dynamic.

7. **Annotate as you read.** Write short notes in the margins or keep a glossary of terms. Over time, you'll build your own understanding of the field's language.

8. **Check citation formats.** *et al.* means *"and others."* It's used to cite studies with multiple authors, e.g., *Kim et al. (2024)*. When you write, always include the year and keep the format consistent.

Reading scientific papers is like learning a new language—you start by recognizing patterns, then understanding meaning, and finally gaining fluency. It's less about decoding every word and more about **joining an ongoing conversation**: learning how scientists reason, argue, and refine their understanding through shared curiosity and a willingness to keep interpreting.

---

## Using AI to Read Papers More Effectively

Artificial intelligence can be a powerful companion in learning to read scientific papers—**and yes, in reading this textbook too**. Many of you will use AI to summarize chapters, clarify concepts, or review material before exams. This is understandable, even expected. But AI is most useful when you use it *to think with*, not *to think for you*.

### Using AI with This Textbook

Let's be honest: you will likely ask AI to summarize sections of this book. That's fine—but understand what you gain and what you lose.

**What AI summaries can do:**
- Give you a quick overview before reading in detail
- Help you review key points after you've studied
- Clarify a confusing paragraph you've already tried to understand

**What AI summaries cannot do:**
- Replace the experience of working through an explanation step-by-step
- Teach you how concepts connect across chapters
- Help you develop the intuition that comes from seeing examples worked out in full

A summary might tell you "Hardy-Weinberg equilibrium describes allele frequencies in a non-evolving population." But this textbook shows you *why* that matters, *how* real populations deviate from it, and *what* those deviations teach us about evolution and disease. The summary gives you words to memorize; the textbook gives you a way of thinking.

**A better approach:** Use AI as a conversation partner *while you read*. For example:

```
I just read the section on linkage disequilibrium in Chapter 3. The textbook 
says LD decays over generations due to recombination, but I'm confused about 
why some regions have high LD even after many generations. Can you help me 
think through this?
```

*[Claude discusses factors that maintain LD: selection, population structure, low recombination rates]*

```
So if I'm looking at a genomic region with high LD in a GWAS, that could mean 
either low recombination OR recent selection? How would I tell the difference?
```

*[Conversation continues, building understanding beyond what a simple summary provides]*

This kind of dialogue helps you think *with* the material, not just consume it passively.

### Using AI to Read Scientific Papers

When you encounter a difficult paper, you can use AI to:
- **Summarize** sections in simpler language and check if you understood them correctly.
- **Ask "why" and "how" questions**, not just "what." For example: *"Why did the authors use RNA-seq instead of microarrays?"* or *"How does this figure support their main claim?"*
- **Compare interpretations.** You can ask the AI how two papers differ in their conclusions or methods—a skill essential for critical reading.
- **Translate specialized language.** If a term or phrase feels confusing, let AI explain it in everyday language, then return to the paper and see how that meaning fits in context.

However, remember these rules:

1. **AI cannot replace your judgment.** It can explain what something means, but not decide whether it makes sense. Always verify claims by checking the data and figures in the paper itself.
2. **Avoid using AI-generated summaries as your only source.** Summaries are interpretations, not neutral facts. Always read the original paper—especially the figures and key results—to see what nuances were lost.
3. **Be critical of citations.** When AI mentions a reference, check whether that study really exists and whether it supports the point being made. This practice trains you to validate information—a core scientific skill.
4. **Use AI to practice paraphrasing.** Try explaining a result in your own words, then ask the AI to review whether your version keeps the meaning. This is how real understanding develops.

### Recommended AI Tools for This Course

You can use several large language models (LLMs) to study and discuss scientific papers and textbook material. While many tools exist, **I particularly recommend two for this course:**

**Claude (Anthropic)** — My top recommendation for this course. Claude excels at:
- Long-form reasoning and interpreting complex scientific papers
- Having extended conversations where you build understanding iteratively
- Handling technical genetics concepts with nuance
- Reading uploaded PDFs of papers and textbook chapters directly

**NotebookLM (Google)** — Excellent for:
- Uploading and organizing multiple papers or textbook chapters
- Creating study guides and summaries from your uploaded materials
- Asking questions across several documents simultaneously
- Generating practice questions based on course content

Other tools you might encounter:
- **ChatGPT (OpenAI)** — balanced general reasoning and academic reading ability
- **Gemini (Google)** — strong integration with Google search and datasets

All of these tools can assist in reading, summarizing, and questioning research papers and textbooks. The goal is not to let the AI read *for* you, but to **learn to read *with* the AI**.

### Writing Good Prompts: A Conversation Example

How you ask determines what you learn. Rather than asking isolated questions, treat the AI like a study partner and build your understanding through dialogue. Here's an example of how a student might work through understanding linkage disequilibrium (LD) by conversing with Claude:

```
I'm reading a GWAS paper and they keep mentioning "linkage disequilibrium." 
I know it has something to do with alleles being inherited together, but I don't 
really understand why it matters. Can you explain it like I'm a second-year 
biology student?
```

*[Claude explains LD as non-random association of alleles at different loci]*

```
Okay, that makes sense. But why does LD matter for GWAS? The paper says they 
"pruned SNPs for LD" before analysis—what does that mean and why would you 
want to do that?
```

*[Claude explains that nearby SNPs are often correlated, and pruning removes redundant information]*

```
Wait, so if two SNPs are in high LD, they're basically giving you the same 
information? But then how do you know which one is actually causal for the 
disease?
```

*[Claude explains the difference between causal variants and tag SNPs, and the challenge of fine-mapping]*

```
So in the paper, when they find a significant SNP, it might not be the actual 
causal variant—it could just be tagging the real one nearby? How do researchers 
figure out which is which?
```

*[Conversation continues, building deeper understanding through follow-up questions]*

Notice how the conversation evolves: starting with a basic concept, then connecting it to the paper's methods, then questioning the interpretation, and finally thinking critically about causality. This is how real understanding develops—not through a single explanation, but through **iterative questioning**.

### Understanding AI's Limitations

Even the best AI models make mistakes. Sometimes they **misread parts of a paper** or provide **incomplete interpretations**. This happens because language models have a limit on the number of *tokens* (the pieces of text) they can read and generate at once—so they may only "skim" a long article instead of processing it fully.

In addition, AI systems still suffer from **hallucination**—producing confident but incorrect statements or fabricated references. These errors arise because the model predicts plausible text patterns rather than verifying factual truth.

Therefore:
- Always **cross-check** AI explanations with the original paper or trusted databases.
- Do not rely on AI to do your thinking—use it to accelerate your own.
- Remember that AI is a **tool to make your work smoother**, not a shortcut to reduce your study time by a hundredfold.

### The Real Goal: Learning to Think, Not Just to Know

Here's the truth: you can use AI to pass this course without deeply learning the material. You can ask it to summarize every chapter, answer practice questions, even explain concepts just well enough to get through exams.

But genetics in our days is not about memorizing facts—it's about **thinking like a geneticist**. It's about seeing a GWAS result and immediately wondering about population structure. Reading an RNA-seq analysis and questioning the normalization method. Encountering a new disease gene and asking how its function connects to phenotype.

That kind of thinking only develops through **engagement**, not summarization. AI can help you engage more effectively—by answering your questions, challenging your assumptions, and walking you through complex ideas. But it can't do the thinking for you.

Use AI boldly, but never let convenience replace curiosity. The goal is not to read faster, but to **see more deeply**—to evolve your scientific perspective.

---

## Welcome to Human Genetics

This course will be challenging. There will be moments when a paper feels impenetrable, when a concept refuses to click, when you wonder if you're cut out for this kind of thinking. Those moments are not signs of failure—they're signs you're learning something genuinely new. Every researcher, including your instructors, still experiences them regularly. Approach this course with curiosity, not caution. Use every tool available, but never let convenience replace genuine thinking. 

Welcome. Let's begin.
