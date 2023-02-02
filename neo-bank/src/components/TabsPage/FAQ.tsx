import { Accordion } from 'components';
import { FC } from 'react';
import { faqReceivingCard, faqUsingCard } from './tabs';

const FAQ: FC = () => {
    return (
        <div className='faq'>
            <h3>{'Issuing and receiving a card'}</h3>
            {
                faqReceivingCard.map((item) => {
                    return (
                        <Accordion key={item.id} title={item.question} description={item.answer} />
                    );
                })
            }
            <h3>{'Using a credit card'}</h3>
            {
                faqUsingCard.map((item) => {
                    return (
                        <Accordion key={item.id} title={item.question} description={item.answer} />
                    );
                })
            }
        </div>
    );
};

export { FAQ };