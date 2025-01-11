export const pageView = (title: string) => {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag("event", "page_view", {
			page_title: title,
			page_location: window.location.href,
			page_path: window.location.pathname,
		});
	}
};

export const trackEvent = (
	category: string,
	action: string,
	label?: string
) => {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag("event", action, {
			event_category: category,
			event_label: label,
		});
	}
};
