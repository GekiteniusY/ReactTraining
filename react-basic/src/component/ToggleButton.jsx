import { useState, useEffect } from "react"

const ToggleButton = () => {
    const [open, setOpen] = useState(false)
    const [cleanUpCount, setCleanUpCount] = useState(0)
    const [useEffectCount, setUseEffectCount] = useState(0)

    const toglle = () => { 
        setOpen(open => !open)
    }

    const CountUpCleanUpCount = () => { 
        console.log('   CountUpCleanCount: called')
        console.log(cleanUpCount)
        setCleanUpCount(cleanUpCount => cleanUpCount + 1)
        console.log('   count up')
        console.log(cleanUpCount)
    }

    const CountUpUseEffectCount = () => {
        console.log('   CountUpUseEffectCount: called')
        console.log(useEffectCount)
        setUseEffectCount(useEffectCount => useEffectCount + 1)
        console.log('   count up')
        console.log(useEffectCount)
    }

    const Check = () => { 
        console.log('   check clean up count', cleanUpCount)
    }

    // open変数に変更があったときに処理を実行するuseEffect
    // 
    useEffect(() => {
        console.log('==========start useEffect===========')
        console.log('Called ToggleButton useEffec and useEffectCount is...', useEffectCount)
        console.log('CountUp useEffectCount')
        CountUpUseEffectCount()
        console.log('Now, Total called useEffect is...', useEffectCount)
        console.log('Total called clean up is...', cleanUpCount)

        // if (open) {
        //     console.log('ToggleButton is open')
        // }

        console.log('==========end useEffect===========')

        return () => {
            console.log('==========start clean up===========')
            console.log('CleanUpCount is now...', cleanUpCount)
            CountUpCleanUpCount()
            Check()
            console.log('CleanUpCount is after...', cleanUpCount)
            console.log('==========end clean up===========')
        };
    }, [open]);

    return (
        <button onClick={toglle}>
            {open ? 'OPEN': 'CLOSE'}
        </button>
    )
}

export default ToggleButton