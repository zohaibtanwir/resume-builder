import "@testing-library/jest-dom";

// Mock ResizeObserver which is not available in test environment
global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}));

// Mock window.matchMedia which is not available in test environment
Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // deprecated
		removeListener: jest.fn(), // deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

// Mock window.print for PDF generation tests
Object.defineProperty(window, "print", {
	writable: true,
	value: jest.fn(),
});

// Mock window.alert for PDF generation tests
Object.defineProperty(window, "alert", {
	writable: true,
	value: jest.fn(),
});

// Mock window.open for PDF generation tests
Object.defineProperty(window, "open", {
	writable: true,
	value: jest.fn().mockReturnValue({
		document: {
			write: jest.fn(),
			close: jest.fn(),
		},
		close: jest.fn(),
	}),
});

// Mock HTMLElement.getBoundingClientRect
HTMLElement.prototype.getBoundingClientRect = jest.fn(() => ({
	width: 120,
	height: 120,
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	x: 0,
	y: 0,
	toJSON: jest.fn(),
}));

// Suppress console.warn for tests unless needed
const originalWarn = console.warn;
beforeAll(() => {
	console.warn = (...args) => {
		if (args[0]?.includes?.("ReactDOM.render is no longer supported")) {
			return;
		}
		originalWarn.call(console, ...args);
	};
});

afterAll(() => {
	console.warn = originalWarn;
});
