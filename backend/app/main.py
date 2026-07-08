from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import cv2
import os

from .predictor import predict


app = FastAPI(
    title="AgriVision AI"
)


# --------------------
# CORS SECURITY
# --------------------

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


# --------------------
# REMOVE METADATA SAFELY
# --------------------

def clean_image(image):

    # Re-encode image through OpenCV
    # Removes metadata but keeps OpenCV format

    success, buffer = cv2.imencode(
        ".jpg",
        image
    )


    if not success:
        raise ValueError(
            "Image cleaning failed"
        )


    clean = cv2.imdecode(
        buffer,
        cv2.IMREAD_COLOR
    )


    return clean


# --------------------
# ROUTES
# --------------------

@app.get("/")
def home():

    return {
        "message":
        "AgriVision AI Backend Running 🚀"
    }


@app.post("/predict")
async def predict_leaf(
    file: UploadFile = File(...)
):

    try:

        contents = await file.read()

        await file.close()


        image_array = np.frombuffer(
            contents,
            np.uint8
        )


        image = cv2.imdecode(
            image_array,
            cv2.IMREAD_COLOR
        )


        if image is None:

            raise HTTPException(
                status_code=400,
                detail="Invalid image file."
            )


        # EXIF / metadata removal

        image = clean_image(
            image
        )


        result = predict(
            image
        )


        del image
        del contents
        del image_array


        return result


    except HTTPException:

        raise


    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )
