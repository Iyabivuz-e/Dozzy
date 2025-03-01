from config import app, db
from models import response
import pandas as pd


with app.app_context():
    db.create_all

    # Load initial data to train
    initial_data = pd.read_csv("../chronotype_data.csv")
    for _, row in initial_data.iterrows():
        entry = Response(
            wake_up_time=row['wake_up_time'],
            productivity_peak=row['productivity_peak'],
            bedtime_preference=row['bedtime_preference'],
            prediction=row['chronotype'],
            user_feedback='correct'
        )
        db.session.add(entry)
    db.session.commit()