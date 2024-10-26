import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";

interface LayoutProps {
  isLoggedIn?: boolean;
  children: ComponentChildren;
  active: string;
  title?: string;
  description?: string;
  keywords?: string;
  isLoading?: boolean;
  theme?: "light" | "dark";
  showFooter?: boolean;
}

export default function Layout({
  isLoggedIn,
  children,
  active,
  title = "Fresh Auth",
  description,
  keywords,
  isLoading = false,
  theme = "light",
  showFooter = true
}: LayoutProps) {
  return (
    <div class={`app ${theme}`}>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>
      <Nav active={active} isLoggedIn={isLoggedIn ?? false} />
      <main class="flex-grow p-4 mx-auto max-w-screen-md">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          children
        )}
      </main>
      {showFooter && <Footer />}
    </div>
  );
}

function LoadingSpinner() {
  return <div class="loading-spinner">Loading...</div>;
}
