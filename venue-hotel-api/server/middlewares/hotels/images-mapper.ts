class HotelImagesMapper {
    static mapArraysImagesToImageServer(array: any[]) {
        return array && array.map((x: any) => {
            return {
                ...x,
                images: x.images && x.images.map(
                    (i: any) => (process.env.IMAGES_SERVER_URL + '/' + i)
                )
            }
        });
    }

    static mapObjectImageToImageServer(object: any) {
        return object && object.images && {
            ...object,
            images: object.images.map(
                (i: any) => process.env.IMAGES_SERVER_URL + '/' + i
            )
        };
    }
}

export default HotelImagesMapper;