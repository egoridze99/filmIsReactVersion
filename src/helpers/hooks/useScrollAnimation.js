import React from "react";
import { debounce } from "lodash";

export default () => {
    const scrollAnimation = () => {
        document
            .querySelectorAll("[data-scrolly-down]")
            .forEach(function (item) {
                const divPos = item.getBoundingClientRect().top;

                if (divPos < window.innerHeight - 100) {
                    item.classList.add("animated");
                    item.classList.add(item.dataset.scrollyDown);
                }
            });
    };

    const debouncedScrollAnimation = debounce(scrollAnimation, 100);

    React.useEffect(() => {
        window.addEventListener("scroll", debouncedScrollAnimation);

        return () =>
            window.removeEventListener("scroll", debouncedScrollAnimation);
    }, [debouncedScrollAnimation]);
};
