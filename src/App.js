import { useTranslation } from "react-i18next";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import enUS from "antd/es/locale/en_US";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const getAntdLocale = () => {
    switch (i18n.language) {
      case "en":
        return enUS;
      default:
        return zhCN;
    }
  };
  return (
    <ConfigProvider locale={getAntdLocale()}>
      <div>
        <h1>{t("秘钥1")}</h1>
        <h1>{t("key1")}</h1>
        <h1>{t("key2")}</h1>
        <p>{t("秘钥2")}</p>
        <p>{t("秘钥2")}</p>
        <p>{t("秘钥3")}</p>
        <p>{t("秘钥4")}</p>
        <p>{t("秘钥5")}</p>
        <button onClick={() => changeLanguage("zh")}>中文</button>
        <button onClick={() => changeLanguage("en")}>English</button>
      </div>
    </ConfigProvider>
  );
}

export default App;
