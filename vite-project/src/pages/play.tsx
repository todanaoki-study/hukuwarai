//*ゲームプレイ画面

//*必要機能をimport
import React from 'react';
import PartContainer from '../components/partContainer';
import Btn from '../components/btn';

//*どんな値が受け渡されるか指定（追加のclass名、oclick属性など）
interface PlayProps {
    setGameState: (state: "splash" | "title" | "play" | "result") => void;
}

const Play: React.FC<PlayProps> = ({ setGameState }) => {
    return (
        <div className='play'>
            <h2>プレイ画面</h2>
            <PartContainer className="">パーツ名</PartContainer>
            <Btn onClick={() => setGameState("result")}>結果画面へ</Btn>
        </div>
    );
}

export default Play;