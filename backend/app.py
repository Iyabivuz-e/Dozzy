from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import joblib
import pandas as pd
from datetime import datetime
from model_training import train_model
from apscheduler.schedulers.background import BackgroundScheduler
from utils import input_preprocess
from database.models.response import Response
from utils.config import db

# Load initial model
# model = joblib.load('models/trained_model.joblib') - very important


# API endpoints
@app.route('/api/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        new_response = Response(
            wake_up_time=data['wake_up_time'],
            productivity_peak=data['productivity_peak'],
            bedtime_preference=data['bedtime_preference']
        )
        db.session.add(new_response)
        db.session.commit()

        processed_data = input_preprocess(data)
        prediction = model.predict(processed_data)[0] #- very important

        # Update response with the predictions
        new_response.prediction = prediction
        db.session.commit()

        return jsonify({'predictions': prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 400
