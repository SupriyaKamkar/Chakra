import { ReactNode } from "react";

const LeafBorder = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="galleryContainer animate-spin">
      <div className="large circle one"></div>
      <div className="large circle two"></div>
      <div className="large circle three"></div>
      <div className="large circle four"></div>
      <div className="large circle five"></div>
      <div className="large circle six"></div>
      <div className="large circle seven"></div>
      <div className="large circle eight"></div>
      <div className="large circle nine"></div>
      <div className="large circle ten"></div>
      <div className="large circle eleven"></div>
      <div className="large circle twelve"></div>
      <div className="large circle thirteen"></div>
      <div className="large circle fourteen"></div>
      <div className="large circle fifteen"></div>
      <div className="large circle sixteen"></div>
      {children}
    </div>
  );
};

export default LeafBorder;
