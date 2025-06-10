import '@/css/styles.css';
import { Provider } from "@/components/ui/provider";
import { getAssetPath } from '@/utils/getAssetPath';

export default function RootLayout({ children, params }) {
  const lang = params?.lang || 'es'; 

  return (
    <html 
      lang={lang} 
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={getAssetPath("/favicon-plata.ico")} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
