# Math formulas for our temperature conversions.
### Heat loss for closed doors/windows: Q = U*A*deltaT
# Advised U-value for windows in AL = 0.30
# Average window size is 2ft x 3ft (LxW) A = 6 sq. ft
# U-value for Opaque doors <= 0.17
# Average Exterior Door size is 6.67ft x 3ft (HxW) A = 20.01 sq. ft

### Heat Loss Formulas
# https://opendooralarm.com/support/energy-cost-calculator/
# Q = A*v*p*TD
# Q - Daily heat loss in BTU
# A - area of door/window
# v - wind speed in ft^3/min
# p - air density
# TD - difference of internal and external temperature in Fairenheight
#
# Energy Cost
# Daily Cost = (Q * 2.9307x10^-4) * hrs
# hrs - daily hours door/window is open
# 
# Convert Q from BTU to kWh: Q * (2.931x10^-4)
# Cost = kWh * (cost per kWh)
#
# Heat loss upon door opening:
# Q = (6.67 * 3) * v * (1.3) * (internalT - externalT) 
# 

# Import Meteostat library and dependencies
from datetime import datetime, date, timedelta
from meteostat import Point, Daily, Hourly, Stations
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

# Set time period
# start = datetime(2022, 4, 13)
# end = datetime(2022, 4, 14)

### Finding bham weather station coordinates
# stations = Stations()
# stations = stations.nearby(33.543682, -86.779633)
# station = stations.fetch(1)

# Create Point for bham, AL
bham = Point(33.5667, -86.75, 196)

# today = datetime.today()
# print(today)
# currDay = Hourly(bham, today - timedelta(hours = 1), today)
# currDay = currDay.fetch()
# print(currDay.iat[today.strftime("%Y-%m-%d"),'wspd'])
# Get daily marchDaily for March 2022
# marchDaily = Daily(bham, start, end)
# marchDaily = marchDaily.fetch()

# prints windspeed on given day
# print(marchDaily.at['2022-03-02','wspd'])

def closedTemp(internal):
    '''
    Calculates temp rise/drop when no doors or windows are open. Checks every hour
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 3600 seconds = 60 min
    # temp should rise/drop 2 degrees for every +/- 10 deg difference in external and internal temp with no windows or doors open
    today = datetime.today()
    currDay = Hourly(bham, today - timedelta(hours = 1), today) # read past hour of data
    currDay = currDay.fetch()
    external = currDay.at[today.strftime("%Y-%m-%d"), 'temp']
    tChange = 2*((external - internal) / 10)
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal


def doorEnergy(internal):
    '''
    Calculates cost for every 30 seconds a door is open
    external: temp outside of house at given time (C)
    internal: temp inside of house at given time (F)
    cost: calculated cost for every 30 seconds a door is open
    '''
    # 30 seconds = 0.00833 hours
    # temp should rise/drop 2 degrees for every +/- 10 deg difference in external and internal temp
    # Heat loss upon door opening:
    today = datetime.today()
    currDay = Hourly(bham, today - timedelta(hours = 1), today) # read past hour of data
    currDay = currDay.fetch()

    internal = (internal - 32) * (5/9) # converting F to C
    external = currDay.at[today.strftime("%Y-%m-%d"), 'temp']
    print(external)
    wspd = currDay.at[today.strftime("%Y-%m-%d"), 'wspd'] * 0.621 # km/h to mph
    nrgLoss = (6.67 * 3) * (wspd*88) * (1.3) * abs(internal - external) # 1.3 is air density
    kwh = (nrgLoss*0.00833) * 0.00029307 # convert energy from BTU to kwh
    cost = kwh*0.12 # 12 cents per kwh

    return cost

print(doorEnergy(63))

def windowEnergy(internal):
    '''
    Calculates cost for every 30 seconds a window is open
    external: temp outside of house at given time (C)
    internal: temp inside of house at given time (F)
    tChange: calculated change in interior temp
    '''
    # 300 seconds = 5 min
    # temp should rise/drop 2 degrees for every +/- 10 deg difference in external and internal temp
    # Heat loss upon window opening:
    today = datetime.today()
    currDay = Hourly(bham, today - timedelta(hours = 1), today) # read past hour of data
    currDay = currDay.fetch()

    internal = (internal - 32) * (5/9) # converting F to C
    external = currDay.at[today.strftime("%Y-%m-%d"), 'temp']
    print(external)
    wspd = currDay.at[today.strftime("%Y-%m-%d"), 'wspd'] * 0.621 # km/h to mph
    nrgLoss = (2 * 3) * (wspd*88) * (1.3) * abs(internal - external) # 1.3 is air density
    kwh = (nrgLoss*0.00833) * 0.00029307 # convert energy from BTU to kwh
    cost = kwh*0.12 # 12 cents per kwh

    return cost

def doorTemp(internal):
    '''
    Calculates temp rise/drop when doors have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 300 seconds = 5 min
    # temp should rise/drop 1 degrees for every +/- 10 deg difference in external and internal temp
    today = datetime.today()
    currDay = Hourly(bham, today - timedelta(hours = 1), today) # read past hour of data
    currDay = currDay.fetch()
    external = currDay.at[today.strftime("%Y-%m-%d"), 'temp']
    tChange = 2*((external - internal) / 10)
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal

def windowTemp(internal):
    '''
    Calculates temp rise/drop when windows have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 300 seconds = 5 min
    # temp should rise/drop 1 degrees for every +/- 10 deg difference in external and internal temp
    today = datetime.today()
    currDay = Hourly(bham, today - timedelta(hours = 1), today) # read past hour of data
    currDay = currDay.fetch()
    external = currDay.at[today.strftime("%Y-%m-%d"), 'temp']
    tChange = 1*((external - internal) / 10)
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal

