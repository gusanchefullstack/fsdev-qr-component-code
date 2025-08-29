const QRCodeComponent = () => {
  return (
    <div className="card-mobile px-4 pt-4 pb-10 bg-white flex flex-wrap gap-6 font-outfit">
      <img
        src="image-qr-code.png"
        alt="qr-code-image"
        className="rounded-card-img"
      />
      <div className="flex flex-wrap gap-4 px-4">
        <h1 className="text-preset-1 text-center">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-preset-2 text-Slate-500 text-center">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QRCodeComponent;
