from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import cv2

from .predictor import predict

app = FastAPI(title="AgriVision AI")

from fastapi.middleware.cors import CORSMiddleware
import os

ALLOWED_ORIGINS = [
    os.getenv(
        "FRONTEND_URL",
        "https://your-agrivision-domain.vercel.app"
    )
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AgriVision AI Backend Running 🚀"
    }


@app.post("/predict")
async def predict_leaf(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        await file.close()

        image = np.frombuffer(contents, np.uint8)
        image = cv2.imdecode(image, cv2.IMREAD_COLOR)

        if image is None:
            raise HTTPException(
                status_code=400,
                detail="Invalid image file."
            )

        result = predict(image)

        del image
        del contents

        return result

    except HTTPException:
        raise

    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Prediction failed."
            )
