import { ChangeEvent, FC, useEffect, useState } from "react";
import { Button } from "components/UI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './support.scss';
import { api } from "api/api";

const SubscribeNewsSupport: FC = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [emailValue, setEmailValue] = useState('');

    useEffect(() => {
        const localStorageIsSubscribed = !!localStorage.getItem('isSubscribed');
        setIsSubscribed(localStorageIsSubscribed);
    }, []);

    const subscribeHandler = async () => {
        if (!isSubscribed) {
            await api.subscribeEmail(emailValue).then(() => {
                localStorage.setItem('isSubscribed', 'true');
                setIsSubscribed(true);
            });
        }
    };

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };

    if (!isSubscribed) {
        return (
            <section className="support">
                <h3>Support</h3>
                <p>Subscribe Newsletter & get</p>
                <p>Bank News</p>
                <form action="#" className="support__form">
                    <label className="support__icon-mail" htmlFor="email">
                        <FontAwesomeIcon className="fa fa-envelope fa-2x" icon={faEnvelope} aria-hidden="true" />
                    </label>
                    <input id="email" className="support__email" type="email" placeholder="Your email" value={emailValue} onChange={inputOnChange} />
                    <Button className="support__button" type="submit" onClick={subscribeHandler}>
                        <FontAwesomeIcon className="fa fa-paper-plane" icon={faPaperPlane} aria-hidden="true" />
                        Subscribe
                    </Button>
                </form>
            </section>
        );
    }
    return <h2 className="subscribed">{`You are already subscribed to the bank's newsletter.`}</h2>
};

export { SubscribeNewsSupport };
