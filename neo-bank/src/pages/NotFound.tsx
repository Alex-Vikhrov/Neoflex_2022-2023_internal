import { FC } from "react";
import {
    Footer,
    Header,
    Not_404,
} from "../components";

const NotFound: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <Not_404 />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { NotFound };