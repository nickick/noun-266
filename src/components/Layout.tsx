import Header from "./Header";
import SocialBar from "./SocialBar";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <>
      <Header />
      <SocialBar />
      {children}
    </>
  )
}

export default Layout;