import { FC, ReactNode } from "react";
import { Footer, Header } from "components";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { Layout }; 