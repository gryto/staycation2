import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/illus.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-gray-500">
              Kami akan mengabari kamu dengan email apabila transaksi telah disetujui
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
