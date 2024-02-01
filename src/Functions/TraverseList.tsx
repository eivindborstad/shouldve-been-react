export function handleTraverseList(e: React.KeyboardEvent, currentId: string | null, onChange: (value: string | null, changeFocus: boolean) => void, sortedIds: string[]): void {

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

        e.preventDefault();
        e.stopPropagation();

        const currentIndex: number = sortedIds.findIndex((id: string) => id === currentId);

        if (currentIndex === -1) {
            return;
        }
    
        if (e.key === 'ArrowDown' && currentIndex < sortedIds.length - 1) {
            onChange(sortedIds[currentIndex + 1] ?? null, true);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            onChange(sortedIds[currentIndex - 1] ?? null, true);
        }
    }
}