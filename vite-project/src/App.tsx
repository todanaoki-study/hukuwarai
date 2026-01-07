//*全てのページを管理する親ファイル
//表示するページを管理するオブザーバー
import React, { useState, useEffect } from 'react';
import './CSS/style.min.css'

//必要なページを読み込む（ゲームフロー順に並んでる）
import Splash from './pages/splash';
import Title from "./pages/title";
import SelectPeople from "./pages/selectPeople";
import SelectImg from './pages/selectImg';
import Play from './pages/play';
import Result from './pages/result';

//必要なデータタイプを読み込む
import type { Player } from "./types/playerData";
//キャラクターの全体情報をインポート（座標や表示状態など）
import type { PartData, CharacterAsset } from "./types/partsData";
//キャラクターデータをインポート(猫やクマ、ユニコーンなど全部以下のファイルに入っている)
import { CHARACTER_ASSETS } from "./data/characterAsset";

const App: React.FC = () => {
  //*スイッチ一覧
  //ゲーム状態のスイッチ（スプラッシュ→タイトル→プレイ画面など）
  const [gameState, setGameState] = useState<"splash" | "title" | "selectPeople" | "selectImg" | "play" | "result">("splash");

  //プレイヤーのデータのスイッチ（人数や名前、アイコンなど）
  const [playerList, setPlayerList] = useState<Player[]>([
    { id: 1, userName: "", userIconUrl: "/src/assets/other/user.png" }
  ]);

  //福笑いで使う画像の切り替えスイッチ
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterAsset | null>(null);

  // パーツの位置情報を管理するスイッチ
  const [parts, setParts] = useState<PartData[]>([
  ]);
  //!モーダルの切り替えだけ各ページに状態管理を持たせてるんで気おつけてね！

  useEffect(() => {
    //プレイヤーが追加されるごとに記録
    console.log("Current Players:", playerList);
  }, [playerList]);

  // 特定のパーツの位置を更新する関数
  const updatePartPos = (id: string, x: number, y: number) => {
    setParts(prev => prev.map(p => p.id === id ? { ...p, x, y } : p));
  };

  //画像選択画面でキャラクターが選ばれたときの処理
  const handleSelect = (id: string) => {
    const data = CHARACTER_ASSETS[id];
    if (data) {
      //選ばれたキャラの情報を格納する
      setParts(data.parts);
      setSelectedCharacter(data);
      setGameState('play');
    }
  };


  //今何のゲーム画面を映すべきか選ぶ処理
  const renderScreen = () => {
    switch (gameState) {
      case "splash":
        return <Splash setGameState={setGameState} />;
      case "title":
        return <Title setGameState={setGameState} />;
      case "selectPeople":
        return <SelectPeople
          setGameState={setGameState}
          setPlayerList={setPlayerList}
          playerList={playerList}
        >
        </SelectPeople>
      case "selectImg":
        return <SelectImg onSelect={handleSelect} />;
      case "play":
        return <Play setGameState={setGameState} parts={parts} updatePartPos={updatePartPos} playerList={playerList} sampleImg={selectedCharacter?.bgImg || ""} />;
      case "result":
        return <Result setGameState={setGameState} parts={parts} />;
      default: return <Splash setGameState={setGameState} />;
    }
  }

  //上記をもとに現在のゲーム画面を表示
  return (
    <div className='container' id='container'>
      {renderScreen()}
    </div>
  )
}

//最終的にindex.htmlにはこれが読み込まれる
export default App;