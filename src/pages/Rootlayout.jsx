import { Outlet } from "react-router-dom";

export default function RootLayout({ children }) {
  return (
    <div>
      <h1>hello</h1>
      <main> {children}</main>
    </div>
  );
}
