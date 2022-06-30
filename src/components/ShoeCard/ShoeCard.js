import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  flex-grow:1;
  @media (max-width: 899px){
    max-width:100%;
  }
  @media(min-width:900px){
    max-width:400px;
  }
  @media(min-width:950px){
    max-width:425px;
  }
  @media(min-width:1000px){
    max-width:450px
  }
  @media(min-width:1050px){
    max-width:475px;
  }
  @media(min-width:1100px){
    max-width:500px;
  }
  @media(min-width:1150px){
    max-width:575px;
  }
  @media(min-width:1200px) {
    max-width:400px;
  }
  @media(min-width:1500px){
    max-width:375px;
  }
  margin-bottom:8px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width:100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display:flex;
  justify-content:space-between;
  margin-bottom:4px;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
