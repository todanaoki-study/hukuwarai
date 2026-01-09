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

//?クマ1
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

import bearLeftLeg from "../assets/material/bear_1/leg_left.png";
import bearRightLeg from "../assets/material/bear_1/leg_right.png";

//?クマ2
import bear2 from "../assets/material/bear_2/all.png";
import bear2RightEar from "../assets/material/bear_2/ear_right.png";
import bear2LeftEar from "../assets/material/bear_2/ear_left.png";
import bear2Contour from "../assets/material/bear_2/contour.png";
import bear2Nose from "../assets/material/bear_2/nose.png";

import bear2Body from "../assets/material/bear_2/body.png";
import bear2RightEye from "../assets/material/bear_2/eye_right.png";
import bear2LeftEye from "../assets/material/bear_2/eye_left.png";
import bear2Hat from "../assets/material/bear_2/hat.png";
import bear2LeftArm from "../assets/material/bear_2/arm_left.png";

import bear2RightArm from "../assets/material/bear_2/arm_right.png";
import bear2LeftLeg from "../assets/material/bear_2/leg_left.png";
import bear2RightLeg from "../assets/material/bear_2/leg_right.png";

//?クマ3
// import bear3 from "../assets/material/bear_3/all.png";
// import bear3RightEar from "../assets/material/bear_3/ear_right.png";
// import bear3LeftEar from "../assets/material/bear_3/ear_left.png";
// import bear3Contour from "../assets/material/bear_3/contour.png";
// import bear3Nose from "../assets/material/bear_3/nose.png";

// import bear3Body from "../assets/material/bear_3/body.png";
// import bear3RightEye from "../assets/material/bear_3/eye_right.png";
// import bear3LeftEye from "../assets/material/bear_3/eye_left.png";
// import bear3Hat from "../assets/material/bear_3/hat.png";
// import bear3LeftArm from "../assets/material/bear_3/arm_left.png";

// import bear3RightArm from "../assets/material/bear_3/arm_right.png";
// import bear3LeftLeg from "../assets/material/bear_3/leg_left.png";
// import bear3RightLeg from "../assets/material/bear_3/leg_right.png";
// import bear3LeftBeard from "../assets/material/bear_3/beard_left.png;"
// import bear3RightBeard from "../assets/material/bear_3/beard_right.png"

//?キツネ
import fox from "../assets/material/fox/all.png";
import foxBody from "../assets/material/fox/body.png";
import foxContour from "../assets/material/fox/contour.png";
import foxLeftEar from "../assets/material/fox/ear_left.png";
import foxRightEar from "../assets/material/fox/ear_right.png";
import foxEye from "../assets/material/fox/eye.png";

//?ユニコーン
// import unicorn from "../"


