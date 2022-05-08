import { useCallback, useEffect, useState } from "react";

const BackToTop = () => {

    const [scrollState, setScrollState] = useState(false);

    // اگر اسکرول از 120 پیکسل اومد پایینتر ست استیت کن
    const onScroll = useCallback(event => {
        const { scrollY } = window;

        if (scrollY > 120) {
            if (!scrollState) {
                setScrollState(() => true);
            }
        } else {
            setScrollState(false);
        }
    }, []);

    useEffect(() => {
        // لستنر اسکرول
        window.addEventListener("scroll", onScroll, { passive: true });
    });

    // هندلر کلیک روی دکمه برگشت به بالا
    const sendUserToTop = () => {
        window.scrollTo(0, 0)
    }

    
    if (!scrollState) return <></>
    else return (
        <div onClick={sendUserToTop} className="fixed bottom-4 left-12 bg-red-orginal rounded-full p-4 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </div>
    );

}

export default BackToTop;