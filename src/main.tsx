import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const ROOT_ELEMENT = document.getElementById("root") as HTMLElement;

createRoot(ROOT_ELEMENT).render(
	<StrictMode>
		<App />
	</StrictMode>
);
