---
sidebar_position: 3
---

# Code Pattern Reference

## What is it ?
Conventional Commits is a simple commit message convention, which follows a set of rules and helps projects to have an explicit and well-structured commit history.

There are several benefits (in addition to those already mentioned above) in using this type of convention, such as being able to automate the creation of CHNGELOGs, facilitating the entry of new Devs in the project, as well as being able to generate reports and be able to understand where the project hours (refactoring code, creating features, changing styles, development environment, among others).

## How to use
The rules are very simple, as shown below we have a type of commit ( type ), the scope/context of the commit ( scope ) and the subject/message of the commit ( subject ), but later I will detail each one.

```
!type(?scope): !subject 
<?body> 
<?footer>
```

In this way, !it indicates the mandatory attributes and ?indicates the non-mandatory attributes. In this article we will not talk about bodyand neither the footercommit. But these are simple specifications, which you can see more [about here](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/#especifica%C3%A7%C3%A3o).

<img src="/img/commit-message-resume.webp" alt="The first example with the subject in the past tense and the second with the subject in the imperative" />


## What are the commit types
The type is responsible for telling us what type of change or iteration is being made, from the convention rules, we have the following types:


- `test`: indicates any type of creation or alteration of test codes.
- `feat`: indicates the development of a new feature to the project.
- `refactor`: used when there is a code refactoring that does not have any impact on the system's business logic/rules.
- `style`: used when there are formatting and style changes to the code that do not change the system in any way.
- `fix`: used when correcting errors that are generating bugs in the system.
- `chore`: indicates design changes that do not affect the system or test files. These are developmental changes.
- `docs`: used when there are changes in the project's documentation.
- `build`: used to indicate changes that affect the project's build process or external dependencies.
- `perf`: Indicates a change that improved system performance.
- `ci`: used for changes in CI configuration files.
- `revert`: indicates reverting a previous commit .


<img src="/img/commit-message.webp" alt="Examples of the aforementioned commit types"/>