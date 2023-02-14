import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// icons
import { faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faPeopleArrows } from '@fortawesome/free-solid-svg-icons';


export const departamentoPessoal = <FontAwesomeIcon icon={faPersonCircleCheck} />
export const departamentoFinanceiro = <FontAwesomeIcon icon={faFileInvoiceDollar} />
export const departamentoContabil = <FontAwesomeIcon icon={faCashRegister} />
export const controleInadimplencia = <FontAwesomeIcon icon={faListCheck} />
export const acessoria = <FontAwesomeIcon icon={faPeopleArrows} />
