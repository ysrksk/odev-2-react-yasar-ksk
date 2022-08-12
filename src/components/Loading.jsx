import React from "react";
import { Puff } from  'react-loader-spinner'
import { Div } from "./sytle-components/LoadingStyled";


const Loading = () => {
    return(
        <Div>
        <Puff color="#004D40" height={80} width={80} />
        </Div>
    )
}

export default Loading;