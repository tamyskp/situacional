import React from "react";

// components
import Section from "../../components/molecules/section";
import CardList from "../../components/molecules/card-list";
import Button from "../../components/atoms/button";
import DisplayText from "../../components/atoms/display-text";

// images
import bannerImg from "../../assets/banner.jpg";
import contaImg from "../../assets/conta.jpg";

function Home() {
    const serviceCards = [
        {
            children: 'Ícone',
            title: 'Departamento Pessoal',
            text:  'Adquira o melhor e mais rápido atendimento na área de DP. Buscamos sempre as melhores soluções legais para todas as situações trabalhistas. Nossa meta e sempre atingir a melhor performance e o menor custo em todas as decisões. Solicite orientação aos seus funcionários para entendimento de seus direitos e cumprimento de suas obrigações: Atinja alta performance aproximando sua equipe.',
            route: '/'
        },
        {
            children: 'Ícone',
            title: 'Departamento financeiro',
            text:  'Receba o melhor assessoramento em contas a pagar e controle de pagamentos. Escolha entre o sistema de controle de contas correntes "compartilhadas" onde efetuamos todos os pagamentos pela própria conta corrente do condomínio de forma a dar maior transparência aos fatos ou, simples programação de pagamentos sob a autorização de responsáveis financeiros de sua organização. Nossa ideia, e de acordo com a situação, facilitar de dar transparência aos fatos financeiros que serão conciliados no cruzamento dos documentos com os extratos bancários.',
            route: '/'
        },
        {
            children: 'Ícone',
            title: 'Departamento contábil',
            text:  'Busque a melhor classificação e elaboração do plano de contas de forma a simplificar seus relatórios obtendo facilidade no entendimento da distribuição das receitas e despesas e, facilitando a conciliação com os extratos bancários. Solicite a assessoria a assembleias, transcrição e registros de ATAS, Convenções etc. Obtenha real controle sobre as alterações da responsabilidade legal sobre o CNPJ.',
            route: '/'
        },
        {
            children: 'Ícone',
            title: 'Controle de inadimplência',
            text:  'Conjunto de técnicas e ferramentas para auxiliar nos contatos aos inadimplentes visando maior rapidez no retorno financeiro. Solicite as planilhas de controle atualizadas para apresentação ao seu corpo jurídico ou solicite-nos a plataforma para resolução da inadimplência. Nosso caminho é bem traçado e direcionado: Aviso de cobrança, Solicitação de conciliação, cobrança extrajudicial e cobrança judicial.',
            route: '/'
        },
        {
            children: 'Ícone',
            title: 'Acessoria Situacional',
            text:  'Avalie competências. Conheça ferramentas e busque os melhores caminhos para gestão de sua organização. Buscaremos e trabalharemos conjuntamente nas melhorores soluções para cada situação.',
            route: '/'
        },
    ];
    return (
        <div className="page-content">
            <Section bg={bannerImg}>
                <h1>As solucões ideais para as necessidades do seu condomínio</h1>
                <p>Para condomínios e associações residenciais, comerciais, mistos e outros seguimentos, buscamos entender suas reais necessidades para criar uma linha personalizada no atendimento. </p>
            </Section>
            <CardList cards={serviceCards} />
            <Section>
                <h2>Como acessar a sua área do cliente</h2>
                <p>Confira nosso tutorial em vídeo, ou acesse o nosso passo a passo.</p>
                <Button type="primary">Acessar passo a passo</Button>
            </Section>
            <Section color="var(--theme)">
                <h2>A sua vontade de se tornar um excelente gestor com certeza casa com a nossa vontade em sermos os melhores colaboradores.</h2>
                <Button type="primary">Entre em contato</Button>
            </Section>
            <Section align="left">
                <h2>Porque escolher a Situacional</h2>
                <p>Somos uma empresa embrionária que difere das demais por dar atendimento personalizado a cada cliente. A utilização da administração financeira compartilhada foi uma idéia de seu fundador, Roberto Pereira, ao entender que a receita de cada organização deve sempre estar sob o controle da mesma. Sendo seus principios: o caminho, a verdade e a vida. O caminho de sempre estar junto aos seus colaboradores e clientes; A verdade em dar clareza e objividade nas informações e relatórios de fatos; A vida, em buscar conjunto em todas as atividades utilizando sempre das melhores ferramentas.</p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    textAlign: 'center',
                    justifyContent: 'space-around',
                }}>
                    <div>
                        <DisplayText type="outdoor">+ de 07 <br/> anos</DisplayText>
                        <p>Mais de 07 anos de atuação no mercado brasileiro</p>
                    </div>
                    <div>
                        <DisplayText type="outdoor">33 <br/> clientes</DisplayText>
                        <p>Trinta e três clientes transformando-se com nossos programas e metodologias.</p>
                    </div>
                </div>
            </Section>
            <Section bg={contaImg}>
                <h2>"Facilidade de entendimento nas suas explanações e explicações transformam sua gestão em uma administração vencedora. Faça história! Seja história!</h2>
                <p>Ser gestor com competência e com as ferramentas adequadas, expandirá seus horizontes e permitirá tomar as decisões mais acertadas.</p>
            </Section>
        </div>
    )
}

export default Home;