//*スプラッシュ画面（タイトル前に表示される画面）

//*必要機能をimport
import React from 'react';
import Btn from '../components/btn';

//親（App.tsx）から渡ってくるゲーム状態を受け取るための型を用意。
interface SplashProps {
    setGameState: (state: "splash" | "title" | "play" | "result") => void;
}


const Splash: React.FC<SplashProps> = ({ setGameState }) => {
    //表示するhtmlを作成
    return (
        <div className='splash'>
            <div className="splash__inner">
                <div className="splash__container">
                    <h1>
                        <img className='splash__logo' src="/src/assets/logo/logo.png" alt="" />
                    </h1>

                    <Btn
                        mode='textBtn'
                        text='クリックでスタート'
                        addClass='btn__styleClear font-daruma'
                        clickEvent={() => setGameState("title")} />
                </div>
            </div>
        </div>
    );
}

//処理全体を親に返す
export default Splash;