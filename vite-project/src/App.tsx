//*全てのページを管理する親ファイル
//*表示するページを管理するオブザーバー
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
import type { ImgData } from "./types/imgData";
import type { PartData } from "./types/partsData";

//画像をインポート
import rightEarImg from '/assets/cat/cat-rightEar.png';
import leftEarImg from '/assets/cat/cat-leftEar.png';
import contourImg from "/assets/cat/cat-contour.png";

import rightEyeImg from '/assets/cat/cat-rightEye.png';
import leftEyeImg from '/assets/cat/cat-leftEye.png';
import mouthImg from '/assets/cat/cat-mouth.png';

//処理
const App: React.FC = () => {

  //*スイッチ一覧
  //ゲーム状態のスイッチ（スプラッシュ→タイトル→プレイ画面など）
  const [gameState, setGameState] = useState<"splash" | "title" | "selectPeople" | "selectImg" | "play" | "result">("splash");

  //ゲーム難易度のスイッチ（イージー、ノーマル、ハードなど）
  const [gameLevel, setGameLevel] = useState<"easy" | "normal" | "heard">("easy");

  //プレイヤーのデータのスイッチ（人数や名前、アイコンなど）
  const [playerList, setPlayerList] = useState<Player[]>([
    { id: 1, userName: "", userIconUrl: "/src/assets/other/user.png" }
  ]);

  //今なんの画像で遊んでいるかのスイッチ
  const [choiceImg, setChoiceImg] = useState<ImgData[]>([{ id: null, level: 1, imgName: "sample", imgOverAllUrl: "https://placehold.jp/150x150.png" }]);


  // パーツの位置情報を一括管理するスイッチ
  const [parts, setParts] = useState<PartData[]>([
    { id: 'right-ear', imgUrl: rightEarImg, x: 50, y: 50, width: 45, height: 54 },
    { id: 'left-ear', imgUrl: leftEarImg, x: 150, y: 50, width: 45, height: 54 },
    { id: 'contour', imgUrl: contourImg, x: 150, y: 50, width: 112, height: 112 },
    { id: 'right-eye', imgUrl: rightEyeImg, x: 150, y: 50, width: 15, height: 15 },
    { id: 'left-eye', imgUrl: leftEyeImg, x: 150, y: 50, width: 15, height: 15 },
    { id: "mouse", imgUrl: mouthImg, x: 150, y: 50, width: 34, height: 31 },

  ]);

  // 特定のパーツの位置を更新する関数
  const updatePartPos = (id: string, x: number, y: number) => {
    setParts(prev => prev.map(p => p.id === id ? { ...p, x, y } : p));
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
        return <SelectImg setGameState={setGameState} />;
      case "play":
        return <Play setGameState={setGameState} parts={parts} updatePartPos={updatePartPos} playerList={playerList} />;
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