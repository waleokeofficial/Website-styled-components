import { Fafacebook, FaTwitter, FaInstagram } from 'fa/react-icons';
import { FooterContainer, FooterWrap } from './FooterElements';

const Footer = (props) => {

return(
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">The Papi Brand</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/">
                            <Fafacebook></Fafacebook>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaTwitter></FaTwitter>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaInstagram></FaInstagram>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
)};
export default Footer;