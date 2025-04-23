import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the user agent
  const userAgent = request.headers.get('user-agent') || '';
  
  // List of known bot user agents
  const bots = [
    'Googlebot',
    'Bingbot',
    'Slurp', // Yahoo
    'DuckDuckBot',
    'Baiduspider',
    'YandexBot',
    'Sogou',
    'facebookexternalhit',
    'ia_archiver', // Internet Archive
    'Twitterbot',
    'LinkedInBot',
    'WhatsApp',
    'Chrome-Lighthouse'
  ];
  
  // Check if the request is from a bot
  const isBot = bots.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()));
  
  // Skip pre-rendering timeout for bots - helps with Vercel's serverless function timeouts
  if (isBot) {
    // For Vercel, set the vercel-cdn-cache-control header
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    return response;
  }

  return NextResponse.next();
}

// Run middleware on all routes except for static files and api routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. Static files with extensions (.jpg, .png, etc)
     */
    '/((?!api|_next|_static|_vercel|.*\\..*$).*)',
  ],
}; 