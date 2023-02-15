import React from 'react';
import * as S from './styles';


function Section(props:any) {
    const children = props.children;
    const bg = props.bg;
    const color = props.color;
    const align = props.align;
    const id = props.id;

    // specifics
    const padded = props.padded;
    const gray = props.gray;
    const translate = props.translate;

    return (
        <S.SectionHolder id={id} style={{
            backgroundImage: `${bg ? `url('${bg}')` : 'none'}`,
            backgroundColor: `${gray ? `#eee` : 'none'}`
        }}>
            <S.Section style={{
                color: `${bg||color ? '#fff' : 'var(--theme-darken)'}`,
                textAlign: `${align ? align : 'center'}` as 'center',
                justifyContent: `${align ? 'flex-start' : 'center'}`,
                alignItems: `${align ? 'flex-start' : 'center'}`,
                backgroundColor: `${color? color : 'transparent'}`,

                padding: `${padded? '6em 8em' : '6em 0'}`,
                transform: `${translate? `translateY(-12em)` : 'none'}`,
                marginBottom: `${translate? `-18em` : '0'}`

            }}>
                {children}
            </S.Section>
        </S.SectionHolder>
    ); 
}

export default Section;