//以下のデータを外部から参照できるようにCharacterAssetに入れてエクスポートする。
export const CHARACTER_ASSETS: Record<string, CharacterAsset> = {
    //全キャラの画像や初期の幅、高さ、パーツ情報などをここでまとめて管理する。
    //?追加の仕方
    //?１.上部に画像のパスを全てインポートする（熊1なら熊1の全体像とパーツ全てインポート）
    //?２.下にのフォーマットをコピーして名前をその対象物に置き換える
    //?３.imgUrlはインポートした名前。x,yは固定。width,heightは画像サイズを記入。
    //!画像サイズを間違えると、画像として保存するときにずれて表示されるので気おつけて。
    cat: {
        name: "cat",
        bgImg: cat,
        parts: [
            { id: 'ear-right', imgUrl: catRightEar, x: 50, y: 50, width: 100, height: 106 },
            { id: 'ear-left', imgUrl: catLeftEar, x: 150, y: 50, width: 100, height: 106 },
            { id: 'contour', imgUrl: catContour, x: 150, y: 50, width: 242, height: 172 },
            { id: 'eye-right', imgUrl: catRightEye, x: 150, y: 50, width: 27, height: 27 },
            { id: 'eye-left', imgUrl: catLeftEye, x: 150, y: 50, width: 27, height: 27 },
            { id: "mouse", imgUrl: catMouth, x: 150, y: 50, width: 21, height: 22 },
        ]
    },

    bear1: {
        name: "bear1",
        bgImg: bear,
        parts: [
            { id: 'ear-right', imgUrl: bearRightEar, x: 50, y: 80, width: 63, height: 52 },
            { id: 'ear-left', imgUrl: bearLeftEar, x: 150, y: 80, width: 63, height: 52 },
            { id: 'contour', imgUrl: bearContour, x: 150, y: 80, width: 174, height: 137 },
            { id: 'nose', imgUrl: bearNose, x: 150, y: 80, width: 27, height: 31 },
            { id: 'mouth', imgUrl: bearMouth, x: 150, y: 80, width: 14, height: 11 },

            { id: 'body', imgUrl: bearBody, x: 150, y: 80, width: 126, height: 97 },
            { id: 'eye-right', imgUrl: bearRightEye, x: 150, y: 80, width: 18, height: 18 },
            { id: 'eye-left', imgUrl: bearLeftEye, x: 150, y: 80, width: 18, height: 18 },
            { id: 'eyebrows-right', imgUrl: bearRightBrows, x: 150, y: 80, width: 17, height: 10 },
            { id: 'eyebrows-left', imgUrl: bearLeftBrows, x: 150, y: 80, width: 17, height: 10 },

            { id: 'hair', imgUrl: baseHair, x: 150, y: 80, width: 36, height: 20 },
            { id: 'tail', imgUrl: bearTail, x: 150, y: 80, width: 62, height: 94 },
            { id: 'arm-left', imgUrl: bearLeftArm, x: 150, y: 80, width: 45, height: 36 },
            { id: 'arm-right', imgUrl: bearRightArm, x: 150, y: 80, width: 45, height: 36 },

            { id: 'leg-left', imgUrl: bearLeftLeg, x: 150, y: 80, width: 40, height: 48 },
            { id: 'leg-right', imgUrl: bearRightLeg, x: 150, y: 80, width: 46, height: 44 },
        ]
    },

    bear2: {
        name: "bear2",
        bgImg: bear2,
        parts: [
            { id: 'ear-right', imgUrl: bear2RightEar, x: 50, y: 80, width: 63, height: 52 },
            { id: 'ear-left', imgUrl: bear2LeftEar, x: 150, y: 80, width: 63, height: 52 },
            { id: 'contour', imgUrl: bear2Contour, x: 150, y: 80, width: 174, height: 137 },
            { id: 'nose', imgUrl: bear2Nose, x: 150, y: 80, width: 27, height: 31 },
            { id: 'body', imgUrl: bear2Body, x: 150, y: 80, width: 126, height: 97 },

            { id: 'eye-right', imgUrl: bear2RightEye, x: 150, y: 80, width: 18, height: 18 },
            { id: 'eye-left', imgUrl: bear2LeftEye, x: 150, y: 80, width: 18, height: 18 },
            { id: 'hat', imgUrl: bear2Hat, x: 150, y: 80, width: 176, height: 110 },
            { id: 'arm-left', imgUrl: bear2LeftArm, x: 150, y: 80, width: 45, height: 36 },
            { id: 'arm-right', imgUrl: bear2RightArm, x: 150, y: 80, width: 45, height: 36 },

            { id: 'leg-left', imgUrl: bear2LeftLeg, x: 150, y: 80, width: 40, height: 48 },
            { id: 'leg-right', imgUrl: bear2RightLeg, x: 150, y: 80, width: 46, height: 44 },
        ]
    },
    //以下に同じような形でキャラクターを追加していく。

    fox: {
        name: "fox",
        bgImg: fox,
        parts: [
            { id: 'ear-right', imgUrl: foxRightEar, x: 50, y: 80, width: 48, height: 69 },
            { id: 'ear-left', imgUrl: foxLeftEar, x: 150, y: 80, width: 48, height: 79 },
            { id: 'contour', imgUrl: foxContour, x: 150, y: 80, width: 156, height: 113 },
            { id: 'body', imgUrl: foxBody, x: 150, y: 80, width: 190, height: 132 },
            { id: 'eye', imgUrl: foxEye, x: 150, y: 80, width: 15, height: 15 },
        ]
    },
};