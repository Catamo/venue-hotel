import HttpMethodsClient from '@domain/http-methods/http-methods-client';
import HotelImagesMapper from './images-mapper';

class HotelsRoutesHandlers extends HttpMethodsClient {
    async deleteHotel(req: any, res: any) {
        const hotelId = req.params.id;
        await this.delete(`/api/hotels/${hotelId}`);
        res.status(200);
        res.end('OK');
    }

    async getAllHotels(req: any, res: any) {
        let response: any = await this.get('/api/hotels?_embed=rooms');
        response = HotelImagesMapper.mapArraysImagesToImageServer(response.data);
        return res.json(response);
    }

    async getHotel(req: any, res: any) {
        const hotelId = req.params.id;

        let response: any = await this.get(`/api/hotels/${hotelId}?_embed=rooms`);
        response = HotelImagesMapper.mapObjectImageToImageServer(response.data);
        return res.json(response);
    }

    async postHotel(req: any, res: any) {
        const hotel = req.body;

        await this.post(`/api/hotels/`, hotel);
        res.status(200);
        res.end('OK');
    }
}

export default HotelsRoutesHandlers;