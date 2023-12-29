"use client";

import Cards from "@/components/cards";
import { CodeTag, Container, Description, Main, Title } from "@/components/sharedstyles";

export default function Home() {
	return (
		<Container>
			<Main>
				<Title>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</Title>

				<Description>
					Get started by editing
					<CodeTag>pages/index.tsx</CodeTag>
				</Description>

				<Cards />
			</Main>
		</Container>
	);
}
