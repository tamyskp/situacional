import React from 'react';
import styled from 'styled-components';

// components
import DisplayCard from '../../atoms/display-card';
import * as S from './styles';


function CardList(props:any) {

    const cards = props.cards;

    return (
        <S.CardListHolder>
            <S.Cards>
                { cards.map((cards:any, index:any) => (
                    <DisplayCard 
                        children={cards.children}
                        title={cards.title} 
                        label={cards.label} 
                        text={cards.text} 
                        route={cards.route} 
                        key={index} 
                    />
                ))}
            </S.Cards>
        </S.CardListHolder>
    );
}

export default CardList;