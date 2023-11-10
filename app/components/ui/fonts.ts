import { Inter, Teko, EB_Garamond } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const teko = Teko({
  weight: ["300"],
  subsets: ["latin"],
});

export const eb_garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
