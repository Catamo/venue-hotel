import IHttpConfig from "@domain/http-methods/ihttp-config";
import {
  MethodConfig,
  HttpMethod,
  ResponseFormat
} from "@domain/http-methods/method-config";

class GlobalHttpConfig implements IHttpConfig {
  protected baseUrl: string = "";
  private static instance: IHttpConfig | undefined;

  static getInstance(): IHttpConfig {
    if (!this.instance) {
      this.instance = new GlobalHttpConfig();
    }

    return this.instance;
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  getDeleteConfig(): any {
    return new MethodConfig(this.baseUrl, HttpMethod.DELETE).getAsObject();
  }

  getGetConfig(): any {
    const config = new MethodConfig(this.baseUrl, HttpMethod.GET);

    config.responseFormat = ResponseFormat.JSON;

    return config.getAsObject();
  }

  getPostConfig(): any {
    const config = new MethodConfig(this.baseUrl, HttpMethod.POST);

    config.responseFormat = ResponseFormat.JSON;
    config.headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    return config.getAsObject();
  }

  getPutConfig(): any {
    const config = new MethodConfig(this.baseUrl, HttpMethod.PUT);

    config.responseFormat = ResponseFormat.JSON;

    return config.getAsObject();
  }
}

export default GlobalHttpConfig;
