
import styled from "styled-components";
 const MapStyled = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 20px;
    max-width: 600px;   
 `
const Iframe = styled.iframe`
    border: 1px solid #686868;
    border-radius: 5px;
`

export const Map = () => {
    return (
        <MapStyled id='map'>
            <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.7794508425036!2d30.536197115696865!3d50.4265806794721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2z0LHRg9C7LiDQm9C10YHQuCDQo9C60YDQsNC40L3QutC4LCAyNiwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2spl!4v1626453830197!5m2!1sru!2spl"
                width="100%" height="450"  loading="lazy"></Iframe>
        </MapStyled>
    )
}