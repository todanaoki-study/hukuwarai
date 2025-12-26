//*ポップアップコンポーネント

//*必要機能をインポート
import React, { useState } from "react";
import Btn from "./btn";

//親から渡されるモーダルウィンドの内容を受け取る型を宣言
interface modalProps {
    mode: "explanation" | "notification",
    imgUrl?: string;
    note?: string;
}
function modal({ mode, imgUrl, note }: modalProps) {

    const [modalState, setModalState] = useState<true | false>(true);

    if (modalState == false) {
        return;
    }
    //難易度説明が欲しいなら以下を返す
    else if (mode === "explanation") {
        return (
            <div className="explanation">
                <div className="explanation__window">
                    <button onClick={() => setModalState(false)} className="explanation__closeBtn closeBtn">
                        <span className="closeBtn__line" id="upperLine"></span>
                        <span className="closeBtn__line" id="underLine"></span>
                    </button>
                    <p className="explanation__title">難易度説明</p>
                    <div className="explanation__container">
                        <dl className="explanation__content">
                            <dt className="explanation__level font-daruma">かんたん</dt>
                            <dd className="explanation__overview">
                                一回おいても置き直せるよ。<br />
                                ちっちゃい子もどうぞ。
                            </dd>
                        </dl>
                    </div>
                    <div className="explanation__container">
                        <dl className="explanation__content">
                            <dt className="explanation__level font-daruma">ふつう</dt>
                            <dd className="explanation__overview">
                                一回おいても置き直せるよ。<br />
                                パーツが多くなるよ。
                            </dd>
                        </dl>
                    </div>
                    <div className="explanation__container">
                        <dl className="explanation__content">
                            <dt className="explanation__level font-daruma">むずかしい</dt>
                            <dd className="explanation__overview">
                                一回おいたら置き直せないよ。<br />
                                パーツがとても多いよ。
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }

    //通知（完成通知や共有など）が欲しいなら以下を返す
    else if (mode === "notification") {
        return (
            <div className="notification">
                <img className="notification__img" src={imgUrl} alt="" />
                <p className="notification__note">{note}</p>

                <Btn mode="textBtn"
                    text="遊ぶ">
                </Btn>
                <Btn mode="textBtn"
                    text="選び直す">
                </Btn>
            </div>
        )
    }

    //エラー
    else {
        return (
            <div>
                <p>popUpコンポーネント、もしくは呼び出し側に問題があります。</p>
            </div>
        )
    }
}

export default modal;