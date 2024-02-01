export function handleSingleFileSelectedForUpload(e: React.ChangeEvent, fileExtensions: string[], setFileToUpload: (file: Blob | null) => void, setFileName: ((value: string | null) => void) | null, setErrorMessage: (value: string | null) => void, setClearFileInputKey: () => void): void {

    const files: FileList | null = (e.target as HTMLInputElement).files;
    
    if (files === null || files.length === 0) {
        setClearFileInputKey();
        return;
    }

    const file: Blob | undefined = files[0];

    const fileName: string | undefined = files[0]?.name;

    if (fileExtensions.length > 0 && fileExtensions.find((fileExtension: string) => fileName?.toLowerCase().endsWith(fileExtension)) === undefined) {
        setClearFileInputKey();
        setFileToUpload(null);
        if (setFileName !== null) {
            setFileName(null);
        }
        setErrorMessage('Only the following file formats are supported: ' + fileExtensions.join(', '));
        return;
    }

    setFileToUpload(file ?? null);

    if (setFileName !== null) {
        setFileName(fileName ?? null);
    }
}

export function handleMultipleFilesSelectedForUpload(e: React.ChangeEvent, fileExtensions: string[], setFilesToUpload: (files: Blob[]) => void, setFileNames: ((value: string[]) => void) | null, setErrorMessage: (value: string | null) => void, setClearFileInputKey: () => void): void {

    const files: FileList | null = (e.target as HTMLInputElement).files;
    
    if (files === null || files.length === 0) {
        setClearFileInputKey();
        return;
    }

    const blobFiles: Blob[] = [];
    const newFileNames: string[] = [];

    for (let i: number = 0; i < files.length; i++) {

        const file: Blob | undefined = files[i];

        const fileName: string | undefined = files[i]?.name;

        if (fileExtensions.length > 0 && fileExtensions.find((fileExtension: string) => fileName?.toLowerCase().endsWith(fileExtension)) === undefined) {
            setClearFileInputKey();
            setFilesToUpload([]);
            if (setFileNames !== null) {
                setFileNames([]);
            }
            setErrorMessage('Only the following file formats are supported: ' + fileExtensions.join(', '));
            return;
        }

        if (file !== undefined && fileName !== undefined) {
            blobFiles.push(file);
            newFileNames.push(fileName);
        }
    }

    setFilesToUpload(blobFiles);

    if (setFileNames !== null) {
        setFileNames(newFileNames);
    }
}