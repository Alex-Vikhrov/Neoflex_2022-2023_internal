import { Footer, Header } from 'components';
import { FC, ReactNode } from 'react';

type TWrapperProps = {
    children: ReactNode;
}

const Wrapper: FC<TWrapperProps> = ({ children }) => {
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

export default Wrapper;