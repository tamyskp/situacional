import React from "react";
import * as I from "../icons/services";

const serviceList = [
    {
        children: I.departamentoPessoal,
        label: 'Performance',
        title: 'Departamento Pessoal',
        text:  'O melhor e mais rápido atendimento na área de DP, com as soluções legais de melhor custo e benefício.',
        route: '/servicos/departamento-pessoal'

    },
    {
        children: I.departamentoFinanceiro,
        label: 'Transparência',
        title: 'Departamento financeiro',
        text:  'Assessoramento em contas a pagar com sistema de controle "compartilhado" para efetuar pagamentos pela própria conta do condomínio.',
        route: '/servicos/departamento-financeiro'

    },
    {
        children: I.departamentoContabil,
        label: 'Facilidade',
        title: 'Departamento contábil',
        text:  'Elaboralção de plano de contas simplificado, para uma maior facilidade no entendimento da distribuição das receitas e despesas.',
        route: '/servicos/departamento-contabil'

    },
    {
        children: I.controleInadimplencia,
        label: 'Controle',
        title: 'Gestão de inadimplência',
        text:  'Ferramentas e sistema para garantir a sua segurança e retorno financeiro com avisos, planilhas de controle e plataforma para resolução da inadimplência.',
        route: '/servicos/controle-inadimplencia'

    },
    {
        children: I.acessoria,
        label: 'Personalização',
        title: 'Acessoria Situacional',
        text:  'Acessoria completa e personalizada para avaliar as competências e ferramentas que serão os melhores caminhos para gestão de sua organização',
        route: '/servicos/acessoria-situacional'

    },
];

export default serviceList;