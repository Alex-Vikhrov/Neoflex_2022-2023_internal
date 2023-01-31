import { Accordion } from 'components/UI/accordion';
import { FC } from 'react';

type TFAQProps = {
    topic: string;
    faq: any;
};

const FAQ: FC<TFAQProps> = ({ faq, topic }) => {
    return (
        <div className='faq'>
            <h3>{topic}</h3>
            {
                faq.map((item: any, index: number) => {
                    return (
                        <Accordion key={item.id} title={item.question} description={item.answer} />
                    );
                })
            }
        </div>
    );
};

export { FAQ };