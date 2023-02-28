import { Button, FormWrapper, Loader } from "components";
import { FC } from "react";
import { CustomizeCard, CustomizeTitle } from "../CustomizeCard";
import './formApplication.scss';
import { useApplicationForm } from "./initialValuesFormApplication";

const FormApplication: FC<{ isLoading: boolean, onSubmitFormApplication: any, }> = ({ isLoading, onSubmitFormApplication, }) => {
    const { handleSubmit, formContact, employment } = useApplicationForm({
        onSubmitFormApplication
    });

    return (
        <CustomizeCard>
            <form className={isLoading ? "form-application load" : "form-application"} onSubmit={handleSubmit}>
                <CustomizeTitle title={"Continuation of the application"} step={2} />
                <FormWrapper initialValue={formContact} className="form-application__wrapper" />
                <h3>Employment</h3>
                <FormWrapper initialValue={employment} className="form-application__wrapper" />
                <div className="form__button-container">
                    <Button
                        className={"form__button"}
                        type="submit"
                    >
                        Continue
                    </Button>
                </div>
            </form>
            {isLoading && <Loader />}
        </CustomizeCard>
    );
};

export { FormApplication };