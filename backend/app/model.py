from pathlib import Path
import tensorflow as tf

MODEL_PATH = Path(__file__).parent / "agrivision_model.keras"

model = tf.keras.models.load_model(MODEL_PATH)
