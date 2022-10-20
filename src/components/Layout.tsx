import Header from "./Header";
import SocialBar from "./SocialBar";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <div>
      <Header />
      <SocialBar />
      {children}
    </div>
  )
}

export default Layout;