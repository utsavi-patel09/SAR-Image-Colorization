
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2' 

os.environ['OMP_NUM_THREADS'] = '1'
os.environ['KMP_BLOCKTIME'] = '0'

from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
from PIL import Image
from flask import Flask, redirect, url_for, request, render_template,send_from_directory

import cv2
from tensorflow.keras.models import load_model
from matplotlib import pyplot as plt




print('Model loaded. Check http://127.0.0.1:5000/')


app = Flask(__name__)
 # Suppresses INFO and WARNING logs



@app.route('/', methods = ['GET'])
def home():
    return render_template("sih.html",original_image_url='',output_image_2='',output_image_3='',output_image_1='')


@app.route('/',methods=['POST'])
def predict():
    imagefile = request.files['file']
    
    file_path=os.path.join("static/images/"+imagefile.filename)
    imagefile.save(file_path)
    image_url=url_for('static', filename='images/'+imagefile.filename) 

    
    image_path ="static/images/" + imagefile.filename
    output1='static/images/segmented.jpg'
    output2='static/images/roadriver.png'
    output3='static/images/colour.jpg'
    return render_template("sih.html",output_image_1=output1,original_image_url=image_url,output_image_2=output2,output_image_3=output3)







   
@app.route('/images/<filename>')
def serve_image(filename):
    return send_from_directory('static/images',filename)


if __name__ == '__main__':
    app.run(port=5000, debug=True, threaded=False)





