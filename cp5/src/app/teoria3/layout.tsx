import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teoria3- Reinterpretação de textos antigos",
    description: "Generasted by create next app",
};

export const viewport = {
    initialScale: 1.0,
    width: "device-width",
    colorScheme: "dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>
}