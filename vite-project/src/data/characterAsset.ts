// src/data/characterAssets.ts
import { CharacterAsset } from "../types/parts";

// Viteで画像をインポート
//画像をインポート
//?猫
import cat from '../assets/cat/all.png';
import catRightEar from '../assets/cat/ear_right.png';
import catLeftEar from '../assets/cat/ear_left.png';
import catContour from "../assets/cat/contour.png";
import catRightEye from '../assets/cat/eye_right.png';
import catLeftEye from '../assets/cat/eye_left.png';
import catMouth from '../assets/cat/mouth.png';

//?クマ
import bear from "../assets/bear/all.png";
import bearRightEar from "../assets/bear/ear_right.png";
import bearLeftEar from "../assets/bear/ear_left.png";
import bearContour from "../assets/bear/contour.png";
import bearNose from "../assets/bear/nose.png";

import bearMouth from "../assets/bear/mouth.png";
import bearBody from "../assets/bear/body.png";
import bearRightEye from "../assets/bear/eye_right.png";
import bearLeftEye from "../assets/bear/eye_left.png";
import bearRightBrows from "../assets/bear/eyebrows_left.png";

import bearLeftBrows from "../assets/bear/eyebrows_right.png";
import baseHair from "../assets/bear/hair.png";
import bearTail from "../assets/bear/tail.png";
import bearLeftArm from "../assets/bear/arm_left.png";
import bearRightArm from "../assets/bear/arm_right.png";



// 外から使えるように export const で宣言
export const CHARACTER_ASSETS: Record<string, CharacterAsset> = {
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
        name: "bear",
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
};