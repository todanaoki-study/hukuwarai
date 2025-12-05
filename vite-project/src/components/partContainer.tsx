//*髪や目、鼻などのパーツを格納するコンテナのコンポーネント

//*必要機能をimport
import React from 'react';

//*どんな値が受け渡されるか指定（追加のclass名、oclick属性など）
interface partContainerProps {
    class?: string;
    children?: React.ReactNode;
}

//*処理
function partContainer({ className = "", children, ...rest }: partContainerProps & React.ComponentPropsWithoutRef<'article'>) {

    //基本クラスと追加クラスを合体してcombinedClassを作成
    const baseClass = "partContainer";
    const combinedClass = `${baseClass} ${className}`;

    return (
        <article className={combinedClass} {...rest}>
            <img className='partContainer__part' src="https://placehold.jp/100x100.png" alt="" />
            <p className='partContainer__name'>{children}</p>
        </article>
    );
}

export default partContainer;