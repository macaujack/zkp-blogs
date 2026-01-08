---
title: Getting Started
description: A roadmap to understand how popular zero-knowledge proof systems work.
---

I personally just learned zero-knowledge proofs (ZKPs) recently, and I found the learning curve to be quite steep. There are many different ZKP systems/algorithms/protocols, each with its own unique properties, trade-offs, and use cases. To help myself (and potentially others) recall and understand these concepts better, I decided to create this blog as a personal knowledge base.

This blog covers the most popular ZKP systems, including zk-SNARK, Bulletproof, zk-STARK. Hopefully readers could understand how these systems work in some details (instead of just understanding the high-level concepts). This blog won't involve too much code, and it focuses more on math details. But don't worry if you are not a math person! I'm not either. I'm a web3 developer, and I only learned basic math for 1 or 2 years in university. My feeling is that though zero-knowledge proof systems involve lots of difficult math concepts as their foundations, luckily we don't need to actually learn and understand most of them. We only need to know the conclusions of these difficult math concepts, and then we can build on top of them to understand how ZKP systems work.

Since I'm also a beginner in ZKP, I may make mistakes in this blog. If you find any mistakes, please kindly let me know via GitHub issues or pull requests. Thank you!

Let's get started with some math first! You could scan through the next section if you are already familiar with these math concepts.

## Other Learning Resources

Here are some learning resources that I found helpful when I was learning.

- Saksham Thapa's thoughts about zero knowledge proofs: https://hackmd.io/@sakshamthapa/SJx8cybCll
- A list of ZKP resources: https://github.com/matter-labs/awesome-zero-knowledge-proofs
- Basic math, Groth16, Bulletproof explained by RareSkills: https://rareskills.io/zk-book
- PLONK explained by Maya: https://www.maya-zk.com/blog/plonk-overview
- Halo (a PLONK variant) explained by Vitalik: https://vitalik.eth.limo/general/2021/11/05/halo.html
- STARK explained by Vitalik: [Part 1](https://vitalik.eth.limo/general/2017/11/09/starks_part_1.html), [Part 2](https://vitalik.eth.limo/general/2017/11/22/starks_part_2.html), [Part 3](https://vitalik.eth.limo/general/2018/07/21/starks_part_3.html)
- STARK explained by StarkWare: https://starkware.co/stark-101/
