import { LiveReload, Outlet, Links, Meta, Link } from "@remix-run/react";
import styles from "~/styles/app.css";

// For Links
export const links = () => [{ rel: "stylesheet", href: styles }];

// For Meta Tags
export const meta = () => {
  const description = "Blog with remix";

  const keywords = "remix,react,blog";

  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document title="My blog post">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }) {
  return (
    <html>
      <head>
        <Meta />
        <Links />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {/* Enable Live Reload */}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <div className="text">
            <img src="/download.png" alt="logo" width={50} height={50} />
          </div>
        </Link>
        <div className="logo-text">lcoShorts</div>
      </div>
      <div>{children}</div>
    </>
  );
}
