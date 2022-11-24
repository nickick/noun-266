import Footer from "./Footer";
import Header from "./Header";
import SocialBar from "./SocialBar";
import SwitchNetwork from "./SwitchNetwork";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <>
      <SwitchNetwork />
      <Header />
      <Header borderOnly />
      <SocialBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout;