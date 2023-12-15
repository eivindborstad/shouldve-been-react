export function formFocusNextKeyboard(e: React.KeyboardEvent): void {

    if (e.key === 'Enter') {
        try {
            const form: HTMLFormElement | null = (e.target as HTMLInputElement).form;

            if (form === null) {
                return;
            }

            const index: number = Array.prototype.indexOf.call(form, e.target);
            (form.elements[index + 1] as HTMLInputElement).focus();

            if ((form.elements[index + 1] as HTMLInputElement) !== document.activeElement) { //allows focusing next even if there is some other type of element in between - could expand to skip even more elements later
                (form.elements[index + 2] as HTMLInputElement).focus();
            }

            e.preventDefault();
        } catch (err: unknown) {

        }
    }
}