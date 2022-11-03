import Footer from "./Footer";
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
      <Footer />
    </>
  )
}

export default Layout;