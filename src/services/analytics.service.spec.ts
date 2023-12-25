// v1
// import { afterEach, describe, expect, it, vi } from 'vitest'
// import { trackPageVisibilityChange } from './analytics.service'

// describe('Analytics Service', () => {
//   window.navigator.sendBeacon = vi.fn()

//   afterEach(() => {
//     vi.mocked(window.navigator.sendBeacon).mockReset()
//   })

//   describe('trackPageVisibilityChange', () => {
//     it('sends a beacon with page name and visibility-change event to the appropriate endpoint', () => {
//       vi.mocked(window.navigator.sendBeacon).mockReturnValue(true)

//       trackPageVisibilityChange('homepage')

//       expect(navigator.sendBeacon).toHaveBeenCalledWith(
//         'https://fake-analytics.com',
//         JSON.stringify({
//           page: 'homepage',
//           event: 'visibility-change',
//         }),
//       )
//     })
//   })
// })

// v1.5
// import { afterEach, describe, expect, it, vi } from 'vitest'
// import { trackPageEvent } from './analytics.service'

// describe('Analytics Service', () => {
//   window.navigator.sendBeacon = vi.fn()

//   afterEach(() => {
//     vi.mocked(window.navigator.sendBeacon).mockRestore()
//   })

//   describe('trackPageEvent', () => {
//     it('sends a beacon with page name and visibility-change event to the appropriate endpoint', () => {
//       vi.mocked(window.navigator.sendBeacon).mockReturnValue(true)

//       trackPageEvent('homepage', 'visibility-change')

//       expect(navigator.sendBeacon).toHaveBeenCalledWith(
//         'https://fake-analytics.com',
//         JSON.stringify({
//           page: 'homepage',
//           event: 'visibility-change',
//         }),
//       )
//     })
//   })
// })

/**
 * v2 with generics
 */
// import { afterEach, describe, expect, it, vi } from 'vitest'
// import { PageEvent, trackPageEvent } from './analytics.service'

// describe('Analytics Service', () => {
//   window.navigator.sendBeacon = vi.fn()

//   afterEach(() => {
//     vi.mocked(window.navigator.sendBeacon).mockRestore()
//   })

//   describe('trackPageEvent', () => {
//     it.each<PageEvent>(['visibility-change', 'scroll'])(
//       'sends a beacon with page name and %s event to the appropriate endpoint',
//       (event) => {
//         vi.mocked(window.navigator.sendBeacon).mockReturnValue(true)

//         trackPageEvent('homepage', event)

//         expect(navigator.sendBeacon).toHaveBeenCalledWith(
//           'https://fake-analytics.com',
//           JSON.stringify({
//             page: 'homepage',
//             event,
//           }),
//         )
//       },
//     )
//   })
// })

/**
 * v2.5 with enum
 */
// import { afterEach, describe, expect, it, vi } from 'vitest'
// import { PageEvent, trackPageEvent } from './analytics.service'

// describe('Analytics Service', () => {
//   window.navigator.sendBeacon = vi.fn()

//   afterEach(() => {
//     vi.mocked(window.navigator.sendBeacon).mockRestore()
//   })

//   describe('trackPageEvent', () => {
//     it.each(Object.values(PageEvent))(
//       'sends a beacon with page name and %s event to the appropriate endpoint',
//       (event) => {
//         vi.mocked(window.navigator.sendBeacon).mockReturnValue(true)

//         trackPageEvent('homepage', event)

//         expect(navigator.sendBeacon).toHaveBeenCalledWith(
//           'https://fake-analytics.com',
//           JSON.stringify({
//             page: 'homepage',
//             event,
//           }),
//         )
//       },
//     )
//   })
// })

// v3
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PageEvent, AnalyticsService } from './analytics.service'

describe('Analytics Service', () => {
  const analyticsService = new AnalyticsService()

  window.navigator.sendBeacon = vi.fn(window.navigator.sendBeacon)

  afterEach(() => {
    vi.mocked(window.navigator.sendBeacon).mockRestore()
  })

  describe('trackPageEvent', () => {
    it.each(Object.values(PageEvent))('sends a beacon with page and %s event to the appropriate endpoint', (event) => {
      vi.mocked(window.navigator.sendBeacon).mockReturnValue(true)

      analyticsService.trackPageEvent('homepage', event)

      expect(navigator.sendBeacon).toHaveBeenCalledWith(
        'https://fake-analytics.com',
        JSON.stringify({
          page: 'homepage',
          event,
        }),
      )
    })
  })
})
