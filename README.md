# Functional TS

A simple library with the core of Functional Programming for TS.
See more in the documentation at [chiquezi.com/libraries/functional-ts](https://www.chiquezi.com/libraries/functional-ts)

Note: So far I have only build the pipe functions. I am building as far I need in my projects

### 🚀 Getting Started

For now I just built up pipe functions:

```
// Install
yarn add @fabiochiquezi/functional-ts or npm install @fabiochiquezi/functional-ts

// Usage
import * as fns from '@fabiochiquezi/functional-ts'

```

### 📡 Example

```
import { asyncPipe } from '@fabiochiquezi/functional-ts'

const sum1 = async (num) = await num + 1
const sum2 = async (num) = await num + 2
const sum3 = async (num) = await num + 3

asyncPipe(0, sum1, sum2, sum3) // 6
```

### ✋ Author

- **Fábio Chiquezi** - [GitHub](https://github.com/fabiochiquezi) / [LinkedIn](https://www.linkedin.com/in/fabiochiquezi/)

