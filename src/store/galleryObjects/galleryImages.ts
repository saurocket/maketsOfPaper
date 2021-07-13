import photo1 from '../../img/gallery/arch/photo1.jpg'
import photo2 from '../../img/gallery/arch/photo2.jpg'
import photo3 from '../../img/gallery/imed/photo3.jpg'
import photo4 from '../../img/gallery/transport/photo4.jpg'
import photo5 from '../../img/gallery/transport/photo5.jpg'
import photo6 from '../../img/gallery/presentation/photo6.jpg'
import photo7 from '../../img/gallery/presentation/photo7.jpg'
import photo8 from '../../img/gallery/imed/photo8.jpg'

export const transportImage = [
    {id: '1', imageName: photo4, tag: 'transport'},
    {id: '2', imageName: photo5, tag: 'transport'}
]
export const archImage = [
    {id: '3', imageName: photo1, tag: 'arch'},
    {id: '4', imageName: photo2, tag: 'arch'}
]
export const imedImage = [
    {id: '5', imageName: photo3, tag: 'imed'},
    {id: '6', imageName: photo8, tag: 'imed'}
]
export const presentationImage = [
    {id: '7', imageName: photo6, tag: 'presentation'},
    {id: '8', imageName: photo7, tag: 'presentation'}
]

export type ImageType = {id: string, imageName: string, tag: string}