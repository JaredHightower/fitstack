'use client';

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import type { ReactNode } from 'react';

// biome-ignore lint/style/noNonNullAssertion:
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL_DEV!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
