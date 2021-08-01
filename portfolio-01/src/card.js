import React from 'react';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'

const styles = {
    cardInfo: {
      display: 'grid',

    },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function MoreDeets() {
  const cardInfo = [
      {image: "/images/storybookweddings.png", title: "StoryBookWeddings", text: "JDS Consultants created a future social media application that currently allows users to browse through posted weddings to find inspiration. We also want users to post their own own wedding experience so that they and others can not only find inspiration, but share their beautiful day."},
      {image: "/images/Covid Safety Image.png", title: "Safer In the Know", text: "My team created a centralized application to gather important pandemic, health-related details and country-related news in order to deliver them to people in a user-friendly manner."},
      {image: "/images/Readmesample.png", title: "ReadMe", text: "As a new developer, I created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package].The application will be invoked by using a command line interface."},
      {image: "/images/Scheduler.png", title: "Scheduler", text: ""},
      {image: "", title: "", text: ""},
      {image: "", title: "", text: ""},
  ];
  const renderCard = (card, index) => {
      return(

        <Card style={{ width: '18rem' }} key={index}>
  <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.text}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
      );
  };
  return <div style={styles.cardInfo}>
      {cardInfo.map(renderCard)}
  </div>
  
  ;
}



export default MoreDeets;
