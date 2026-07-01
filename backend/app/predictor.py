import numpy as np
import cv2

from .model import model
from diseases import DISEASES


def predict(image):

    image = cv2.resize(image, (224, 224))

    image = image.astype("float32") / 255.0

    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image, verbose=0)

    class_id = np.argmax(prediction)

    confidence = float(np.max(prediction) * 100)

    return {

        "disease": DISEASES[class_id]["name"],

        "confidence": round(confidence, 2),

        "treatment": DISEASES[class_id]["treatment"],

        "prevention": DISEASES[class_id]["prevention"]

    }
