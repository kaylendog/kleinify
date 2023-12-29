"use client";

import { type DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyle from "@/components/globalstyles";
import StyledComponentsRegistry from "@/components/registry";

const theme: DefaultTheme = {
	colors: {
		primary: "#111",
		secondary: "#0070f3",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<ThemeProvider theme={theme}>
						<GlobalStyle />
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
