import React from 'react'

import logoType from "../../assets/images/logos/cl-002.webp"
import './HeadArt.scss'

const HeadArt = () => {
  return (
    <header className="brand-header">
        <div class="container header-art-box">
                
                
                <div class="logotype">
                    <img class="show-og" src={logoType} alt="logotype" />
                </div>
                
                <div class="header-art-text">
                    <h1 id="qhead" aria-label="nickname">QUERZION</h1>
                    <h2 id="qname" aria-label="full name">SlISK LINDQVIST</h2>
                    <h3 id="qdate" aria-label="birth-date in hexcode, hidden from screenreaders" aria-hidden="true">5765642c203032204170722031393836</h3>
                </div>
                
            </div>
            
            <hr />
    </header>
  )
}

export default HeadArt