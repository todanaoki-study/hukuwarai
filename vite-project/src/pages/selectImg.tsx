//*画像選択画面（タイトル前に表示される画面）
//*必要機能をimport
import React, { useState } from "react";
import Modal from "../components/modal";
//キャラクターコンテナをインポート
import Img from "../components/charaContainer";

//必要なデータタイプを読み込む
import { CHARACTER_ASSETS } from "../data/characterAsset";

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。
interface selectImgProps {
    onSelect: (id: string) => void;
}

const selectImg: React.FC<selectImgProps> = ({ onSelect }) => {

    let modalMode = "explanation";

    //modalの表示制御
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    //表示するhtmlを作成
    return (
        <div className="selectImg">
            <Modal mode={modalMode} state={isModalOpen} setModal={setIsModalOpen}></Modal>

            <div className="selectImg__inner">
                {/* レベル/画像セレクト画面上部の難易度バー */}
                <div className="selectImg__levelList" onClick={() => setIsModalOpen(true)}>
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

                <div className="selectImg__level level">
                    {/* onsetでなんの画像を選んだかを親に伝える */}
                    <Img
                        clickEvent={() => onSelect("cat")}
                        level="easy"
                        characterImg={CHARACTER_ASSETS.cat.bgImg}
                    />

                    <Img
                        clickEvent={() => onSelect("bear1")}
                        level="easy"
                        characterImg={CHARACTER_ASSETS.bear1.bgImg}
                    />

                    <Img
                        clickEvent={() => onSelect("bear2")}
                        level="easy"
                        characterImg={CHARACTER_ASSETS.bear2.bgImg}
                    />

                </div>

                <div className="selectImg__container">

                </div>
            </div>
        </div >
    );
}

//処理全体を親に返す
export default selectImg;