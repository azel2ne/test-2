import React from "react";
import * as S from "./styles";

const images = ["/assets/id412/w1/images/1.png", "/assets/id412/w1/images/2.png", "/assets/id412/w1/images/3.png", "/assets/id412/w1/images/4.png"];
const imageSize = 90; // This can be changed (70vw/vh)

export default function ImageDisplay() {
  return (
    <S.ImageContainer>
      {images.map((src, index) => (
        <S.GridItem key={index} $index={index} $imageSize={imageSize}>
          <S.StyledImage src={src} alt={`Sample Image ${index + 1}`} />
        </S.GridItem>
      ))}
    </S.ImageContainer>
  );
}
