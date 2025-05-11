import { Fade } from "react-awesome-reveal";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function FadeDelay({ children }: Props) {
  return (
    <Fade triggerOnce delay={50} duration={1000}>
      {children}
    </Fade>
  );
}

export default FadeDelay;
