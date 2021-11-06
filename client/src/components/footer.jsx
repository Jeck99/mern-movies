import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./footerStyles";

export default function Footer() {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Facebook</Heading>
                        {/* <FooterLink href="#">Aim</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Instagram</Heading>
                        {/* <FooterLink href="#">Writing</FooterLink> */}
                    </Column>
                    <Column>
                        <Heading>Twitter</Heading>
                        {/* <FooterLink href="#">Uttar Pradesh</FooterLink> */}
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
