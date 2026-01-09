//*必要機能をインポート
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import Btn from '../components/btn';

//必要なデータ型をインポート
import type { PartData } from "../types/partsData";

//親（App.tsx）から渡ってくるデータを受け取るための型を用意。
interface ResultProps {
    setGameState: (state: "splash" | "title" | "selectImg" | "play" | "result") => void;
    //親からパーツの位置情報を受け取る
    parts: PartData[];
}

const Result: React.FC<ResultProps> = ({ setGameState, parts }) => {
    // キャプチャしたい範囲を指定する(-今回はDiv要素)
    const resultAreaRef = useRef<HTMLDivElement>(null);

    //画像ダウンロード処理
    const handleDownload = async () => {
        if (!resultAreaRef.current) return;

        // html2canvas機能をつかって対象のdiv要素丸ごと画像化
        const canvas = await html2canvas(resultAreaRef.current, {
            useCORS: true,
            scale: 2,
        });

        // 画像データに変換(BASE64の形式)
        const image = canvas.toDataURL("image/png");

        // ダウンロード用のリンクを生成してクリック
        const link = document.createElement("a");
        link.href = image;
        link.download = "fukuwarai_result.png";
        link.click();
    };

    return (
        <div className='result'>
            <div className="result__inner">
                <h2 className='result__title'>かんせいしたイラスト</h2>
                {/* この範囲が画像として保存される */}
                <div className="result__container">
                    <div ref={resultAreaRef} className='result__board board'>
                        {/* 配置されたパーツを描画(mapを使ってパーツ全てを順番に描画) */}
                        {parts.map((part) => (
                            <img
                                key={part.id}
                                src={part.imgUrl}
                                alt={part.id}
                                style={{
                                    position: 'absolute',
                                    left: part.x,
                                    top: part.y,
                                    width: `${part.width}px`,
                                    height: `${part.height}px`,
                                    pointerEvents: 'none'
                                }}
                            />
                        ))}
                    </div>

                    <Btn
                        mode='textBtn'
                        text='画像を保存する'
                        clickEvent={handleDownload}
                    />

                    <div className="result__controls">

                        <Btn
                            mode='textBtn'
                            text='ほーむへ'
                            addClass='result__btn btn__red'
                            clickEvent={() => setGameState("title")}
                        />

                        <Btn
                            mode='textBtn'
                            text='えらびなおす'
                            addClass='result__btn'
                            clickEvent={() => setGameState("selectImg")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;