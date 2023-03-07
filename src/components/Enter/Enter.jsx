import React from 'react'
import './Enter.scss'
import logo from '../../assets/inccsight.png'

import { AiFillHome } from 'react-icons/ai'
import { TbQuestionCircle, TbBrandGithub, TbSettings } from 'react-icons/tb'
import { MdOutlineNewReleases } from 'react-icons/md'

function Enter() {
    return (
        <div className='enter-container'>
            
            <div className='enter-header'>

                <img src={logo} className='icon-logo'/>                    

                <button className='btn-close'>X</button>

            </div>

            <div className='enter-body'>

                <div className='enter-left'>

                    <AiFillHome className='btn-icon'/>
                    <TbQuestionCircle className='btn-icon'/>
                    <TbBrandGithub className='btn-icon'/>
                    <MdOutlineNewReleases className='btn-icon'/>
                    <TbSettings className='btn-icon'/>

                </div>

                <div className='enter-right'>

                    <span>Enter the folders you want to run. Click "+" to add more groups.</span>


                    <button className='btn-enter'>Run Analyzes</button>

                </div>
            </div>

        </div>
    )
}

export default Enter