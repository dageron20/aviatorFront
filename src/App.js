import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";
import { Landing } from "./pages/Landing";

function App() {
    return (
      <ConfigProvider locale={ruRu}>
        <Landing />
      </ConfigProvider>  
    );
}

export default App;
