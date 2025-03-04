import bcrypt
import jwt
import os 
from dotenv import load_dotenv
from datetime import datetime,timedelta

load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY","your_default_secret_key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60