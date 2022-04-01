## Math formulas for our temperature conversions.

def closedTemp(external, internal):
    '''
    Calculates temp rise/drop when no doors or windows are open. Checks every hour
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 3600 seconds = 60 min
    # temp should rise/drop 2 degrees for every +/- 10 deg difference in external and internal temp with no windows or doors open
    tChange = 2*((external - internal ) / 10) / 3600
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal

    
   
def doorTemp(external, internal):
    '''
    Calculates temp rise/drop when doors have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 300 seconds = 5 min
    # temp should rise/drop 2 degrees for every +/- 10 deg difference in external and internal temp
    tChange = 2*((external - internal ) / 10) / 300
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal


def windowTemp(external, internal):
    '''
    Calculates temp rise/drop when windows have been open 5 min
    external: temp outside of house at given time
    internal: temp inside of house at given time
    tChange: calculated change in interior temp
    '''
    # 300 seconds = 5 min
    # temp should rise/drop 1 degrees for every +/- 10 deg difference in external and internal temp
    tChange = 1*((external - internal ) / 10) / 300
    internal += tChange # New internal temp is previous internal temp +/- change in temp

    return internal