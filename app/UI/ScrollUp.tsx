import { Fade } from "react-awesome-reveal";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ScrollUp({ children }: Props) {
  return (
    <Fade direction="up" triggerOnce>
      {children}
    </Fade>
  );
}

export default ScrollUp;
