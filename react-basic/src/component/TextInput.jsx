import { useState } from "react"

const TextInput = () => {
    // 入力フォームの状態を管理するstate
    // 入力フォームの初期値は空文字
    const [name, setName] = useState('')

    // setNameをラップする関数
    // 引数にはinputタグの入力フォームから渡されるeventオブジェクトを受取る想定
    const handleName = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    console.log("Current", name)

    return (
        <input
            // eventはonChangeの戻り値
            onChange={(event) => handleName(event)}
            type={'text'}
            value={name}
        />
    )
}

export default TextInput