import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

import type { AppRouter } from "../server/routers/_app";

const DEV_SERVER_PORT = 3000;

function getBaseUrl() {
	if (typeof window !== "undefined") return "";
	if (process.env.VERCEL_URL !== undefined) {
		return `https://${process.env.VERCEL_URL}`;
	}
	if (process.env.RENDER_INTERNAL_HOSTNAME !== undefined) {
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
	}
	return `http://localhost:${process.env.PORT ?? DEV_SERVER_PORT}`;
}

export const trpc = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				httpBatchLink({
					url: `${getBaseUrl()}/api/trpc`,
				}),
			],
		};
	},
	ssr: false,
});
