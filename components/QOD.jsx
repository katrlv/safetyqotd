import 'survey-core/modern.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
const surveyJson = {
    "checkErrorsMode": "onValueChanged",
    "showCorrectAnswer": "always",
    "elements": [
      {
        "type": "radiogroup",
        "name": "Q1",
        "isRequired": true,
        "title": "If you witness unsafe work conditions, what is your responsibility?",
        "choices": [
            "Fix it immediately", "Note it down for later", "Fix it if there is no risk to your safety. If risky, report it to a supervisor."
        ],
        "correctAnswer": "Fix it if there is no risk to your safety. If risky, report it to a supervisor.",
        "validators": [{
            "type": "expression",
            "expression": "{Q1} = ('Fix it if there is no risk to your safety. If risky, report it to a supervisor.')",
            "text": "Incorrect: The safety of you and your colleagues is the priority. Tell a supervisor about the unsafe conditions if you are unable to fix the issue without putting your safety at risk."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q2",
        "isRequired": true,
        "title": "What should you do to prevent injuring yourself with machinery?",
        "choices": [
            "Only use machines that you are trained to use", 
            "Make sure that machines are cleaned regularly", 
            "Use equipment for their intended purposes",
            "All of the above"
        ],
        "correctAnswer": "All of the above",
        "validators": [{
            "type": "expression",
            "expression": "{Q2} = ('All of the above')",
            "text": "Incorrect: All of the options are important considerations for preventing machinery-related injury."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q3",
        "isRequired": true,
        "title": "What type of footwear is required in our workplace?",
        "choices": [
            "Non-slip", 
            "Running shoes", 
            "Formal footwear"
        ],
        "correctAnswer": "Non-slip",
        "validators": [{
            "type": "expression",
            "expression": "{Q3} = ('Non-slip')",
            "text": "Incorrect: All employees are required to wear non-slip shoes to maintain safety."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q4",
        "isRequired": true,
        "title": "Is it a good habit to constantly de-clutter one's workspace?",
        "choices": [
            "Yes. This can increase job satisfaction and prevent hidden hazards.", 
            "No. It's inefficient and unnecessary to obsess over cleanliness."
        ],
        "correctAnswer": "Yes. This can increase job satisfaction and prevent hidden hazards.",
        "validators": [{
            "type": "expression",
            "expression": "{Q4} = ('Yes. This can increase job satisfaction and prevent hidden hazards.')",
            "text": "Incorrect: Cleanliness is a benefit everyone's safety in the workplace."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q5",
        "isRequired": true,
        "title": "Why is it important to stay hydrated in the workplace?",
        "choices": [
            "Helps to remain alert", 
            "Prevents dehydration",
            "Prevents lightheadedness",
            "All of the above"
        ],
        "correctAnswer": "All of the above",
        "validators": [{
            "type": "expression",
            "expression": "{Q5} = ('All of the above')",
            "text": "Incorrect: All of the factors listed are benefits associated with staying hydrated at work."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q6",
        "isRequired": true,
        "title": "When moving objects in the workplace, you should focus on lifting with your ____.",
        "choices": [
            "Arms", 
            "Legs"
        ],
        "correctAnswer": "Legs",
        "validators": [{
            "type": "expression",
            "expression": "{Q6} = ('Legs')",
            "text": "Incorrect: You should lift with your legs to ensure good posture and avoid injury due to muscle strain."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q7",
        "isRequired": true,
        "title": "Why should you look away from your screen regularly?",
        "choices": [
            "To stay alert", 
            "To avoid eye strain",
            "To pay attention to your surroundings"
        ],
        "correctAnswer": "To avoid eye strain",
        "validators": [{
            "type": "expression",
            "expression": "{Q7} = ('To avoid eye strain')",
            "text": "Incorrect: Light emitted from computer screens can strain the eyes. It's important to take breaks to avoid too much exposure."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q8",
        "isRequired": true,
        "title": "Where are the first aid kits located at our office location?",
        "choices": [
            "In each desk drawer", 
            "Office bathroom",
            "Next to the fire extinguisher"
        ],
        "correctAnswer": "Office bathroom",
        "validators": [{
            "type": "expression",
            "expression": "{Q8} = ('Office bathroom')",
            "text": "Incorrect: We keep our first aid kits in the bathroom. If you are not trained in first aid, make sure you're aware of colleagues who are trained in case of emergency."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q9",
        "isRequired": true,
        "title": "Where can you review the fire safety protocol for our office location?",
        "choices": [
            "Onboarding information package", 
            "Internal website",
            "Contact Health and Safety department",
            "All of the above"
        ],
        "correctAnswer": "All of the above",
        "validators": [{
            "type": "expression",
            "expression": "{Q9} = ('All of the above')",
            "text": "Incorrect: You can use all the listed resources to review our fire safety protocol. Make sure to review this on a yearly basis."
          }]
      },
      {
        "type": "radiogroup",
        "name": "Q10",
        "isRequired": true,
        "title": "Shortcuts allow us to get work done quickly, but they aren't always the best choice for getting work done safely.",
        "choices": [
            "True", 
            "False"
        ],
        "correctAnswer": "True",
        "validators": [{
            "type": "expression",
            "expression": "{Q10} = ('True')",
            "text": "Incorrect: Safety for ourselves and others should always be the priority, regardless of the extra steps that a safer approach might require."
          }]
      }
    ], 
    
    "showQuestionNumbers": true
  };

    const survey = new Model(surveyJson);

    return <Survey model={survey} />;
}