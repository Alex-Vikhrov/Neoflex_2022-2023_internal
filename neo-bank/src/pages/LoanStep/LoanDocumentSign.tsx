import { Footer, Header, CustomizeTitle, Button, SuccessfulMessage } from 'components';
import { FC } from 'react';

const LoanDocumentSign: FC = () => {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <div className='sign'>
                        <CustomizeTitle title={'Signing of documents'} step={4} />
                        <p>
                            Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
                            a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
                            Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
                            history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
                            processing of personal data.
                        </p>
                        <div className='sign__btn'>
                            <input type="checkbox" id="payment" className="custom-checkbox" />
                            <label htmlFor="payment">I agree</label>
                            <Button className="send">
                                Send
                            </Button>
                        </div>
                    </div>

                    <SuccessfulMessage
                        title={'Documents have been successfully signed and sent for approval'}
                        message={'Within 10 minutes you will be sent a PIN code to your email for confirmation'}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanDocumentSign };