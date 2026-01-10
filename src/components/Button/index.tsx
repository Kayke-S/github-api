/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

type Props = {
  title: string;
  route?: string;
  onBtClick?: (event: any) => void;
};

export default function Button({ title, route, onBtClick }: Props) {
  return (
    <>
      {route != null ? (
        <Link to={`/${route}`}>
          <div className="gp-button">
            <div>{title}</div>
          </div>
        </Link>
      ) : (
        <button type="submit" onClick={onBtClick} className="gp-button">
          {title}
        </button>
      )}
    </>
  );
}
