import {ProductContainer, ProductHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDsc, ProductPrice, ProductButton} from './ProductElements';

const Products = ({heading, data}) => {

    return(
        <div>
            <ProductContainer>
                <ProductHeading>{heading}</ProductHeading>
                <ProductWrapper>
                    {data.map((product, index) => {
                        return(
                    <ProductCard key={index}>
                            <ProductImg src={product.img}></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDsc>{product.dsc}</ProductDsc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                    </ProductCard>
                    )
                    })}
                    
                </ProductWrapper>
            </ProductContainer>
        </div>
    )
};
export default Products;