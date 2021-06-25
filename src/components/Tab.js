import React, { useState } from 'react';

function Tab({ children }) {
    const [highlightStyle, setHighlightStyle] = useState({
        left: 10,
        opacity: 0,
    });

    function moveHighlight(e) {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150,
        });
    }

    function hideHighlight(e) {
        setHighlightStyle({
            left: e.nativeEvent.layerX - 150,
            opacity: 0,
        });
    }
    return (
        <div
            className='tab'
            onMouseMove={moveHighlight}
            onMouseOut={hideHighlight}
        >
            <div className='highlight' style={highlightStyle} />
            {children}
        </div>
    );
}

export default Tab;
