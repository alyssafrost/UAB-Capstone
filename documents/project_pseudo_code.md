# Project Pseudocode

1. Family Data & Usage Time Schedule
2. Event Generation Based on Time Schedule
3. Utility Usage and Temperature Calculation

## Family Data & Usage Time Schedule

-------

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

| Event                                       | Day     | Time |
| ------------------------------------------- | ------- | ---- |
| Door events (x16 per day)                   | Mon-Fri | Any  |
| Microwaving (20 mins per day)               | Mon-Fri | Any  |
| Oven (45 mins per day)                      | Mon-Fri | Any  |
| Televison on (Living room; 4 hours per day) | Mon-Fri | Any  |
| Televison on (Bedroom; 2 hours per day)     | Mon-Fri | Any  |
| Shower (2 per day)                          | Mon-Fri | Any  |
| Bath (2 per day)                            | Mon-Fri | Any  |
| Stove (15 min per day)                      | Mon-Fri | Any  |
| Dishwasher (x4 a week)                      | Mon-Fri | Any  |
| Clothes Washer (x4 a week)                  | Mon-Fri | Any  |
| Clothes Dryer (x4 a week)                   | Mon-Fri | Any  |

---

### **Events: Saturday - Sunday**

| Event                                       | Day     | Time |
| ------------------------------------------- | ------- | ---- |
| Door events (x32)                           | Sat-Sun | Any  |
| Microwaving (30 mins per day)               | Sat-Sun | Any  |
| Oven (60 mins per day)                      | Sat-Sun | Any  |
| Televison on (Living room; 8 hours per day) | Sat-Sun | Any  |
| Televison on (Bedroom; 4 hours per day)     | Sat-Sun | Any  |
| Showers (3 per day)                         | Sat-Sun | Any  |
| Baths (3 per day)                           | Sat-Sun | Any  |
| Stove (30 min a day)                        | Sat-Sun | Any  |

## Event Generation Based on Time Schedule
---


## Utility Usage and Temperature Calculation
----

 Math formulas for our temperature conversions.
 Heat loss for closed doors/windows: Q = U*A*deltaT
 Advised U-value for windows in AL = 0.30
 Average window size is 2ft x 3ft (LxW) A = 6 sq. ft
 U-value for Opaque doors <= 0.17
 Average Exterior Door size is 6.67ft x 3ft (HxW) A = 20.01 sq. ft

Heat Loss Formulas:
 https://opendooralarm.com/support/energy-cost-calculator/
 - Q = A*v*p*TD
 - Q - Daily heat loss in BTU
 - A - area of door/window
 - v - wind speed in ft^3/min
 - p - air density
 - TD - difference of internal and external temperature in Fairenheight

 Energy Cost
 Daily Cost = (Q * 2.9307x10^-4) * hrs
 hrs - daily hours door/window is open
 
  Convert Q from BTU to kWh: Q * (2.931x10^-4)
  Cost = kWh * (cost per kWh)

  Heat loss upon door opening:
  Q = (6.67 * 3) * v * (1.3) * (internalT - externalT)

```python
def doorEnergy(internal):
    """
    Calculates cost for every 30 seconds a door is open
    external: temp outside of house at given time (C)
    internal: temp inside of house at given time (F)
    cost: calculated cost for every 30 seconds a door is open
    """

    def windowEnergy(internal):
    """
    Calculates cost for every 30 seconds a window is open
    external: temp outside of house at given time (C)
    internal: temp inside of house at given time (F)
    tChange: calculated change in interior temp
    """

    def closedTemp(internal):
    """
    Calculates temp rise/drop when no doors or windows are open. Checks every hour
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    """

    def doorTemp(internal):
    """
    Calculates temp rise/drop when doors have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    """

    def windowTemp(internal):
    """
    Calculates temp rise/drop when windows have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    """
```


------
## Stand up reminder for Health 

Cory's psycology major inspired him to create a stand up reminder for the sake of one's mental exhaustion. It looks like so over the home screen after 30 consecutive seconds have passed:


