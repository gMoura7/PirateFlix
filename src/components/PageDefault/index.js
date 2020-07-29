import React from 'react';
import Menu from '../Menu'
import Footer from '../Footer'

import Main from './styles'

function PageDefault( props ) {
    return(
        <>
            <Menu />
                {/* Operador ternário abaixo, se tiver homepage nos props, devolve somente children
                    Caso contrario, retorna children envelopados pela tag Main. */}
                {props.homepage ? (
                    <>
                    {props.children}
                    </>
                ) : 
                (
                    <Main>
                    {props.children}
                    </Main>
                )
            }
            <Footer />
        </>
    )
}

export default PageDefault;