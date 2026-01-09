//*配置するパーツのコンポーネント
//*必要機能をインポート
import React, { useState, useCallback, useRef } from 'react';

//画像の位置情報を宣言
interface Position {
    x: number;
    y: number;
}

//画像の概要を宣言
interface DraggableImageProps {
    imgUrl: string;
    initialX: number; // 初期位置(0)
    initialY: number; // 初期位置(0)
    onDragEnd: (x: number, y: number) => void; // 親のstateを更新するための関数
}

//処理
const DraggableImage: React.FC<DraggableImageProps> = ({ imgUrl, initialX, initialY, onDragEnd }) => {

    // 初期値に親から来た座標をセット
    const [position, setPosition] = useState<Position>({ x: initialX, y: initialY });

    //ドラッグ中かどうかを管理
    const [isDragging, setIsDragging] = useState<boolean>(false);
    //クリックした位置と画像左上隅とのオフセット
    const offsetRef = useRef<Position>({ x: 0, y: 0 });

    //画像のスタイルを設定
    const imageStyle: React.CSSProperties = {
        //useStateのpositionの値から連動
        transformOrigin: "center",

        left: position.x,
        top: position.y,
        //マウス形状
        cursor: isDragging ? 'grabbing' : 'grab',
        //画像を持つための最低限の領域を確保
        border: isDragging ? '3px solid #CCCCCC' : 'none',
    };

    //画像のクリック処理
    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        //動かした画像の位置を計算
        offsetRef.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };

        //移動を可能にする
        setIsDragging(true);

    }, [position]);

    //画像のドラック処理
    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;

        //新しい画像の位置を計算
        const newX = e.clientX - offsetRef.current.x;
        const newY = e.clientY - offsetRef.current.y;

        setPosition({ x: newX, y: newY });
    }, [isDragging]);

    //画像のリムーブ処理
    const handleMouseUp = useCallback(() => {
        if (isDragging) {
            setIsDragging(false);
            // ★ドラッグ終了時に親へ報告！
            onDragEnd(position.x, position.y);
        }
    }, [isDragging, position, onDragEnd]);

    //常に処理（マウスの動きを常に監視）
    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div className='part' style={imageStyle} onMouseDown={handleMouseDown} >
            <img className='part__img' src={imgUrl}></img>
        </div>
    );
};

export default DraggableImage;
