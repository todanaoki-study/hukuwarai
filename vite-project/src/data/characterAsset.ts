//キャラクターの画像全データを保持するファイルをインポート
import type { CharacterAsset } from "../types/partsData";

//画像をインポート
//?猫
import cat from '../assets/material/cat/all.png';
import catRightEar from '../assets/material/cat/ear_right.png';
import catLeftEar from '../assets/material/cat/ear_left.png';
import catContour from "../assets/material/cat/contour.png";
import catRightEye from '../assets/material/cat/eye_right.png';
import catLeftEye from '../assets/material/cat/eye_left.png';
import catMouth from '../assets/material/cat/mouth.png';

//?クマ
import bear from "../assets/material/bear_1/all.png";
import bearRightEar from "../assets/material/bear_1/ear_right.png";
import bearLeftEar from "../assets/material/bear_1/ear_left.png";
import bearContour from "../assets/material/bear_1/contour.png";
import bearNose from "../assets/material/bear_1/nose.png";

import bearMouth from "../assets/material/bear_1/mouth.png";
import bearBody from "../assets/material/bear_1/body.png";
import bearRightEye from "../assets/material/bear_1/eye_right.png";
import bearLeftEye from "../assets/material/bear_1/eye_left.png";
import bearRightBrows from "../assets/material/bear_1/eyebrows_left.png";

import bearLeftBrows from "../assets/material/bear_1/eyebrows_right.png";
import baseHair from "../assets/material/bear_1/hair.png";
import bearTail from "../assets/material/bear_1/tail.png";
import bearLeftArm from "../assets/material/bear_1/arm_left.png";
import bearRightArm from "../assets/material/bear_1/arm_right.png";


//以下のデータを外部から参照できるようにCharacterAssetに入れてエクスポートする。
export const CHARACTER_ASSETS: Record<string, CharacterAsset> = {
    //全キャラの画像や初期の幅、高さ、パーツ情報などをここでまとめて管理する。
    cat: {
        name: "cat",
        bgImg: cat,
        parts: [
            { id: 'ear-right', imgUrl: catRightEar, x: 50, y: 50, width: 45, height: 54 },
            { id: 'ear-left', imgUrl: catLeftEar, x: 150, y: 50, width: 45, height: 54 },
            { id: 'contour', imgUrl: catContour, x: 150, y: 50, width: 112, height: 112 },
            { id: 'eye-right', imgUrl: catRightEye, x: 150, y: 50, width: 15, height: 15 },
            { id: 'eye-left', imgUrl: catLeftEye, x: 150, y: 50, width: 15, height: 15 },
            { id: "mouse", imgUrl: catMouth, x: 150, y: 50, width: 34, height: 31 },
        ]
    },

    bear1: {
        name: "bear1",
        bgImg: bear,
        parts: [
            { id: 'ear-right', imgUrl: bearRightEar, x: 50, y: 80, width: 40, height: 40 },
            { id: 'ear-left', imgUrl: bearLeftEar, x: 150, y: 80, width: 40, height: 40 },
            { id: 'contour', imgUrl: bearContour, x: 150, y: 80, width: 40, height: 40 },
            { id: 'nose', imgUrl: bearNose, x: 150, y: 80, width: 40, height: 40 },
            { id: 'mouth', imgUrl: bearMouth, x: 150, y: 80, width: 40, height: 40 },

            { id: 'body', imgUrl: bearBody, x: 150, y: 80, width: 40, height: 40 },
            { id: 'eye-right', imgUrl: bearRightEye, x: 150, y: 80, width: 40, height: 40 },
            { id: 'eye-left', imgUrl: bearLeftEye, x: 150, y: 80, width: 40, height: 40 },
            { id: 'eyebrows-right', imgUrl: bearRightBrows, x: 150, y: 80, width: 40, height: 40 },
            { id: 'eyebrows-left', imgUrl: bearLeftBrows, x: 150, y: 80, width: 40, height: 40 },

            { id: 'hair', imgUrl: baseHair, x: 150, y: 80, width: 40, height: 40 },
            { id: 'tail', imgUrl: bearTail, x: 150, y: 80, width: 40, height: 40 },
            { id: 'arm-left', imgUrl: bearLeftArm, x: 150, y: 80, width: 40, height: 40 },
            { id: 'arm-right', imgUrl: bearRightArm, x: 150, y: 80, width: 40, height: 40 },
        ]
    },

    //以下に同じような形でキャラクターを追加していく。
};