//*ゲームプレイ画面

//*必要機能をimport
import React, { useState } from "react";
import DraggableImage from '../components/partContainer';
import Btn from '../components/btn';
import Modal from "../components/modal";

//必要なデータ型をインポート
import type { PartData, CharacterAsset } from "../types/partsData";
import type { Player } from "../types/playerData";

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。
interface PlayProps {
    setGameState: (state: "splash" | "title" | "play" | "result") => void;
    parts: PartData[];
    updatePartPos: (id: string, x: number, y: number) => void;
    playerList: Player[];
    sampleImg: string; // ★お手本画像のURLを受け取るために追加
}

const Play: React.FC<PlayProps> = ({ setGameState, parts, updatePartPos, playerList, sampleImg }) => {

    let modalMode = "help";
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    //表示するhtmlを作成
    return (
        <div className='play'>
            <Modal mode={modalMode} state={isModalOpen} setModal={setIsModalOpen}></Modal>
            <div className="play__inner">
                <div className='play__header playHeader'>
                    <ul className='playHeader__activeList'>
                        <li className='playHeader__user'>〇〇の番</li>
                        <li className='playHeader__user'>次は〇〇の番</li>
                    </ul>

                    <div className='playHeader__controls'>
                        <dl className='playHeader__btn'>
                            <dt className='playHeader__btnText'>ホーム</dt>
                            <dd className='playHeader__img' onClick={() => setGameState("title")}>
                                <img src="/src/assets/other/home.png" alt="" />
                            </dd>
                        </dl>
                        <dl className='playHeader__btn'>
                            <dt className='playHeader__btnText'>ヘルプ</dt>
                            <dd className='playHeader__img' onClick={() => setIsModalOpen(true)}>
                                <img src="/src/assets/other/help.png" alt="" />
                            </dd>
                        </dl>
                    </div>
                </div>

                <div className="play__sample">
                    <img className="play__sampleImg" src={sampleImg} alt="" />
                </div>

                <div className='play__board board'>
                    <img className='board__assistant' src="./src/assets/other/boardChara.png" alt="" />
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
                    text='これでかんせい！'
                    addClass="btn__red"
                    clickEvent={() => setGameState("result")}
                />
            </div>
        </div>
    );
}

//処理全体を親に返す
export default Play;