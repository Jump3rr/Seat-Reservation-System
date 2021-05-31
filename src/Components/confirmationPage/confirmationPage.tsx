import { useSelector } from "react-redux";
import { selectSeats } from '../selected/selectedSlice';

export const ConfirmationPage = () => {
  const selectedSeats = useSelector(selectSeats);

  return (
    <div>
      <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
      <div>Wybrane miejsca: </div>
      {selectedSeats.map((seat: string) => {
        return <div>{seat}</div>;
      })}
      <h3>
        Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.
      </h3>
    </div>
  );
}
