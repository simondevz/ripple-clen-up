import { Inter, Poppins } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar";
import { Providers } from "./reduxState/provider";
import { store } from "./reduxState/store";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["800", "700", "600", "500", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers store={store}>
          {/* <Navbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
