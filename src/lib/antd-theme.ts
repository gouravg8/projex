import { theme } from "antd";
import type { ThemeConfig } from "antd/es/config-provider/context";

export const getAntdTheme = (isDarkMode: boolean): ThemeConfig => {
	const baseTheme = {
		token: {
			colorPrimary: "var(--primary)",
			colorBgContainer: "var(--background)",
			colorText: "var(--foreground)",
			colorBorder: "var(--border)",
			colorBgElevated: "var(--background)",
			colorIcon: "var(--foreground)",
			colorIconHover: "var(--primary)",
			colorTextPlaceholder: "var(--muted-foreground)",
			colorBgLayout: "var(--background)",
		},
		components: {
			Select: {
				colorTextQuaternary: "var(--foreground)",
				colorTextTertiary: "var(--foreground)",
				colorBgContainer: "var(--background)",
				colorBgElevated: "var(--background)",
				colorIcon: "var(--foreground)",
				colorIconHover: "var(--primary)",
				colorText: "var(--foreground)",
				colorTextPlaceholder: "var(--muted-foreground)",
				colorBorder: "var(--border)",
				controlItemBgHover: "var(--muted)",
				controlItemBgActive: "var(--muted)",
				colorPrimaryHover: "var(--primary)",
			},
			Tag: {
				colorIcon: "var(--foreground)",
				colorIconHover: "var(--primary)",
				colorText: "var(--foreground)",
				colorBorder: "var(--border)",
				colorBgContainer: "var(--muted)",
			},
		},
		algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
	};

	return baseTheme;
};
