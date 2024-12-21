class NotFoundException extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.isException = true;
        this.name = "NotFoundException";
    }
}