---
title: P vs NP Problem
description: An introduction to the P and NP problem, and its relation to zero-knowledge proofs.
slug: p-vs-np
sidebar:
  order: 5000
---

We've probably heard about the P vs NP problem in computer science. But what exactly are P and NP? And what's the relation between these 2 classes of problems and zero-knowledge proofs?

## Definition of P and NP

After chatting with AI and some googling, it turns out that:

- **P (Polynomial time)**: - The class of decision problems that can be **solved in polynomial time** by a deterministic algorithm. This means the time complexity of the algorithm should be bounded by a polynomial function of the size of the input, like $O(n)$, $O(n^2)$, $O(n \log n)$, etc.
- **NP (Nondeterministic Polynomial time)**: The class of decision problems for which a given solution can be **verified in polynomial time** by a deterministic algorithm.

Obviously, if a problem is in P, it is also in NP, because if we can solve a problem efficiently (i.e., in polynomial time), we can certainly verify the solution efficiently as well, because we can at least solve the problem (which can be done efficiently) again to check if the solution is correct. Therefore, we have the relationship: $P \subseteq NP$.

An example problem in P is to sort an array. Given an array of numbers, we can sort it using efficient algorithms like Merge Sort or Quick Sort in $O(n \log n)$ time, which is polynomial time. Therefore, sorting is in P.

An example problem in NP (but not known to be in P) is Sudoku. Given a partially filled Sudoku grid, there's no known efficient algorithm to solve it. One way to solve it is by "Dancing Links" (you could google it if you are interested) but its time complexity is exponential. However, if we are given a completed Sudoku grid as a solution, we can verify its correctness in polynomial time by checking each row, column, and 3x3 subgrid to ensure they contain all digits from 1 to 9 without repetition. Therefore, Sudoku is in NP.

Note we are saying Sudoku **is not known to be in P** because currently we don't have an efficient algorithm to solve it. It doesn't mean there isn't such an efficient algorithm. Actually, nobody has proven either $P = NP$ or $P \neq NP$ yet. This is one of the biggest open problems in computer science. If $P = NP$ were proven true, it would mean that every problem for which a solution can be verified quickly can also be solved quickly. In this case, Sudoku could be solved in polynomial time as well. However, most computer scientists believe that $P \neq NP$.

There are also problems that cannot even be verified in polynomial time (like finding the optimal move given a chess position), but this is beyond the scope of this post.

## Term: Witness

We said NP is the class of decision problems for which a **given solution** can be verified in polynomial time. The "given solution" here is often referred to as a "witness".

In a sorting problem, the witness is the sorted array itself. In a Sudoku problem, the witness is the completed Sudoku grid.

This term is widely used in the context of zero-knowledge proofs. In a zero-knowledge proof, the prover wants to convince the verifier that they know a valid witness for a certain problem without revealing the witness itself. For example, in a Sudoku zero-knowledge proof, the prover wants to convince the verifier that they know a valid completed Sudoku grid (the witness) without actually revealing the grid. Another example is the famous Tornado Cash, where the prover (user) wants to convince the verifier (smart contract) that they know a secret note (the witness) that corresponds to a deposit made earlier, without revealing the secret note itself.

## Relation with ZKP

<!-- TODO:  -->
