/**
 * Content Security Policy (CSP) configuration for enhanced security
 * Add this to your site's HTTP headers or meta tag
 */

export const cspDirectives = {
  "default-src": "'self'",
  "script-src":
    "'self' 'unsafe-inline' 'unsafe-eval' https://www.retrogames.cc",
  "style-src": "'self' 'unsafe-inline'",
  "img-src": "'self' data: https: blob:",
  "frame-src": "https://www.retrogames.cc",
  "connect-src": "'self' https://www.retrogames.cc",
  "media-src": "'self' https://www.retrogames.cc",
  "object-src": "'none'",
  "base-uri": "'self'",
  "form-action": "'self'",
  "frame-ancestors": "'none'",
  "upgrade-insecure-requests": "",
};

export const cspString = Object.entries(cspDirectives)
  .map(([key, value]) => `${key} ${value}`)
  .join("; ");

/**
 * Additional security headers recommendations
 */
export const securityHeaders = {
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "no-referrer-when-downgrade",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  "Content-Security-Policy": cspString,
};
