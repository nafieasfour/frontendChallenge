import React from "react";

export default function ImageModal({
  images,
  currentImage,
  onClose,
  onThumbnailClick,
}) {
  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    onThumbnailClick(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onThumbnailClick(images[prevIndex]);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "30px",
          right: "450px",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        X
      </button>

      <button
        onClick={handlePrev}
        style={{
          position: "absolute",
          left: "450px",
          backgroundColor: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ❮
      </button>

      <img
        src={currentImage}
        alt="Product"
        style={{
          maxHeight: "80%",
          maxWidth: "80%",
          borderRadius: "10px",
        }}
      />

      <button
        onClick={handleNext}
        style={{
          position: "absolute",
          right: "450px",
          backgroundColor: "white",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ❯
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "5px",
              cursor: "pointer",
              border: currentImage === src ? "2px solid orange" : "none",
            }}
            onClick={() => onThumbnailClick(src)}
          />
        ))}
      </div>
    </div>
  );
}
