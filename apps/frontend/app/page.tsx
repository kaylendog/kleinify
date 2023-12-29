"use client";

import Cards from "@/components/cards";
import { CodeTag, Container, Description, Main, Title } from "@/components/sharedstyles";
import { trpc } from "@/utils/trpc";

function Home() {
	const query = trpc.hello.useQuery({ text: "uwu" });

	return (
		<Container>
			<Main>
				<Title>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</Title>
				<p>{query.data?.greeting ?? "loading..."}</p>
				<p>{query.error?.message ?? ""}</p>

				<Description>
					Get started by editing
					<CodeTag>pages/index.tsx</CodeTag>
				</Description>

				<Cards />
			</Main>
		</Container>
	);
}

export default trpc.withTRPC(Home);
