enum HttpMethod {
    POST = "POST",
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE"
}

enum ResponseFormat {
    STRING = 'string',
    BUFFER = 'buffer',
    JSON = 'json'
}

class MethodConfig {
    readonly method: HttpMethod;
    readonly baseUrl: string;

    public responseFormat: ResponseFormat = ResponseFormat.BUFFER;
    public statusCode: number = 200;
    public headers: object = {};

    constructor(baseUrl: string, method: HttpMethod) {
        this.baseUrl = baseUrl;
        this.method = method;
    }

    public getAsObject(): any {
        return {
            baseURL: this.baseUrl,
            timeout: 1000,
            headers: this.headers,
            responseType: this.responseFormat
        }
    }
}

export { HttpMethod, ResponseFormat, MethodConfig };