import { useRef, useEffect } from 'react';

import HomeHtml from "./home.html.jsx";

function Home() {

    const titleText = useRef(null);
    const text = "React App...";
    const speed = 250;

    let charIndex = 0;

    useEffect(() => {
        titleText.current.textContent = "";
        typingAnimation();
    }, []);


    function typingAnimation() {
        if (charIndex < text.length) {
            titleText.current.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typingAnimation, speed);
        } else {
            setTimeout(() => {
                document.getElementById("cursor").hidden = "true"
            }, 1000);

        }
    };

    return <HomeHtml titleText={titleText} />
}

export default Home;