import { Helmet } from "react-helmet";
import Footer from "./layout/footer";
import Header from "./layout/header";

function App() {
  return (
    <>
      <div>
        <Helmet>
          <title>Soundtrack </title>
          <meta name="description" content="Soundtrack is Livetime Chat." />
        </Helmet>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
