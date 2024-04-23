export function toggleSelectAll(e: React.ChangeEvent, allRows: string[], setSelectedRows: (value: string[]) => void, setRightClickSelected: ((value: string | null) => void) | null): void {

    if (setRightClickSelected !== null) {
        setRightClickSelected(null);
    }

    if ((e.target as HTMLInputElement).checked) {
        const newSelectedRows: string[] = [...allRows];
        setSelectedRows(newSelectedRows);
    } else {
        setSelectedRows([]);
    }
}

export function toggleSelectRow(id: string, currentlySelectedRows: string[], setSelectedRows: (value: string[]) => void, setRightClickSelected: ((value: string | null) => void) | null): void {

    if (setRightClickSelected !== null) {
        setRightClickSelected(null);
    }

    if (!currentlySelectedRows.includes(id)) {
        const newSelectedRows: string[] = [...currentlySelectedRows];
        newSelectedRows.push(id);
        setSelectedRows(newSelectedRows);
    } else {
        const newSelectedRows: string[] = currentlySelectedRows.filter((currentId: string) => currentId !== id);
        setSelectedRows(newSelectedRows);
    }
}

export function selectRightClick(e: React.MouseEvent, id: string, allRows: string[], currentlySelectedRows: string[], setSelectedRows: (value: string[]) => void, rightClickSelected: string | null, setRightClickSelected: (value: string | null) => void): void {
    
    e.preventDefault();
    e.stopPropagation();

    if (rightClickSelected === null) {
        setRightClickSelected(id);
    } else if (rightClickSelected === id) {
        setRightClickSelected(null);
    } else {
        
        const firstIndex: number = allRows.findIndex((currentId: string) => currentId === id);
        const secondIndex: number = allRows.findIndex((currentId: string) => currentId === rightClickSelected);

        if (firstIndex === -1 || secondIndex === -1 || firstIndex === secondIndex) { //should never happen
            return;
        }

        const minIndex: number = Math.min(firstIndex, secondIndex);
        const maxIndex: number = Math.max(firstIndex, secondIndex);

        const shouldDeselect: boolean = currentlySelectedRows.find((currentId: string) => currentId === rightClickSelected) !== undefined;

        let newSelectedRows: string[] = [...currentlySelectedRows];

        allRows.slice(minIndex, maxIndex + 1).forEach((currentId: string) => {
            if (shouldDeselect) {
                newSelectedRows = newSelectedRows.filter((selectedId: string) => currentId !== selectedId);
            } else if (currentlySelectedRows.find((selectedId: string) => currentId === selectedId) === undefined) {
                newSelectedRows.push(currentId);
            }
        });

        setSelectedRows(newSelectedRows);
        
        setRightClickSelected(null);
    }
}

export function invertSelection(e: React.MouseEvent, allRows: string[], selectedRows: string[], setSelectedRows: (value: string[]) => void): void {

    e.stopPropagation();
    const newSelectedRows: string[] = allRows.filter((currentId: string) => !selectedRows.includes(currentId));
    setSelectedRows(newSelectedRows);
}