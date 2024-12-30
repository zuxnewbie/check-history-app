import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
// import ToasterDisplay from '@/components/notifications/ToasterDisplay';
const roboto = Roboto({
    weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
    style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Check History Application',
    description: 'Check History Application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/icon.ico" />
            </head>
            <body cz-shortcut-listen="true" className={roboto.className}>
                {/* <ToasterDisplay /> */}
                {children}
                <div id="container-modal"></div>
            </body>
        </html>
    );
}
