import React from "react";
import isIOS from "../isIOS";

export default () => {
    React.useEffect(() => {
        if (!isIOS()) return;

        console.warn("IOS is detected");
        const ATTACHMENT = "attachment";
        const attachment = document.querySelector(`.${ATTACHMENT}`);
        attachment.classList.remove(ATTACHMENT);
    }, []);
};
