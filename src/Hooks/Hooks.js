import React, {useEffect, useState} from "react";


const useScreen = (screenWidth) => {
    const [wid, setWid] = useState(null);
    useEffect(() => {
        return setWid(screenWidth)
    }, [wid])
    return {
        wid
    }
}
export default useScreen
