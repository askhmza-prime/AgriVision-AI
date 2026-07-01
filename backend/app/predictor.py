import numpy as np
import cv2

from .model import model
from .diseases import DISEASES


def predict(image):

    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    image = cv2.resize(
        image,
        (224, 224),
        interpolation=cv2.INTER_AREA
    )

    image = image.astype(np.float32) / 255.0

    image = np.expand_dims(image, axis=0)

    prediction = model(image, training=False).numpy()

    class_id = np.argmax(prediction)

    confidence = float(np.max(prediction) * 100)

    result = {
        "disease": DISEASES[class_id]["name"],
        "confidence": round(confidence, 2),
        "treatment": DISEASES[class_id]["treatment"],
        "prevention": DISEASES[class_id]["prevention"]
    }

    del image
    del prediction

    return result
