import { Html, Head, Main, NextScript } from "next/document";
import { commonMetadata as metadata } from "../app/metadata";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content={metadata.description} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
