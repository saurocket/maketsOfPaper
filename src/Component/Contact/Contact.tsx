import Sprite from '../../img/icons/icons.svg'
import {useForm} from "react-hook-form";
import {Input} from "../From/Input";
import styled from 'styled-components'
import {Map} from './Map/Map'
import {useEffect} from "react";
import {useEmail} from "../../Hook/useEmail";
import Swal from "sweetalert2";

export type DataType = {
    comment: string
    email: string
    name: string
    tel: string
}

export const Contact = () => {
    const {loading,message,sendEmail} = useEmail()
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    useEffect(() => {
        if (message === 'SUCCESS'){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Повідомлення успішно відправлено',
                showConfirmButton: false,
                timer: 2500
            })
            reset(register)
            return
        }
        if(message === 'FAILED'){
            Swal.fire({
                icon: 'error',
                title: 'Щось пішло не так',
                text: "Позвоните нам!",
                footer: '<a href="tel:+380977550966">+38 097 755 09 66</a>'
            })
        }
    },[message])

    const onSubmit = (data:any) => {
        sendEmail(data)
    };
    const From = styled.form`
        margin-left: auto;
        margin-right: auto;
        max-width: 600px;

    `

    return (
        <section className='contact'>
            <div className="contact-container">
                <From id="modal" onSubmit={handleSubmit(onSubmit)}>
                    <b className="modal-header">Введіть, будь ласка, Ваші контактні дані, ми Вам зателефонуємо</b>
                    <Input
                        type='text'
                        labelName="Ім'я"
                        label='name'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#user'}
                        errors={errors}
                        required
                    />
                    <Input
                        type='tel'
                        labelName='Телефон'
                        label='tel'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#smartphone'}
                        errors={errors}

                    />
                    <Input
                        type='email'
                        labelName='Пошта'
                        label='email'
                        //            @ts-ignore
                        register={register}
                        svg={Sprite + '#mail'}
                        errors={errors}
                        required
                    />

                    <div className="group">
                        <label htmlFor="comment">Коментар</label>
                        <textarea
                            className="form-input"
                            id="comment"
                            placeholder="Введіть текст"
                            {...register("comment")}
                        />
                    </div>
                    <button
                        className="form-btn"
                        type="submit"
                        disabled={loading}
                    >
                        Надіслати
                    </button>
                </From>

                <Map/>

            </div>
        </section>
    )
}