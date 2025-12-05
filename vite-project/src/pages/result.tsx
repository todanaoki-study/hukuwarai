//*ゲームプレイ画面

//*必要機能をimport
import React from 'react';

//*どんな値が受け渡されるか指定（追加のclass名、oclick属性など）
interface ResultProps {
    setGameState: (state: "splash" | "title" | "result" | "result") => void;
}

const Result: React.FC<ResultProps> = ({ setGameState }) => {
    return (
        <div className='result'>
            <h2>リザルト画面</h2>
        </div>
    );
}

export default Result;