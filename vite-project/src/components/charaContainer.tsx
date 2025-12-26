//必要機能のインポート
import selectImg from "../pages/selectImg";

//キャラクターのデータを設定
interface characterData {
    level: "easy" | "normal" | "hard";
    characterImg: string;
    clickEvent: () => void;
}

const CharaContainer: React.FC<characterData> = ({ level, characterImg, clickEvent }) => {

    //クラス名を作成
    const baseClass = "level__img";
    const combinedClass = `${baseClass} ${level}`;

    //画像がクリックされたら親に通知
    const handleSelectImg = () => {
        console.log("対象がクリックされました。");
    }

    //表示するhtmlを作成
    return (
        <dl className="level__info" onClick={clickEvent}>
            <dt className="level__img">
                <img className={combinedClass} src={characterImg} alt="" />
            </dt>
            <dd className="level__text">
                {level}
            </dd>
        </dl>
    );
}

export default CharaContainer;