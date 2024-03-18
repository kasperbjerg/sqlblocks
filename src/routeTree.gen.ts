/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LearnImport } from './routes/learn'

// Create Virtual Routes

const TestLazyImport = createFileRoute('/test')()
const TeachersecretLazyImport = createFileRoute('/teacher_secret')()
const IndexLazyImport = createFileRoute('/')()
const LearnYndlingsserierLazyImport = createFileRoute('/learn/yndlingsserier')()
const LearnVarerLazyImport = createFileRoute('/learn/varer')()
const LearnSygdomLazyImport = createFileRoute('/learn/sygdom')()
const LearnSommerfestLazyImport = createFileRoute('/learn/sommerfest')()
const LearnRealityLazyImport = createFileRoute('/learn/reality')()
const LearnRatingLazyImport = createFileRoute('/learn/rating')()
const LearnProjekt3LazyImport = createFileRoute('/learn/projekt3')()
const LearnProjekt2LazyImport = createFileRoute('/learn/projekt2')()
const LearnProjekt1LazyImport = createFileRoute('/learn/projekt1')()
const LearnPriserLazyImport = createFileRoute('/learn/priser')()
const LearnPigefilmLazyImport = createFileRoute('/learn/pigefilm')()
const LearnPengenoedLazyImport = createFileRoute('/learn/pengenoed')()
const LearnMilleniumLazyImport = createFileRoute('/learn/millenium')()
const LearnIndkoebLazyImport = createFileRoute('/learn/indkoeb')()
const LearnHundeLazyImport = createFileRoute('/learn/hunde')()
const LearnGaesterLazyImport = createFileRoute('/learn/gaester')()
const LearnFilmLazyImport = createFileRoute('/learn/film')()
const LearnAfbudLazyImport = createFileRoute('/learn/afbud')()

// Create/Update Routes

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

const LearnRoute = LearnImport.update({
  path: '/learn',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LearnYndlingsserierLazyRoute = LearnYndlingsserierLazyImport.update({
  path: '/yndlingsserier',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.yndlingsserier.lazy').then((d) => d.Route),
)

const LearnVarerLazyRoute = LearnVarerLazyImport.update({
  path: '/varer',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.varer.lazy').then((d) => d.Route))

const LearnSygdomLazyRoute = LearnSygdomLazyImport.update({
  path: '/sygdom',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.sygdom.lazy').then((d) => d.Route))

const LearnSommerfestLazyRoute = LearnSommerfestLazyImport.update({
  path: '/sommerfest',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.sommerfest.lazy').then((d) => d.Route),
)

const LearnRealityLazyRoute = LearnRealityLazyImport.update({
  path: '/reality',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.reality.lazy').then((d) => d.Route))

const LearnRatingLazyRoute = LearnRatingLazyImport.update({
  path: '/rating',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.rating.lazy').then((d) => d.Route))

const LearnProjekt3LazyRoute = LearnProjekt3LazyImport.update({
  path: '/projekt3',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.projekt3.lazy').then((d) => d.Route),
)

const LearnProjekt2LazyRoute = LearnProjekt2LazyImport.update({
  path: '/projekt2',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.projekt2.lazy').then((d) => d.Route),
)

const LearnProjekt1LazyRoute = LearnProjekt1LazyImport.update({
  path: '/projekt1',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.projekt1.lazy').then((d) => d.Route),
)

const LearnPriserLazyRoute = LearnPriserLazyImport.update({
  path: '/priser',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.priser.lazy').then((d) => d.Route))

const LearnPigefilmLazyRoute = LearnPigefilmLazyImport.update({
  path: '/pigefilm',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.pigefilm.lazy').then((d) => d.Route),
)

const LearnPengenoedLazyRoute = LearnPengenoedLazyImport.update({
  path: '/pengenoed',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.pengenoed.lazy').then((d) => d.Route),
)

const LearnMilleniumLazyRoute = LearnMilleniumLazyImport.update({
  path: '/millenium',
  getParentRoute: () => LearnRoute,
} as any).lazy(() =>
  import('./routes/learn.millenium.lazy').then((d) => d.Route),
)

const LearnIndkoebLazyRoute = LearnIndkoebLazyImport.update({
  path: '/indkoeb',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.indkoeb.lazy').then((d) => d.Route))

const LearnHundeLazyRoute = LearnHundeLazyImport.update({
  path: '/hunde',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.hunde.lazy').then((d) => d.Route))

const LearnGaesterLazyRoute = LearnGaesterLazyImport.update({
  path: '/gaester',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.gaester.lazy').then((d) => d.Route))

const LearnFilmLazyRoute = LearnFilmLazyImport.update({
  path: '/film',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.film.lazy').then((d) => d.Route))

const LearnAfbudLazyRoute = LearnAfbudLazyImport.update({
  path: '/afbud',
  getParentRoute: () => LearnRoute,
} as any).lazy(() => import('./routes/learn.afbud.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/learn': {
      preLoaderRoute: typeof LearnImport
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
    '/learn/afbud': {
      preLoaderRoute: typeof LearnAfbudLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/film': {
      preLoaderRoute: typeof LearnFilmLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/gaester': {
      preLoaderRoute: typeof LearnGaesterLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/hunde': {
      preLoaderRoute: typeof LearnHundeLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/indkoeb': {
      preLoaderRoute: typeof LearnIndkoebLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/millenium': {
      preLoaderRoute: typeof LearnMilleniumLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/pengenoed': {
      preLoaderRoute: typeof LearnPengenoedLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/pigefilm': {
      preLoaderRoute: typeof LearnPigefilmLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/priser': {
      preLoaderRoute: typeof LearnPriserLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/projekt1': {
      preLoaderRoute: typeof LearnProjekt1LazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/projekt2': {
      preLoaderRoute: typeof LearnProjekt2LazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/projekt3': {
      preLoaderRoute: typeof LearnProjekt3LazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/rating': {
      preLoaderRoute: typeof LearnRatingLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/reality': {
      preLoaderRoute: typeof LearnRealityLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/sommerfest': {
      preLoaderRoute: typeof LearnSommerfestLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/sygdom': {
      preLoaderRoute: typeof LearnSygdomLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/varer': {
      preLoaderRoute: typeof LearnVarerLazyImport
      parentRoute: typeof LearnImport
    }
    '/learn/yndlingsserier': {
      preLoaderRoute: typeof LearnYndlingsserierLazyImport
      parentRoute: typeof LearnImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  LearnRoute.addChildren([
    LearnAfbudLazyRoute,
    LearnFilmLazyRoute,
    LearnGaesterLazyRoute,
    LearnHundeLazyRoute,
    LearnIndkoebLazyRoute,
    LearnMilleniumLazyRoute,
    LearnPengenoedLazyRoute,
    LearnPigefilmLazyRoute,
    LearnPriserLazyRoute,
    LearnProjekt1LazyRoute,
    LearnProjekt2LazyRoute,
    LearnProjekt3LazyRoute,
    LearnRatingLazyRoute,
    LearnRealityLazyRoute,
    LearnSommerfestLazyRoute,
    LearnSygdomLazyRoute,
    LearnVarerLazyRoute,
    LearnYndlingsserierLazyRoute,
  ]),
  TeachersecretLazyRoute,
  TestLazyRoute,
])

/* prettier-ignore-end */
