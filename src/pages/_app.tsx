import "@/app/globals.css";
import type { AppProps } from "next/app";
import dotenv from "dotenv";
dotenv.config();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
