interface IHttpConfig {
    getBaseUrl(): string;
    getDeleteConfig(): any;
    getGetConfig(): any;
    getPostConfig(): any;
    getPutConfig(): any;
}

export default IHttpConfig;