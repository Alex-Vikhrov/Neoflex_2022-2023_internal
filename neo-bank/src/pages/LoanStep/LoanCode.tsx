import { Footer, Header, PinCodeInput, SuccessfulMessage } from 'components';
import { FC, useState } from 'react';

const initialDigits = ['', '', '', ''];

const LoanCode: FC = () => {
    const [digits, setDigits] = useState(initialDigits);

    return (
        <div className="wrapper">
            <Header />
            <main>
                <div className="wrapper__main">
                    <div className="pin-wrapper">
                        <h2 className='title-pin'>Please enter confirmation code</h2>
                        <form className='form-pin'>
                            <PinCodeInput digits={digits} changeHandler={setDigits} />
                        </form>
                    </div>
                    {/* <SuccessfulMessage
                        title={'Wait for a decision on the application'}
                        message={'The answer will come to your mail within 10 minutes'}
                    /> */}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { LoanCode };