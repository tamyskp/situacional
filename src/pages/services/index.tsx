import React from "react";
import "./style.scss";

// components
import Section from "../../components/molecules/section";
import Container from "../../components/molecules/container";
import DisplayText from "../../components/atoms/display-text";
import CardList from "../../components/molecules/card-list";

// Utils
import serviceList from "../../utils/service-list";

function Services() {
  return (
    <div className="intern">
      <Section gray align="left">
        <h2>Nossos serviços</h2>
        <Container size2x1>
          <p>
            Nosso atendimento sempre se dará de forma "situacional". Buscamos
            sempre a melhor solução para esclarecer e atender solicitações de
            nossos clientes internos e externos. A preservação do bom
            relacionamento e a cultura do bem maior: respeito ao próximo. Essa é
            a nossa principal ferramenta para conquistar nosso espaço. Criar
            laços e Através da utilização do que há de mais moderno para
            administração condomínial, controle financeiro, controle contábil,
            controle de pessoal
          </p>
          <DisplayText>
            “Situacional é uma metodologia que busca soluções e gera
            conversações efetivas, identificação e reformulação de valores e
            metas".
          </DisplayText>
        </Container>
        <CardList cards={serviceList} />
      </Section>
      <Section align="left" id="departamentopessoal">
        <div>
          <Container>
            <div>
            <h3>Departamento financeiro</h3>
              <p>
                Adquira o melhor e mais rápido atendimento na área de DP. Buscamos
                sempre as melhores soluções legais para todas as situações
                trabalhistas. Nossa meta e sempre atingir a melhor performance e o
                menor custo em todas as decisões.
              </p>
              <p>
                Solicite orientação aos seus funcionários para entendimento de seus
                direitos e cumprimento de suas obrigações: Atinja alta performance
                aproximando sua equipe.
              </p>
            </div>
          </Container>
        </div>
        <hr/>
        <div>
          <Container>
            <div></div>
            <div>
              <h3>Departamento pessoal</h3>
              <p>
              Receba o melhor assessoramento em contas a pagar e controle de pagamentos. Escolha entre o sistema de controle de contas correntes "compartilhadas" onde efetuamos todos os pagamentos pela própria conta corrente do condomínio de forma a dar maior transparência aos fatos ou, simples programação de pagamentos sob a autorização de responsáveis financeiros de sua organização. Nossa ideia, e de acordo com a situação, facilitar de dar transparência aos fatos financeiros que serão conciliados no cruzamento dos documentos com os extratos bancários.
              </p>
            </div>
          </Container>
        </div>
        <hr/>
        <div>
          <Container>
            <div>
            <h3>Departamento contábil</h3>
              <p>
              Busque a melhor classificação e elaboração do plano de contas de forma a simplificar seus relatórios obtendo facilidade no entendimento da distribuição das receitas e despesas e, facilitando a conciliação com os extratos bancários. Solicite a assessoria a assembleias, transcrição e registros de ATAS, Convenções etc. Obtenha real controle sobre as alterações da responsabilidade legal sobre o CNPJ.
              </p>
            </div>
          </Container>
        </div>
        <hr/>
        <div>
          <Container>
            <div></div>
            <div>
           <h3>Controle de inadimplência</h3>
              <p>
              Conjunto de técnicas e ferramentas para auxiliar nos contatos aos inadimplentes visando maior rapidez no retorno financeiro. Solicite as planilhas de controle atualizadas para apresentação ao seu corpo jurídico ou solicite-nos a plataforma para resolução da inadimplência. Nosso caminho é bem traçado e direcionado:                     
              </p>
            </div>
          </Container>
        </div>
        <hr/>
        <div>
          <Container>
            <div>
              <h3>Asessoria Situacional</h3>
              <p>
              Avalie competências. Conheça ferramentas e busque os melhores caminhos para gestão de sua organização. Buscaremos e trabalharemos conjuntamente nas melhorores soluções para cada situação.
              </p>
            </div>
          </Container>
        </div>
      </Section>
    </div>
  );
}

export default Services;
