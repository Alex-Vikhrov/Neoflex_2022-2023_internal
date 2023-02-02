import { FC } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";

const Application: FC = () => {
    return (
        <CustomizeCard>
            <CustomizeTitle title={"Continuation of the application"} />
            <h1>Hello</h1>
        </CustomizeCard>
    );
};

export { Application };