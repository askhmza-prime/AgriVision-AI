from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import cv2

from .predictor import predict

app = FastAPI(title="AgriVision AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "AgriVision AI Backend Running 🚀"
    }


@app.post("/predict")
async def predict_leaf(file: UploadFile = File(...)):

    contents = await file.read()

    image = np.frombuffer(contents, np.uint8)

    image = cv2.imdecode(image, cv2.IMREAD_COLOR)

    result = predict(image)

    return result
