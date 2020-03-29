import HttpMethodsClient from '@domain/http-methods/http-methods-client';

class RoomsRoutesHandlers extends HttpMethodsClient {
    async getRoom(req: any, res: any) {
        const roomId = req.params.id;

        const response: any = await this.get(`/api/rooms/${roomId}`);
        return res.json(response.data);
    }
}

export default RoomsRoutesHandlers;