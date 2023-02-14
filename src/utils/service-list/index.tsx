import React from "react";
import * as I from "../icons/services";

const serviceList = [
    {
        children: I.departamentoPessoal,
        title: 'Departamento Pessoal',
        text:  'Adquira o melhor e mais rápido atendimento na área de DP. Buscamos sempre as melhores soluções legais para todas as situações trabalhistas. Nossa meta e sempre atingir a melhor performance e o menor custo em todas as decisões. Solicite orientação aos seus funcionários para entendimento de seus direitos e cumprimento de suas obrigações: Atinja alta performance aproximando sua equipe.',
        route: '/servicos/departamento-pessoal'

    },
    {
        children: I.departamentoFinanceiro,
        title: 'Departamento financeiro',
        text:  'Receba o melhor assessoramento em contas a pagar e controle de pagamentos. Escolha entre o sistema de controle de contas correntes "compartilhadas" onde efetuamos todos os pagamentos pela própria conta corrente do condomínio de forma a dar maior transparência aos fatos ou, simples programação de pagamentos sob a autorização de responsáveis financeiros de sua organização. Nossa ideia, e de acordo com a situação, facilitar de dar transparência aos fatos financeiros que serão conciliados no cruzamento dos documentos com os extratos bancários.',
        route: '/servicos/departamento-financeiro'

    },
    {
        children: I.departamentoContabil,
        title: 'Departamento contábil',
        text:  'Busque a melhor classificação e elaboração do plano de contas de forma a simplificar seus relatórios obtendo facilidade no entendimento da distribuição das receitas e despesas e, facilitando a conciliação com os extratos bancários. Solicite a assessoria a assembleias, transcrição e registros de ATAS, Convenções etc. Obtenha real controle sobre as alterações da responsabilidade legal sobre o CNPJ.',
        route: '/servicos/departamento-contabil'

    },
    {
        children: I.controleInadimplencia,
        title: 'Controle de inadimplência',
        text:  'Conjunto de técnicas e ferramentas para auxiliar nos contatos aos inadimplentes visando maior rapidez no retorno financeiro. Solicite as planilhas de controle atualizadas para apresentação ao seu corpo jurídico ou solicite-nos a plataforma para resolução da inadimplência. Nosso caminho é bem traçado e direcionado: Aviso de cobrança, Solicitação de conciliação, cobrança extrajudicial e cobrança judicial.',
        route: '/servicos/controle-inadimplencia'

    },
    {
        children: I.acessoria,
        title: 'Acessoria Situacional',
        text:  'Avalie competências. Conheça ferramentas e busque os melhores caminhos para gestão de sua organização. Buscaremos e trabalharemos conjuntamente nas melhorores soluções para cada situação.',
        route: '/servicos/acessoria-situacional'

    },
];

export default serviceList;