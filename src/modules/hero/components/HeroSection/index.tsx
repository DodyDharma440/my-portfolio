import styled from "styled-components";
import {
  Section,
  Container,
  Grid,
  GridItem,
  Button,
  Stack,
} from "common/components";
import { Illustration } from "modules/hero/components";

const InnerGrid = styled.div`
  padding: ${(p) => p.theme.spacing.md} ${(p) => p.theme.spacing.sm}px;
  display: flex;
  align-items: center;
  min-height: 500px;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 1;
  margin-bottom: ${(p) => p.theme.spacing.sm};
`;

const HighlightedTitle = styled.span`
  color: ${(p) => p.theme.colors.primary.main};
`;

const HeroCaption = styled.p`
  line-height: 1.8;
  font-size: 18px;
  margin-bottom: ${(p) => p.theme.spacing.md};
`;

const JobText = styled.p`
  color: ${(p) =>
    p.theme.colorScheme === "dark"
      ? p.theme.colors.palettes.darkGray.dark
      : p.theme.colors.palettes.darkGray.dark};
  font-size: 20px;
  margin-bottom: ${(p) => p.theme.spacing.sm};
  font-weight: 500;
`;

const IllustrationGrid = styled(InnerGrid)`
  justify-content: center;
`;

const HeroSection = () => {
  return (
    <Section>
      <Container>
        <Grid templateColumns="repeat(2, 1fr)" spacing={16}>
          <GridItem xs={2} md={1}>
            <InnerGrid>
              <div>
                <JobText>Frontend Developer</JobText>
                <Title>
                  Halo Semua, <br />
                  <HighlightedTitle>Saya Dodi Aditya</HighlightedTitle>
                </Title>
                <HeroCaption>
                  Halo! Selamat datang di website portfolio saya. Silahkan cek
                  portfolio yang sudah saya kerjakan.
                </HeroCaption>
                <Stack>
                  <Button size="md">Lihat Project</Button>
                  <Button color="secondary" size="md">
                    Kontak
                  </Button>
                </Stack>
              </div>
            </InnerGrid>
          </GridItem>
          <GridItem xs={2} md={1}>
            <IllustrationGrid>
              <Illustration />
            </IllustrationGrid>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};

export default HeroSection;
