import React from "react";

// components
import Section from "../../components/molecules/section";
import CardList from "../../components/molecules/card-list";
import Button from "../../components/atoms/button";
import DisplayText from "../../components/atoms/display-text";

// images
import bannerImg from "../../assets/banner.jpg";
import contaImg from "../../assets/conta.jpg";

// utils
import serviceList from "../../utils/service-list";


function Home() {
    return (
        <div className="page-content">
            <Section bg={bannerImg}>
                <h1>As solucões ideais para as necessidades do seu condomínio</h1>
                <p>Para condomínios e associações residenciais, comerciais, mistos e outros seguimentos, buscamos entender suas reais necessidades para criar uma linha personalizada no atendimento. </p>
                <hr/>
            </Section>
            <div style={{
                transform: 'translateY(-6em)',
                marginBottom: '-3em'
            }} >
                <CardList cards={serviceList} />
            </div>
            <Section>
                <h2>Como acessar a sua área do cliente</h2>
                <p>Confira nosso tutorial em vídeo, ou acesse o nosso passo a passo.</p>
                <Button big>Acessar passo a passo</Button>
            </Section>
            <Section color="var(--theme)">
                <h2>A sua vontade de se tornar um excelente gestor com certeza casa com a nossa vontade em sermos os melhores colaboradores.</h2>
                <Button primary big>Entre em contato</Button>
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