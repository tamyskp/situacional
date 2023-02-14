import React from 'react';
import * as S from './styles';


function Section(props:any) {
    const children = props.children;
    const bg = props.bg;
    const color = props.color;
    const align = props.align;

    // specifics
    const padded = props.padded;
    const gray = props.gray;
    const rowItems = props.rowItems;

    return (
        <S.SectionHolder style={{
            backgroundImage: `${bg ? `url('${bg}')` : 'none'}`,
            background: `${gray ? `#eee` : 'none'}`
        }}>
            <S.Section style={{
                color: `${bg||color ? '#fff' : 'var(--theme-darken)'}`,
                textAlign: `${align ? align : 'center'}` as 'center',
                justifyContent: `${align ? 'flex-start' : 'center'}`,
                alignItems: `${align ? 'flex-start' : 'center'}`,
                backgroundColor: `${color? color : 'transparent'}`,
                gridColumnStart: `${color? '2' : '3'}`,
                gridColumnEnd: `${color? '12' : '11'}`,
                padding: `${padded? '6em 8em' : '6em 0'}`,
                flexDirection: `${rowItems? 'row' : 'column'}`,
                
            }}>
                {children}
            </S.Section>
        </S.SectionHolder>
    ); 
}

export default Section;