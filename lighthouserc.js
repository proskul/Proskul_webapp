module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'apple-touch-icon': ['warn', { minScore: 1 }],
        'color-contrast': ['warn', { minScore: 1 }],
        'csp-xss': ['warn', { minScore: 1 }],
        'heading-order': ['warn', { minScore: 1 }],
        'installable-manifest': ['warn', { minScore: 1 }],
        'maskable-icon': ['warn', { minScore: 1 }],
        'meta-description': ['warn', { minScore: 1 }],
        'preload-lcp-image': ['warn', { minScore: 1 }],
        'service-worker': ['warn', { minScore: 1 }],
        'splash-screen': ['warn', { minScore: 1 }],
        'themed-omnibox': ['warn', { minScore: 1 }],
        'render-blocking-resources': ['warn', { minScore: 1 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
