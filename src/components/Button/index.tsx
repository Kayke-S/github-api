import "./styles.css";

type Props = {
  title: string;
};

export default function Button({ title }: Props) {
  return (
    <div className="gp-button">
      <div>{title}</div>
    </div>
  );
}
