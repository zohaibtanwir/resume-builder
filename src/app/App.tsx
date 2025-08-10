import { AppShell, MantineProvider } from "@mantine/core";
import Builder from "./pages/builder/Builder";

export default function App() {
	return (
		<MantineProvider>
			<AppShell padding="sm">
				<AppShell.Main>
					<Builder />
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	);
}
