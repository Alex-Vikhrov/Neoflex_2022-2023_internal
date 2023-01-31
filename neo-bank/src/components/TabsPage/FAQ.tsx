import { Accordion } from 'components/UI/accordion';
import { FC } from 'react';

type TFAQProps = {
    id: number;
    topic: string;
    faq: any;
};

const FAQ: FC<TFAQProps> = ({ id, faq, topic }) => {
    return (
        <div className='faq' key={id}>
            <h3>{topic}</h3>
            {
                faq.map((item: any, index: number) => {
                    return (
                        <Accordion key={index} title={item.question} description={item.answer} />
                    );
                })
            }
        </div>
    );
};

export { FAQ };