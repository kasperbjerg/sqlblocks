/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const YndlingsserierLazyImport = createFileRoute('/yndlingsserier')()
const TestLazyImport = createFileRoute('/test')()
const TeachersecretLazyImport = createFileRoute('/teacher_secret')()
const RealitycompleteLazyImport = createFileRoute('/reality_complete')()
const RealityLazyImport = createFileRoute('/reality')()
const RatingLazyImport = createFileRoute('/rating')()
const Projekt2LazyImport = createFileRoute('/projekt2')()
const Projekt1LazyImport = createFileRoute('/projekt1')()
const PigefilmLazyImport = createFileRoute('/pigefilm')()
const MilleniumLazyImport = createFileRoute('/millenium')()
const IndkoebLazyImport = createFileRoute('/indkoeb')()
const HundeLazyImport = createFileRoute('/hunde')()
const GaesterLazyImport = createFileRoute('/gaester')()
const FilmLazyImport = createFileRoute('/film')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const YndlingsserierLazyRoute = YndlingsserierLazyImport.update({
  path: '/yndlingsserier',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/yndlingsserier.lazy').then((d) => d.Route),
)

const TestLazyRoute = TestLazyImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/test.lazy').then((d) => d.Route))

const TeachersecretLazyRoute = TeachersecretLazyImport.update({
  path: '/teacher_secret',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/teacher_secret.lazy').then((d) => d.Route),
)

const RealitycompleteLazyRoute = RealitycompleteLazyImport.update({
  path: '/reality_complete',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/reality_complete.lazy').then((d) => d.Route),
)

const RealityLazyRoute = RealityLazyImport.update({
  path: '/reality',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/reality.lazy').then((d) => d.Route))

const RatingLazyRoute = RatingLazyImport.update({
  path: '/rating',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/rating.lazy').then((d) => d.Route))

const Projekt2LazyRoute = Projekt2LazyImport.update({
  path: '/projekt2',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projekt2.lazy').then((d) => d.Route))

const Projekt1LazyRoute = Projekt1LazyImport.update({
  path: '/projekt1',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/projekt1.lazy').then((d) => d.Route))

const PigefilmLazyRoute = PigefilmLazyImport.update({
  path: '/pigefilm',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/pigefilm.lazy').then((d) => d.Route))

const MilleniumLazyRoute = MilleniumLazyImport.update({
  path: '/millenium',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/millenium.lazy').then((d) => d.Route))

const IndkoebLazyRoute = IndkoebLazyImport.update({
  path: '/indkoeb',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/indkoeb.lazy').then((d) => d.Route))

const HundeLazyRoute = HundeLazyImport.update({
  path: '/hunde',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/hunde.lazy').then((d) => d.Route))

const GaesterLazyRoute = GaesterLazyImport.update({
  path: '/gaester',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/gaester.lazy').then((d) => d.Route))

const FilmLazyRoute = FilmLazyImport.update({
  path: '/film',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/film.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/film': {
      preLoaderRoute: typeof FilmLazyImport
      parentRoute: typeof rootRoute
    }
    '/gaester': {
      preLoaderRoute: typeof GaesterLazyImport
      parentRoute: typeof rootRoute
    }
    '/hunde': {
      preLoaderRoute: typeof HundeLazyImport
      parentRoute: typeof rootRoute
    }
    '/indkoeb': {
      preLoaderRoute: typeof IndkoebLazyImport
      parentRoute: typeof rootRoute
    }
    '/millenium': {
      preLoaderRoute: typeof MilleniumLazyImport
      parentRoute: typeof rootRoute
    }
    '/pigefilm': {
      preLoaderRoute: typeof PigefilmLazyImport
      parentRoute: typeof rootRoute
    }
    '/projekt1': {
      preLoaderRoute: typeof Projekt1LazyImport
      parentRoute: typeof rootRoute
    }
    '/projekt2': {
      preLoaderRoute: typeof Projekt2LazyImport
      parentRoute: typeof rootRoute
    }
    '/rating': {
      preLoaderRoute: typeof RatingLazyImport
      parentRoute: typeof rootRoute
    }
    '/reality': {
      preLoaderRoute: typeof RealityLazyImport
      parentRoute: typeof rootRoute
    }
    '/reality_complete': {
      preLoaderRoute: typeof RealitycompleteLazyImport
      parentRoute: typeof rootRoute
    }
    '/teacher_secret': {
      preLoaderRoute: typeof TeachersecretLazyImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      preLoaderRoute: typeof TestLazyImport
      parentRoute: typeof rootRoute
    }
    '/yndlingsserier': {
      preLoaderRoute: typeof YndlingsserierLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  FilmLazyRoute,
  GaesterLazyRoute,
  HundeLazyRoute,
  IndkoebLazyRoute,
  MilleniumLazyRoute,
  PigefilmLazyRoute,
  Projekt1LazyRoute,
  Projekt2LazyRoute,
  RatingLazyRoute,
  RealityLazyRoute,
  RealitycompleteLazyRoute,
  TeachersecretLazyRoute,
  TestLazyRoute,
  YndlingsserierLazyRoute,
])

/* prettier-ignore-end */
