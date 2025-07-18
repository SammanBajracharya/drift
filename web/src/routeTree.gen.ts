/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/dashboard'
import { Route as AuthRouteImport } from './routes/auth'
import { Route as IndexRouteImport } from './routes/index'
import { Route as DftDftIDRouteImport } from './routes/dft.$dftID'

const DashboardRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const DftDftIDRoute = DftDftIDRouteImport.update({
  id: '/dft/$dftID',
  path: '/dft/$dftID',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/dashboard': typeof DashboardRoute
  '/dft/$dftID': typeof DftDftIDRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/dashboard': typeof DashboardRoute
  '/dft/$dftID': typeof DftDftIDRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/auth': typeof AuthRoute
  '/dashboard': typeof DashboardRoute
  '/dft/$dftID': typeof DftDftIDRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/auth' | '/dashboard' | '/dft/$dftID'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/auth' | '/dashboard' | '/dft/$dftID'
  id: '__root__' | '/' | '/auth' | '/dashboard' | '/dft/$dftID'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRoute
  DashboardRoute: typeof DashboardRoute
  DftDftIDRoute: typeof DftDftIDRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/dft/$dftID': {
      id: '/dft/$dftID'
      path: '/dft/$dftID'
      fullPath: '/dft/$dftID'
      preLoaderRoute: typeof DftDftIDRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRoute,
  DashboardRoute: DashboardRoute,
  DftDftIDRoute: DftDftIDRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
