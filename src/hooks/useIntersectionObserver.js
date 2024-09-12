import {useState, useEffect} from "react";

const useIntersectionObserver = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            const [entry] = entries;

            setIsIntersecting(entry.isIntersecting);
        }, {threshold: 0.5});

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return isIntersecting;
}

export default useIntersectionObserver