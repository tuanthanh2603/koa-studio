import HeaderApp from "./HeaderApp";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <><HeaderApp /><main>{children}</main></>
    );
};

export default Layout;