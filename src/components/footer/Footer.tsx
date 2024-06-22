import React from 'react'
import { ContainerFooter } from './styles'
import pngVisa from '../../images/visa 1.png'
import pngMasterCard from '../../images/master_card 1.png'
import pngBoleto from '../../images/boleto 1.png'
import pngHipercard from '../../images/hipercard 1.png'

const Footer = () => {
  return (
    <ContainerFooter>
        <span className='label-footer'>Meios de Pagamentos:</span>
        <div>
            <div className='group-div'>
            <img src={pngVisa} alt="" />
            </div>
            <div className='group-div'>
                <img src={pngMasterCard} alt="" />
            </div>
            <div className='group-div'>
                <img src={pngBoleto} alt="" />
            </div>
            <div className='group-div'>
                <img src={pngHipercard} alt="" />
            </div>
        </div>
       
    </ContainerFooter>
  )
}

export default Footer