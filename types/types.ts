export interface ITransport {
  transportName: string;
  driver: string;
  category: string;
  phoneNumber: string;
  position: {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
  }
}