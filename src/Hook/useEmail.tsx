import {useCallback, useState} from "react";
import emailjs from 'emailjs-com';
import { DataType } from "../Component/Contact/Contact";

const OUR_MAIL_GMAIL = `service_qka6syj`
const OUR_TEMPLATE = `template_hjrwjyg`
const USER_ID = 'user_LrPykntPwdyfKqnaQcvP2'


export const useEmail = () => {
   const [message, setMessage] = useState<null | string>(null)
    const [loading, setLoading] = useState(false)
    const sendEmail = useCallback((data:DataType) => {
        setLoading(true)
        emailjs.send(OUR_MAIL_GMAIL,OUR_TEMPLATE, data, USER_ID)
            .then((response) => {
               setMessage('SUCCESS')
                setLoading(false)
            }, (err) => {
                setMessage('FAILED')
                setLoading(false)
            });

    },[])
    return {message, loading, sendEmail}
}