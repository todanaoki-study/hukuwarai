//*画像選択画面（タイトル前に表示される画面）
//*必要機能をimport
import React, { useState } from "react";
import Btn from "../components/btn";
import Modal from "../components/modal";
import Img from "../components/charaContainer";

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。
interface selectImgProps {
    setGameState: (state: "splash" | "title" | "selectImg" | "play" | "result") => void;
}

const selectImg: React.FC<selectImgProps> = ({ setGameState }) => {

    //モーダル出現時の背景色スイッチ
    const [bgState, setBgState] = useState<true | false>(true);

    //表示するhtmlを作成
    return (
        <div className="selectImg">
            {/* モーダル出現時の背景 */}
            <span></span>
            <Modal mode="explanation"></Modal>
            <div className="selectImg__inner">
                {/* レベル/画像セレクト画面上部の難易度バー */}
                <div className="selectImg__levelList">
                    <dl className="selectImg__levelItem">
                        <dt className="selectImg__levelImg">
                            <img className="selectImg__levelIcon" src="src/assets/other/egg.png" alt="" />
                        </dt>
                        <dd className="selectImg__caption font-daruma">かんたん</dd>
                    </dl>

                    <dl className="selectImg__levelItem">
                        <dt className="selectImg__levelImg">
                            <img className="selectImg__levelIcon" src="src/assets/other/chick.png" alt="" />
                        </dt>
                        <dd className="selectImg__caption font-daruma">ふつう</dd>
                    </dl>

                    <dl className="selectImg__levelItem">
                        <dt className="selectImg__levelImg">
                            <img className="selectImg__levelIcon" src="src/assets/other/chicken.png" alt="" />
                        </dt>
                        <dd className="selectImg__caption font-daruma">むずかしい</dd>
                    </dl>
                </div>
                {/*todo 仮で直配置 */}
                <div className="selectImg__level level">
                    <Img clickEvent={() => setGameState("play")} level="easy" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="easy" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="easy" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="easy" characterImg="src/assets/material/cat/cat-all.png"></Img>

                    <Img clickEvent={() => setGameState("play")} level="normal" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="normal" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="normal" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="normal" characterImg="src/assets/material/cat/cat-all.png"></Img>

                    <Img clickEvent={() => setGameState("play")} level="hard" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="hard" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="hard" characterImg="src/assets/material/cat/cat-all.png"></Img>
                    <Img clickEvent={() => setGameState("play")} level="hard" characterImg="src/assets/material/cat/cat-all.png"></Img>
                </div>

                <div className="selectImg__container">

                </div>

                <Btn
                    mode="textBtn"
                    text="プレイ画面へ"
                    clickEvent={() => setGameState("play")} />
            </div>
        </div>
    );
}

//処理全体を親に返す
export default selectImg;