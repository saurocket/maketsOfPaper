import {ImagesType} from "../../Component/Gallery/Gallery";

export const filterList = [
    {id: '1', value: 'all', text: 'Вси Макети'},
    {id: '2', value: 'arch', text: 'Архитектурни споруды'},
    {id: '3', value: 'imed', text: 'Іміджеві'},
    {id: '4', value: 'transport', text: 'Моделі транспорту'},
    {id: '5', value: 'presentation', text: 'Презентаційні'},

] as Array<FilterType>
type FilterType = {
    id: string,
    value: ImagesType
    text: string
}