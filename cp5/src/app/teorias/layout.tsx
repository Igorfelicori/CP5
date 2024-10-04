import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Teoria1- Catástrofes Globais",
    description: "Generasted by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{children}</div>
}