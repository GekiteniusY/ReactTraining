import { useEffect, useState } from "react"

const Counter = () => {
    // 初期値が0のカウンターの状態を管理するstate
    const [count, setCount] = useState(0)

    // 更新前の状態にプラス１する関数
    // setCount(count + 1)と記述すると期待しない動作となってしまう
    // useStateは非同期処理のため、実際に状態が更新されるまでにラグが生じる
    // 結果、状態が更新されるまでの間にstateが更新されてしまっていた場合（他の制御とぶつかってしまった場合）や、
    // 前の処理が終わっていない場合などにバグとなる
    const countUp = () => { 
        setCount(prevState => prevState + 1)
    }

    // 
    const goodCountUp = () => {
        setTimeout(() => {
            setCount(prevState => prevState + 1)
        }, 1000);
    }

    const badCountUp = () => { 
        console.log('bad')
        setTimeout(() => {
            setCount(count + 1)
        }, 10000);
    }


    // 更新前の状態にマイナス１する関数
    const countDown = () => {
        setCount(prevState => prevState - 1)
    }

    // 毎回実行されるuseEffect
    useEffect(() => {
        console.log("Current count is...", count)
    })

    // 初回のみ実行されるuseEffect
    useEffect(() => {
        console.log("First: Current count is...", count)
    }, [])

    return (
        <div>
            <p>現在のカウント数: {count}</p>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
            <button onClick={goodCountUp}>GoodCountUp</button>
            <button onClick={badCountUp}>BadCountUp1</button>
        </div>
    )

}

export default Counter