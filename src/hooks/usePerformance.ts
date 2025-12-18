import { useEffect } from "react";

export const usePerformance = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Navigation Timing:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstPaint: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
          });
        }

        if (entry.entryType === 'paint') {
          console.log(`${entry.name}: ${entry.startTime}ms`);
        }

        if (entry.entryType === 'largest-contentful-paint') {
          console.log(`LCP: ${entry.startTime}ms`);
        }

        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          console.log(`FID: ${fidEntry.processingStart - fidEntry.startTime}ms`);
        }

        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            console.log(`CLS: ${clsEntry.value}`);
          }
        }
      }
    });

    // Observe different performance metrics
    try {
      observer.observe({ entryTypes: ['navigation', 'paint'] });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      observer.observe({ entryTypes: ['first-input'] });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Some browsers might not support all entry types
      console.warn('Performance observer not fully supported:', e);
    }

    // Monitor memory usage (if available)
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      console.log('Memory Usage:', {
        used: `${Math.round(memoryInfo.usedJSHeapSize / 1048576)}MB`,
        total: `${Math.round(memoryInfo.totalJSHeapSize / 1048576)}MB`,
        limit: `${Math.round(memoryInfo.jsHeapSizeLimit / 1048576)}MB`,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Report to analytics (optional)
  const reportWebVitals = (metric: any) => {
    if (window.gtag) {
      window.gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  };

  return { reportWebVitals };
};