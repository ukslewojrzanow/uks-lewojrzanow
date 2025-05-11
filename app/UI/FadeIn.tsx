import { Fade } from "react-awesome-reveal";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function FadeIn({ children }: Props) {
  return <Fade triggerOnce>{children}</Fade>;
}

export default FadeIn;
