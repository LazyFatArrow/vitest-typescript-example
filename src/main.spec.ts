import { describe, expect, it, vi } from 'vitest'
import { PageEvent, AnalyticsService } from './services/analytics.service'
import { handleScroll } from './main'

vi.mock('./services/analytics.service')

describe('Main', () => {
  describe('handleScroll', () => {
    it('calls AnalyticsService.trackPageEvent with appropriate params', () => {
      const trackUserEventSpy = vi.spyOn(AnalyticsService.prototype, 'trackPageEvent')

      handleScroll()

      expect(trackUserEventSpy).toHaveBeenCalledTimes(1)
      expect(trackUserEventSpy).toHaveBeenCalledWith('homepage', PageEvent.SCROLL)
    })
  })
})
