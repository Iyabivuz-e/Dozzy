from datetime import datetime

def preprocess_input(data):
    """Convert user input to model-friendly format"""
    # Convert times to minutes since midnight
    data['wake_up_time'] = int((datetime.strptime(
        data['wake_up_time'], "%H:%M %p") - datetime(1900, 1, 1)).total_seconds()/60)
    data['bedtime_preference'] = int((datetime.strptime(
        data['bedtime_preference'], "%H:%M %p") - datetime(1900, 1, 1)).total_seconds()/60)

    # Map categorical values
    peak_mapping = {'Morning': 0, 'Afternoon': 1, 'Evening': 2}
    data['productivity_peak'] = peak_mapping[data['productivity_peak']]

    return pd.DataFrame([data])
