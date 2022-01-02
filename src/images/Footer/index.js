import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink,  } from './FooterElements';

const Footer = (props) => {

return(
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">The Papi Brand</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/">
                            <FaFacebook></FaFacebook>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaTwitter></FaTwitter>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaInstagram></FaInstagram>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaYoutube></FaYoutube>
                        </SocialIconLink>
                        <SocialIconLink href="/">
                            <FaLinkedin></FaLinkedin>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
)};
export default Footer;