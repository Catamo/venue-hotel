import axios from 'axios';
import IHttpConfig from './ihttp-config';

abstract class HttpMethodsClient {
    config: IHttpConfig;

    public constructor(config: IHttpConfig) {
        this.config = config;
    }

    protected get post() : any {
        return this.config && axios.create(this.config.getPostConfig()).post;
    }

    protected get put() : any  {
        return this.config && axios.create(this.config.getPostConfig()).put
    }

    protected get delete() : any  {
        return this.config && axios.create(this.config.getPostConfig()).delete
    }

    protected get get() : any  {
        return this.config && axios.create(this.config.getPostConfig()).get
    }
};

export default HttpMethodsClient;