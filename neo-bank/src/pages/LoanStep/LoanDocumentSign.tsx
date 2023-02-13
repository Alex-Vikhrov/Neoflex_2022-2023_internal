import { api } from 'api/api';
import { Footer, Header, CustomizeTitle, Button, SuccessfulMessage, Input } from 'components';
import { FC, useState } from 'react';
import file from 'img/File_dock_duotone.svg';

const LoanDocumentSign: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false)
    const handleClick = () => setChecked(!checked);

    const onSubmitFileSign = async () => {
        try {
            setIsLoading(true);
            localStorage.setItem('sign', JSON.stringify({}));
            await api.sendFileSign().then(() => { });
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const sign = localStorage.getItem('sign');

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    {
                        sign ?
                            <SuccessfulMessage
                                title={'Documents have been successfully signed and sent for approval'}
                                message={'Within 10 minutes you will be sent a PIN code to your email for confirmation'}
                            /> :
                            <div className='sign'>
                                <CustomizeTitle title={'Signing of documents'} step={4} />
                                <p>
                                    Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                                    a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                                    Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                                    history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                                    processing of personal data.
                                </p>
                                <div className="input__wrapper">
                                    <Input id="input__file" name="file" type="file" className={'input input__file'} />
                                    <label htmlFor="input__file" className="input__file-button">
                                        <span className="input__file-icon-wrapper">
                                            <img className="input__file-icon" src={file} alt="Выбрать файл" width="60" />
                                        </span>
                                        <span className="input__file-button-text">Information on your card</span>
                                    </label>
                                </div>
                                <div className='sign__btn'>
                                    <Input type="checkbox" id="payment" className="custom-checkbox" onClick={handleClick} checked={checked} />
                                    <label htmlFor="payment">I agree</label>
                                    <Button disabled={!checked} className={!checked ? "send disabled" : "send"} onClick={onSubmitFileSign}>
                                        Send
                                    </Button>
                                </div>
                            </div>
                    }
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanDocumentSign };