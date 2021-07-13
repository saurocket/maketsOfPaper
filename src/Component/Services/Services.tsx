import about1 from '../../img/about1.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/about3.jpg'
import about4 from '../../img/about4.jpg'
import React from "react";
import {ServicesItem} from "./ServicesItem";


export const Services = () => {

    return (
        <main>
            <section className="about">
                <div className="about-container">
                    <ul className='about_page'>
                        <ServicesItem src={about1} header={'Макети архітектурних споруд'}>
                            <p>Макети архітектурних споруд- естетичне сприйняття навколишнього світу в малій формі.
                                Малий обєм, що предає форму та допомагає працювати в подальшому з великими обєктами! або
                                Архітектурний макет ( фр. Maquette , від італ. Macchietta - начерк) - об'ємно-просторове
                                зображення проектованого або існуючого споруди , архітектурного ансамблю , міста .
                                Архітектурний макет або досить точно відтворює оригінал в деталях, в такому випадку його
                                називають також моделлю , або з деяким ступенем наближення. Макети створюються, щоб
                                перевірити архітектурну композицію, узгодженість частин споруд, наочно ознайомитися з
                                ув'язкою рельєфу місцевості і основних обсягів.</p>
                        </ServicesItem>

                        <ServicesItem src={about2} header={'Іміджеві макети'}>
                            <p>Іміджеві макети- Макети що створені для подальшого розвитку вже існуючих та стрімко
                                розвиваючих компаній. також вони підкреслюють Ваш статус і Ваші можливості!</p>
                        </ServicesItem>
                        <ServicesItem src={about3} header={'Макети моделей транспорту'}>
                            <p>Макети моделей транспорту. Макети що дозволяють не транспортувати на виставки велику та
                                обємну техніку. Передають всю необхідну інформацію про модель, не тільки статичну а й
                                кінетичну!</p>
                        </ServicesItem>
                        <ServicesItem src={about4} header={'Презентаційні макети'}>
                            <p>Презентаційні макети - вони дозволяють компаніям провести презентацію своєї архітектури в
                                любому наданому місці, при всіх можливих допоміжних спецефектах. презентація стає
                                цікавішою та зрозумілішою.</p>
                        </ServicesItem>
                    </ul>
                </div>
            </section>
        </main>


    )
}