// v1
// export const trackPageVisibilityChange = (page: string) => {
//   navigator.sendBeacon(
//     'https://fake-analytics.com',
//     JSON.stringify({
//       page,
//       event: 'visibility-change',
//     }),
//   )
// }

// v2
// export type PageEvent = 'visibility-change' | 'scroll'

// export const trackPageEvent = (page: string, event: PageEvent) => {
//   navigator.sendBeacon(
//     'https://fake-analytics.com',
//     JSON.stringify({
//       page,
//       event,
//     }),
//   )
// }

// v2.5
// export enum PageEvent {
//   VISIBILITY_CHANGE = 'visibility-change',
//   SCROLL = 'scroll',
// }

// export const trackPageEvent = (page: string, event: PageEvent) => {
//   navigator.sendBeacon(
//     'https://fake-analytics.com',
//     JSON.stringify({
//       page,
//       event,
//     }),
//   )
// }

// v3
export enum PageEvent {
  VISIBILITY_CHANGE = 'visibility-change',
  SCROLL = 'scroll',
}

export class AnalyticsService {
  trackPageEvent(page: string, event: PageEvent) {
    navigator.sendBeacon(
      'https://fake-analytics.com',
      JSON.stringify({
        page,
        event,
      }),
    )
  }
}
