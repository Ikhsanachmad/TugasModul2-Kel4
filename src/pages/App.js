import { Card, Gap, StyledLink } from "../components";
import { Layout } from "antd";
import "./App.scss";
import ikhsan from "../assets/ikhsan.jpg";
import yudhi from "../assets/yudhi.jpg";

const { Header, Content, Footer } = Layout;
const today = new Date();
const year = today.getFullYear();

function App() {
  return (
    <Layout className="main-page">
      <Header className="navbar">
        <p className="title">Kelompok 4</p>
        <div className="link-wrapper">
          <StyledLink label="Home" href="#" />
          <Gap width={20} />
          <StyledLink label="Product" href="#" />
        </div>
      </Header>
      <Content className="content">
        <Card nama="Ikhsan Achmad" nim="21120117130067" photo={ikhsan} />
        <Card nama="Yudhi Kasih" nim="21120117140030" photo={yudhi} />
      </Content>
      <Footer style={{ textAlign: "center", color: "#004643" }}>
        @{year} Created by Kelompok 30
      </Footer>
    </Layout>
  );
}

export default App;
