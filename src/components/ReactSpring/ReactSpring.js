import React, { useState } from 'react';
import { useSpring, config, animated } from 'react-spring'

const ReactSpring = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
        <div>
            {/* install */}
            {/* npm install react-spring */}
            {/* React spring */}
            {/* React animation */}

             {/* <animated.div style={props}>ReactSpring</animated.div> */}
             <animated.h1 style={props}>ReactSpring</animated.h1>
        </div>
    );
};

export default ReactSpring;