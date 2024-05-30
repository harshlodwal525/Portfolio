import React, { useEffect, useState } from 'react';
import '../Components/Cursor.css';

const Cursor = () => {
    const [cursorX, setCursorX] = useState(900);
    const [cursorY, setCursorY] = useState(150);
    const [deviceType, setDeviceType] = useState('');
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const isTouchDevice = () => {
            try {
                document.createEvent('TouchEvent');
                setDeviceType('touch');
                return true;
            } catch (err) {
                setDeviceType('mouse');
                return false;
            }
        };

        isTouchDevice();

        let moveTimeout;
        const move = (e) => {
            const touchEvent = e.touches ? e.touches[0] : null;
            const x = touchEvent ? touchEvent.clientX : e.clientX;
            const y = touchEvent ? touchEvent.clientY : e.clientY;

            setCursorX(x);
            setCursorY(y);
            setIsVisible(true);

            clearTimeout(moveTimeout);
            moveTimeout = setTimeout(() => setIsVisible(false), 2000); // 1 second of no movement to hide
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('touchmove', move);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            <div className={`cursor ${!isVisible ? 'cursor-hidden' : ''}`} style={{ left: `${cursorX}px`, top: `${cursorY}px` }}></div>
        </>
    );
};

export default Cursor;
