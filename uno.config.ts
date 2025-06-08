import {
  defineConfig,
  presetWebFonts,
  presetWind4,
  presetIcons,
  presetTypography,
} from "unocss";
import extractorMdc from "@unocss/extractor-mdc";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetWebFonts({
      themeKey: "font",
      provider: "google",
      fonts: {
        sans: { name: "Inter", weights: ["300", "700"] },
      },
    }),
    presetTypography(),
    presetIcons(),
  ],
  extractors: [extractorMdc()],
});
