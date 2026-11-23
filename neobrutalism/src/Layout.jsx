import { Outlet } from "react-router-dom";
import { SmoothScrollProvider } from "@/components/scroll/SmoothScrollProvider";
import { BrutalistChrome } from "@/brutalist/BrutalistChrome";

export default function Layout() {
  return (
    <>
      <SmoothScrollProvider />
      <BrutalistChrome>
        <Outlet />
      </BrutalistChrome>
    </>
  );
}
