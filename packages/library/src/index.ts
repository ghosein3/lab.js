export const version = '22.0.0-beta10'
export const build = {
  //@ts-ignore Injected during build
  flavor: <string>BUILD_FLAVOR,
  //@ts-ignore Injected during build
  commit: <string>BUILD_COMMIT,
}

export * as core from './core'
export * as data from './data'

export * as flow from './flow'
export * as html from './html'
export * as canvas from './canvas'

export * as plugins from './plugins'

export * as util from './util'
