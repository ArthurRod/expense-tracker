import * as C from "./styles";
import { formatMoney } from "../../helpers/format";

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{formatMoney(value)}</C.Info>
    </C.Container>
  );
};
