from datetime import datetime
def is_dev_day():
    today = datetime.now()
    day_of_year = today.timetuple().tm_yday
    return day_of_year == 256

if is_dev_day():
    print("Feliz dia do programador!")