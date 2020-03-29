import HttpMethodsClient from "../../../domain/http-methods/http-methods-client";

class BookingsRoutesHandlers extends HttpMethodsClient {
  async getAllBookings(req: any, res: any) {
    const response: any = await this.get(`/api/bookings`);
    return res.json(response.data);
  }

  async getBooking(req: any, res: any) {
    const bookingId = req.params.id;

    const response: any = await this.get(`/api/bookings/${bookingId}`);
    return res.json(response.data);
  }

  async postBooking(req: any, res: any) {
    const booking = req.response;

    await this.post(`/api/bookings/`, booking);
    res.status(200);
    res.end("OK");
  }

  async putBooking(req: any, res: any) {
    const bookingId = req.params.id;
    const booking = req.response;

    await this.put(`/api/bookings/${bookingId}`, booking);
    res.status(200);
    res.end("OK");
  }
}

export default BookingsRoutesHandlers;
