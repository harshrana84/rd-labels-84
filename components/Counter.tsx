// components/Counter.tsx
import React, { useState, useEffect } from 'react';

const LiveVisitorCount = () => {
    const [visitorCount, setVisitorCount] = useState(51);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setVisitorCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span className="countdown">
            Live Visitors: <span className='ml-1' style={{ "--value": visitorCount }}></span>
        </span>
    );
};

export default LiveVisitorCount;
