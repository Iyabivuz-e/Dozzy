import pandas as pd
import numpy as np
from sklearn.model_selection import LinearRegression
from sklearn.model_preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline
import joblib


def train_model(df):
    # We are going to convert time string data into numerical values
    df['wake_up_time'] = pd.to_datetime(
        df['wake_up_time']).dt.hour*60 + pd.to_datetime(df['wake_up_time']).dt.minute
    
    df['bedtime_preference'] = pd.to_datetime(
        df['bedtime_preference']).dt.hour*60 + pd.to_datetime(df['bedtime_preference']).dt.minute
    #map through the productivity peak and assign them with 0, 1, and 2
    df['productivity_peak'] = df['productivity_peak'].map({ 'Morning':0, 'Afternoon':1, 'Evening':2 })
    
    # We are going to create pipelines/data
    X = df[['wake_up_time', 'productivity_peak', 'bedtime_preference']]
    y = df['chronotype']
    
    # We have to standardize the model
    model = make_pipeline(StandardScaler(), LogisticRegression())
    
    #We train the model with our data
    model.fit(X, y)
    return model
