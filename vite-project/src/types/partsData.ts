//パーツのデータ型
export interface PartData {
    id: string;
    imgUrl: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

// キャラクター全体の型
export interface CharacterAsset {
    name: string;
    bgImg: string;
    parts: PartData[];
}