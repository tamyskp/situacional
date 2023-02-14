import React from "react";
import "./style.scss";

// components
import Section from "../../components/molecules/section";
import Form from "../../components/molecules/form";
import Input from "../../components/atoms/input";

function Contact() {
  return (
    <div className="intern">
      <Section gray rowItems align="left">
        <div style={{
            marginRight: '3em',
        }}>
            <h2>Fale com a gente</h2>
            <p>Envie uma mensagem através do formulário ao lado ou através dos nossos contatos, se preferir, fale diretamente com um de nossos setores através dos contatos abaixo.</p>
        </div>
        <Form>
            <Input type="text" name="name" label="Nome" placeholder="Nome e sobrenome" />
            <Input type="text" name="empresa" label="Empresa" placeholder="Nome da empresa" />
            <Input type="text" name="email" label="e-mail" placeholder="exemplo@email.com" />
            <Input type="textarea" name="mensagem" label="Mensagem" placeholder="Insira aqui sua mensagem" />
        </Form>
      </Section>
    </div>
  );
}

export default Contact;
