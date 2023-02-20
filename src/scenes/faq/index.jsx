import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What is the process for making whiskey?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: The process for making whiskey involves five main steps: milling,
            mashing, fermenting, distilling, and aging. Milling involves
            grinding the grains into a fine powder. Mashing is the process of
            combining the milled grains with hot water to create a sugary
            liquid. Fermenting is the process of adding yeast to the liquid,
            which converts the sugar into alcohol. Distilling involves heating
            the fermented liquid to separate the alcohol from the other
            components. Aging is the process of storing the distilled alcohol in
            oak barrels for a specific period of time to develop the whiskey's
            flavors and aromas.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What payment methods are accepted on the whiskey distiller
            e-commerce website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: The whiskey distiller e-commerce website accepts various payment
            methods, including major credit and debit cards, PayPal, and Apple
            Pay.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: Is it safe to make purchases on the whiskey distiller e-commerce
            website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: Yes, it is safe to make purchases on the whiskey distiller
            e-commerce website. The website uses secure payment gateways and
            encryption technology to ensure that your personal and financial
            information is protected.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What is the estimated delivery time for orders made on the
            whiskey distiller e-commerce website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: The estimated delivery time for orders made on the whiskey
            distiller e-commerce website varies depending on your location and
            the shipping method selected. The website provides detailed
            information about delivery times and shipping options at the time of
            checkout.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: What is the return policy for purchases made on the whiskey
            distiller e-commerce website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: The return policy for purchases made on the whiskey distiller
            e-commerce website may vary depending on the product and the
            specific circumstances of the return. In general, the website
            accepts returns for defective or damaged products within a specified
            period of time. Please refer to the website's return policy for
            detailed information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Q: How can I initiate a return for a product purchased on the
            whiskey distiller e-commerce website?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A: To initiate a return for a product purchased on the whiskey
            distiller e-commerce website, please contact the website's customer
            service department to initiate the return process. You will be
            required to provide information about the product and the reason for
            the return.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
