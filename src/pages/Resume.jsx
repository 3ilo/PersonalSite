import { useEffect } from 'react';

export default function Resume() {
    var idempotence = false;
    useEffect(() => {
        if (!idempotence){
            window.open("../../public/updated_resume_2024.pdf", "_blank");
            idempotence = true;
        }
        window.location.href = "/";
    }, [])
    return (
        <>
        </>
    )
}