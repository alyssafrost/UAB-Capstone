# Project Pseudocode

1. Family Data & Usage Time Schedule
2. Event Generation Based on Time Schedule 
3. Utility Usage and Temperature Calculation 

There are givens for this project, such as the schedule for the family, events on a week day versus the events on the weekends, and events that overlap everyday regardless of week day or weekend. [See here for "Family Schedule" requirements.](project_requirements.pdf)

Below are the tables of data that correspond to each event, day, time, or amount in which the generated events occur, headed by event-time schedules.

### **Everyday events (Monday - Sunday)**

| Event                           | Day     | Time     |
| ------------------------------- | ------- | -------- |
| Adults Wake                     | Mon-Sun | 5:00 AM  |
| Children Wake                   | Mon-Sun | 6:00 AM  |
| Adults and Children leave house | Mon-Sun | 7:30 AM  |
| Adults are home                 | Mon-Sun | 5:30 PM  |
| Children are home               | Mon-Sun | 4:00 PM  |
| Adults go to bed                | Mon-Sun | 10:30 PM |
| Children go to bed              | Mon-Sun | 8:00 PM  |


---
### **Events: Monday - Friday**

| Event | Day     | Time |
| ----- | ------- | ---- |
| Door events (x16 per day) | Mon-Fri |  Any |
| Microwaving (20 mins per day)      | Mon-Fri | Any  |
| Oven (45 mins per day)      | Mon-Fri | Any   |
| Televison on (Living room; 4 hours per day)     | Mon-Fri | Any   |
| Televison on (Bedroom; 2 hours per day)       | Mon-Fri | Any   |
| Shower (2 per day)     | Mon-Fri | Any   |
| Bath (2 per day)     | Mon-Fri | Any   |
| Stove (15 min per day)     | Mon-Fri | Any   |
| Dishwasher (x4 a week)    | Mon-Fri | Any   |
| Clothes Washer (x4 a week)     | Mon-Fri | Any   |
| Clothes Dryer (x4 a week)     | Mon-Fri | Any   |



---
### **Events: Saturday - Sunday**

| Event | Day     | Time |
| ----- | ------- | ---- |
|  Door events (x32) | Sat-Sun | Any  |
| Microwaving (30 mins per day)      | Sat-Sun | Any   |
| Oven (60 mins per day)     | Sat-Sun | Any  |
| Televison on (Living room; 8 hours per day)      | Sat-Sun | Any   |
| Televison on (Bedroom; 4 hours per day)      | Sat-Sun | Any   |
| Showers (3 per day)     | Sat-Sun | Any   |
| Baths (3 per day)      | Sat-Sun | Any   |
| Stove (30 min a day)      | Sat-Sun | Any   |
