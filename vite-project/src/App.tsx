//*表示するページを管理するオブザーバー
import React, { useState, useEffect } from 'react';
import './CSS/style.min.css'

import Play from './pages/play';
import Result from './pages/result';

const App: React.FC = () => {

  //ゲームページ一覧
  const [gameState, setGameState] = useState<"splash" | "title" | "play" | "result">("title");

  //ゲーム状態を監視する関数
  useEffect(() => {
    console.log("画面が切り替わりました。 ");
  }, [gameState])

  const renderScreen = () => {
    switch (gameState) {
      case "title":
        return <Play setGameState={setGameState} />;
      case "result":
        return <Result setGameState={setGameState} />;
      default: return <Play setGameState={setGameState} />;
    }
  }

  return (
    <div className='container' id='container'>
      {renderScreen()}
    </div>
  )
}

export default App;