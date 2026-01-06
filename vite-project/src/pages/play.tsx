//*ゲームプレイ画面

//*必要機能をimport
import React from 'react';
import DraggableImage from '../components/partContainer';
import UserContainer from '../components/userContainer';
import Btn from '../components/btn';

//必要なデータ型をインポート
import type { PartData } from "../types/partsData";
import type { Player } from "../types/playerData";

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。ちなこれ丸ハラね。
interface PlayProps {
    setGameState: (state: "splash" | "title" | "play" | "result") => void;
    parts: PartData[];
    updatePartPos: (id: string, x: number, y: number) => void;
    playerList: Player[]
}

const Play: React.FC<PlayProps> = ({ setGameState, parts, updatePartPos, playerList }) => {
    //表示するhtmlを作成
    return (
        <div className='play'>
            <div className="play__inner">
                <h2>プレイ画面</h2>
                <div className='userContainer'>
                    <div className="userContainer__iconContainer iconContainer">
                        <p className='iconContainer__number'>1P</p>
                        <img className='iconContainer__img' src="https://placehold.jp/35x35.png" alt="" />
                    </div>

                    <label htmlFor="" className='userContainer__label'>
                        <p>サンプルさんの番</p>
                    </label>
                </div>

                {/* 画像をダウンロードした時に背景色は#fffにするようにする */}
                <div className='play__board board'>
                    {/* パーツを一旦左上に全部配置 */}
                    {parts.map((part) => (
                        <DraggableImage
                            key={part.id}
                            imgUrl={part.imgUrl}
                            initialX={part.x}
                            initialY={part.y}
                            // ドラッグが終わったら親に動かしたパーツの位置情報を伝える
                            onDragEnd={(x, y) => updatePartPos(part.id, x, y)}
                        />
                    ))}
                </div>

                <Btn
                    mode='textBtn'
                    text='結果画面へ'
                    clickEvent={() => setGameState("result")}
                />
            </div>
        </div>
    );
}

//処理全体を親に返す
export default Play;