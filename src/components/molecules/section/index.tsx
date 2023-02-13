import React from 'react';
import styled from 'styled-components';
import * as S from './styles';


function Section(props:any) {
    const children = props.children;
    const bg = props.bg;
    const color = props.color;
    const align = props.align;

    return (
        <S.SectionHolder style={{
            backgroundImage: `${bg ? `url('${bg}')` : 'none'}`,
        }}>
            <S.Section style={{
                color: `${bg||color ? '#fff' : 'inherit'}`,
                alignItems: `${align ? align : 'center'}`,
                textAlign: `${align? align : 'center'}` as 'center',
                backgroundColor: `${color? color : 'transparent'}`,
            }}>
                {children}
            </S.Section>
        </S.SectionHolder>
    ); 
}

export default Section;