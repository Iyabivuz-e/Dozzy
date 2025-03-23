from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# import joblib
import pandas as pd
import numpy as np
# from datetime import datetime
# from model_training import train_model
# from apscheduler.schedulers.background import BackgroundScheduler
# from utils import input_preprocess
# from database.models.response import Response
from utils.config import db, app
import pickle

# Load initial model
# model = joblib.load('models/trained_model.joblib') - very important


# Load the model
try:
    with open('./model/dozzy_model.pkl', 'rb') as f:
        model = pickle.load(f)
    with open('./model/scaling.pkl', 'rb') as f:
        scaler = pickle.load(f)
except FileNotFoundError as e:
    print(f"Error: Model file is not found: {e}")


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()  # Use get_json() for better error handling
        input_data = np.array(
            [data['q1'], data['q2'], data['q3'], data['q4'], data['q5'], data['q6'], data['q7']])
        # Reshape to (1, 7) for single data point
        input_data = input_data.reshape(1, -1)
        scaled_input_data = scaler.transform(input_data)
        prediction = model.predict(scaled_input_data)[0]
        return jsonify({'prediction': int(prediction)})
    except (KeyError, ValueError, TypeError) as e:
        return jsonify({'error': f'Invalid input data: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'An unexpected error occured: {str(e)}'}), 500


if __name__ == '__main__':
    app.run(debug=True)
