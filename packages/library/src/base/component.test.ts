import { Component } from './component'
import { Controller } from './controller'

it('can reset component', async () => {
  const c = new Component()
  const controller = new Controller({ root: c })

  const c_prepare = jest.fn()
  const c_run = jest.fn()
  const c_end = jest.fn()
  const c_reset = jest.fn()
  c.on('prepare', c_prepare)
  c.on('run', c_run)
  c.on('end', c_end)
  c.on('reset', c_reset)

  // We are testing that the component can be re-run,
  // and cycles through run and end events correctly
  await controller.run()
  expect(c_prepare).toHaveBeenCalledTimes(1)
  expect(c_run).toHaveBeenCalledTimes(1)
  expect(c_end).toHaveBeenCalledTimes(0)
  expect(c_reset).toHaveBeenCalledTimes(0)
  await c.reset()
  expect(c_run).toHaveBeenCalledTimes(2)
  expect(c_end).toHaveBeenCalledTimes(1)
  expect(c_reset).toHaveBeenCalledTimes(1)
  await c.respond('foo', { timestamp: 123, action: 'someAction' })
  expect(c_run).toHaveBeenCalledTimes(2)
  expect(c_end).toHaveBeenCalledTimes(2)
  // Preparation should only happen once
  expect(c_prepare).toHaveBeenCalledTimes(1)
  expect(c_reset).toHaveBeenCalledTimes(1)
})
