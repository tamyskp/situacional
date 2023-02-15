import React from "react";
import "./style.scss";

// components
import Section from "../../components/molecules/section";
import Form from "../../components/molecules/form";
import Input from "../../components/atoms/input";
import List from "../../components/molecules/list";
import Textarea from "../../components/atoms/textarea";
import Container from "../../components/molecules/container";


// utils
import * as I from "../../utils/icons/services";
import * as I2 from "../../utils/icons/contacts";


function Contact() {
  const contactList = [
    {
      icon: I.departamentoPessoal,
      name: "Departamento pessoal",
      email: "departamentopessoal@situacional.com.br",
      phone: "+ 21 2456-1447",
    },
    {
      icon: I.departamentoFinanceiro,
      name: "Departamento financeiro",
      email: "departamentofinanceiro@situacional.com.br",
      phone: "+ 21 3081-0638",
    },
    {
      icon: I2.condominio,
      name: "Condomínio",
      email: "condominio@situacional.com.br",
      phone: "+ 21 3081-0636",
    },
    {
      icon: I2.diretoria,
      name: "Diretoria",
      email: "jrprj@situacional.com.br",
      phone: "+ 21 3081-0641",
    }
  ]
  return (
    <div className="intern">
      <Section gray align="left">
        <h2>Fale com a gente</h2>
        <p>Envie uma mensagem através do nosso formulário de contato ou, se preferir, fale diretamente com um de nossos setores.</p>
        <Container>
          <Form>
              <Input type="text" name="name" label="Nome" placeholder="Nome e sobrenome" />
              <Input type="text" name="empresa" label="Empresa" placeholder="Nome da empresa" />
              <Input type="text" name="email" label="e-mail" placeholder="exemplo@email.com" />
              <Textarea name="mensagem" label="Mensagem" placeholder="Insira aqui sua mensagem" />
          </Form>
          <List items={contactList} />
        </Container>
      </Section>
    </div>
  );
}

export default Contact;
