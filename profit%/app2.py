from flask import Flask, render_template, request
import numpy as np
import pandas as pd
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Read the uploaded CSV file (modify the path as necessary)
d = pd.read_csv(r'D:\xblog\devpost\startup\ML for %profit\final.csv')

# Extract the features and target variable
X = d[['year']]          # Features (Years)
y = d['Business profit percent']  # Target (Business Profit Percentage)

# Transforming data to include polynomial features (degree 2)
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Fitting Polynomial Regression to the dataset
reg = LinearRegression()
reg.fit(X_poly, y)

@app.route('/', methods=['GET', 'POST'])
def home():
    prediction = None
    if request.method == 'POST':
        # Getting data from HTML form
        year = float(request.form['year'])

        # Making prediction
        predicted_value = reg.predict(poly.transform([[year]]))[0]
        prediction = round(predicted_value, 2)  # Round to 2 decimal places

    return render_template('index1.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
