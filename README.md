<br />
<p align="center">
    <img src="https://www.chiquezi.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Flogo%2Flogo.c442afade084ba1adfa95e1aecfc83d0.svg&w=384&q=75" width="125">
</p>

# 🤙 Functional Programming Library for Typescript

Some simple functions to help typescript to work with FP paradigm.

## 🚀 Getting Started

For now I just built up pipe functions:

```
<!-- Calls functions in a row throwing the return value to the next function -->

const sum1 = (num) = num + 1
const sum2 = (num) = num + 2
const sum3 = (num) = num + 3
examples: pipe(0, sum1, sum2, sum3) // 6

const sum1 = async (num) = await num + 1
const sum2 = async (num) = await num + 2
const sum3 = async (num) = await num + 3
examples: asyncPipe(0, sum1, sum2, sum3) // 6

<!-- Calls sideEffect functions in a row -->

const cons1 = () => console.log(1)
const cons2 = () => console.log(2)
const cons3 = () => console.log(3)
pipeSideEffect(cons1, cons2, cons3) // call all functions

const cons1 = async () => await console.log(1)
const cons2 = async () => await console.log(2)
const cons3 = async () => await console.log(3)
asyncPipeSideEffect(cons1, cons2, cons3) // call all functions

<!-- Calls functions in a row passing the first argument to all of them -->

const cons1 = (num) => console.log(num)
const cons2 = (num) => console.log(num)
const cons3 = (num) => console.log(num)
pipeArg(0, cons1, cons2, cons3) // console log 1, 2, 3

const cons1 = async (num) => await console.log(num)
const cons2 = async (num) => await console.log(num)
const cons3 = async (num) => await console.log(num)
pipeArg(0, cons1, cons2, cons3) // console log 1, 2, 3

```

### 📡 Installing

Component:

```
yarn add @fabiochiquezi/functional-ts
```

## ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)
