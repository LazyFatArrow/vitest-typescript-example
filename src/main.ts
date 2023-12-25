import { PageEvent, AnalyticsService } from './services/analytics.service'

export function handleScroll() {
  const analyticsService = new AnalyticsService()

  analyticsService.trackPageEvent('homepage', PageEvent.SCROLL)
}
