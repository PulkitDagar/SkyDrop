import { authMiddleware } from "@clerk/nextjs/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    publicRoutes:['/','/api/(.*)','/f/(.*)']
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};


// import {
//   clerkMiddleware,
//   createRouteMatcher
// } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher([
//   '/files',
//   '/upload'
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };