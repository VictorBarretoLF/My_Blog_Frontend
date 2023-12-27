// Validate env varaibles
function checkValue<T>(value: T | undefined, errorMsg: string): T {
    if (value === undefined) {
        throw new Error(`Missing Environment Variable: ${errorMsg}`);
    }
    return value;
}
