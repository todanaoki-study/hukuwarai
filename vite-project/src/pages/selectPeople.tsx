//*プレイ人数を決める画面
//*必要機能をインポート
import React, { useState, useEffect } from 'react';
import Btn from "../components/btn";
import UserContainer from "../components/userContainer";

//必要なデータタイプを読み込む
import type { Player } from "../types/playerData";

//親（App.tsx）から渡ってくるデータを受け取るための型を用意。
interface selectPeopleProps {
    setGameState: (state: "splash" | "title" | "selectPeople" | "selectImg" | "play" | "result") => void;
    setPlayerList: React.Dispatch<React.SetStateAction<Player[]>>;
    playerList: Player[]
}

const selectPeople: React.FC<selectPeopleProps> = ({ setGameState, setPlayerList, playerList }) => {

    //設定した人数分の、アイコンと名前ボックスを生成する。
    const handleSetPlayerCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const count = Math.max(1, Number(e.target.value));

        setPlayerList((prev) => {
            const currentCount = prev.length;
            //もし人数が増えたらその分追加
            if (count > currentCount) {
                //データはそれぞれ変更できるよう初期値で渡す。
                const newPlayers = Array.from({ length: count - currentCount }).map((_, i) => ({
                    id: currentCount + i + 1,
                    userName: "",
                    //一旦ローカル画像
                    userIconUrl: "/src/assets/other/user.png"
                }));
                return [...prev, ...newPlayers];
            }
            //もし人数が減ったらその分削除
            else {
                return prev.slice(0, count);
            }
        });
    };

    //表示するhtmlを作成
    return (
        <div className='selectPeople'>
            <div className="selectPeople__inner">
                <p className="selectPeople__question">何人で遊ぶ？</p>
                <input
                    className="selectPeople__input"
                    type="number"
                    value={playerList.length}
                    onChange={handleSetPlayerCount}
                />

                <div className="selectPeople__container">
                    {/* 人数分表示させる */}
                    {playerList.map((player) => (
                        <UserContainer
                            key={player.id}
                            userData={{
                                userIconUrl: player.userIconUrl,
                                userName: player.userName || `プレイヤー${player.id}`,
                                userNumber: player.id
                            }}
                            mode="setMode"
                        />
                    ))}
                </div>

                <Btn
                    mode='textBtn'
                    text="レベルセレクトへ"
                    clickEvent={() => setGameState("selectImg")}
                />
            </div>
        </div>
    );
}

//処理全体を親に返す
export default selectPeople;