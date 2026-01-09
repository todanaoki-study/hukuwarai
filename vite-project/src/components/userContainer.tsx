//*ユーザーアイコンと、アイコン＋名前の組み合わせのコンポーネント
//*必要機能をimport

//親から渡されるユーザー情報を受け取るための型を定義
interface userData {
    userName?: string;
    userIconUrl: string;
    userNumber: number;
}

//親から受け渡される表示モードの受け取り型を定義
interface userSheetContainerProps {
    userData: userData;
    mode: "iconOnly" | "iconAndName" | "setMode";
}

function userSheetContainer({ userData, mode }: userSheetContainerProps) {
    //もしアイコンのみ欲しいなら以下を返す。
    if (mode === "iconOnly") {
        return (
            <div className="iconContainer">
                <p className='iconContainer__number'>{userData.userNumber}</p>
                <img className='iconContainer__img' src={userData.userIconUrl} alt="" />
            </div>
        );
    }
    //もしアイコンと名前のセットで欲しいなら以下を返す。
    else if (mode === "iconAndName") {
        return (
            <div className='userContainer'>
                <div className="userContainer__iconContainer iconContainer">
                    <p className='iconContainer__number'>{userData.userNumber}</p>
                    <img className='iconContainer__img' src={userData.userIconUrl} alt="" />
                </div>

                <p className='userContainer__name'>
                    {userData.userName}
                </p>
            </div>
        );
    }

    //空の入力フォームとして欲しいなら以下を返す。
    else if (mode === "setMode") {
        return (
            <div className='userContainer'>
                <div className="userContainer__iconContainer iconContainer">
                    <p className='iconContainer__number'>{userData.userNumber}</p>
                    <img className='iconContainer__img' src={userData.userIconUrl} alt="" />
                </div>

                <label htmlFor="" className='userContainer__label'>
                    <input className='userContainer__input' type="text" placeholder='サンプルさん' />
                </label>
            </div>
        )
    }
    //それ以外ならエラー(consoleには出ない)
    else {
        <div>
            <p>値が正しく入力されていないか、エラーが発生しました。</p>
        </div>
    }
}

export default userSheetContainer;