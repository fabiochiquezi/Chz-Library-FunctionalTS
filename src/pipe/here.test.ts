import { pipe, asyncPipe, pipeSideEffect, pipeArg, asyncPipeArg, asyncPipeSideEffect } from './index'

describe('pipe', () => {
  it('pipeArg', () => {
    const fn1 = jest.fn((a: number) => a + 0)
    const fn2 = jest.fn((a: number) => a + 1)
    const fn3 = jest.fn((a: number) => a + 2)
    pipeArg(1, fn1, fn2, fn3)
    expect(fn1).toBeCalledTimes(1)
    expect(fn2).toBeCalledTimes(1)
    expect(fn3).toBeCalledTimes(1)
    expect(fn1).toHaveReturnedWith(1)
    expect(fn2).toHaveReturnedWith(2)
    expect(fn3).toHaveReturnedWith(3)
  })

  it('asyncPipeArg', async () => {
    const fn1 = jest.fn(async (a: number) => await a + 0)
    const fn2 = jest.fn((a: number) => a + 1)
    const fn3 = jest.fn(async (a: number) => await a + 2)
    await asyncPipeArg(1, fn1, fn2, fn3)
    expect(fn1).toBeCalledTimes(1)
    expect(fn2).toBeCalledTimes(1)
    expect(fn3).toBeCalledTimes(1)
  })

  it('pipeSideEffect', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()
    const fn3 = jest.fn()
    pipeSideEffect(fn1, fn2, fn3)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn3).toHaveBeenCalledTimes(1)
  })

  it('asyncPipeSideEffect', async () => {
    const fn1 = jest.fn(async (): Promise<void> => { })
    const fn2 = jest.fn((): void => { })
    const fn3 = jest.fn(async (): Promise<void> => { })
    await asyncPipeSideEffect(fn1, fn2, fn3)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledTimes(1)
    expect(fn3).toHaveBeenCalledTimes(1)
  })

  it('pipe', () => {
    const sum2 = (a: number): number => a + 2
    const sum4 = (a: number): number => a + 4
    const sum8 = (a: number): number => a + 8
    expect(pipe(0, sum2, sum4, sum8)).toBe(14)
  })

  it('asyncPipe', async () => {
    const addB = async (str: string): Promise<string> => `${await str}b`
    const addC = (str: string): string => `${str}c`
    const addD = async (str: string): Promise<string> => `${await str}d`
    const pipe = await asyncPipe('a', addB, addC, addD)
    expect(pipe).toBe('abcd')
  })
})
