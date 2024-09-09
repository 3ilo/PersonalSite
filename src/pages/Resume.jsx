import { useEffect } from 'react';

export default function Resume() {
    var idempotence = false;
    useEffect(() => {
        if (!idempotence){
            window.open("/Resume.pdf", "_blank");
            idempotence = true;
        }
        window.location.href = "/";
    }, [])
    return <></>
}