//*ポップアップコンポーネント

//*必要機能をインポート
import Btn from "./btn";

//親から渡されるモーダルウィンドの内容を受け取る型を宣言
interface modalProps {
    // mode: "explanation" | "notification" | "help" | "attention";
    mode: string;
    state: boolean;
    setModal: (isOpen: boolean) => void;
}

function modal({ mode, state, setModal }: modalProps) {

    //閉じている場合
    if (!state) return null;
    //開いている場合
    if (state === true) {
        //モードによって表示内容を切り替え
        switch (mode) {
            case "explanation":
                return (
                    <div className="modal">
                        <div className="modal__origin">
                            <div className="modal__container explanation">
                                <button onClick={() => setModal(false)} className="modal__closeBtn closeBtn">
                                    <span className="closeBtn__line" id="upperLine"></span>
                                    <span className="closeBtn__line" id="underLine"></span>
                                </button>
                                <div className="explanation__inner">
                                    <p className="explanation__title">難易度説明</p>
                                    <div className="explanation__container">
                                        <dl className="explanation__content">
                                            <dt className="explanation__level font-daruma">かんたん</dt>
                                            <dd className="explanation__overview">
                                                一回おいても置き直せるよ。<br />
                                                ちっちゃい子もどうぞ。
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="explanation__container">
                                        <dl className="explanation__content">
                                            <dt className="explanation__level font-daruma">ふつう</dt>
                                            <dd className="explanation__overview">
                                                一回おいても置き直せるよ。<br />
                                                パーツが多くなるよ。
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="explanation__container">
                                        <dl className="explanation__content">
                                            <dt className="explanation__level font-daruma">むずかしい</dt>
                                            <dd className="explanation__overview">
                                                一回おいたら置き直せないよ。<br />
                                                パーツがとても多いよ。
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case "notification":
                return (
                    ///todo
                    <div>制作中</div>
                )

            case "help":
                return (
                    <div className="modal">
                        <div className="modal__origin">
                            <div className="modal__container help">
                                <button onClick={() => setModal(false)} className="modal__closeBtn closeBtn">
                                    <span className="closeBtn__line" id="upperLine"></span>
                                    <span className="closeBtn__line" id="underLine"></span>
                                </button>
                                <div className="help__inner">
                                    <p className="help__title">遊び方</p>
                                    <div className="help__content">
                                        <ol className="help__list">
                                            <li className="help__item">パーツをドラッグして、キャラクターを完成させよう。</li>
                                            <li className="help__item">パーツを置いた後、もう一度タップすると置き直せるよ。（かんたん・ふつうモードのみ）</li>
                                            <li className="help__item">全てのパーツを置き終わったら、「結果画面へ」ボタンを押そう。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case "attention":
                return (
                    <div className="modal">
                        <div className="modal__origin">
                            <button onClick={() => setModal(false)} className="modal__closeBtn closeBtn">
                                <span className="closeBtn__line" id="upperLine"></span>
                                <span className="closeBtn__line" id="underLine"></span>
                            </button>

                            <div className="modal__container attention">
                                <div className="attention__inner">
                                    <p className="attention__title">タイトルに戻りますか？</p>
                                    <div className="attention__content">
                                        <p className="attention__overview">現在のゲームの進行状況は保存されません。</p>
                                        <div className="attention__btnContainer">
                                            <Btn mode="textBtn" text="キャンセル" clickEvent={() => setModal(false)}></Btn>
                                            <Btn mode="textBtn" text="タイトルに戻る" clickEvent={() => window.location.reload()}></Btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
}

export default modal;