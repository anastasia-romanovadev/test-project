import "./App.css";
import { Header } from "./components/Header/header";
import { MainPage } from "./components/MainPage/mainPage";
import { Sidebar } from "./components/Sidebar/sidebar";
import { folders } from "./data/folders";
import { useEffect, useState } from "react";

function App() {
  const [showHidden, setShowHidden] = useState(false);
  const [activeFolderId, setAcriveFolderId] = useState<number | null>(null);

  useEffect(() => {
    if(!showHidden && activeFolderId && folders[activeFolderId - 1].isHidden) {
      setAcriveFolderId(null)
    }
  }, [showHidden, activeFolderId])

  return (
    <div className="app">
      <Header
        showHidden={showHidden}
        onToggle={() => setShowHidden((prev) => !prev)}
      />
      <div className="content">
        <Sidebar
          folders={folders}
          activeFolderId={activeFolderId}
          onChange={(id) => setAcriveFolderId(id)}
          showHidden={showHidden}
        />
        <MainPage activeFolderId={activeFolderId} showHidden={showHidden}/>
      </div>
    </div>
  );
}

export default App;
