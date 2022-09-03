import { useEffect, useState } from "react"
function TestPage() {
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        fetch("/testGET")
            .then((res) => res.json())
            .then((data) => {
                setCurrentTime(data.time);
            });
    }, []);
    return (
        <>
            {currentTime}
        </>
    )
}

export default TestPage