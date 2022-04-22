### Utilties


# Energy consumption
# charge = $0.12/kwh
charge = 0.12
# all in kw

# Light bulbs
bulb = 0.06

# Bath Exhaust
exhaust = 0.03

# HVAC
hvac = 3.5

# fridge
fridge = 0.15

# Microwave
### Usage
#   M-F: 20 min/day = 0.33 hrs
#   S-S: 30 min/day = 0.5 hrs
microwave = 1.1

# Water Heater
# 4 min to heat 1 gal of water
waterHeat = 4.5

# Stove
### Usage
#   M-F: 15 min/day = 0.25 hrs
#   S-S: 30 min/day = 0.5 hrs
stove = 3.5

# Oven
### Usage
#   M-F: 45 min/day = 0.75 hrs
#   S-S: 60 min/day = 1 hrs
oven = 3.5

# Dishwasher
### Usage
#   45 min/load
dishwash = 1.8

# Living Room TV
### Usage
#   M-F: 4 hrs/day
#   S-S: 8 hrs/day
#   36 hrs/week
Ltv = 0.636

# Bedroom TV
### Usage
#   M-F: 2 hrs/day
#   S-S: 4 hrs/day
#   18 hrs/week
Btv = 0.1

# Clothes washer
clothesWash = 0.5

# Clothes dryer
clothesDry = 3

######################


# Lights
# 2 lights per bedroom. 3 Br = 6 Br lights
# 1 light per bathroom. 2 Bath = 2 Bath lights
# 3 lights in living room
# 1 light in kitchen
# on for avg 9 hrs a day
# 12 lights total
def lightCost():
    lightNRG = bulb * 9 # 0.54 kwh
    cost = lightNRG * charge # $0.06 per 9 hours per light

    return cost

def exhaustCost():
    exhaustNRG = exhaust * 1.0833 # 0.3 kwh. 65 min shower = 1.0833 hrs
    cost = exhaustNRG * charge # $0.04 per shower

    return cost

def hvacCost():
    hvacNRG = hvac * 8 # hvacs on average should run for 8 hours/day
    cost = hvacNRG * charge

    return cost

def fridgeCost():
    fridgeNRG = fridge * 24
    cost = fridgeNRG * charge

    return cost

def microwaveCost(isWeekday):
    if bool(isWeekday) == True:# M-F
        microNRG = microwave * 0.33 #  kwh. 0.33 hrs/day
    else:# S-S
        microNRG = microwave * 0.5 #  kwh. 0.5 hrs/day 

    cost = microNRG * charge

    return cost

def stoveCost(isWeekday):
    if bool(isWeekday) == True:# M-F
        stoveNRG = stove * 0.25 #  kwh. 0.25 hrs/day
    else:# S-S
        stoveNRG = stove * 0.5 #  kwh. 0.5 hrs/day 

    cost = stoveNRG * charge

    return cost

def ovenCost(isWeekday):
    if bool(isWeekday) == True:# M-F
        ovenNRG = oven * 0.75 #  kwh. 0.75 hrs/day
    else:# S-S
        ovenNRG = oven * 1 #  kwh. 1 hrs/day 

    cost = ovenNRG * charge

    return cost

def LtvCost(isWeekday):
    if bool(isWeekday) == True:# M-F
        ltvNRG = Ltv * 4 #  kwh. 4 hrs/day
    else:# S-S
        ltvNRG = Ltv * 8 #  kwh. 8 hrs/day 

    cost = ltvNRG * charge

    return cost

def BtvCost(isWeekday):
    if bool(isWeekday) == True:# M-F
        btvNRG = Btv * 2 #  kwh. 4 hrs/day
    else:# S-S
        btvNRG = Btv * 4 #  kwh. 8 hrs/day 

    cost = btvNRG * charge

    return cost

# Water Consumption
# 1 ft^3 pf water = 7.58 gal
# cost = $2.52/758 gal

def showerCost():
    # Showers
    ## Usage
    #   M-F: 2 showers / day
    #   S-S: 3 showers / day
    # shower uses 16.25 gal of hot water per use (25 gal total)

    # (2.52 * 25) / 758 
    showerH2Ocost = 0.08  # water cost per shower
    # 65 min to heat 16.25 gal of water. 65 min = 1.0833 hrs
    showerHeat = 1.0833 * waterHeat # 4.9 kwh
    showerNRGcost = showerHeat * charge # water heater cost per shower
    exhCost = exhaustCost() # cpst to run exhaust fan
    cost = showerH2Ocost + showerNRGcost + exhCost # total cost of each shower ($0.67)

    return cost

def bathCost():
    # Baths
    ## Usage
    #   M-F: 2 baths / day
    #   S-S: 3 baths / day
    # bath uses 19.5 gal of hot water per use (30 gal total)

    # (2.52 * 30) / 758
    bathH2Ocost = 0.10 # water cost per bath
    # 78 min to heat 19.25 gal of water. 78 min = 1.3 hrs
    bathHeat = 1.3 * waterHeat # 5.9 kwh
    bathNRGcost = bathHeat * charge # water heater cost per bath
    cost = bathH2Ocost + bathNRGcost # total cost of each bath ($0.81)
    
    return cost

def dishWashCost():
    # Dishwasher
    ## Usage
    #   4 loads/week
    #   45 min per load = 0.75 hrs
    #   6 gal of hot water per load
    dishNRG = dishwash * 0.75 # 1.35 kwh
    dishNRGcost = dishNRG * charge # $0.16 per load
    dishH2Ocost = 0.02 # water cost per load [($2.52 * 6 gal) / 758 gal]
    hotWaterNRG = waterHeat * 0.75 # 3.4 kwh for water heater per load
    hotWaterCost = hotWaterNRG * charge # ($0.41)

    cost = dishNRGcost + dishH2Ocost + hotWaterCost # total cost per load ($0.59)

    return cost


def clothesWashCost():
    # Clothes Washer
    ## Usage
    #   4 loads/week
    #   30 min per load = 0.5 hrs
    #   20 gal of water per load. 85% is hot water (17 gal hot water)
    clothesNRG = clothesWash * 0.5 # 0.25 kwh
    clothesNRGCost = clothesNRG * charge # $0.03 per load
    clothesH2Ocost = 0.07 # water cost per load [($2.52 * 20 gal) / 758 gal]
    hotWaterNRG = waterHeat * 0.5 # 2.25 kwh for water heater per load
    hotWaterCost = hotWaterNRG * charge # ($0.27)

    cost = clothesNRGCost + clothesH2Ocost + hotWaterCost

    return cost

def clothesDryCost():
    # Clothes Dryer
    ## Usage
    #   4 loads/week
    #   30 min per load = 0.5 hrs
    clothesNRG = clothesDry * 0.5 # 1.5 kwh
    clothesNRGCost = clothesNRG * charge # $0.18 per load

    cost = clothesNRGCost # cost per load

    return cost
