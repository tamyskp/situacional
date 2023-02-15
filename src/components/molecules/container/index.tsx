import React from "react";
import * as S from './styles';

function Container (props:any) {
    const size1x2 = props.size1x2;
    const size2x1 = props.size2x1;
    const children = props.children

    function renderSize() {
        if (size1x2) {
            return ('1fr 2fr')
        } else if (size2x1) {
            return ('2fr 1fr')
        } else {
            return ('1fr 1fr')
        }
    }

    return(
        <S.Container style={{
            gridTemplateColumns: renderSize(),
        }}>
            {children}
        </S.Container>
    );
}

export default Container;