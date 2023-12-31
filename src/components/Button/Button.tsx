import "./Button.css";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): React.ReactElement => {
  return <button className="button">{text}</button>;
};
export default Button;
