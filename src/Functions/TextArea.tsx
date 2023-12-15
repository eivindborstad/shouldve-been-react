import type React from 'react';

export function handleTab(e: React.KeyboardEvent, value: string, setValue: (value: string) => void, setLatestKeyEvent: (e: React.KeyboardEvent) => void, setStartPosition: (value: number | null) => void): void {

    if (e.key === 'Tab') {

        e.preventDefault();

        const start: number | null = (e.target as HTMLInputElement).selectionStart;
        const end: number | null = (e.target as HTMLInputElement).selectionEnd;

        if (start !== null && end !== null) {

            const newValue: string = value.substring(0, start) + '\t' + value.substring(end, value.length);

            setValue(newValue);

            setLatestKeyEvent(e);
            setStartPosition(start);
        }
    } else {

        setStartPosition(null);
    }
}