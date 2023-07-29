import {
  Body,
  Container,
  Head,
  Heading,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import { Html } from "@react-email/html";

interface IConfirm {
  email?: string;
  nome: string;
}

export const ThanksMail = ({ nome }: IConfirm) => (
  <Html>
    <Head />
    <Preview>Confirmação enviada!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Obrigado(a), {nome}!</Heading>
        <Text style={{ ...text, marginBottom: "14px" }}>
          Agradecemos muito por confirmar sua presença no nosso grande dia!
          Pedimos que ore por nós, para que tudo venha a correr bem.
        </Text>
        <Text
          style={{
            ...text,
            color: "#ababab",
            marginTop: "14px",
            marginBottom: "16px",
          }}
        >
          Esperamos você no dia 16 de dezembro as 19h. Até lá 💕
        </Text>
        <Text
          style={{
            marginTop: "14px",
            fontSize: "16px",
          }}
        >
          Abraços,
        </Text>
        <Text
          style={{
            fontSize: "24px",
            fontFamily: "'Dancing Script', 'Satisfy', 'Great Vibes', cursive",
          }}
        >
          Nayara e Victor.
        </Text>
      </Container>
      <Img src="../../../public/N.png" />
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
