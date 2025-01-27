import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './Accordian.css'

export default function AccordionUsage() {
  return (
    <div className='accordians-wraper'>
      <Accordion className='accordiian-wrape'>
        <AccordionSummary
         expandIcon={<img src='/Images/Accordian-arrow.svg' alt='arrow'/> }
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='accordian-top-q' component="span">Can I choose any time for the classes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can choose any time for the classes as they offer flexible scheduling. You can select times that best fit your availability.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordiian-wrape'>
        <AccordionSummary
          expandIcon={<img src='/Images/Accordian-arrow.svg' alt='arrow'/> }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='accordian-top-q' component="span">What happens if I have to miss class for any reason?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        If you miss a class, you may be able to catch up by accessing recorded sessions or rescheduling, depending on the platform's policies. It's best to inform the instructor in advance if possible.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordiian-wrape'>
        <AccordionSummary
         expandIcon={<img src='/Images/Accordian-arrow.svg' alt='arrow'/> }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='accordian-top-q' component="span">Do the staff members include any female teachers to instruct the female students?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, the staff includes female teachers who are available to instruct female students, ensuring a comfortable learning environment.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordiian-wrape'>
        <AccordionSummary
         expandIcon={<img src='/Images/Accordian-arrow.svg' alt='arrow'/> }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='accordian-top-q' component="span">Do you have a master's degree if you teach Urdu?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        While a master's degree is not always required to teach Urdu, many instructors do hold advanced degrees in the language or related fields to ensure they provide high-quality education. It depends on the institution's hiring criteria.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordiian-wrape'>
        <AccordionSummary
        expandIcon={<img src='/Images/Accordian-arrow.svg' alt='arrow'/> }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography className='accordian-top-q' component="span">What is the process for memorizing the Qur'an?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Memorizing the Qur'an involves consistent daily practice, repetition, and regular revision. Understanding the meaning and seeking guidance from a teacher can also help with retention.
        </AccordionDetails>
      </Accordion>
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Accordion Actions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </div>
  );
}
