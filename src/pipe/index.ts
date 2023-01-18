type IPipe = <T>(start: T, ...funcs: Array<(arg: T) => T>) => T
export const pipe: IPipe = (start, ...funcs) => {
  return funcs.reduce((prev, func) => func(prev), start)
}

type IAsyncPipe = <T>(start: T, ...funcs: Array<(arg: T) => Promise<T> | T>) => Promise<T>
export const asyncPipe: IAsyncPipe = async (start, ...funcs) => {
  let res = start
  for await (const func of funcs) { res = await func(res) }
  return res
}

type IPipeSideEffect = (...funcs: Array<() => unknown>) => void
export const pipeSideEffect: IPipeSideEffect = (...funcs) => {
  for (const func of funcs) { func() }
}

type IAsyncPipeSideEffect = (...fns: Array<() => Promise<unknown> | unknown>) => Promise<void>
export const asyncPipeSideEffect: IAsyncPipeSideEffect = async (...funcs) => {
  for await (const func of funcs) { await func() }
}

type IPipeArg = <T>(start: T, ...funcs: Array<(arg: T) => unknown>) => void
export const pipeArg: IPipeArg = (start, ...funcs) => {
  for (const func of funcs) { func(start) }
}

type IAsyncPipeArg = <T>(start: T, ...funcs: Array<(arg: T) => Promise<unknown> | unknown>) => Promise<unknown>
export const asyncPipeArg: IAsyncPipeArg = async (start, ...funcs) => {
  for await (const func of funcs) { await func(start) }
}


// export const pipeArg = <T>(...fns: Array<(arg: T) => Promise<unknown> | unknown>) =>
//   async (value: T) => { fns.forEach(async el => { await el(value) }) }

// export const asyncPipeSideEffect = async (...fns: Array<() => any | Promise<any>>): Promise<void> => {
//   for (let i = 0; i < fns.length; i++) await fns[i]()
// }

// export const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T) =>
//   fns.reduce((acc, fn) => fn(acc), value)

// type IAsyncPipe = <T, Return>(...fns: Array<(arg: (T | any)) => Promise<T | any>>) => (value: T) => Return
// export const asyncPipe: IAsyncPipe = (...fns) => (value: any) => // to improve
//   fns.reduce(async (acc, fn) => await fn(await acc), value)

