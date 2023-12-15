export function shakeForm(formRef: React.RefObject<HTMLFormElement>): void {
    
    const formStyleElement: CSSStyleDeclaration | undefined = formRef?.current?.style ?? undefined;
    
    if (formStyleElement === undefined) {
        return;
    }
    
    const interval: NodeJS.Timeout = setInterval(move, 50);
    let px: number = 6;
    
    function move(): void {
    
        if (formStyleElement === undefined) {
            return;
        }
    
        formStyleElement.marginLeft = px.toString() + 'px';
        px = px < 0 ? ((px * -1) - 1) : ((px * -1) + 1);
    
        if (px === 1) {
            clearInterval(interval);
        }
    }
}