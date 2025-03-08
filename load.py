import numpy as np
from keras import layers
import tensorflow as tf
from keras.layers import Input, Dense, Activation,BatchNormalization, Flatten, Conv2D, MaxPooling2D
from keras.models import Model
from keras.preprocessing import image
from keras.preprocessing.image import ImageDataGenerator
import keras.backend as K
import matplotlib.pyplot as plt
from matplotlib.pyplot import imshow
from keras.models import load_model
import numpy as np
import matplotlib.pyplot as plt
import cv2
import pickle


with open("D://SGP-SEM5//data//train//modelA.pkl", "rb") as f:
    model = pickle.load(f)


image_path=cv2.imread("D://SGP-SEM5//data//train//malignant//2.jpg")
IMG_SIZE = 227
new_array = cv2.resize(image_path, (IMG_SIZE, IMG_SIZE))
new_array = new_array.reshape(-1,IMG_SIZE,IMG_SIZE,3)
x=model.predict(new_array)
a=np.argmax(x)
print(a)