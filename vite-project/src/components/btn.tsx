//*ボタンコンポーネント
//*必要機能をインポート
import React from 'react';

//親から受け取るパーツ情報を宣言
interface BtnProps {
    mode: "textBtn" | "textAndImgBtn";
    text: string;
    addClass?: string;
    clickEvent?: () => void;
    imgUrl?: string;
}


function Btn({ mode, text, addClass, clickEvent, imgUrl }: BtnProps) {

    //クラス名を作成
    const baseClass = "btn";
    const combinedClass = `${baseClass} ${addClass}`;

    if (mode == "textBtn") {
        return (
            <div className={combinedClass} onClick={clickEvent}>
                <button>
                    {text}
                </button>
            </div>
        );
    }
    else if (mode == "textAndImgBtn") {
        return (
            <div className={combinedClass} onClick={clickEvent}>
                <button>
                    {text}
                </button>
                <img src={imgUrl} alt="" />
            </div>
        );
    }

}

export default Btn;