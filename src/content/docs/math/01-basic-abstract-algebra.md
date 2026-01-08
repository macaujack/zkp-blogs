---
title: Basic Abstract Algebra
description: Introduction to basic abstract algebra concepts needed for understanding zero-knowledge proofs.
slug: basic-abstract-algebra
sidebar:
  order: 10
---

Abstract algebra is a branch of mathematics that studies algebraic structures such as groups, rings, and fields. As a developer, I personally consider those algebraic structures similar to abstract classes, interfaces or traits in programming languages. First we define some common behaviors and properties of a structure. We can study those structures abstractly without caring about their concrete implementations. Then we can create concrete implementations of those structures later, and we can leverage the findings from abstract studies to reason about the concrete implementations.

Here are some basic abstract algebra concepts that are commonly used in zero-knowledge proofs. There may be some mathematical terms that may seem unfamiliar but don't worry, these terms are just used to describe the properties of those algebraic structures precisely and concisely. It's not rocket science.

## Set

A **set** is a well-defined aggregation of objects (elements). These objects can be numbers, symbols, or even other mathematical structures.

Integers, real numbers, matrices, country names from all over the world are all examples of sets.

A set does not contain duplicate elements. So $\{1, 2, 2, 3\}$ is just $\{1, 2, 3\}$.

If an element $a$ is in a set $A$, we denote this as $a \in A$. If an element $b$ is not in a set $A$, we denote this as $b \notin A$.

There are some standard sets (whose names are in blackboard bold font) that are commonly used:

- All integers: $\mathbb{Z} = \{ ..., -3, -2, -1, 0, 1, 2, 3, ... \}$
- All real numbers: $\mathbb{R}$
- All complex numbers: $\mathbb{C}$

We can also define sets using set-builder notation. For example, the set of all even integers can be defined as: $E = \{ x \in \mathbb{Z} \mid x \text{ is even} \}$.

A Cartesian product of two sets $A$ and $B$ (can be the same and can be different), denoted as $A \times B$, is the set of all ordered pairs $(a, b)$ where $a \in A$ and $b \in B$ (i.e., $A \times B = \{(a, b) \mid a \in A, b \in B\}$). For example, if $A = \{1, 2\}$ and $B = \{x, y\}$, then the Cartesian product $A \times B = \{(1, x), (1, y), (2, x), (2, y)\}$.

A set $A$ is a subset of a set $B$ if and only if every element of $A$ is also an element of $B$. We denote this as $A \subseteq B$. Note for any set $A$, we have $A \subseteq A$.

For other basic concepts about sets, you could ask AI or google it.

## Relation & Function

A relation between two sets $A$ and $B$ is a subset of their Cartesian product $A \times B$. In other words, a relation defines how elements from set $A$ are related to elements from set $B$.

For example, consider a set of student numbers $S = \{1, 2, 3\}$ and a set of courses $C = \{\text{Math}, \text{Physics}\}$. A relation $R$ between students and courses could be defined as follows: $R = \{(1, \text{Math}), (2, \text{Math}), (2, \text{Physics}), (3, \text{Physics})\}$. Obviously, $R \subseteq S \times C$. This relation indicates which students are enrolled in which courses.

A function is a special type of relation where each element in the first sets (called domain) is associated with exactly one element in the second set (called codomain). So the above relation $R$ is not a function because student 2 is related to both Math and Physics.

A function could be denoted as $f: A \to B$, where $A$ is the domain and $B$ is the codomain. For example, consider a function $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2$. This function takes a real number as input and maps it to its square.

## Binary Operator

A binary operator $\ast$ is a function:

$$ \ast : S \times S \to T $$

It takes 2 inputs from a set $S$ and produces an output in a set $T$. If the output is also in the same set $S$, i.e., $T = S$, then the binary operator is said to be closed on the set $S$.

For example, consider the set of integers $\mathbb{Z}$ and the binary operator of addition $+$. The addition operator takes 2 integers as input and produces another integer as output. Since the output is also an integer, we say that addition is closed on the set of integers.

## Magma, Semigroup, Monoid, Group

These are 4 algebraic structures that contain a set and a binary operator defined on the set, denoted as $(S, \ast)$. With each structure, there are more properties required for the set and the binary operator.

- **Magma**: $(M, \ast)$.
  - A set $M$ with a binary operator $\ast$ that is closed on $M$.
- **Semigroup**: $(S, \ast)$. It's a Magma with associativity.
  - A set $S$ with a binary operator $\ast$ that is closed on $S$.
  - <span style="color:blue">The binary operator $\ast$ is associative, i.e., for any $a, b, c \in S$, we have $(a \ast b) \ast c = a \ast (b \ast c)$.</span>
- **Monoid**: $(M, \ast)$. It's a semigroup with an identity element.
  - A set $M$ with a binary operator $\ast$ that is closed on $M$.
  - The binary operator $\ast$ is associative.
  - <span style="color:blue">There exists an identity element $e \in M$ such that for any $a \in M$, we have $e \ast a = a \ast e = a$.</span>
- **Group**: $(G, \ast)$. It's a monoid where every element has an inverse.
  - A set $G$ with a binary operator $\ast$ that is closed on $G$.
  - The binary operator $\ast$ is associative.
  - There exists an identity element $e \in G$ such that for any $a \in G$, we have $e \ast a = a \ast e = a$.
  - <span style="color:blue">For every element $a \in G$, there exists an inverse element $a^{-1} \in G$ such that $a \ast a^{-1} = a^{-1} \ast a = e$.</span>
- **Abelian Group**: $(G, \ast)$. A group where the binary operator is also commutative.
  - A set $G$ with a binary operator $\ast$ that is closed on $G$.
  - The binary operator $\ast$ is associative.
  - There exists an identity element $e \in G$ such that for any $a \in G$, we have $e \ast a = a \ast e = a$.
  - For every element $a \in G$, there exists an inverse element $a^{-1} \in G$ such that $a \ast a^{-1} = a^{-1} \ast a = e$.
  - <span style="color:blue">The binary operator $\ast$ is commutative, i.e., for any $a, b \in G$, we have $a \ast b = b \ast a$.</span>

## Ring & Field

A **ring** is an algebraic structure that consists of a set equipped with two binary operations, typically called addition and multiplication, satisfying certain properties. A ring is denoted as $(R, +, \cdot)$.

Ring properties:

- Addition:
  - $(R, +)$ is an abelian group.
- Multiplication:
  - $(R, \cdot)$ is a semigroup.
  - Distributive property: For any $a, b, c \in R$, we have $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$ and $(a + b) \cdot c = (a \cdot c) + (b \cdot c)$.

A **field** is a special type of ring which has additional properties. A field is denoted as $(F, +, \cdot)$.

Field properties:

- Addition:
  - $(F, +)$ is an abelian group.
- Multiplication:
  - <span style="color:blue">$(F \setminus \{0\}, \cdot)$ is an abelian group. i.e., the set $F$ without the additive identity element (0) forms an abelian group under multiplication.</span>
  - Distributive property: For any $a, b, c \in R$, we have $a \cdot (b + c) = (a \cdot b) + (a \cdot c)$ and $(a + b) \cdot c = (a \cdot c) + (b \cdot c)$.

A typical example of a ring is $(\mathbb{Z}, +, \cdot)$, the set of integers with standard addition and multiplication. It's a ring because it satisfies all the ring properties mentioned above. However, it's not a field because not every non-zero integer has a multiplicative inverse within the integers. (Actually only 1 and -1 have multiplicative inverses in integers.)
