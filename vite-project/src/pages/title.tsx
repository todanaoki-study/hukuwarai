//*タイトル画面
//*必要機能をimport
import React from 'react';
import Btn from '../components/btn';

//画像のインポート
import logo from "../assets/logo/logo.png";

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。
interface TitleProps {
    setGameState: (state: "title" | "selectPeople" | "selectImg" | "play" | "result") => void;
}

//処理
const Title: React.FC<TitleProps> = ({ setGameState }) => {
    //表示するhtmlを作成
    return (
        <div className='title'>
            <div className="title__inner">
                <div className="title__container">
                    <h1 className='title__title'>
                        <img className='title__logo' src={logo} alt="" />
                    </h1>
                    <div className='title__controller'>
                        <Btn
                            mode='textAndImgBtn'
                            addClass='font-daruma'
                            text='ひとりで'
                            imgUrl='src/assets/other/only.png'
                            clickEvent={() => setGameState("selectImg")} />
                        <Btn
                            mode='textAndImgBtn'
                            text='みんなで'
                            addClass='btn__red font-daruma'
                            imgUrl='src/assets/other/everyone.png'
                            clickEvent={() => setGameState("selectPeople")} />
                    </div>
                </div>
            </div>
        </div>
    );
}

//処理全体を親に返す
export default Title;