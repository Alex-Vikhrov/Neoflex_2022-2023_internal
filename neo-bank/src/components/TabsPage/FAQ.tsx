import { Accordion } from 'components';
import { IFAQ } from 'constant/tabs/faq';
import { FC } from 'react';

type TFAQProps = {
    id: number;
    topic: string;
    faq: Array<IFAQ>;
};

const FAQ: FC<TFAQProps> = ({ id, faq, topic }) => {
    return (
        <div className='faq' key={id}>
            <h3>{topic}</h3>
            {
                faq.map((item, index: number) => {
                    return (
                        <Accordion key={index} title={item.question} description={item.answer} />
                    );
                })
            }
        </div>
    );
};

export { FAQ };