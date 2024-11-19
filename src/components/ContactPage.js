import React from 'react';
import DetailsData from './DetailsData';
import CardData from './CardData';

let ContactPage = () => {
    
        return(
            <React.Fragment>
                <div className='container mt-3'>
                    <div className='row'>
                        <div className='col'>
                                <h1>Conatct page Application</h1>
                                <p>It really is. It takes a fair amount of time to learn the syntax, but once done it’s completely indispensable. Emmet for CSS its fantastic too, works in much the same way. Emmet is an awesome tool. The lorem generator is nice but it’s code completing functionality makes it indispensable. Once you learn the syntax you can code a whole wireframe with just a few keystrokes.</p>
                        </div>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='col-8'>
                        <DetailsData />
                    </div>
                    <div className='col-4'>
                        <CardData/>
                    </div>
                </div>
            </React.Fragment>
        )
}

export default ContactPage;